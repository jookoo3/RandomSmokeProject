const MODE_INFO = {
  regular: { label: "🔴 일반 (맨솔·캡슐 제외)", filter: (c) => c.type === "regular" },
  flavor: { label: "🟢 맨솔·캡슐", filter: (c) => c.type === "menthol" || c.type === "capsule" },
  all: { label: "🟣 연초 전체", filter: (c) => ["regular", "menthol", "capsule"].includes(c.type) },
  px: { label: "🪖 PX (군마트) 판매", filter: (c) => c.px === true },
  iqos: { label: "🔥 아이코스 스틱", filter: (c) => c.type === "iqos" },
  lilfit: { label: "💨 릴 핏 (솔리드·에이블)", filter: (c) => c.type === "lilfit" },
  lilhybrid: { label: "🌀 릴 하이브리드 (믹스)", filter: (c) => c.type === "lilhybrid" },
};

const TYPE_TAG = {
  regular: '<span class="tag regular">일반</span>',
  menthol: '<span class="tag menthol">맨솔</span>',
  capsule: '<span class="tag capsule">캡슐</span>',
  iqos: '<span class="tag iqos">아이코스</span>',
  lilfit: '<span class="tag lil">릴 핏</span>',
  lilhybrid: '<span class="tag lil">릴 하이브리드</span>',
};

const resultCard = document.getElementById("resultCard");
const resultLabel = document.getElementById("resultLabel");
const resultImage = document.getElementById("resultImage");
const resultName = document.getElementById("resultName");
const resultMeta = document.getElementById("resultMeta");
const resultReview = document.getElementById("resultReview");

// 브랜드 컬러 기반 담뱃갑 SVG 일러스트 생성
function packSVG(item) {
  const brand = item.name.split(" ")[0];
  const rest = item.name.split(" ").slice(1).join(" ");
  const icon =
    item.type === "menthol" ? "❄️" : item.type === "capsule" ? "⚪" : "";
  return `
  <svg viewBox="0 0 130 190" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="rgba(255,255,255,0.25)"/>
        <stop offset="0.15" stop-color="rgba(255,255,255,0)"/>
        <stop offset="0.9" stop-color="rgba(0,0,0,0.2)"/>
      </linearGradient>
    </defs>
    <rect x="5" y="5" width="120" height="180" rx="10" fill="${item.color}"/>
    <rect x="5" y="5" width="120" height="180" rx="10" fill="url(#shade)"/>
    <rect x="5" y="5" width="120" height="42" rx="10" fill="rgba(255,255,255,0.92)"/>
    <rect x="5" y="37" width="120" height="10" fill="rgba(255,255,255,0.92)"/>
    <text x="65" y="32" text-anchor="middle" font-size="15" font-weight="800"
      fill="${item.color}" font-family="sans-serif">${brand}</text>
    <text x="65" y="105" text-anchor="middle" font-size="11" font-weight="700"
      fill="#fff" font-family="sans-serif">${rest || brand}</text>
    ${icon ? `<text x="65" y="135" text-anchor="middle" font-size="20">${icon}</text>` : ""}
    <rect x="25" y="152" width="80" height="22" rx="4" fill="rgba(0,0,0,0.35)"/>
    <text x="65" y="167" text-anchor="middle" font-size="10" fill="#fff"
      font-family="sans-serif">TAR ${item.tar}</text>
  </svg>`;
}

// 암호학적 난수 기반 균등 추첨 (모듈로 편향 제거)
function secureRandomInt(max) {
  const limit = Math.floor(0xffffffff / max) * max;
  const buf = new Uint32Array(1);
  let v;
  do {
    crypto.getRandomValues(buf);
    v = buf[0];
  } while (v >= limit);
  return v % max;
}

function securePick(pool) {
  return pool[secureRandomInt(pool.length)];
}

// ===== 가챠 시스템 =====
let currentMode = "regular";
const gachaBtn = document.getElementById("gachaBtn");

document.querySelectorAll("#modeChips .chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    document.querySelectorAll("#modeChips .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentMode = chip.dataset.mode;
  });
});

