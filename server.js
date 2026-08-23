// 담배 랜덤 추천 사이트 백엔드 (정적 파일 + 커뮤니티 API)
// Node 22+ 내장 SQLite 사용 — 외부 의존성 없음
const http = require("http");
const fs = require("fs");
const path = require("path");
const { DatabaseSync } = require("node:sqlite");

const PORT = process.env.PORT || 8642;
const ROOT = __dirname;

const db = new DatabaseSync(path.join(ROOT, "community.db"));
db.exec(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product TEXT NOT NULL,
    stars INTEGER NOT NULL CHECK (stars BETWEEN 1 AND 5),
    comment TEXT NOT NULL DEFAULT '',
    nickname TEXT NOT NULL DEFAULT '익명',
    created_at TEXT NOT NULL DEFAULT (datetime('now', 'localtime'))
  )
`);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".md": "text/markdown; charset=utf-8",
};

function json(res, code, data) {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  // ===== 커뮤니티 API =====
  if (url.pathname === "/api/posts" && req.method === "GET") {
    const product = url.searchParams.get("product");
    let rows;
    if (product) {
      rows = db
        .prepare("SELECT * FROM posts WHERE product = ? ORDER BY id DESC LIMIT 100")
        .all(product);
    } else {
      rows = db.prepare("SELECT * FROM posts ORDER BY id DESC LIMIT 100").all();
    }
    const stats = db
      .prepare(
        "SELECT product, COUNT(*) AS cnt, ROUND(AVG(stars), 1) AS avg FROM posts GROUP BY product"
      )
      .all();
    return json(res, 200, { posts: rows, stats });
  }

  if (url.pathname === "/api/posts" && req.method === "POST") {
    let body = "";
    req.on("data", (c) => {
      body += c;
      if (body.length > 10_000) req.destroy();
    });
    req.on("end", () => {
      try {
        const { product, stars, comment = "", nickname = "" } = JSON.parse(body);
        const s = Number(stars);
        if (!product || !Number.isInteger(s) || s < 1 || s > 5) {
          return json(res, 400, { error: "product와 1~5 사이 stars가 필요합니다" });
        }
        db.prepare(
          "INSERT INTO posts (product, stars, comment, nickname) VALUES (?, ?, ?, ?)"
        ).run(
          String(product).slice(0, 50),
          s,
          String(comment).slice(0, 200),
          String(nickname).slice(0, 20) || "익명"
        );
        return json(res, 201, { ok: true });
      } catch {
        return json(res, 400, { error: "잘못된 요청" });
      }
    });
    return;
  }

  // ===== 정적 파일 =====
  let filePath = path.normalize(path.join(ROOT, decodeURIComponent(url.pathname)));
  if (!filePath.startsWith(ROOT)) return json(res, 403, { error: "forbidden" });
  if (url.pathname === "/") filePath = path.join(ROOT, "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) return json(res, 404, { error: "not found" });
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`🚬 서버 실행: http://localhost:${PORT}`));
