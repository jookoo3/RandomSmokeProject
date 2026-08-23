const MODE_INFO = {
  regular: { label: "🔴 일반 (맨솔·캡슐 제외)", filter: (c) => c.type === "regular" },
  flavor: { label: "🟢 맨솔·캡슐", filter: (c) => c.type === "menthol" || c.type === "capsule" },
  all: { label: "🟣 연초 전체", filter: (c) => ["regular", "menthol", "capsule"].includes(c.type) },
  px: { label: "🪖 PX (군마트) 판매", filter: (c) => c.px === true },
  iqos: { label: "🔥 아이코스 스틱", filter: (c) => c.type === "iqos" },
  lil: { label: "💨 릴 스틱", filter: (c) => c.type === "lil" },
};

const TYPE_TAG = {
  regular: '<span class="tag regular">일반</span>',
  menthol: '<span class="tag menthol">맨솔</span>',
  capsule: '<span class="tag capsule">캡슐</span>',
  iqos: '<span class="tag iqos">아이코스</span>',
  lil: '<span class="tag lil">릴</span>',
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
  const isStick = item.type === "iqos" || item.type === "lil";
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

function gacha() {
  const { label, filter } = MODE_INFO[currentMode];
  const pool = CIGARETTES.filter(filter);
  if (!pool.length) return;
  const chosen = pool[Math.floor(Math.random() * pool.length)];

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
    resultName.textContent = pool[Math.floor(Math.random() * pool.length)].name;
  }, 60);

  setTimeout(() => {
    clearInterval(interval);
    resultCard.classList.remove("rolling");
    resultCard.classList.add("reveal");
    showItem(chosen, label);
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
  { type: "lil", title: "💨 릴 스틱" },
];

function renderList() {
  listBody.innerHTML = CATEGORIES.map(({ type, title }) => {
    const items = CIGARETTES.filter((c) => c.type === type)
      .map(
        (c) => `
      <div class="list-item">
        <span class="dot" style="background:${c.color}"></span>
        <span class="item-name">${c.name}${c.px ? ' <span class="tag px">PX</span>' : ""}</span>
        <span class="item-tar">${c.type === "iqos" || c.type === "lil" ? "" : c.tar}</span>
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
