// type: "regular"(일반) | "menthol"(맨솔) | "capsule"(캡슐)
const CIGARETTES = [
  // 일반
  { name: "말보로 레드", type: "regular", tar: "8.0mg" },
  { name: "말보로 골드", type: "regular", tar: "6.0mg" },
  { name: "던힐 6mg", type: "regular", tar: "6.0mg" },
  { name: "던힐 1mg", type: "regular", tar: "1.0mg" },
  { name: "팔리아멘트 아쿠아 5", type: "regular", tar: "5.0mg" },
  { name: "메비우스 오리지널", type: "regular", tar: "6.0mg" },
  { name: "메비우스 스카이블루", type: "regular", tar: "3.0mg" },
  { name: "에쎄 수", type: "regular", tar: "0.5mg" },
  { name: "에쎄 프라임", type: "regular", tar: "0.45mg" },
  { name: "더원 화이트", type: "regular", tar: "1.0mg" },
  { name: "타임 미드", type: "regular", tar: "4.5mg" },
  { name: "클라우드 나인", type: "regular", tar: "3.0mg" },
  { name: "보헴 시가 미니", type: "regular", tar: "5.5mg" },
  { name: "라일락", type: "regular", tar: "4.5mg" },
  { name: "럭키스트라이크", type: "regular", tar: "6.0mg" },

  // 맨솔
  { name: "말보로 아이스 블라스트", type: "menthol", tar: "5.0mg" },
  { name: "메비우스 LSS 윈드블루", type: "menthol", tar: "1.0mg" },
  { name: "에쎄 멘솔", type: "menthol", tar: "4.5mg" },
  { name: "던힐 스위치 프로스트", type: "menthol", tar: "6.0mg" },
  { name: "카멜 프레쉬", type: "menthol", tar: "5.0mg" },
  { name: "쿨 부스트", type: "menthol", tar: "5.0mg" },

  // 캡슐
  { name: "레종 프렌치 블랙", type: "capsule", tar: "3.0mg" },
  { name: "레종 휘바", type: "capsule", tar: "5.0mg" },
  { name: "에쎄 체인지", type: "capsule", tar: "4.5mg" },
  { name: "에쎄 체인지 빙", type: "capsule", tar: "4.5mg" },
  { name: "던힐 스위치", type: "capsule", tar: "6.0mg" },
  { name: "메비우스 LBS 퍼펄", type: "capsule", tar: "1.0mg" },
  { name: "보헴 파이프 마스터", type: "capsule", tar: "5.0mg" },
  { name: "말보로 비스타", type: "capsule", tar: "4.0mg" },
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
const resultName = document.getElementById("resultName");
const resultMeta = document.getElementById("resultMeta");

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
  resultName.textContent = chosen.name;
  resultMeta.innerHTML = `${TYPE_TAG[chosen.type]} 타르 ${chosen.tar}`;
}

document.querySelectorAll(".mode-btn").forEach((btn) => {
  btn.addEventListener("click", () => pick(btn.dataset.mode));
});