function showItem(item, label) {
  resultLabel.textContent = label;
  // images/제품명.jpg 가 있으면 실제 사진, 없으면 SVG 일러스트로 대체
  const imgSrc = `images/${encodeURIComponent(item.name)}.jpg`;
  resultImage.innerHTML = `<img class="pack-photo" src="${imgSrc}" alt="${item.name}">`;
  const img = resultImage.querySelector("img");
  img.onerror = () => (resultImage.innerHTML = packSVG(item));
  resultName.textContent = item.name;
  const isStick = ["iqos", "lilfit", "lilhybrid"].includes(item.type);
  const pxBadge = item.px ? ' <span class="tag px">PX</span>' : "";
  resultMeta.innerHTML = `${TYPE_TAG[item.type]}${pxBadge} ${isStick ? item.tar : "타르 " + item.tar}`;
  resultReview.textContent = `💬 “${item.review}”`;
}

function spawnConfetti() {
  const colors = ["#f39c12", "#e74c3c", "#3498db", "#2ecc71", "#9b59b6", "#f1c40f"];
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("div");
    p.className = "confetti";
    p.style.left = Math.random() * 100 + "vw";
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = 1.2 + Math.random() * 1.5 + "s";
    p.style.animationDelay = Math.random() * 0.3 + "s";
    p.style.borderRadius = Math.random() > 0.5 ? "50%" : "2px";
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 3200);
  }
}

let currentEffect = "normal";

document.querySelectorAll("#effectToggle .effect-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll("#effectToggle .effect-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentEffect = btn.dataset.effect;
  });
});

function gacha() {
  if (!isAdult) {
    alert("성인 인증 후 이용할 수 있습니다.");
    return;
  }
  const { label, filter } = MODE_INFO[currentMode];
  const pool = CIGARETTES.filter(filter);
  if (!pool.length) return;
  const chosen = securePick(pool);

  if (currentEffect === "fifa") {
    fifaReveal(chosen, label, pool);
    return;
  }

  gachaBtn.disabled = true;
  resultCard.classList.remove("hidden", "reveal");
  resultCard.classList.add("rolling");
  resultLabel.textContent = label;
  resultImage.innerHTML = "";
  resultMeta.innerHTML = "";
  resultReview.textContent = "";

  // 슬롯머신처럼 이름이 빠르게 돌아가는 연출
  const rollTime = 1400;
  const interval = setInterval(() => {
    resultName.textContent = securePick(pool).name;
  }, 60);

  setTimeout(() => {
    clearInterval(interval);
    resultCard.classList.remove("rolling");
    resultCard.classList.add("reveal");
    showItem(chosen, label);
    lastChosen = chosen;
    // 평가 기능 비활성화로 별점 초기화 생략
    spawnConfetti();
    gachaBtn.disabled = false;
  }, rollTime);
}

gachaBtn.addEventListener("click", gacha);

// 전체 목록 모달
const listModal = document.getElementById("listModal");
const listBody = document.getElementById("listBody");

const CATEGORIES = [
  { type: "regular", title: "🔴 일반" },
  { type: "menthol", title: "🟢 맨솔" },
  { type: "capsule", title: "🔵 캡슐" },
  { type: "iqos", title: "🔥 아이코스 스틱" },
  { type: "lilfit", title: "💨 릴 핏 스틱 (솔리드·에이블)" },
  { type: "lilhybrid", title: "🌀 릴 하이브리드 스틱 (믹스)" },
];

function renderList() {
  listBody.innerHTML = CATEGORIES.map(({ type, title }) => {
    const items = CIGARETTES.filter((c) => c.type === type)
      .map(
        (c) => `
      <div class="list-item">
        <span class="dot" style="background:${c.color}"></span>
        <span class="item-name">${c.name}${c.px ? ' <span class="tag px">PX</span>' : ""}</span>
        <span class="item-tar">${c.tar}</span>
      </div>`
      )
      .join("");
    const count = CIGARETTES.filter((c) => c.type === type).length;
    return `<div class="cat-title ${type}">${title} (${count})</div>${items}`;
  }).join("");
}

document.getElementById("listBtn").addEventListener("click", () => {
  renderList();
  listModal.classList.remove("hidden");
});

document.getElementById("closeModal").addEventListener("click", () => {
  listModal.classList.add("hidden");
});

listModal.addEventListener("click", (e) => {
  if (e.target === listModal) listModal.classList.add("hidden");
});

// ===== 성인 인증 =====
const ageModal = document.getElementById("ageModal");
const ageDenied = document.getElementById("ageDenied");
let isAdult = sessionStorage.getItem("isAdult") === "yes";

if (isAdult) {
  ageModal.classList.add("hidden");
} else {
  gachaBtn.disabled = true;
}

document.getElementById("ageYes").addEventListener("click", () => {
  isAdult = true;
  sessionStorage.setItem("isAdult", "yes");
  gachaBtn.disabled = false;
  ageModal.classList.add("hidden");
});

