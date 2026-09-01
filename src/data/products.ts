import type { Product } from "../types";

const taskalfaCatalogImages = [
  "/catalogs/images/taskalfa-catalog-2-1.jpg",
  "/catalogs/images/taskalfa-catalog-2-2.jpg",
  "/catalogs/images/taskalfa-catalog-2-3.jpg"
];
const mzCatalogImages = Array.from({ length: 6 }, (_, index) => `/catalogs/images/mz-catalog-${index + 1}.jpg`);
const ma3500cifxCatalogImages = Array.from({ length: 8 }, (_, index) => `/catalogs/images/ma3500cifx-catalog-${index + 1}.jpg`);
const pa3500cxCatalogImages = Array.from({ length: 6 }, (_, index) => `/catalogs/images/pa3500cx-catalog-${index + 1}.jpg`);

export const products: Product[] = [
  {
    id: "sindoh-d470", name: "신도 A3 컬러복합기 D470", category: "A3 컬러 복합기", listingGroup: "rental", price: "렌탈·구매 상담",
    spec: "컬러/흑백 25 ppm · 스캔 80 ipm · 1,200 dpi · 10.1″ 컬러 패널",
    description: "시그니처 복합기, 강력한 성능과 다양한 편의 기능으로 스마트한 오피스 환경을 구성할 수 있습니다.",
    image: "/images/D470-official.png",
    gallery: [
      "/images/d470-gallery/d470-1.png",
      "/images/d470-gallery/d470-2.png",
      "/images/d470-gallery/d470-3.png"
    ],
    detailImages: [
      "/images/d470-catalog/d470-catalog-1.jpg",
      "/images/d470-catalog/d470-catalog-2.jpg",
      "/images/d470-catalog/d470-catalog-3.jpg",
      "/images/d470-catalog/d470-catalog-4.jpg",
      "/images/d470-catalog/d470-catalog-5.jpg",
      "/images/d470-catalog/d470-catalog-6.jpg",
      "/images/d470-catalog/d470-catalog-7.jpg",
      "/images/d470-catalog/d470-catalog-8.jpg"
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
    detailImages: [
      "/images/d450-catalog/d450-catalog-1.jpg",
      "/images/d450-catalog/d450-catalog-2.jpg",
      "/images/d450-catalog/d450-catalog-3.jpg",
      "/images/d450-catalog/d450-catalog-4.jpg",
      "/images/d450-catalog/d450-catalog-5.jpg",
      "/images/d450-catalog/d450-catalog-6.jpg",
      "/images/d450-catalog/d450-catalog-7.jpg",
      "/images/d450-catalog/d450-catalog-8.jpg"
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
    id: "sindoh-d320-rental", name: "신도 A3 컬러복합기 D320", category: "A3 컬러 복합기", listingGroup: "rental", price: "렌탈·구매 상담",
    spec: "컬러/흑백 22 ppm · 스캔 55 ipm · 6GB · 256GB SSD",
    description: "출력·복사·스캔·팩스·USB 기능을 하나로 구성한 실속형 모델입니다. 9인치 컬러 화면과 넉넉한 기본 급지량을 갖췄습니다.",
    image: "/images/D320-official.png",
    gallery: [
      "/images/d320-gallery/d320-1.png",
      "/images/d320-gallery/d320-2.png",
      "/images/d320-gallery/d320-3.png"
    ],
    detailImages: [
      "/images/d320-catalog/d320-catalog-1.jpg",
      "/images/d320-catalog/d320-catalog-2.jpg",
      "/images/d320-catalog/d320-catalog-3.jpg",
      "/images/d320-catalog/d320-catalog-4.jpg",
      "/images/d320-catalog/d320-catalog-5.jpg",
      "/images/d320-catalog/d320-catalog-6.jpg"
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
  },
  {
    id: "s2-270p1", name: "S2 문서세단기 270P1", category: "중형 문서세단기", listingGroup: "shredder", price: "구매 상담",
    spec: "최대 25~26매 · 꽃가루형 3 × 30 mm · 파지함 70 L",
    description: "대량 문서와 CD·카드를 함께 세단할 수 있는 중형 문서세단기입니다. 자동 절전과 터치 스크린을 지원합니다.",
    image: "/images/shredders/s2-270p1.jpg",
    gallery: ["/images/shredders/s2-270p1.jpg"],
    detailImages: ["/images/shredders/s2-270p1-detail.jpg"], detailImageCropHeight: 3075,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "http://s2company.co.kr/default/product/product_1.php?com_board_basic=read_form&com_board_idx=70&tit=03&sub=01&com_board_id=7&com_board_category_code=c2",
    features: ["최대 25~26매 동시 세단", "CD·카드 세단 지원", "자동 절전 및 자동 역회전", "터치 스크린 조작부"],
    details: [
      { label: "최대 투입폭", value: "270 mm" }, { label: "동시 세단 매수", value: "25~26매 (A4 75g 기준)" },
      { label: "세단 형태", value: "꽃가루형" }, { label: "세단 크기", value: "3 × 30 mm" },
      { label: "파지함 용량", value: "70 L" }, { label: "제품 크기 / 무게", value: "490 × 410 × 780 mm / 50 kg" }
    ], visible: true
  },
  {
    id: "s2-230pn", name: "S2 문서세단기 230PN", category: "소형 문서세단기", listingGroup: "shredder", price: "구매 상담",
    spec: "최대 10~11매 · 꽃가루형 2.5 × 10 mm · 파지함 35 L",
    description: "문서 투입을 자동 감지하고 과전류·과부하를 보호하는 소형 문서세단기입니다. 저소음 설계와 수동 세단 모드를 지원합니다.",
    image: "/images/shredders/s2-230pn.jpg",
    gallery: ["/images/shredders/s2-230pn.jpg"],
    detailImages: ["/images/shredders/s2-230pn-detail.jpg"], detailImageCropHeight: 2800,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "http://s2company.co.kr/default/product/product_1.php?com_board_basic=read_form&com_board_idx=72&tit=03&sub=01&com_board_id=7&com_board_category_code=c1",
    features: ["문서 투입 자동 감지", "과전류 차단 및 모터 보호", "과부하 자동 역회전", "최저소음 55 dB"],
    details: [
      { label: "최대 투입폭", value: "230 mm" }, { label: "동시 세단 매수", value: "10~11매 (A4 75g 기준)" },
      { label: "세단 형태", value: "꽃가루형" }, { label: "세단 크기", value: "2.5 × 10 mm" },
      { label: "파지함 용량", value: "35 L" }, { label: "제품 크기 / 무게", value: "390 × 325 × 665 mm / 27 kg" }
    ], visible: true
  },
  {
    id: "s2-250pn", name: "S2 문서세단기 250PN", category: "소형 문서세단기", listingGroup: "shredder", price: "구매 상담",
    spec: "최대 14~15매 · 꽃가루형 2 × 10 mm · 파지함 40 L",
    description: "넉넉한 40 L 파지함과 세밀한 꽃가루형 세단 방식을 갖춘 소형 문서세단기입니다. 문서 투입 자동 감지와 안전 보호 기능을 지원합니다.",
    image: "/images/shredders/s2-250pn.jpg",
    gallery: ["/images/shredders/s2-250pn.jpg"],
    detailImages: ["/images/shredders/s2-250pn-detail.jpg"], detailImageCropHeight: 2800,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "http://s2company.co.kr/default/product/product_1.php?com_board_basic=read_form&com_board_idx=32&tit=03&sub=01&com_board_id=7&com_board_category_code=c1",
    features: ["최대 14~15매 동시 세단", "문서 투입 자동 감지", "과전류 차단 및 모터 보호", "과부하 자동 역회전"],
    details: [
      { label: "최대 투입폭", value: "230 mm" }, { label: "동시 세단 매수", value: "14~15매 (A4 75g 기준)" },
      { label: "세단 형태", value: "꽃가루형" }, { label: "세단 크기", value: "2 × 10 mm" },
      { label: "파지함 용량", value: "40 L" }, { label: "제품 크기 / 무게", value: "390 × 325 × 770 mm / 30 kg" }
    ], visible: true
  },
  {
    id: "kyocera-taskalfa-3554cig", name: "교세라 TASKalfa 3554ciG", category: "A3 컬러복합기", listingGroup: "kyocera-color-mfp", price: "렌탈·구매 상담",
    spec: "컬러/흑백 35 ppm · 10.1인치 터치 패널 · A3 출력",
    description: "A3 컬러 문서의 출력·복사·스캔을 빠르게 처리하며, 모바일 연결과 문서 보안 기능을 함께 제공하는 교세라 TASKalfa 컬러복합기입니다.",
    image: "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_3.jpg",
    gallery: [
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_3.jpg",
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_1.jpg",
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/index_main-visual_10_pc.jpg"
    ],
    detailImages: taskalfaCatalogImages,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/government/taskalfa-5054cig/",
    catalogUrl: "/catalogs/kyocera-taskalfa-2554cig-3554cig-4054cig.pdf",
    features: ["컬러/흑백 35ppm 출력", "10.1인치 저항막 방식 터치 패널", "A3·SRA3 및 배너 인쇄 지원", "KYOCERA MyPanel 모바일 제어", "문서 데이터와 장치 보안 강화"],
    details: [
      { label: "브랜드", value: "교세라" }, { label: "제품군", value: "TASKalfa" }, { label: "구분", value: "A3 컬러복합기" },
      { label: "출력 속도", value: "컬러/흑백 35 ppm" }, { label: "스캔 속도", value: "최대 100 ipm 단면 / 200 ipm 양면 (옵션 DP-7160/7170)" },
      { label: "메모리 / 저장장치", value: "4GB / 32GB SSD 기본" }, { label: "조작 패널", value: "10.1인치 저항막 방식 터치 패널" },
      { label: "제품 크기 / 무게", value: "602 × 665 × 790 mm / 약 90 kg" }
    ], visible: true
  },
  {
    id: "kyocera-taskalfa-2554cig", name: "교세라 TASKalfa 2554ciG", category: "A3 컬러복합기", listingGroup: "kyocera-color-mfp", price: "렌탈·구매 상담",
    spec: "컬러/흑백 25 ppm · 10.1인치 터치 패널 · A3 출력",
    description: "A3 컬러 문서 출력과 복사·스캔을 안정적으로 처리하고, 직관적인 터치 조작과 보안 기능을 제공하는 교세라 컬러복합기입니다.",
    image: "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_1.jpg",
    gallery: [
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_1.jpg",
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_3.jpg",
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/index_sub-visual_17.jpg"
    ],
    detailImages: taskalfaCatalogImages,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/government/taskalfa-5054cig/",
    catalogUrl: "/catalogs/kyocera-taskalfa-2554cig-3554cig-4054cig.pdf",
    features: ["컬러/흑백 25ppm 출력", "10.1인치 저항막 방식 터치 패널", "A3·SRA3 및 배너 인쇄 지원", "문서 공유와 모바일 제어 지원", "문서 데이터와 장치 보안 강화"],
    details: [
      { label: "브랜드", value: "교세라" }, { label: "제품군", value: "TASKalfa" }, { label: "구분", value: "A3 컬러복합기" },
      { label: "출력 속도", value: "컬러/흑백 25 ppm" }, { label: "스캔 속도", value: "최대 100 ipm 단면 / 200 ipm 양면 (옵션 DP-7160/7170)" },
      { label: "메모리 / 저장장치", value: "4GB / 32GB SSD 기본" }, { label: "조작 패널", value: "10.1인치 저항막 방식 터치 패널" },
      { label: "제품 크기 / 무게", value: "602 × 665 × 790 mm / 약 90 kg" }
    ], visible: true
  },
  {
    id: "kyocera-taskalfa-4054cig", name: "교세라 TASKalfa 4054ciG", category: "A3 컬러복합기", listingGroup: "kyocera-color-mfp", price: "렌탈·구매 상담",
    spec: "컬러/흑백 40 ppm · 10.1인치 터치 패널 · A3 출력",
    description: "분당 40매의 컬러·흑백 출력 속도로 출력량이 많은 업무 환경에 대응하는 교세라 TASKalfa A3 컬러복합기입니다.",
    image: "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_5.jpg",
    gallery: [
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_5.jpg",
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/taskalfa-7054ci_7.jpg",
      "https://www.kyoceradocumentsolutions.com/hk/en/products/mfp/taskalfa-3554ci/assets/images/index_main-visual_10_pc.jpg"
    ],
    detailImages: taskalfaCatalogImages,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/government/taskalfa-5054cig/",
    catalogUrl: "/catalogs/kyocera-taskalfa-2554cig-3554cig-4054cig.pdf",
    features: ["컬러/흑백 40ppm 출력", "10.1인치 저항막 방식 터치 패널", "A3·SRA3 및 배너 인쇄 지원", "고속 스캔과 모바일 제어 지원", "문서 데이터와 장치 보안 강화"],
    details: [
      { label: "브랜드", value: "교세라" }, { label: "제품군", value: "TASKalfa" }, { label: "구분", value: "A3 컬러복합기" },
      { label: "출력 속도", value: "컬러/흑백 40 ppm" }, { label: "스캔 속도", value: "최대 100 ipm 단면 / 200 ipm 양면 (옵션 DP-7160/7170)" },
      { label: "메모리 / 저장장치", value: "4GB / 32GB SSD 기본" }, { label: "조작 패널", value: "10.1인치 저항막 방식 터치 패널" },
      { label: "제품 크기 / 무게", value: "602 × 665 × 790 mm / 약 90 kg" }
    ], visible: true
  },
  {
    id: "kyocera-taskalfa-mz4000i", name: "교세라 TASKalfa MZ4000i", category: "A3 흑백복합기", listingGroup: "kyocera-bw-mfp", price: "렌탈·구매 상담",
    spec: "교세라 A3 흑백복합기",
    description: "흑백 문서 중심의 사무 환경을 위한 교세라 A3 흑백복합기입니다.",
    image: "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/taskalfa-mz4000i/assets/images/taskalfa-MZ4000i_1.jpg", storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/taskalfa-mz4000i/index.html",
    catalogUrl: "/catalogs/kyocera-taskalfa-mz3200i-mz4000i.pdf",
    detailImages: mzCatalogImages,
    features: ["A3 흑백복합기", "출력·복사·스캔 지원", "설치 환경에 맞춘 렌탈·구매 상담"],
    details: [{ label: "브랜드", value: "교세라" }, { label: "모델", value: "TASKalfa MZ4000i" }, { label: "구분", value: "A3 흑백복합기" }], visible: true
  },
  {
    id: "kyocera-taskalfa-mz3200i", name: "교세라 TASKalfa MZ3200i", category: "A3 흑백복합기", listingGroup: "kyocera-bw-mfp", price: "렌탈·구매 상담",
    spec: "교세라 A3 흑백복합기",
    description: "일상적인 문서 출력과 스캔 업무에 적합한 교세라 A3 흑백복합기입니다.",
    image: "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/taskalfa-mz4000i/assets/images/taskalfa-MZ3200i_1.jpg", storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/taskalfa-mz4000i/index.html",
    catalogUrl: "/catalogs/kyocera-taskalfa-mz3200i-mz4000i.pdf",
    detailImages: mzCatalogImages,
    features: ["A3 흑백복합기", "출력·복사·스캔 지원", "설치 환경에 맞춘 렌탈·구매 상담"],
    details: [{ label: "브랜드", value: "교세라" }, { label: "모델", value: "TASKalfa MZ3200i" }, { label: "구분", value: "A3 흑백복합기" }], visible: true
  },
  {
    id: "kyocera-ecosys-ma3500", name: "교세라 ECOSYS MA3500cifx", category: "A4 컬러복합기", listingGroup: "kyocera-color-mfp", price: "렌탈·구매 상담",
    spec: "컬러/흑백 35 ppm · 7인치 터치 패널 · 양면 스캔 ADF",
    description: "컴팩트한 본체에 컬러 출력·복사·스캔·팩스를 담은 교세라 A4 컬러복합기입니다. 사무실과 공유 업무 공간에 적합합니다.",
    image: "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/ecosys-ma4000cifx/assets/images/product/ecosys-ma3500cifx_01.jpg",
    gallery: [
      "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/ecosys-ma4000cifx/assets/images/product/ecosys-ma3500cifx_01.jpg",
      "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/ecosys-ma4000cifx/assets/images/index_main-visual_01_pc.jpg",
      "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/ecosys-ma4000cifx/assets/images/index_sub-visual_02.jpg"
    ],
    detailImages: ma3500cifxCatalogImages,
    storeUrl: "https://smartstore.naver.com/royaloa",
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/mfp/ecosys-ma4000cifx/index.html",
    catalogUrl: "/catalogs/kyocera-ecosys-ma3500cifx.pdf",
    features: ["A4 컬러·흑백 35ppm 출력", "복사·출력·스캔·팩스 지원", "7인치 컬러 터치 패널", "100매 양면 스캔 자동원고이송장치"],
    details: [
      { label: "브랜드", value: "교세라" }, { label: "모델", value: "ECOSYS MA3500cifx" },
      { label: "구분", value: "A4 컬러복합기" }, { label: "출력 속도", value: "컬러/흑백 35 ppm" },
      { label: "주요 기능", value: "복사·출력·스캔·팩스" }, { label: "조작 패널", value: "7인치 터치 스크린" },
      { label: "자동원고이송장치", value: "100매 양면 스캔 타입" }, { label: "출력 해상도", value: "1,200 × 1,200 dpi" }
    ], visible: true
  },
  {
    id: "kyocera-ecosys-pa3500", name: "교세라 ECOSYS PA3500cx", category: "A4 컬러프린터", listingGroup: "kyocera-color-printer", price: "렌탈·구매 상담",
    spec: "컬러 35 ppm · A4 데스크톱 프린터 · 양면 출력",
    description: "컴팩트한 본체와 양면 출력, 유선·무선 연결을 갖춘 교세라 A4 컬러 프린터입니다.",
    image: "https://www.kyoceradocumentsolutions.com/kr/ko/products/printer/ecosys-pa4500cx/assets/images/product/ecosys-pa3500cx_02.jpg", storeUrl: "https://smartstore.naver.com/royaloa",
    detailImages: pa3500cxCatalogImages,
    officialUrl: "https://www.kyoceradocumentsolutions.com/kr/ko/products/printer/ecosys-pa4500cx/index.html",
    catalogUrl: "/catalogs/kyocera-ecosys-pa3500cx.pdf",
    features: ["A4 컬러 출력", "컬러·흑백 35 ppm 출력", "유선·무선 네트워크 지원", "기본 양면 출력"],
    details: [{ label: "브랜드", value: "교세라" }, { label: "모델", value: "ECOSYS PA3500cx" }, { label: "구분", value: "A4 컬러프린터" }, { label: "출력 속도", value: "컬러/흑백 35 ppm" }, { label: "양면 출력", value: "기본 지원" }, { label: "제품 크기 / 무게", value: "394 × 533 × 392.5 mm / 33 kg" }], visible: true
  }
];

export const visibleProducts = products.filter((product) => product.visible);
export const featuredProducts = visibleProducts.filter((product) => product.featured);
