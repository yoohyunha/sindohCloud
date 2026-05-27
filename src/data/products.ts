import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "sindoh-d320-rental",
    name: "신도 컬러복합기 D320 3년렌탈",
    category: "복합기",
    listingGroup: "rental",
    price: "80,000원",
    spec: "임대상품 / 3년렌탈 / 정품 / AS보증 / 무료배송",
    description: "신도클라우드에서 안내하는 신도 D320 컬러복합기 렌탈 상품입니다.",
    image: "/images/D320-1.png",
    gallery: ["/images/D320-1.png", "/images/D320-2.png"],
    storeUrl: "https://smartstore.naver.com/royaloa/products/6938957478",
    featured: true,
    visible: true
  },
  {
    id: "sindoh-n501-rental",
    name: "신도 A3흑백복합기 임대상품 N501",
    category: "복합기",
    listingGroup: "rental",
    price: "70,000원",
    spec: "정품 / 무료배송 / 3년약정 / AS가능",
    description: "신도 N501 흑백복합기 임대상품입니다. 사무실용 기본 장비로 안정적인 운용을 고려한 구성입니다.",
    image: "/images/N501-1.png",
    storeUrl: "https://smartstore.naver.com/royaloa/products/4721085725",
    visible: true
  },
  {
    id: "sindoh-n501-purchase",
    name: "신도 A3흑백복합기 N501",
    category: "복합기",
    listingGroup: "multifunction",
    price: "24,000,000원",
    spec: "정품 / AS보증 / 무료배송 / 믿고쓰는로얄오에이",
    description: "구매형으로 안내하는 신도 N501 상품입니다. 유지관리와 AS 보증을 함께 강조하는 기본형 복합기 상품입니다.",
    image: "/images/N501-2.png",
    storeUrl: "https://smartstore.naver.com/royaloa/products/4721049965",
    featured: true,
    visible: true
  },
  {
    id: "konica-c025dni",
    name: "코니카미놀타 컬러레이저복합기 Bizhub C025DNI",
    category: "복합기",
    listingGroup: "multifunction",
    price: "3,400,000원",
    spec: "A3 / 분당 25매 / 정품 / AS가능 / 임대문의",
    description: "코니카미놀타 컬러레이저복합기/복사기 A3 분당 25매 Bizhub C025DNI 상품입니다.",
    image: "/images/C025DNI.png",
    storeUrl: "https://smartstore.naver.com/royaloa/products/4712209409",
    featured: true,
    visible: true
  },
  {
    id: "sindoh-printer-01",
    name: "컬러 프린터 Sprint P280",
    category: "프린터",
    listingGroup: "printer",
    price: "520,000원",
    spec: "분당 28매 / 유선·무선 출력 / 모바일 인쇄",
    description: "작은 공간에서도 안정적으로 운용할 수 있는 컬러 프린터입니다.",
    image: "/images/product-sprint-p280.svg",
    storeUrl: "https://smartstore.naver.com/royaloa",
    featured: true,
    visible: true
  },
  {
    id: "sindoh-printer-02",
    name: "흑백 프린터 Office P220",
    category: "프린터",
    listingGroup: "printer",
    price: "310,000원",
    spec: "분당 22매 / 자동 절전 / 컴팩트 설계",
    description: "문서 출력이 많은 환경에 맞는 기본형 흑백 프린터입니다.",
    image: "/images/product-office-p220.svg",
    storeUrl: "https://smartstore.naver.com/royaloa",
    visible: true
  },
  {
    id: "sindoh-supplies-01",
    name: "정품 토너 패키지 Care Kit",
    category: "소모품",
    listingGroup: "supplies",
    price: "89,000원",
    spec: "정품 토너 / 유지관리 키트 / 빠른 교체",
    description: "기기 수명을 고려한 정품 소모품 패키지입니다.",
    image: "/images/product-care-kit.svg",
    storeUrl: "https://smartstore.naver.com/royaloa",
    visible: true
  },
  {
    id: "sindoh-scanner-01",
    name: "문서 스캐너 Scan X500",
    category: "스캐너",
    listingGroup: "scanner",
    price: "740,000원",
    spec: "양면 고속 스캔 / OCR 지원 / USB·클라우드 전송",
    description: "계약서와 증빙서류 정리에 적합한 고속 문서 스캐너입니다.",
    image: "/images/product-scan-x500.svg",
    storeUrl: "https://smartstore.naver.com/royaloa",
    featured: true,
    visible: true
  }
];

export const visibleProducts = products.filter((product) => product.visible);
export const featuredProducts = visibleProducts.filter((product) => product.featured);
