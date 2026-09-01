import type { CompanyInfo, NavItem } from "../types";

export const company: CompanyInfo = {
  name: "신도클라우드",
  tagline: "사무 환경에 꼭 맞는 복합기와 OA 솔루션을 제안합니다.",
  summary: "신도리코 복합기 렌탈·판매와 유지보수를 한곳에서 안내하는 OA 전문 파트너입니다.",
  description: "신도클라우드는 사업장 규모와 출력 환경을 살펴 알맞은 복합기를 제안하고, 설치부터 정기 점검과 소모품 관리까지 함께합니다.",
  phone: "02-827-0050",
  email: "sdljs0102@naver.com",
  address: "서울 금천구 디지털로10길 78 (가산동, 가산테라타워) 516호",
  hours: "평일 09:00~17:30",
  naverMapUrl: "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B8%88%EC%B2%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C10%EA%B8%B8%2078",
  businessInfo: "사업자등록번호 108-09-68554 / 대표 이정수",
  heroStats: [
    { label: "주력 제품", value: "D450 · D470 · D320" },
    { label: "서비스", value: "렌탈 · 판매 · 유지보수" },
    { label: "상담", value: "영업일 기준 빠른 안내" }
  ],
  highlights: ["사용량과 사무실 규모에 맞춘 제품 제안", "설치·소모품·정기 점검까지 한 번에 관리", "제품별 상세 정보와 스마트스토어 연결"],
  categories: [
    { name: "복합기 렌탈", description: "초기 부담은 낮추고 관리까지 포함하는 맞춤 렌탈" },
    { name: "복합기 판매", description: "컬러·흑백 A3 복합기 구매와 설치 상담" },
    { name: "유지보수", description: "정기 점검, 소모품 관리, 신속한 장애 대응" },
    { name: "OA 컨설팅", description: "출력량과 업무 흐름에 맞는 효율적인 기기 구성" }
  ]
};

export const navigation: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "회사소개", href: "/company" },
  { label: "제품안내", href: "/products" },
  { label: "렌탈·유지보수", href: "/service" },
  { label: "문의안내", href: "/contact" }
];

export const supportInfo = {
  fax: "02-827-0524",
  mobile: "010-6261-2118",
  holidayNotice: "토·일요일 및 공휴일 휴무",
  bankName: "국민은행",
  bankAccount: "485501-01-077492",
  accountHolder: "이정수(신도클라우드)"
};

export const sidebarItems = [
  { key: "rental", label: "복합기 렌탈", href: "/products/rental", section: "Rental" },
  { key: "multifunction", label: "복합기 구매", href: "/products/multifunction", section: "Multifunction" },
  { key: "printer", label: "프린터 구매", href: "/products/printer", section: "Printer" },
  { key: "shredder", label: "문서세단기", href: "/products/shredder", section: "Shredder" },
  { key: "supplies", label: "소모품", href: "/products/supplies", section: "Consumables" },
  { key: "kyocera", label: "교세라", href: "/products/kyocera-color-mfp", section: "Kyocera" }
];
