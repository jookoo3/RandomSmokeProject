const MODE_INFO = {
  regular: { label: "일반 (맨솔·캡슐 제외)", filter: (c) => c.type === "regular" },
  flavor: { label: "맨솔·캡슐", filter: (c) => c.type === "menthol" || c.type === "capsule" },
  all: { label: "전체 포함", filter: () => true },
};

const TYPE_TAG = {
  regular: '<span class="tag regular">일반</span>',
  menthol: '<span class="tag menthol">맨솔</span>',
  capsule: '<span class="tag capsule">캡슐</span>',
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

function pick(mode) {
  const { label, filter } = MODE_INFO[mode];
  const pool = CIGARETTES.filter(filter);
  const chosen = pool[Math.floor(Math.random() * pool.length)];

  resultCard.classList.remove("hidden");
  // 애니메이션 재생을 위해 리플로우 강제
  void resultCard.offsetWidth;
  resultCard.style.animation = "none";
  requestAnimationFrame(() => (resultCard.style.animation = ""));

  resultLabel.textContent = label;
  // images/제품명.jpg 가 있으면 실제 사진, 없으면 SVG 일러스트로 대체
  const imgSrc = `images/${encodeURIComponent(chosen.name)}.jpg`;
  resultImage.innerHTML = `<img class="pack-photo" src="${imgSrc}" alt="${chosen.name}">`;
  const img = resultImage.querySelector("img");
  img.onerror = () => (resultImage.innerHTML = packSVG(chosen));
  resultName.textContent = chosen.name;
  resultMeta.innerHTML = `${TYPE_TAG[chosen.type]} 타르 ${chosen.tar}`;
  resultReview.textContent = `💬 “${chosen.review}”`;
}

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => pick(btn.dataset.mode));
});

// 전체 목록 모달
const listModal = document.getElementById("listModal");
const listBody = document.getElementById("listBody");

const CATEGORIES = [
  { type: "regular", title: "🔴 일반" },
  { type: "menthol", title: "🟢 맨솔" },
  { type: "capsule", title: "🔵 캡슐" },
];

function renderList() {
  listBody.innerHTML = CATEGORIES.map(({ type, title }) => {
    const items = CIGARETTES.filter((c) => c.type === type)
      .map(
        (c) => `
      <div class="list-item">
        <span class="dot" style="background:${c.color}"></span>
        <span class="item-name">${c.name}</span>
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
