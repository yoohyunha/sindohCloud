import type { Product } from "../types";

export const products: Product[] = [
  {
    id: "sindoh-d470", name: "신도 A3 컬러복합기 D470", category: "A3 컬러 복합기", listingGroup: "rental", price: "렌탈·구매 상담",
    spec: "컬러/흑백 25 ppm · 스캔 80 ipm · 1,200 dpi · 10.1″ 컬러 패널",
    description: "신도리코가 직접 추천하는 시그니처 복합기입니다. 강력한 성능과 다양한 편의 기능으로 스마트한 오피스 환경을 구성할 수 있습니다.",
    image: "/images/D470-official.png",
    gallery: [
      "/images/d470-gallery/d470-1.png",
      "/images/d470-gallery/d470-2.png",
      "/images/d470-gallery/d470-3.png"
    ],
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.sindoh.com/support/download/d470",
    features: ["쉽고 안전한 원통형 토너 교체", "충격과 소음을 줄인 ADF 경첩", "최대 90도 조절 10.1인치 컬러 LCD", "저온 정착 기술로 소비전력 절감"],
    details: [
      { label: "출력 속도", value: "컬러/흑백 25 ppm" }, { label: "스캔 속도", value: "컬러/흑백 80 ipm (300 dpi)" },
      { label: "출력 해상도", value: "1,200 dpi" }, { label: "메모리", value: "8 GB" },
      { label: "디스플레이", value: "10.1인치 컬러 LCD" }, { label: "양면 인쇄", value: "기본 지원" }
    ], featured: true, visible: true
  },
  {
    id: "sindoh-d450", name: "신도 A3 컬러복합기 D450", category: "A3 컬러 복합기", listingGroup: "multifunction", price: "렌탈·구매 상담",
    spec: "컬러/흑백 25 ppm · 스캔 80 ipm · 8GB · 256GB SSD",
    description: "직관적인 대형 화면과 안정적인 문서 급지 구조를 갖춘 검증된 컬러 복합기입니다. 다양한 IT 서비스를 편리하게 사용할 수 있습니다.",
    image: "/images/d450-official/d450-1.png",
    gallery: [
      "/images/d450-official/d450-1.png",
      "/images/d450-official/d450-panel-angle.jpg",
      "/images/d450-official/d450-panel-screen.jpg"
    ],
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.sindoh.com/support/download/d450",
    features: ["기기 상태를 쉽게 알리는 LED 표시등", "스마트폰처럼 편리한 사용자 화면", "최대 90도 조절 가능한 10.1인치 LCD", "충격과 소음을 줄인 ADF 경첩"],
    details: [
      { label: "출력 속도", value: "컬러/흑백 25 ppm" }, { label: "스캔 속도", value: "컬러/흑백 80 ipm (300 dpi)" },
      { label: "출력 해상도", value: "1,200 dpi" }, { label: "메모리 / 저장장치", value: "8 GB / 256 GB SSD" },
      { label: "급지량", value: "기본 1,000매 + 다용도 150매" }, { label: "양면 인쇄", value: "기본 지원" }
    ], featured: true, visible: true
  },
  {
    id: "sindoh-d320-rental", name: "신도 컬러복합기 D320 3년렌탈", category: "A3 컬러 복합기", listingGroup: "rental", price: "월 80,000원",
    spec: "컬러/흑백 22 ppm · 스캔 55 ipm · 6GB · 256GB SSD",
    description: "출력·복사·스캔·팩스·USB 기능을 하나로 구성한 실속형 모델입니다. 9인치 컬러 화면과 넉넉한 기본 급지량을 갖췄습니다.",
    image: "/images/D320-official.png",
    gallery: [
      "/images/d320-gallery/d320-1.png",
      "/images/d320-gallery/d320-2.png",
      "/images/d320-gallery/d320-3.png"
    ],
    detailImages: [
      "/images/d320-smartstore/d320-front.jpg",
      "/images/d320-smartstore/d320-angle.jpg"
    ],
    detailNotices: [
      "※ 문의 전화 필수입니다 ※",
      "※ 옵션 조정 가능합니다 문의주세요 ※"
    ],
    storeUrl: "https://smartstore.naver.com/royaloa/products/6938957478",
    officialUrl: "https://www.sindoh.com/support/download/d320",
    features: ["기본 양면 인쇄와 1,100매 급지", "9인치 컬러 LCD", "저온 정착 토너로 전력 소비 절감", "스캔 문서의 Office 파일 변환 지원(옵션)"],
    details: [
      { label: "출력 속도", value: "컬러/흑백 22 ppm" }, { label: "스캔 속도", value: "컬러/흑백 55 ipm (300 dpi)" },
      { label: "해상도", value: "최대 1,800 × 600 dpi" }, { label: "메모리 / 저장장치", value: "6 GB / 256 GB SSD" },
      { label: "급지량", value: "기본 1,000매 + 다용도 100매" }, { label: "디스플레이", value: "9인치 컬러 LCD" }
    ], featured: true, visible: true
  }
];

export const visibleProducts = products.filter((product) => product.visible);
export const featuredProducts = visibleProducts.filter((product) => product.featured);
