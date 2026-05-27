# Sindoh Cloud Company Site

Astro 기반의 정적 회사 소개 사이트입니다. 회사 소개, 제품 목록, 가격 안내, 문의 정보, 네이버 스토어 연결만 포함합니다.

## 시작하기

```bash
npm install
npm run dev
```

## 수정 위치

- 회사 정보: [src/data/company.ts](/C:/Users/yoohy/WorkSpace/sindohCloud/src/data/company.ts)
- 제품 목록: [src/data/products.ts](/C:/Users/yoohy/WorkSpace/sindohCloud/src/data/products.ts)
- 공통 스타일: [src/styles/global.css](/C:/Users/yoohy/WorkSpace/sindohCloud/src/styles/global.css)

## 배포

- Cloudflare Pages
  - Build command: `npm run build`
  - Output directory: `dist`
- 정식 도메인을 연결하기 전에는 기본 배포 주소로 검수 가능합니다.
