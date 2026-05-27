# 회사 소개 사이트 구축 계획

## Summary
- 레퍼런스인 [oaclub.co.kr](https://www.oaclub.co.kr/)처럼 `회사 소개 + 제품 목록 + 가격 + 문의 정보 + 네이버 스토어 연결` 중심의 사이트로 만든다.
- 회원가입/로그인, 결제, 장바구니, 게시판 같은 기능은 제외하고, 정적 홍보 사이트로 설계한다.
- 기본 기술 선택은 `TypeScript + Astro`로 간다. 이유는 페이지가 단순하고 SEO가 중요하며, 정적 배포에 유리하고 유지비가 낮기 때문이다.
- 배포는 `Cloudflare Pages`를 1순위로 한다. 커스텀 도메인 연결이 가능하고 Cloudflare DNS/Registrar와 붙이기 쉽다. 대안으로 `Vercel`도 가능하다.
- 도메인은 영문형 `회사명.com` 또는 `회사명.co.kr` 우선으로 검토한다. 초기에는 기본 배포 주소로 검수하고, 오픈 시점에 정식 도메인을 연결하는 방식으로 진행한다.
  참고: [Cloudflare Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/), [Vercel domain setup](https://vercel.com/docs/concepts/projects/domains/add-a-domain), [Cloudflare Registrar overview](https://developers.cloudflare.com/registrar/)

## Implementation Changes
- 사이트 구조
  - 메인: 회사 핵심 소개, 주요 제품 카테고리, 대표 연락처, CTA 버튼
  - 회사소개: 회사 개요, 취급 품목, 주소, 상담 가능 시간, 오시는 길
  - 제품목록: 카테고리별 제품 카드, 가격, 핵심 사양, 네이버 스토어 이동 버튼
  - 문의안내: 전화번호, 카카오톡/이메일이 있으면 추가, 사업자 정보
- 제품 데이터 방식
  - 초기 버전은 코드 내 JSON/TS 데이터 파일로 관리한다.
  - 각 제품은 `이름 / 카테고리 / 가격 / 대표 이미지 / 짧은 설명 / 네이버 스토어 URL / 노출 여부` 필드를 가진다.
  - 제품 클릭 시 상세 페이지로 가지 않고 바로 네이버 스토어로 보내거나, 목록 카드 안에 `스토어에서 보기` 버튼을 둔다.
- 디자인 방향
  - 레퍼런스보다 더 현대적으로 정리한다: 큰 히어로 영역, 명확한 카테고리 구분, 넉넉한 여백, 모바일 우선 반응형.
  - 제품 사진 품질이 중요하므로 이미지 규격을 먼저 통일한다.
  - 문의 CTA는 모든 주요 섹션 하단에 반복 배치한다.
- SEO/운영 기본
  - 각 페이지별 title/description 설정
  - 네이버 검색 노출용 기본 메타 태그와 Open Graph 적용
  - `sitemap.xml`, `robots.txt`, favicon, 사업자 정보 푸터 반영
  - 추후 수정이 쉽도록 회사 정보와 제품 데이터를 컴포넌트와 분리한다

## Deployment And Domain
- 배포
  - GitHub 저장소에 연결하고 `Cloudflare Pages`로 자동 배포
  - 브랜치 푸시 시 미리보기 배포, 메인 브랜치 머지 시 운영 반영
- 도메인
  - 새 도메인 구매 후 Cloudflare DNS에 연결
  - `www`와 루트 도메인을 모두 연결하고 한쪽으로 리다이렉트 규칙 통일
  - SSL은 무료 인증서로 처리
- 비용 구조
  - 호스팅 비용은 별도 서버 없이 운영 가능
  - 실질 비용은 도메인 등록/갱신비 중심으로 고려
  - 정확한 금액은 선택한 TLD와 등록처에 따라 달라지므로 구매 직전 최종 확인

## Test Plan
- 데스크톱/모바일에서 메인, 회사소개, 제품목록, 문의안내 레이아웃 확인
- 모든 제품 카드의 네이버 스토어 링크 정상 이동 확인
- 전화번호 클릭, 지도 링크, 사업자 정보 노출 확인
- SEO 기본 항목 확인: title, description, OG 이미지, sitemap
- 성능 확인: 첫 화면 로딩, 이미지 최적화, Lighthouse 기본 점검
- 실제 운영 도메인 연결 후 HTTPS, `www` 리다이렉트, 404 페이지 확인

## Assumptions
- 제품/가격 변경은 자주 없고, 초기 버전은 개발자가 코드 수정으로 관리한다.
- 로그인/회원가입/주문/결제/게시판/관리자 페이지는 만들지 않는다.
- 네이버 스토어 상품 URL은 제품별로 이미 확보하거나 추후 정리해서 제공받는다.
- 회사 소개 문구, 로고, 제품 사진, 사업자 정보는 별도 자료로 받아서 반영한다.
- 추후 운영자가 직접 내용을 바꿔야 하면 2차 단계에서 CMS 또는 시트 연동으로 확장한다.
