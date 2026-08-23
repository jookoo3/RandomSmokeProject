// type: "regular"(일반) | "menthol"(맨솔) | "capsule"(캡슐)
const CIGARETTES = [
  // 일반
  { name: "말보로 레드", review: "묵직하고 진한 클래식, 골초들의 변함없는 스테디셀러", type: "regular", tar: "8.0mg", color: "#c0392b" },
  { name: "말보로 골드", review: "레드보다 부드럽지만 존재감은 확실한 무난한 선택", type: "regular", tar: "6.0mg", color: "#d4a017" },
  { name: "던힐 6mg", review: "깔끔하고 균형 잡힌 맛, 호불호 없이 무난하다는 평", type: "regular", tar: "6.0mg", color: "#5d1f1f" },
  { name: "던힐 1mg", review: "순하고 목넘김이 부드러워 라이트 유저에게 인기", type: "regular", tar: "1.0mg", color: "#b8a06a" },
  { name: "팔리아멘트 아쿠아 5", review: "특유의 리세스 필터로 깔끔한 끝맛이 매력", type: "regular", tar: "5.0mg", color: "#2471a3" },
  { name: "메비우스 오리지널", review: "구관이 명관, 옛 마일드세븐 감성 그대로라는 평", type: "regular", tar: "6.0mg", color: "#1a3c8f" },
  { name: "메비우스 스카이블루", review: "가볍고 산뜻해서 데일리로 부담 없다는 후기 다수", type: "regular", tar: "3.0mg", color: "#5dade2" },
  { name: "에쎄 수", review: "초저타르인데도 맛이 비지 않다는 국민 슬림 담배", type: "regular", tar: "0.5mg", color: "#7d8a5c" },
  { name: "에쎄 프라임", review: "슬림 특유의 고소함, 순한 맛 찾는 분들의 정착지", type: "regular", tar: "0.45mg", color: "#8a7040" },
  { name: "더원 화이트", review: "담백하고 깔끔, 냄새 적어 주변 눈치 덜 보인다는 평", type: "regular", tar: "1.0mg", color: "#95a5a6" },
  { name: "타임 미드", review: "가성비 좋고 거친 듯 구수한 맛이 매력이라는 후기", type: "regular", tar: "4.5mg", color: "#e67e22" },
  { name: "클라우드 나인", review: "부드러운 연기와 은은한 향으로 조용한 마니아층 보유", type: "regular", tar: "3.0mg", color: "#7f8fa6" },
  { name: "보헴 시가 미니", review: "시가 특유의 달큰한 향, 색다른 맛 찾을 때 제격", type: "regular", tar: "5.5mg", color: "#6e4a2f" },
  { name: "라일락", review: "은은한 꽃향 감성, 호불호 갈리지만 팬층 확고", type: "regular", tar: "4.5mg", color: "#9b59b6" },
  { name: "럭키스트라이크", review: "볶은 담뱃잎의 구수함, 클래식 아메리칸 스타일", type: "regular", tar: "6.0mg", color: "#b03a2e" },

  // 맨솔
  { name: "말보로 아이스 블라스트", review: "강력한 쿨링감, 목이 뻥 뚫린다는 평의 맨솔 대표주자", type: "menthol", tar: "5.0mg", color: "#1abc9c" },
  { name: "메비우스 LSS 윈드블루", review: "순한 맨솔 입문용으로 좋다는 후기 다수", type: "menthol", tar: "1.0mg", color: "#48c9b0" },
  { name: "에쎄 멘솔", review: "슬림+멘솔 조합, 깔끔하고 상쾌한 끝맛이 강점", type: "menthol", tar: "4.5mg", color: "#27ae60" },
  { name: "던힐 스위치 프로스트", review: "진한 바디에 시원함까지, 묵직한 맨솔파 추천", type: "menthol", tar: "6.0mg", color: "#16a085" },
  { name: "카멜 프레쉬", review: "부드러운 쿨링과 고소함의 균형이 좋다는 평", type: "menthol", tar: "5.0mg", color: "#45b39d" },
  { name: "쿨 부스트", review: "이름값 하는 강한 청량감, 여름철 수요 급증", type: "menthol", tar: "5.0mg", color: "#117a65" },

  // 캡슐
  { name: "레종 프렌치 블랙", review: "커피 향 캡슐의 원조 강자, 달콤한 끝맛이 인기", type: "capsule", tar: "3.0mg", color: "#2c3e50" },
  { name: "레종 휘바", review: "터뜨리면 상큼함이 확 퍼진다는 호평의 스테디셀러", type: "capsule", tar: "5.0mg", color: "#3498db" },
  { name: "에쎄 체인지", review: "일반↔맨솔 전환의 재미, 캡슐 입문용으로 추천 다수", type: "capsule", tar: "4.5mg", color: "#8e44ad" },
  { name: "에쎄 체인지 빙", review: "얼음같은 쿨링 캡슐, 시원함 끝판왕이라는 후기", type: "capsule", tar: "4.5mg", color: "#5dade2" },
  { name: "던힐 스위치", review: "묵직한 맛에 캡슐 청량감, 두 마리 토끼를 잡았다는 평", type: "capsule", tar: "6.0mg", color: "#7d3c98" },
  { name: "메비우스 LBS 퍼펄", review: "베리향 캡슐의 달콤함, 여성 흡연자에게 특히 인기", type: "capsule", tar: "1.0mg", color: "#af7ac5" },
  { name: "보헴 파이프 마스터", review: "파이프 담배 감성의 달콤한 향, 독특함이 매력", type: "capsule", tar: "5.0mg", color: "#784212" },
  { name: "말보로 비스타", review: "이중 캡슐의 화려한 맛 변화, 신제품 중 화제성 1위", type: "capsule", tar: "4.0mg", color: "#e74c8c" },
];

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
  resultImage.innerHTML = packSVG(chosen);
  resultName.textContent = chosen.name;
  resultMeta.innerHTML = `${TYPE_TAG[chosen.type]} 타르 ${chosen.tar}`;
  resultReview.textContent = `💬 “${chosen.review}”`;
}

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => pick(btn.dataset.mode));
});