document.getElementById("ageNo").addEventListener("click", () => {
  isAdult = false;
  sessionStorage.removeItem("isAdult");
  gachaBtn.disabled = true;
  ageDenied.classList.remove("hidden");
  setTimeout(() => ageModal.classList.add("hidden"), 1800);
});

// ===== 공유하기 =====
let lastChosen = null;

function shareText() {
  return lastChosen
    ? `🚬 오늘의 담배 뽑기 결과: ${lastChosen.name}! 너도 뽑아봐 👉`
    : "🚬 오늘의 담배 - 랜덤 뽑기! 너도 해봐 👉";
}

document.getElementById("shareNative").addEventListener("click", async () => {
  if (navigator.share) {
    try {
      await navigator.share({ title: "오늘의 담배", text: shareText(), url: location.href });
    } catch {}
  } else {
    copyLink();
  }
});

document.getElementById("shareKakao").addEventListener("click", () => {
  // 카카오 SDK 앱 키가 없어 링크 복사로 대체 (키 발급 후 Kakao.Share 연동 가능)
  copyLink("카카오톡에 붙여넣어 공유하세요! 링크가 복사됐어요 💬");
});

document.getElementById("shareX").addEventListener("click", () => {
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText())}&url=${encodeURIComponent(location.href)}`,
    "_blank"
  );
});

document.getElementById("shareFb").addEventListener("click", () => {
  window.open(
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}`,
    "_blank"
  );
});

document.getElementById("shareInsta").addEventListener("click", () => {
  copyLink("인스타그램은 링크 공유가 안 돼서 복사했어요! 스토리/DM에 붙여넣으세요 📷");
});

function copyLink(msg = "링크가 복사됐어요! 🔗") {
  navigator.clipboard.writeText(`${shareText()} ${location.href}`).then(() => alert(msg));
}

document.getElementById("shareCopy").addEventListener("click", () => copyLink());

/* 평가·커뮤니티 기능 임시 비활성화 (GitHub Pages 정적 호스팅)
// ===== 평가하기 (커뮤니티 DB 연동) =====
let currentStars = 0;
const starsEl = document.getElementById("stars");
const ratingDone = document.getElementById("ratingDone");

starsEl.querySelectorAll("span").forEach((s) => {
  s.addEventListener("click", () => {
    currentStars = Number(s.dataset.v);
    starsEl.querySelectorAll("span").forEach((x) =>
      x.classList.toggle("on", Number(x.dataset.v) <= currentStars)
    );
  });
});

document.getElementById("ratingSubmit").addEventListener("click", async () => {
  if (!lastChosen) return alert("먼저 뽑기를 해주세요!");
  if (!currentStars) return alert("별점을 선택해주세요! ⭐");
  const comment = document.getElementById("ratingComment").value.trim();
  const res = await fetch("/api/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product: lastChosen.name, stars: currentStars, comment }),
  });
  if (res.ok) {
    ratingDone.classList.remove("hidden");
    document.getElementById("ratingComment").value = "";
    setTimeout(() => ratingDone.classList.add("hidden"), 2000);
  } else {
    alert("등록에 실패했어요 😢");
  }
});

// ===== 커뮤니티 모달 =====
const communityModal = document.getElementById("communityModal");
const communityBody = document.getElementById("communityBody");

async function renderCommunity() {
  communityBody.innerHTML = '<div class="comm-empty">불러오는 중...</div>';
  try {
    const { posts, stats } = await (await fetch("/api/posts")).json();
    if (!posts.length) {
      communityBody.innerHTML =
        '<div class="comm-empty">아직 평가가 없어요.<br>첫 번째로 뽑고 평가를 남겨보세요! 🎰</div>';
      return;
    }
    const top = [...stats].sort((a, b) => b.avg - a.avg || b.cnt - a.cnt).slice(0, 3);
    const summary = `<div class="comm-summary">🏆 평점 TOP: ${top
      .map((t) => `<b>${t.product}</b> ★${t.avg} (${t.cnt})`)
      .join(" · ")}</div>`;
    communityBody.innerHTML =
      summary +
      posts
        .map(
          (p) => `
      <div class="comm-post">
        <div class="comm-head">
          <span class="comm-name">${p.product}</span>
          <span class="comm-stars">${"★".repeat(p.stars)}${"☆".repeat(5 - p.stars)}</span>
        </div>
        ${p.comment ? `<div class="comm-comment">${p.comment.replace(/</g, "&lt;")}</div>` : ""}
        <div class="comm-time">${p.nickname} · ${p.created_at}</div>
      </div>`
        )
        .join("");
  } catch {
    communityBody.innerHTML =
      '<div class="comm-empty">서버에 연결할 수 없어요.<br><code>node server.js</code>로 실행해주세요.</div>';
  }
}

document.getElementById("communityBtn").addEventListener("click", () => {
  renderCommunity();
  communityModal.classList.remove("hidden");
});

document.getElementById("closeCommunity").addEventListener("click", () => {
  communityModal.classList.add("hidden");
});

communityModal.addEventListener("click", (e) => {
  if (e.target === communityModal) communityModal.classList.add("hidden");
});
*/

