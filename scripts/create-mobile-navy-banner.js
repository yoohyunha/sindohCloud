import sharp from 'sharp';

const svg = `<svg width="750" height="600" viewBox="0 0 750 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b1734"/>
      <stop offset=".55" stop-color="#12254f"/>
      <stop offset="1" stop-color="#1d3971"/>
    </linearGradient>
    <radialGradient id="glow">
      <stop offset="0" stop-color="#5c83d8" stop-opacity=".24"/>
      <stop offset="1" stop-color="#5c83d8" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="750" height="600" fill="url(#bg)"/>
  <circle cx="685" cy="65" r="290" fill="url(#glow)"/>
  <circle cx="35" cy="590" r="245" fill="url(#glow)"/>
  <path d="M510 0H750V600H680Z" fill="#fff" opacity=".025"/>
  <g text-anchor="middle" font-family="Arial, Noto Sans KR, Malgun Gothic, sans-serif">
    <text x="375" y="118" fill="#9db7eb" font-size="25" font-weight="700" letter-spacing="8">SINDOH CLOUD</text>
    <rect x="317" y="145" width="116" height="4" rx="2" fill="#6e93df"/>
    <text x="375" y="255" fill="#fff" font-size="53" font-weight="700" letter-spacing="-2">사무실에 필요한</text>
    <text x="375" y="325" fill="#fff" font-size="53" font-weight="700" letter-spacing="-2">출력 솔루션</text>
    <text x="375" y="397" fill="#c5d0e6" font-size="27" letter-spacing="1">복합기 · 프린터 · 문서세단기</text>
    <rect x="237" y="455" width="276" height="64" rx="32" fill="#fff"/>
    <text x="375" y="497" fill="#142957" font-size="24" font-weight="700" letter-spacing="1">렌탈 · 구매 상담</text>
  </g>
</svg>`;

const output = 'public/images/smartstore-mobile-banner-750x600-navy.png';
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(output);
const metadata = await sharp(output).metadata();
console.log(`${output} ${metadata.width}x${metadata.height}`);
