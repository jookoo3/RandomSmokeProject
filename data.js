// type: "regular"(일반) | "menthol"(맨솔) | "capsule"(캡슐)
// 대한민국 시판 주요 궐련 담배 SKU (단종·소량 수입 제외)
const CIGARETTES = [
  // ===== 일반 =====
  // 말보로 (PM)
  { name: "말보로 레드", px: true, type: "regular", tar: "8.0mg", color: "#c0392b", review: "묵직하고 진한 클래식, 골초들의 변함없는 스테디셀러" },
  { name: "말보로 골드", px: true, type: "regular", tar: "6.0mg", color: "#d4a017", review: "레드보다 부드럽지만 존재감은 확실한 무난한 선택" },
  { name: "말보로 미디움", type: "regular", tar: "5.0mg", color: "#a04000", review: "레드와 골드 사이의 밸런스, 딱 중간이 좋다는 평" },
  { name: "말보로 실버", type: "regular", tar: "3.0mg", color: "#95a5a6", review: "말보로 감성 그대로 순하게, 라이트 유저 추천" },
  // 팔리아멘트 (PM)
  { name: "팔리아멘트 아쿠아 5", px: true, type: "regular", tar: "5.0mg", color: "#2471a3", review: "특유의 리세스 필터로 깔끔한 끝맛이 매력" },
  { name: "팔리아멘트 아쿠아 3", type: "regular", tar: "3.0mg", color: "#5499c7", review: "아쿠아5보다 순한 버전, 부드러운 목넘김이 강점" },
  { name: "팔리아멘트 아쿠아 1", type: "regular", tar: "1.0mg", color: "#85c1e9", review: "초순한 팔리아멘트, 은은하게 즐기는 분들의 선택" },
  // 버지니아 S (PM)
  { name: "버지니아 S 골드", type: "regular", tar: "1.0mg", color: "#c9a227", review: "가늘고 순한 슈퍼슬림, 여성 흡연자에게 인기" },
  // 던힐 (BAT)
  { name: "던힐 6mg", px: true, type: "regular", tar: "6.0mg", color: "#5d1f1f", review: "깔끔하고 균형 잡힌 맛, 호불호 없이 무난하다는 평" },
  { name: "던힐 3mg", type: "regular", tar: "3.0mg", color: "#8b5a2b", review: "적당히 순하면서 던힐 특유의 밸런스 유지" },
  { name: "던힐 1mg", px: true, type: "regular", tar: "1.0mg", color: "#b8a06a", review: "순하고 목넘김이 부드러워 라이트 유저에게 인기" },
  // 켄트 (BAT)
  { name: "켄트 블루", type: "regular", tar: "4.0mg", color: "#1f618d", review: "깔끔하고 세련된 맛, 조용한 마니아층 보유" },
  // 로스만 (BAT)
  { name: "로스만 데미 블루", type: "regular", tar: "6.0mg", color: "#1a5276", review: "가성비 최강자, 짧고 굵은 한 대가 필요할 때" },
  { name: "로스만 데미 실버", type: "regular", tar: "3.0mg", color: "#aab7b8", review: "데미 블루의 순한 버전, 부담 없는 데일리" },
  { name: "로스만 인터내셔널", type: "regular", tar: "8.0mg", color: "#154360", review: "묵직한 영국식 클래식, 진한 맛 애호가 추천" },
  // 럭키스트라이크 (BAT)
  { name: "럭키스트라이크", type: "regular", tar: "6.0mg", color: "#b03a2e", review: "볶은 담뱃잎의 구수함, 클래식 아메리칸 스타일" },
  // 보그 (BAT)
  { name: "보그 블루", type: "regular", tar: "3.0mg", color: "#5b8fb9", review: "슬림하고 은은한 맛, 가볍게 즐기기 좋다는 평" },
  // 메비우스 (JTI)
  { name: "메비우스 오리지널", px: true, type: "regular", tar: "6.0mg", color: "#1a3c8f", review: "구관이 명관, 옛 마일드세븐 감성 그대로라는 평" },
  { name: "메비우스 스카이블루", px: true, type: "regular", tar: "3.0mg", color: "#5dade2", review: "가볍고 산뜻해서 데일리로 부담 없다는 후기 다수" },
  { name: "메비우스 LSS 원", type: "regular", tar: "0.1mg", color: "#d6eaf8", review: "초저타르 슈퍼슬림, 거의 공기라는 우스갯소리도" },
  // 카멜 (JTI)
  { name: "카멜 필터", type: "regular", tar: "8.0mg", color: "#ca8a2a", review: "낙타 마크의 클래식, 고소하고 진한 풍미" },
  { name: "카멜 옐로우", type: "regular", tar: "7.0mg", color: "#f1c40f", review: "카멜 특유의 고소함이 가장 진하게 살아있는 맛" },
  { name: "카멜 블루", type: "regular", tar: "6.0mg", color: "#2e86c1", review: "필터보다 부드럽게, 카멜 입문용으로 좋다는 평" },
  // 윈스턴 (JTI)
  { name: "윈스턴 레드", type: "regular", tar: "8.0mg", color: "#922b21", review: "진하고 거친 아메리칸 블렌드, 가성비도 준수" },
  { name: "윈스턴 블루", type: "regular", tar: "5.0mg", color: "#2874a6", review: "레드보다 순화된 맛, 무난한 미드타르" },
  // 에쎄 (KT&G)
  { name: "에쎄 수 0.5", px: true, type: "regular", tar: "0.5mg", color: "#7d8a5c", review: "초저타르인데도 맛이 비지 않다는 국민 슬림 담배" },
  { name: "에쎄 수 0.1", type: "regular", tar: "0.1mg", color: "#a9b388", review: "국내 최저 수준 타르, 흡연량 줄이기용으로 인기" },
  { name: "에쎄 프라임", px: true, type: "regular", tar: "0.45mg", color: "#8a7040", review: "슬림 특유의 고소함, 순한 맛 찾는 분들의 정착지" },
  { name: "에쎄 라이트", type: "regular", tar: "4.5mg", color: "#a2947a", review: "에쎄 라인의 미드타르, 고소함과 순함의 균형" },
  { name: "에쎄 원", type: "regular", tar: "1.0mg", color: "#b7950b", review: "에쎄 라인업의 표준, 꾸준한 판매량의 베스트셀러" },
  { name: "에쎄 스페셜 골드", type: "regular", tar: "6.5mg", color: "#9a7d0a", review: "슬림인데 묵직한 반전 매력, 진한 슬림파 추천" },
  { name: "에쎄 골든 리프", type: "regular", tar: "5.0mg", color: "#d4ac0d", review: "황금잎 블렌딩의 고소하고 깊은 맛이 강점" },
  { name: "에쎄 클래식", type: "regular", tar: "6.5mg", color: "#7e6b48", review: "에쎄 원조의 맛, 오래된 팬층이 두터운 제품" },
  // 더원 (KT&G)
  { name: "더원 화이트", type: "regular", tar: "1.0mg", color: "#bdc3c7", review: "담백하고 깔끔, 냄새 적어 주변 눈치 덜 보인다는 평" },
  { name: "더원 블루", type: "regular", tar: "3.0mg", color: "#3498db", review: "화이트보다 한 단계 진하게, 밸런스가 좋다는 후기" },
  { name: "더원 오렌지", type: "regular", tar: "0.1mg", color: "#e67e22", review: "초저타르 슈퍼슬림, 가볍게 태우기 좋다는 평" },
  // 타임 (KT&G)
  { name: "타임 미드", px: true, type: "regular", tar: "4.5mg", color: "#d35400", review: "가성비 좋고 거친 듯 구수한 맛이 매력이라는 후기" },
  // 디스 (KT&G)
  { name: "디스", px: true, type: "regular", tar: "6.0mg", color: "#34495e", review: "IMF 시절부터 함께한 국민 가성비 담배" },
  { name: "디스 플러스", px: true, type: "regular", tar: "6.5mg", color: "#2c3e50", review: "디스보다 길어진 라지 사이즈, 오래 태우기 좋다는 평" },
  // 심플 (KT&G)
  { name: "심플 3mg", type: "regular", tar: "3.0mg", color: "#7f8c8d", review: "이름처럼 심플하고 깔끔한 맛, 꾸준한 수요" },
  // 팔리아멘트 하이브리드는 캡슐 섹션 참조
  // 기타 KT&G
  { name: "한라산", px: true, type: "regular", tar: "8.0mg", color: "#1e8449", review: "제주 감성의 진한 맛, 아는 사람만 찾는 롱셀러" },
  { name: "라일락", type: "regular", tar: "4.5mg", color: "#9b59b6", review: "은은한 꽃향 감성, 호불호 갈리지만 팬층 확고" },
  { name: "클라우드 나인", px: true, type: "regular", tar: "3.0mg", color: "#7f8fa6", review: "부드러운 연기와 은은한 향으로 조용한 마니아층 보유" },
  { name: "88 골드", type: "regular", tar: "6.5mg", color: "#b9770e", review: "88올림픽과 함께한 추억의 맛, 여전히 판매 중" },
  // 보헴 (KT&G)
  { name: "보헴 시가 미니", px: true, type: "regular", tar: "5.5mg", color: "#6e4a2f", review: "시가 특유의 달큰한 향, 색다른 맛 찾을 때 제격" },
  { name: "보헴 시가 No.1", type: "regular", tar: "1.0mg", color: "#a5673f", review: "시가향을 가장 순하게, 부담 없는 저타르 시가" },
  { name: "보헴 시가 No.3", type: "regular", tar: "3.0mg", color: "#935116", review: "시가향을 순하게 즐기는 버전, 입문용으로 추천" },
  { name: "보헴 시가 No.6", type: "regular", tar: "6.5mg", color: "#5d3a1a", review: "진한 시가 풍미, 묵직한 단맛이 매력이라는 평" },

  // ===== 맨솔 =====
  { name: "말보로 아이스 블라스트", type: "menthol", tar: "5.0mg", color: "#1abc9c", review: "강력한 쿨링감, 목이 뻥 뚫린다는 평의 맨솔 대표주자" },
  { name: "말보로 블랙 멘솔", type: "menthol", tar: "8.0mg", color: "#0e6655", review: "진한 바디와 강한 멘솔의 조합, 헤비 맨솔파 추천" },
  { name: "메비우스 LSS 윈드블루", type: "menthol", tar: "1.0mg", color: "#48c9b0", review: "순한 맨솔 입문용으로 좋다는 후기 다수" },
  { name: "메비우스 윈드블루", type: "menthol", tar: "5.0mg", color: "#17a589", review: "청량감과 담배 맛의 밸런스가 좋다는 평" },
  { name: "에쎄 멘솔", type: "menthol", tar: "4.5mg", color: "#27ae60", review: "슬림+멘솔 조합, 깔끔하고 상쾌한 끝맛이 강점" },
  { name: "던힐 스위치 프로스트", type: "menthol", tar: "6.0mg", color: "#16a085", review: "진한 바디에 시원함까지, 묵직한 맨솔파 추천" },
  { name: "카멜 프레쉬", type: "menthol", tar: "5.0mg", color: "#45b39d", review: "부드러운 쿨링과 고소함의 균형이 좋다는 평" },
  { name: "쿨 부스트", type: "menthol", tar: "5.0mg", color: "#117a65", review: "이름값 하는 강한 청량감, 여름철 수요 급증" },
  { name: "버지니아 S 멘솔", type: "menthol", tar: "1.0mg", color: "#76d7c4", review: "슈퍼슬림 멘솔, 가볍고 상쾌하게 즐기는 선택" },

  // ===== 캡슐 =====
  // 레종 (KT&G)
  { name: "레종 프렌치 블랙", px: true, type: "capsule", tar: "3.0mg", color: "#2c3e50", review: "커피 향 캡슐의 원조 강자, 달콤한 끝맛이 인기" },
  { name: "레종 블랙 아이스", type: "capsule", tar: "5.0mg", color: "#1b2631", review: "커피향에 쿨링까지, 아아 마시는 기분이라는 후기" },
  { name: "레종 휘바", px: true, type: "capsule", tar: "5.0mg", color: "#3498db", review: "터뜨리면 상큼함이 확 퍼진다는 호평의 스테디셀러" },
  { name: "레종 프레소", type: "capsule", tar: "5.0mg", color: "#6e2c00", review: "에스프레소 풍미의 진한 커피향 캡슐" },
  { name: "레종 아이스 프레소", type: "capsule", tar: "5.0mg", color: "#7fb3d5", review: "차가운 커피향 캡슐, 시원달콤한 조합이 인기" },
  { name: "레종 썸", type: "capsule", tar: "4.0mg", color: "#af601a", review: "달콤한 향의 캡슐, 부담 없이 즐기기 좋다는 평" },
  // 에쎄 체인지 (KT&G)
  { name: "에쎄 체인지", px: true, type: "capsule", tar: "4.5mg", color: "#8e44ad", review: "일반↔맨솔 전환의 재미, 캡슐 입문용으로 추천 다수" },
  { name: "에쎄 체인지 빙", px: true, type: "capsule", tar: "4.5mg", color: "#5dade2", review: "얼음같은 쿨링 캡슐, 시원함 끝판왕이라는 후기" },
  { name: "에쎄 체인지 히말라야", type: "capsule", tar: "4.5mg", color: "#85c1e9", review: "히말라야급 강력 쿨링, 맨솔 매니아 저격 제품" },
  { name: "에쎄 체인지 W", type: "capsule", tar: "0.5mg", color: "#bb8fce", review: "더블 캡슐에 초저타르, 가볍게 즐기는 변화구" },
  // 팔리아멘트 (PM)
  { name: "팔리아멘트 하이브리드 5", type: "capsule", tar: "5.0mg", color: "#1b4f72", review: "리세스 필터에 캡슐까지, 깔끔+청량 조합" },
  // 던힐 (BAT)
  { name: "던힐 스위치", type: "capsule", tar: "6.0mg", color: "#7d3c98", review: "묵직한 맛에 캡슐 청량감, 두 마리 토끼를 잡았다는 평" },
  // 메비우스 (JTI)
  { name: "메비우스 LBS 퍼펄", type: "capsule", tar: "1.0mg", color: "#af7ac5", review: "베리향 캡슐의 달콤함, 여성 흡연자에게 특히 인기" },
  // 보헴 (KT&G)
  { name: "보헴 파이프 마스터", type: "capsule", tar: "5.0mg", color: "#784212", review: "파이프 담배 감성의 달콤한 향, 독특함이 매력" },
  { name: "보헴 모히또 더블", type: "capsule", tar: "5.0mg", color: "#52be80", review: "모히또 향 더블 캡슐, 칵테일 같은 이색 조합" },
  // 말보로 (PM)
  { name: "말보로 비스타", type: "capsule", tar: "4.0mg", color: "#e74c8c", review: "이중 캡슐의 화려한 맛 변화, 신제품 중 화제성 1위" },
  // 더원 (KT&G)
  { name: "더원 임팩트", type: "capsule", tar: "1.0mg", color: "#5b2c6f", review: "순한 바디에 캡슐 한 방, 저타르 캡슐파의 선택" },

  // ===== 아이코스 전용 스틱 (테리아) =====
  { name: "테리아 실버", type: "iqos", tar: "궐련형 스틱", color: "#bdc3c7", review: "군더더기 없는 깔끔한 연초맛, 테리아의 기본기" },
  { name: "테리아 앰버", type: "iqos", tar: "궐련형 스틱", color: "#ca8a2a", review: "고소하고 묵직한 바디감, 테리아 최고 인기작" },
  { name: "테리아 그린", type: "iqos", tar: "궐련형 스틱", color: "#27ae60", review: "시원한 멘솔 스틱, 답답할 때 한 방이라는 평" },
  { name: "테리아 그린 징", type: "iqos", tar: "궐련형 스틱", color: "#1e8449", review: "강화된 쿨링감, 진한 멘솔파를 위한 선택" },
  { name: "테리아 블랙 그린", type: "iqos", tar: "궐련형 스틱", color: "#145a32", review: "묵직한 바디에 멘솔을 더한 이중 매력" },
  { name: "테리아 블랙 퍼플", type: "iqos", tar: "궐련형 스틱", color: "#4a235a", review: "베리향과 진한 바디의 조화, 달콤파 추천" },
  { name: "테리아 루비 징", type: "iqos", tar: "궐련형 스틱", color: "#922b3e", review: "상큼한 베리 쿨링, 화사한 향이 매력이라는 후기" },
  { name: "테리아 블루", type: "iqos", tar: "궐련형 스틱", color: "#2874a6", review: "부드러운 청량감, 무난하게 즐기는 데일리 스틱" },

  // ===== 릴 핏 스틱 (릴 솔리드/에이블용) =====
  { name: "핏 레귤러", type: "lilfit", tar: "궐련형 스틱", color: "#7f8c8d", review: "담백한 연초맛의 기본 스틱, 릴 유저의 표준" },
  { name: "핏 레귤러 스카이", type: "lilfit", tar: "궐련형 스틱", color: "#5dade2", review: "레귤러보다 가볍고 산뜻한 맛이라는 평" },
  { name: "핏 체인지", type: "lilfit", tar: "궐련형 스틱", color: "#8e44ad", review: "캡슐로 맛 전환, 지루할 틈 없다는 후기" },
  { name: "핏 체인지 업", type: "lilfit", tar: "궐련형 스틱", color: "#af7ac5", review: "체인지의 업그레이드, 더 진해진 캡슐 풍미" },
  { name: "핏 크리스프", type: "lilfit", tar: "궐련형 스틱", color: "#48c9b0", review: "바삭하게 터지는 청량감, 멘솔 스틱의 강자" },

  // ===== 릴 하이브리드 스틱 (믹스) =====
  { name: "믹스 아이스", type: "lilhybrid", tar: "궐련형 스틱", color: "#85c1e9", review: "이름 그대로 얼음 같은 쿨링, 여름 필수템" },
  { name: "믹스 레귤러", type: "lilhybrid", tar: "궐련형 스틱", color: "#616a6b", review: "묵직한 연초 본연의 맛을 살린 스틱" },
  { name: "믹스 미", type: "lilhybrid", tar: "궐련형 스틱", color: "#f5b041", review: "달콤 상큼한 과일향, 호기심에 샀다가 정착한다는 평" },
  { name: "믹스 마쥬", type: "lilhybrid", tar: "궐련형 스틱", color: "#eb984e", review: "이국적인 망고향 캡슐, 확실한 개성파" },
  { name: "믹스 프레소", type: "lilhybrid", tar: "궐련형 스틱", color: "#6e2c00", review: "구수한 커피향 스틱, 레종 프렌치 감성이라는 후기" },
];