// ===== 피파 팩 오프닝 연출 =====
const fifaOverlay = document.getElementById("fifaOverlay");
const fifaBeam = document.getElementById("fifaBeam");
const fifaCard = document.getElementById("fifaCard");
const fifaHintType = document.getElementById("fifaHintType");
const fifaHintTar = document.getElementById("fifaHintTar");

const TYPE_KO = {
  regular: "일반", menthol: "맨솔", capsule: "캡슐",
  iqos: "아이코스", lilfit: "릴 핏", lilhybrid: "릴 하이브리드",
};

let fifaTimers = [];
let fifaFinish = null;

function fifaClearTimers() {
  fifaTimers.forEach(clearTimeout);
  fifaTimers = [];
}

function fifaReveal(chosen, label, pool) {
  gachaBtn.disabled = true;
  // 레이팅: 75~99, 96+는 워크아웃(특별 연출)
  const rating = 75 + secureRandomInt(25);
  const walkout = rating >= 96;

  fifaOverlay.classList.remove("hidden");
  fifaCard.classList.add("hidden");
  fifaCard.classList.toggle("walkout-card", walkout);
  fifaBeam.classList.toggle("walkout", walkout);
  fifaHintType.classList.remove("show");
  fifaHintTar.classList.remove("show");
  fifaHintType.textContent = TYPE_KO[chosen.type];
  fifaHintTar.textContent = chosen.tar;

  fifaFinish = () => {
    fifaClearTimers();
    fifaOverlay.classList.add("hidden");
    showItem(chosen, label);
    resultCard.classList.remove("hidden", "rolling");
    resultCard.classList.add("reveal");
    lastChosen = chosen;
    spawnConfetti();
    gachaBtn.disabled = false;
    fifaFinish = null;
  };

  // 타임라인: 빔 → 타입 힌트 → 타르 힌트 → 플래시 → 카드 공개
  fifaTimers.push(setTimeout(() => fifaHintType.classList.add("show"), 900));
  fifaTimers.push(setTimeout(() => fifaHintTar.classList.add("show"), walkout ? 2100 : 1700));
  fifaTimers.push(setTimeout(() => {
    const flash = document.createElement("div");
    flash.className = "fifa-flash go";
    fifaOverlay.querySelector(".fifa-stage").appendChild(flash);
    setTimeout(() => flash.remove(), 600);

    document.getElementById("fifaRating").innerHTML =
      `${rating}<small>${walkout ? "WALKOUT" : "RATED"}</small>`;
    const imgSrc = `images/${encodeURIComponent(chosen.name)}.jpg`;
    const cardImg = document.getElementById("fifaCardImg");
    cardImg.innerHTML = `<img src="${imgSrc}" alt="${chosen.name}">`;
    cardImg.querySelector("img").onerror = () => (cardImg.innerHTML = packSVG(chosen));
    document.getElementById("fifaCardName").textContent = chosen.name;
    document.getElementById("fifaCardMeta").textContent =
      `${TYPE_KO[chosen.type]} · ${chosen.tar}${chosen.px ? " · PX" : ""}`;
    fifaCard.classList.remove("hidden");
    spawnConfetti();
  }, walkout ? 3300 : 2600));
  // 카드 확인 후 자동 종료
  fifaTimers.push(setTimeout(() => fifaFinish && fifaFinish(), walkout ? 6800 : 6000));
}

document.getElementById("fifaSkip").addEventListener("click", () => fifaFinish && fifaFinish());
fifaOverlay.addEventListener("click", (e) => {
  // 카드가 공개된 뒤에는 아무 곳이나 눌러 닫기
  if (!fifaCard.classList.contains("hidden") && e.target !== document.getElementById("fifaSkip")) {
    fifaFinish && fifaFinish();
  }
});
