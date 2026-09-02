import sharp from 'sharp';

const sharedDefs = `<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="#0b2742"/><stop offset=".55" stop-color="#075985"/><stop offset="1" stop-color="#1596a8"/>
  </linearGradient>
  <radialGradient id="glow"><stop offset="0" stop-color="#72e0e5" stop-opacity=".25"/><stop offset="1" stop-color="#72e0e5" stop-opacity="0"/></radialGradient>
</defs>`;

const pc = `<svg width="1920" height="400" viewBox="0 0 1920 400" xmlns="http://www.w3.org/2000/svg">${sharedDefs}
  <rect width="1920" height="400" fill="url(#bg)"/><circle cx="1540" cy="40" r="390" fill="url(#glow)"/><circle cx="260" cy="420" r="280" fill="url(#glow)"/>
  <path d="M1280 0H1920V400H1600Z" fill="#fff" opacity=".03"/>
  <g text-anchor="middle" font-family="Arial, Noto Sans KR, Malgun Gothic, sans-serif">
    <text x="960" y="82" fill="#a4e7eb" font-size="23" font-weight="700" letter-spacing="8">OFFICE SOLUTION</text>
    <rect x="902" y="106" width="116" height="3" rx="1.5" fill="#72e0e5"/>
    <text x="960" y="202" fill="#fff" font-size="55" font-weight="700" letter-spacing="-2">복합기 렌탈부터 구매까지</text>
    <text x="960" y="257" fill="#d3f1f3" font-size="25" letter-spacing="1">사무환경에 맞춘 전문 상담</text>
    <rect x="848" y="298" width="224" height="48" rx="24" fill="#fff"/>
    <text x="960" y="330" fill="#075985" font-size="20" font-weight="700" letter-spacing="1">맞춤 상담 안내</text>
  </g></svg>`;

const mobile = `<svg width="750" height="600" viewBox="0 0 750 600" xmlns="http://www.w3.org/2000/svg">${sharedDefs}
  <rect width="750" height="600" fill="url(#bg)"/><circle cx="685" cy="55" r="300" fill="url(#glow)"/><circle cx="30" cy="590" r="245" fill="url(#glow)"/>
  <path d="M500 0H750V600H675Z" fill="#fff" opacity=".03"/>
  <g text-anchor="middle" font-family="Arial, Noto Sans KR, Malgun Gothic, sans-serif">
    <text x="375" y="118" fill="#a4e7eb" font-size="25" font-weight="700" letter-spacing="7">OFFICE SOLUTION</text>
    <rect x="317" y="145" width="116" height="4" rx="2" fill="#72e0e5"/>
    <text x="375" y="255" fill="#fff" font-size="53" font-weight="700" letter-spacing="-2">복합기 렌탈부터</text>
    <text x="375" y="325" fill="#fff" font-size="53" font-weight="700" letter-spacing="-2">구매까지</text>
    <text x="375" y="397" fill="#d3f1f3" font-size="27" letter-spacing="0">사무환경에 맞춘 전문 상담</text>
    <rect x="237" y="455" width="276" height="64" rx="32" fill="#fff"/>
    <text x="375" y="497" fill="#075985" font-size="24" font-weight="700">맞춤 상담 안내</text>
  </g></svg>`;

await Promise.all([
  sharp(Buffer.from(pc)).png({ compressionLevel: 9 }).toFile('public/images/smartstore-carousel-slide2-pc-1920x400.png'),
  sharp(Buffer.from(mobile)).png({ compressionLevel: 9 }).toFile('public/images/smartstore-carousel-slide2-mobile-750x600.png'),
]);
console.log('created carousel slide 2');
