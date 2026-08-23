// type: "regular"(일반) | "menthol"(맨솔) | "capsule"(캡슐)
//     | "iqos"(테리아·히츠) | "lilfit"(핏) | "lilhybrid"(믹스)
// 2025-2026년 시판 기준. 단종 제품(에쎄 클래식, 더원 임팩트, 메비우스 원,
// 레종 휘바 아이스 툰드라, 핏 아이싱 등) 제외.
const CIGARETTES = [
  // ===== 일반 (논캡슐·논멘솔) =====
  // 말보로 (한국필립모리스)
  { name: "말보로 레드", type: "regular", tar: "8.0mg", color: "#c0392b", px: true, review: "묵직하고 진한 클래식, 골초들의 변함없는 스테디셀러" },
  { name: "말보로 골드", type: "regular", tar: "6.0mg", color: "#d4a017", px: true, review: "가장 많이 팔리는 말보로, 무난함의 대명사" },
  { name: "말보로 미디움", type: "regular", tar: "6.0mg", color: "#a04000", review: "골드와 유사한 포지셔닝, 균형 잡힌 맛이라는 평" },
  { name: "말보로 실버", type: "regular", tar: "3.0mg", color: "#95a5a6", review: "말보로 감성 그대로 순하게, 라이트 유저 추천" },
  { name: "말보로 화이트", type: "regular", tar: "1.0mg", color: "#ecf0f1", review: "2025년 신제품, 냄새 저감 기술로 화제라는 후기" },
  { name: "말보로 딥 블렌드 11", type: "regular", tar: "3.0mg", color: "#6e2c00", review: "깊은 블렌딩의 신작, 진한 풍미의 저타르" },
  // 팔리아멘트
  { name: "팔리아멘트 아쿠아 5", type: "regular", tar: "5.0mg", color: "#2471a3", review: "공간필터 특유의 깔끔한 끝맛, 프리미엄 대표주자" },
  { name: "팔리아멘트 아쿠아 3", type: "regular", tar: "3.0mg", color: "#5499c7", review: "아쿠아5보다 순한 버전, 부드러운 목넘김이 강점" },
  { name: "팔리아멘트 아쿠아 1", type: "regular", tar: "1.0mg", color: "#85c1e9", review: "일명 '팔리 원', 은은하게 즐기는 분들의 선택" },
  // 던힐 (BAT)
  { name: "던힐 6mg", type: "regular", tar: "6.0mg", color: "#5d1f1f", px: true, review: "깔끔하고 균형 잡힌 맛, 호불호 없이 무난하다는 평" },
  { name: "던힐 3mg", type: "regular", tar: "3.0mg", color: "#8b5a2b", px: true, review: "적당히 순하면서 던힐 특유의 밸런스 유지" },
  { name: "던힐 1mg", type: "regular", tar: "1.0mg", color: "#b8a06a", review: "순하고 목넘김이 부드러워 라이트 유저에게 인기" },
  { name: "던힐 0.1mg", type: "regular", tar: "0.1mg", color: "#d5c8a8", review: "던힐의 극저타르 버전, 가장 가벼운 던힐" },
  // 켄트 (BAT)
  { name: "켄트 3mg", type: "regular", tar: "3.0mg", color: "#1f618d", review: "깔끔하고 세련된 맛, 조용한 마니아층 보유" },
  { name: "켄트 1mg", type: "regular", tar: "1.0mg", color: "#5dade2", review: "켄트의 저타르 라인, 부담 없는 데일리" },
  // 로스만스 (BAT)
  { name: "로스만스 슈퍼슬림", type: "regular", tar: "3.0mg", color: "#1a5276", review: "가성비 슈퍼슬림의 국민 강자라는 평" },
  // 럭키스트라이크 (BAT)
  { name: "럭키스트라이크 레드", type: "regular", tar: "6.0mg", color: "#b03a2e", review: "볶은 담뱃잎의 구수함, 클래식 아메리칸 스타일" },
  { name: "럭키스트라이크 실버", type: "regular", tar: "3.0mg", color: "#aab7b8", review: "럭키의 순한 버전, 고소함은 그대로" },
  // 보그 (BAT)
  { name: "보그 슈퍼슬림 1mg", type: "regular", tar: "1.0mg", color: "#5b8fb9", review: "가늘고 은은한 초슬림, 가볍게 즐기기 좋다는 평" },
  { name: "보그 슈퍼슬림 0.1mg", type: "regular", tar: "0.1mg", color: "#a9cce3", review: "극저타르 초슬림, 거의 향만 즐기는 느낌" },
  // 메비우스 (JTI)
  { name: "메비우스 오리지널", type: "regular", tar: "8.0mg", color: "#1a3c8f", review: "구관이 명관, 옛 마일드세븐 감성 그대로라는 평" },
  { name: "메비우스 스카이블루", type: "regular", tar: "6.0mg", color: "#5dade2", review: "부드러운 블렌드의 정석, 데일리로 인기" },
  { name: "메비우스 윈드블루", type: "regular", tar: "3.0mg", color: "#48c9b0", review: "가볍고 산뜻한 저타르 킹사이즈" },
  { name: "메비우스 LSS 윈드블루", type: "regular", tar: "3.0mg", color: "#76d7c4", review: "연기 냄새 저감(LSS), 눈치 덜 보인다는 후기" },
  { name: "메비우스 LSS 원", type: "regular", tar: "1.0mg", color: "#d6eaf8", review: "냄새 저감 저타르, 순하게 즐기는 선택" },
  // 카멜 (JTI)
  { name: "카멜 필터", type: "regular", tar: "8.0mg", color: "#ca8a2a", px: true, review: "낙타 마크의 클래식, 고소하고 진한 풍미" },
  { name: "카멜 블루", type: "regular", tar: "5.0mg", color: "#2e86c1", review: "필터보다 부드럽게, 카멜 입문용으로 좋다는 평" },
  { name: "카멜 수퍼슬림", type: "regular", tar: "1.0mg", color: "#d4ac0d", review: "슬림으로 즐기는 카멜의 고소함" },
  // 윈스턴 (JTI)
  { name: "윈스턴 클래식", type: "regular", tar: "6.0mg", color: "#922b21", review: "진하고 거친 아메리칸 블렌드, 가성비도 준수" },
  { name: "윈스턴 1mg", type: "regular", tar: "1.0mg", color: "#d98880", review: "윈스턴의 저타르 버전, 순한 아메리칸 스타일" },
  // 에쎄 (KT&G)
  { name: "에쎄 프라임", type: "regular", tar: "4.5mg", color: "#8a7040", review: "슬림 특유의 고소함, 순한 맛 찾는 분들의 정착지" },
  { name: "에쎄 스페셜 골드", type: "regular", tar: "3.5mg", color: "#9a7d0a", px: true, review: "프리미엄 슬림의 대표, 부드럽고 깊은 맛" },
  { name: "에쎄 스페셜 골드 1mg", type: "regular", tar: "1.0mg", color: "#c9a227", review: "스페셜골드를 순하게, 저타르 프리미엄" },
  { name: "에쎄 스페셜 골드 0.5", type: "regular", tar: "0.5mg", color: "#d4c37a", review: "스페셜골드 최저타르, 은은한 고급스러움" },
  { name: "에쎄 골든 리프", type: "regular", tar: "3.0mg", color: "#d4ac0d", review: "나전칠기 디자인의 최고급 라인, 선물용으로도 인기" },
  { name: "에쎄 골든 리프 1mg", type: "regular", tar: "1.0mg", color: "#f0d264", review: "골든리프의 저타르 버전, 가볍게 즐기는 프리미엄" },
  { name: "에쎄 수", type: "regular", tar: "1.0mg", color: "#7d8a5c", review: "대나무 참숯 필터의 깔끔함, 국민 슬림 담배" },
  { name: "에쎄 수 0.5", type: "regular", tar: "0.5mg", color: "#96a373", review: "초저타르인데도 맛이 비지 않다는 평" },
  { name: "에쎄 수 0.1", type: "regular", tar: "0.1mg", color: "#b5c19a", review: "국내 최저 수준 타르, 흡연량 줄이기용으로 인기" },
  { name: "에쎄 수 명작", type: "regular", tar: "1.0mg", color: "#5e6b47", review: "대나무 섬유 필터의 업그레이드판 수" },
  { name: "에쎄 원", type: "regular", tar: "1.0mg", color: "#b7950b", px: true, review: "에쎄 라인업의 표준, 꾸준한 판매량의 베스트셀러" },
  { name: "에쎄 센스 1", type: "regular", tar: "1.0mg", color: "#a2947a", review: "부담 없는 저타르 기본형 슬림" },
  { name: "에쎄 프레쏘", type: "regular", tar: "1.0mg", color: "#6e4a2f", review: "은은한 커피향 가향 슬림, 달달한 끝맛" },
  { name: "에쎄 엣지 1mg", type: "regular", tar: "1.0mg", color: "#707b7c", review: "숏사이즈 혁신 라인, 짧고 굵게 한 대" },
  { name: "에쎄 엣지 5mg", type: "regular", tar: "5.0mg", color: "#515a5a", review: "엣지의 진한 버전, 숏사이즈 헤비 유저용" },
  // 디스 (KT&G)
  { name: "디스 오리진", type: "regular", tar: "6.5mg", color: "#34495e", px: true, review: "IMF 시절부터 함께한 국민 고타르 담배" },
  { name: "디스 플러스", type: "regular", tar: "5.5mg", color: "#2c3e50", review: "디스의 라이트 버전, 오래 태우기 좋다는 평" },
  // 타임 (KT&G)
  { name: "타임리스 타임", type: "regular", tar: "5.0mg", color: "#d35400", review: "클래식 중타르, 구수한 맛의 장수 브랜드" },
  { name: "허밍 타임", type: "regular", tar: "5.5mg", color: "#e67e22", review: "타임의 파생 라인, 진득한 구수함" },
  { name: "타임 미드", type: "regular", tar: "3.5mg", color: "#eb984e", review: "가성비 좋고 거친 듯 구수한 맛이 매력이라는 후기" },
  // 기타 KT&G
  { name: "클라우드나인 5mg", type: "regular", tar: "5.0mg", color: "#7f8fa6", review: "부드러운 연기와 은은한 향의 슬림" },
  { name: "클라우드나인 1mg", type: "regular", tar: "1.0mg", color: "#aeb6bf", review: "클라우드나인의 저타르, 조용한 마니아층 보유" },
  { name: "한라산", type: "regular", tar: "6.0mg", color: "#1e8449", review: "제주 감성의 진한 맛, 아는 사람만 찾는 롱셀러 (지역 한정)" },
  { name: "라일락", type: "regular", tar: "5.0mg", color: "#9b59b6", review: "은은한 꽃향 감성, 일부 점포 한정 유통" },
  { name: "88", type: "regular", tar: "6.0mg", color: "#b9770e", review: "88올림픽과 함께한 추억의 맛, 제한적 유통 중" },
  // 보헴 (KT&G)
  { name: "보헴 시가 No.1", type: "regular", tar: "1.0mg", color: "#a5673f", review: "시가향을 가장 순하게, 부담 없는 저타르 시가" },
  { name: "보헴 시가 No.3", type: "regular", tar: "3.0mg", color: "#935116", review: "시가향을 적당히, 입문용으로 추천" },
  { name: "보헴 시가 No.6", type: "regular", tar: "6.0mg", color: "#5d3a1a", px: true, review: "진한 시가 풍미, 묵직한 단맛이 매력이라는 평" },
  { name: "보헴 쿠바나", type: "regular", tar: "6.0mg", color: "#784212", review: "쿠바 시가 컨셉의 진하고 달큰한 향" },
  { name: "보헴 미니", type: "regular", tar: "5.5mg", color: "#6e4a2f", review: "미니 사이즈 시가, 짧게 즐기는 달큰함" },
  // 레종 논캡슐
  { name: "레종 블랙", type: "regular", tar: "1.0mg", color: "#212f3c", review: "심플한 블랙 패키지의 저타르 슬림" },
  { name: "레종 블루", type: "regular", tar: "3.0mg", color: "#21618c", review: "레종의 기본기, 무난한 중저타르" },

  // ===== 맨솔 (논캡슐) =====
  { name: "에쎄 아이스", type: "menthol", tar: "1.0mg", color: "#27ae60", review: "구 에쎄 멘솔, 슬림+멘솔의 깔끔한 조합" },
  { name: "던힐 프로스트 1mg", type: "menthol", tar: "1.0mg", color: "#16a085", review: "던힐의 정통 멘솔, 깔끔한 청량감" },
  { name: "던힐 프로스트 0.1mg", type: "menthol", tar: "0.1mg", color: "#76d7c4", review: "극저타르 멘솔, 가장 가벼운 시원함" },
  { name: "보그 멘솔", type: "menthol", tar: "1.0mg", color: "#45b39d", review: "초슬림 멘솔, 가볍고 상쾌하게 즐기는 선택" },
  { name: "레종 아이스 프레쏘", type: "menthol", tar: "6.0mg", color: "#7fb3d5", review: "달콤한 커피향에 강한 멘솔, 아아 마시는 기분이라는 후기" },

  // ===== 캡슐 =====
  // 말보로
  { name: "말보로 아이스 블라스트", type: "capsule", tar: "6.0mg", color: "#1abc9c", px: true, review: "강력한 쿨링 캡슐, 목이 뻥 뚫린다는 평의 대표주자" },
  { name: "말보로 아이스 블라스트 원", type: "capsule", tar: "1.0mg", color: "#48c9b0", review: "아이스블라스트를 순하게, 저타르 쿨링 캡슐" },
  { name: "말보로 비스타", type: "capsule", tar: "6.0mg", color: "#e74c8c", review: "신세대 말보로 캡슐 라인, 화려한 맛 변화" },
  { name: "말보로 비스타 화이트업", type: "capsule", tar: "1.0mg", color: "#f5b7ce", review: "2025년 신제품, 냄새저감+캡슐의 조합" },
  { name: "말보로 화이트 업", type: "capsule", tar: "1.0mg", color: "#d7dbdd", review: "말보로 최초 화이트+캡슐 조합, 2025년 화제작" },
  { name: "말보로 딥 블렌드 23", type: "capsule", tar: "3.0mg", color: "#873600", review: "딥 블렌드의 캡슐 버전, 깊은 맛에 반전 한 방" },
  // 팔리아멘트
  { name: "팔리아멘트 하이브리드 5", type: "capsule", tar: "5.0mg", color: "#1b4f72", review: "공간필터에 멘솔 캡슐까지, 깔끔+청량 조합" },
  { name: "팔리아멘트 하이브리드 1.5", type: "capsule", tar: "1.5mg", color: "#2e86c1", review: "하이브리드의 저타르 버전, 가벼운 청량감" },
  // 던힐 글로벌 에디션 (BAT)
  { name: "글로벌 에디션 바이 던힐 뉴욕", type: "capsule", tar: "3.0mg", color: "#7d3c98", review: "프레시존+더블캡슐, 세계 최초 한국 출시 신작" },
  { name: "글로벌 에디션 바이 던힐 파리", type: "capsule", tar: "3.0mg", color: "#af7ac5", review: "파리 감성의 캡슐 신작, 부드러운 가향" },
  { name: "글로벌 에디션 바이 던힐 런던", type: "capsule", tar: "1.5mg", color: "#bb8fce", review: "슈퍼슬림+프레시존, 런던 컨셉의 산뜻함" },
  // 켄트
  { name: "켄트 듀얼", type: "capsule", tar: "3.0mg", color: "#2874a6", review: "더블 캡슐로 두 번 변신하는 재미" },
  // 로스만스
  { name: "로스만스 클릭", type: "capsule", tar: "3.0mg", color: "#154360", review: "가성비 캡슐 멘솔, 클릭 한 번의 청량감" },
  // 에쎄 체인지 (KT&G)
  { name: "에쎄 체인지 4mg", type: "capsule", tar: "4.0mg", color: "#8e44ad", px: true, review: "멘솔 캡슐의 정석, 진한 바디와 청량감" },
  { name: "에쎄 체인지 1mg", type: "capsule", tar: "1.0mg", color: "#a569bd", px: true, review: "일반↔멘솔 전환의 재미, 캡슐 슬림 스테디셀러" },
  { name: "에쎄 체인지 W", type: "capsule", tar: "1.0mg", color: "#bb8fce", review: "와인소다향 캡슐+공간필터, 달콤한 변화구" },
  { name: "에쎄 체인지 업", type: "capsule", tar: "1.0mg", color: "#d2b4de", review: "오렌지+청포도향 캡슐, 상큼함이 확 퍼진다는 평" },
  { name: "에쎄 체인지 폴라", type: "capsule", tar: "1.0mg", color: "#85c1e9", review: "2024년 신작 멘솔 캡슐, 극지방급 쿨링" },
  // 레종 (KT&G)
  { name: "레종 프렌치 블랙", type: "capsule", tar: "3.0mg", color: "#2c3e50", px: true, review: "베리+멘솔 캡슐의 원조 강자, 달콤한 끝맛이 인기" },
  { name: "레종 프렌치 썸", type: "capsule", tar: "3.0mg", color: "#af601a", review: "가향 멘솔 캡슐, 달달한 향의 스테디셀러" },
  { name: "레종 프렌치 아이스 블랑", type: "capsule", tar: "2.0mg", color: "#aed6f1", review: "화이트 컨셉의 시원한 멘솔 캡슐" },
  { name: "레종 프렌치 요고", type: "capsule", tar: "1.0mg", color: "#f5b7b1", review: "요거트향 저타르 캡슐, 독특한 달콤함" },
  { name: "레종 휘바", type: "capsule", tar: "3.0mg", color: "#3498db", review: "헤이즐넛향의 고소함, 터뜨리면 더 달콤하다는 평" },
  { name: "레종 리저브", type: "capsule", tar: "3.0mg", color: "#1a5276", review: "레종의 프리미엄 라인, 고급스러운 가향" },
  { name: "레종 이오니아", type: "capsule", tar: "3.0mg", color: "#48c9b0", review: "지중해 테마의 트로피컬+시트러스 캡슐" },
  // 더원 (KT&G) — 킹사이즈 캡슐
  { name: "더원 블루", type: "capsule", tar: "1.0mg", color: "#3498db", px: true, review: "킹사이즈 캡슐 멘솔의 기본, 부담 없는 청량감" },
  { name: "더원 오렌지", type: "capsule", tar: "0.5mg", color: "#e67e22", review: "초저타르 캡슐, 가볍게 터뜨리는 상큼함" },
  { name: "더원 화이트", type: "capsule", tar: "0.1mg", color: "#d7dbdd", review: "극저타르 캡슐, 담백하고 깔끔한 마무리" },
  // 보헴 (KT&G)
  { name: "보헴 쿠바나 더블", type: "capsule", tar: "6.0mg", color: "#6e2c00", review: "시가향+더블 캡슐, 묵직한 달콤함의 반전" },
  { name: "보헴 쿠바나 맥스", type: "capsule", tar: "2.0mg", color: "#a04000", review: "2026년 신제품, 쿨링 블록 기술 적용" },
  // 아프리카 (KT&G)
  { name: "아프리카 룰라", type: "capsule", tar: "3.0mg", color: "#c0392b", review: "아프리카 시리즈의 인기 캡슐, 리듬감 있는 가향" },
  { name: "아프리카 몰라", type: "capsule", tar: "1.0mg", color: "#f39c12", review: "순한 저타르 캡슐, 이름만큼 유쾌한 맛" },
  { name: "아프리카 쿨라", type: "capsule", tar: "3.0mg", color: "#16a085", review: "쿨링 특화 캡슐, 시원한 아프리카" },
  // 메비우스 LBS (JTI) — 캡슐형
  { name: "메비우스 LBS 옐로우 3", type: "capsule", tar: "3.0mg", color: "#f4d03f", px: true, review: "레몬향 캡슐 슈퍼슬림, 상큼함의 대명사" },
  { name: "메비우스 LBS 퍼플 6", type: "capsule", tar: "6.0mg", color: "#7d3c98", review: "포도향 캡슐, 진한 바디에 달콤한 반전" },
  { name: "메비우스 LBS 믹스그린 1", type: "capsule", tar: "1.0mg", color: "#58d68d", review: "청사과향 캡슐 슈퍼슬림, 산뜻한 저타르" },
  { name: "메비우스 LBS 트로피컬 믹스 3", type: "capsule", tar: "3.0mg", color: "#f5b041", px: true, review: "트로피컬 과일향 캡슐, 이국적인 달콤함" },
  { name: "메비우스 LBS 아이스 바나 2", type: "capsule", tar: "2.0mg", color: "#f7dc6f", review: "바나나향+쿨링, 메비우스 원의 후계자" },
  { name: "메비우스 LBS 아이스 스톰 5", type: "capsule", tar: "5.0mg", color: "#5dade2", review: "강력 멘솔+쿨링 캡슐, 폭풍 같은 청량감" },
  { name: "메비우스 LBS 아이스 프로스트", type: "capsule", tar: "1.0mg", color: "#aed6f1", review: "소다민트향+슈가필터, 2025년 9월 신작" },
  { name: "메비우스 LBS 아이스 트위스트 1", type: "capsule", tar: "1.0mg", color: "#76d7c4", review: "멘솔+트위스트향 저타르 캡슐" },
  { name: "메비우스 LBS 아이스 트위스트 4", type: "capsule", tar: "4.0mg", color: "#17a589", review: "트위스트의 중타르 버전, 진한 쿨링" },
  { name: "메비우스 LBS 나이스티", type: "capsule", tar: "3.0mg", color: "#f8c471", review: "2026년 3월 최신작, 티(tea) 컨셉 가향" },

  // ===== 아이코스 스틱 (테리아 - 일루마 전용) =====
  { name: "테리아 앰버", type: "iqos", tar: "연초 스틱", color: "#ca8a2a", px: true, review: "진하고 구수한 담배 본연의 맛, 테리아 기본형 최고 인기작" },
  { name: "테리아 실버", type: "iqos", tar: "연초 스틱", color: "#bdc3c7", review: "부드럽고 연한 연초맛, 군더더기 없는 깔끔함" },
  { name: "테리아 브론즈", type: "iqos", tar: "연초 스틱", color: "#875f2c", review: "홍차·초콜릿·시가 풍미의 깊은 연초맛" },
  { name: "테리아 러셋", type: "iqos", tar: "연초 스틱", color: "#a0522d", review: "부드러운 캐러멜 힌트의 연초 스틱" },
  { name: "테리아 딥 오크", type: "iqos", tar: "연초 스틱", color: "#5d4037", review: "오크 숙성 느낌의 깊은 연초, 2025년 신작" },
  { name: "테리아 리치 에스프레소", type: "iqos", tar: "커피 스틱", color: "#4e342e", review: "에스프레소+초콜릿 풍미, 커피파 저격 신작" },
  { name: "테리아 그린", type: "iqos", tar: "멘솔 스틱", color: "#27ae60", px: true, review: "전통 스탠다드 멘솔, 답답할 때 한 방이라는 평" },
  { name: "테리아 블루", type: "iqos", tar: "강멘솔 스틱", color: "#2874a6", review: "강한 쿨링+박하향, 시원함의 정석" },
  { name: "테리아 그린 징", type: "iqos", tar: "멘솔 스틱", color: "#1e8449", review: "상큼한 시트러스+멘솔의 이중주" },
  { name: "테리아 울트라 스피어민트", type: "iqos", tar: "강멘솔 스틱", color: "#48c9b0", review: "초강력 스피어민트 쿨링, 2025년 신작" },
  { name: "테리아 퍼플 웨이브", type: "iqos", tar: "베리멘솔 스틱", color: "#8e44ad", px: true, review: "포도·베리향+멘솔, 테리아 가향 스테디셀러" },
  { name: "테리아 블랙 퍼플", type: "iqos", tar: "강멘솔 스틱", color: "#4a235a", review: "퍼플웨이브 강화판, 진한 베리+강멘솔" },
  { name: "테리아 블랙 옐로우", type: "iqos", tar: "강멘솔 스틱", color: "#b7950b", review: "쿨링+시트러스+스파이시의 강렬한 조합" },
  { name: "테리아 트로피컬 스플래시", type: "iqos", tar: "과일멘솔 스틱", color: "#f39c12", review: "망고·파인애플 열대과일+멘솔, 2025년 신작" },
  { name: "테리아 오아시스 펄", type: "iqos", tar: "캡슐 스틱", color: "#45b39d", review: "터뜨리면 이국적 과일향, 캡슐 스틱의 재미" },
  { name: "테리아 썬 펄", type: "iqos", tar: "캡슐 스틱", color: "#f5b041", review: "망고 캡슐의 열대 달콤함" },
  { name: "테리아 아버 펄", type: "iqos", tar: "캡슐 스틱", color: "#82e0aa", review: "청사과 캡슐, 산뜻함이 매력" },
  { name: "테리아 스탈링 펄", type: "iqos", tar: "캡슐 스틱", color: "#f1948a", review: "복숭아 캡슐의 달콤한 향" },
  { name: "테리아 유젠", type: "iqos", tar: "플로럴 스틱", color: "#d2b4de", review: "플로럴+시트러스+부드러운 멘솔의 독특한 조합" },
  // 히츠 (구형 아이코스 전용)
  { name: "히츠 앰버", type: "iqos", tar: "연초 스틱 (구형)", color: "#b9770e", review: "구형 아이코스용 기본 연초맛" },
  { name: "히츠 실버", type: "iqos", tar: "연초 스틱 (구형)", color: "#aab7b8", review: "구형 아이코스용 부드러운 연초" },
  { name: "히츠 딥 브론즈", type: "iqos", tar: "연초 스틱 (구형)", color: "#6e4a2f", review: "구형 아이코스용 진한 연초맛" },
  { name: "히츠 그린", type: "iqos", tar: "멘솔 스틱 (구형)", color: "#229954", review: "구형 아이코스용 스탠다드 멘솔" },
  { name: "히츠 퍼플", type: "iqos", tar: "베리멘솔 스틱 (구형)", color: "#6c3483", review: "구형 아이코스용 베리+멘솔" },

  // ===== 릴 핏 스틱 (릴 솔리드 전용) =====
  { name: "핏 레귤러", type: "lilfit", tar: "연초 스틱", color: "#7f8c8d", px: true, review: "담백한 연초맛의 기본 스틱, 릴 유저의 표준" },
  { name: "핏 골든파이브", type: "lilfit", tar: "연초 스틱", color: "#d4ac0d", review: "클래식 연초, 캡슐 없이 깔끔한 본연의 맛" },
  { name: "핏 프라임", type: "lilfit", tar: "연초 스틱", color: "#935116", review: "진한 연초향, 구 프레쉬번 계승 스틱" },
  { name: "핏 아이시스트", type: "lilfit", tar: "강멘솔 스틱", color: "#5dade2", review: "극강 멘솔 특화, 릴 최강 쿨링이라는 평" },
  { name: "핏 쿨샷", type: "lilfit", tar: "멘솔 스틱", color: "#48c9b0", review: "블루하와이 계열의 청량 멘솔" },
  { name: "핏 스파키", type: "lilfit", tar: "과일멘솔 스틱", color: "#f5b041", review: "달콤한 과일·껌향 멘솔, 개성파 인기 스틱" },
  { name: "핏 체인지", type: "lilfit", tar: "캡슐 스틱", color: "#8e44ad", px: true, review: "정통 박하 멘솔 캡슐, 릴 캡슐의 기본" },
  { name: "핏 체인지 업", type: "lilfit", tar: "캡슐 스틱", color: "#af7ac5", px: true, review: "풍선껌·와일드베리 캡슐, 달콤한 변신" },
  { name: "핏 체인지 큐", type: "lilfit", tar: "캡슐 스틱", color: "#f7dc6f", review: "레몬라임 캡슐, 새콤달콤+멘솔" },
  { name: "핏 체인지 유니크", type: "lilfit", tar: "캡슐 스틱", color: "#ec7063", review: "2024년 10월 신작, 독특한 가향 캡슐" },

  // ===== 릴 하이브리드 스틱 (믹스) =====
  { name: "믹스 클래시", type: "lilhybrid", tar: "연초 스틱", color: "#616a6b", review: "캡슐 없는 순한 연초맛, 하이브리드의 기본" },
  { name: "믹스 아이스", type: "lilhybrid", tar: "멘솔 스틱", color: "#85c1e9", px: true, review: "약한 박하+청사과 힌트, 은은한 쿨링" },
  { name: "믹스 아이스더블", type: "lilhybrid", tar: "캡슐 스틱", color: "#5dade2", review: "강화 멘솔 캡슐, 두 배로 시원하다는 평" },
  { name: "믹스 아이스뱅", type: "lilhybrid", tar: "강멘솔 스틱", color: "#2e86c1", review: "타격감 있는 강멘솔, 치약급 쿨링이라는 후기" },
  { name: "믹스 믹스", type: "lilhybrid", tar: "캡슐 스틱", color: "#9b59b6", px: true, review: "밀크티+딸기 캡슐, 슈가필터의 달콤함" },
  { name: "믹스 콤보", type: "lilhybrid", tar: "캡슐 스틱", color: "#f8c471", px: true, review: "우유맛+레몬 캡슐의 이색 조합" },
  { name: "믹스 업투", type: "lilhybrid", tar: "캡슐 스틱", color: "#f1948a", review: "딸기→리치로 변신하는 캡슐, 달콤파 추천" },
  { name: "믹스 프렌치", type: "lilhybrid", tar: "캡슐 스틱", color: "#7d3c98", review: "허니뱅쇼향 와인+멘솔 캡슐, 묵직한 가향" },
  { name: "믹스 블루썸", type: "lilhybrid", tar: "캡슐 스틱", color: "#a569bd", review: "아카시아 꽃향+멘솔, 향긋한 개성파" },
  { name: "믹스 브린", type: "lilhybrid", tar: "캡슐 스틱", color: "#82e0aa", review: "파인애플→청사과 캡슐, 입술에 남는 단맛" },
  { name: "믹스 오라썸", type: "lilhybrid", tar: "캡슐 스틱", color: "#eb984e", review: "자몽+복숭아+멘솔, 2024년 신작 캡슐" },
  { name: "믹스 보나썸", type: "lilhybrid", tar: "캡슐 스틱", color: "#f7dc6f", review: "바나나향+슈가필터, 디저트 같은 스틱" },
];
