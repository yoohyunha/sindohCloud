import type { CompanyInfo, NavItem } from "../types";

export const company: CompanyInfo = {
  name: "신도클라우드",
  tagline: "사무 환경에 맞는 복합기와 OA 솔루션을 깔끔하게 제안합니다.",
  summary:
    "사무기기 제품 안내, 가격 상담, 네이버 스토어 연동까지 한 번에 안내하는 회사 소개 사이트입니다.",
  description:
    "신도클라우드는 사무실 운영에 필요한 복합기, 프린터, 소모품을 고객 환경에 맞춰 제안하는 OA 전문 파트너입니다. 빠르게 비교할 수 있는 제품 정보와 명확한 가격 안내, 간편한 구매 동선에 중점을 두고 사이트를 구성했습니다.",
  phone: "02-827-0050",
  email: "oa8270050@naver.com",
  address: "서울 금천구 디지털로10길 78 (가산동, 가산테라타워) 516호",
  hours: "평일 09:00~17:30",
  naverMapUrl:
    "https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EA%B8%88%EC%B2%9C%EA%B5%AC%20%EB%94%94%EC%A7%80%ED%84%B8%EB%A1%9C10%EA%B8%B8%2078",
  businessInfo: "사업자등록번호 108-09-68554 / 대표 이정수",
  heroStats: [
    { label: "제품 카테고리", value: "4+" },
    { label: "대표 제안 상품", value: "신도 중심 구성" },
    { label: "상담 응답", value: "영업일 기준 빠른 안내" }
  ],
  highlights: [
    "회사 소개와 제품 비교를 한 화면에서 바로 정리",
    "모바일에서도 가격과 제품 특징을 빠르게 확인",
    "제품별 네이버 스토어 링크로 바로 이동"
  ],
  categories: [
    {
      name: "렌탈임대",
      description: "초기 부담을 줄이고 관리까지 포함하는 렌탈 서비스"
    },
    {
      name: "복합기구매",
      description: "사무실 규모에 맞는 흑백·컬러 복합기 제안"
    },
    {
      name: "프린터구매",
      description: "소형 사무실과 개인 사업자에 맞는 프린터 구성"
    },
    {
      name: "소모품",
      description: "토너, 용지, 관리 부품 등 운영에 필요한 필수 품목"
    }
  ]
};

export const navigation: NavItem[] = [
  { label: "홈", href: "/" },
  { label: "회사소개", href: "/company" },
  { label: "제품목록", href: "/products" },
  { label: "임대·유지보수", href: "/service" },
  { label: "문의안내", href: "/contact" }
];

export const supportInfo = {
  fax: "02-827-0054",
  mobile: "010-6261-2118",
  holidayNotice: "토/일, 공휴일은 휴무",
  bankName: "국민은행",
  bankAccount: "485501-01-077492",
  accountHolder: "이정수(신도클라우드)",
  footerLinks: [
    { label: "온라인문의", href: "/contact" },
    { label: "공지사항", href: "/" },
    { label: "개인정보처리방침", href: "/" }
  ]
};

export const sidebarItems = [
  { key: "rental", label: "렌탈임대", href: "/products/rental", section: "Rental" },
  {
    key: "multifunction",
    label: "복합기구매",
    href: "/products/multifunction",
    section: "Multifunction printer"
  },
  {
    key: "printer",
    label: "프린터구매",
    href: "/products/printer",
    section: "Printer"
  },
  {
    key: "supplies",
    label: "소모품",
    href: "/products/supplies",
    section: "Consumables"
  }
];
