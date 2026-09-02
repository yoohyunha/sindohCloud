import sharp from 'sharp';

const palettes = [
  { name: 'blue', start: '#075985', middle: '#087ea4', end: '#38a3c7', accent: '#bcefff', sub: '#daf5fb', button: '#ffffff', ink: '#075985' },
  { name: 'beige', start: '#493629', middle: '#7a5c43', end: '#b18a62', accent: '#f1d4ad', sub: '#f7e7d2', button: '#fffaf3', ink: '#68482f' },
  { name: 'green', start: '#123b35', middle: '#1f5b4d', end: '#43846e', accent: '#9de3c7', sub: '#d3eee3', button: '#f6fffb', ink: '#174b40' },
];

const render = (palette) => {
const svg = `<svg width="1920" height="400" viewBox="0 0 1920 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${palette.start}"/>
      <stop offset=".55" stop-color="${palette.middle}"/>
      <stop offset="1" stop-color="${palette.end}"/>
    </linearGradient>
    <radialGradient id="glow">
      <stop offset="0" stop-color="${palette.accent}" stop-opacity=".24"/>
      <stop offset="1" stop-color="${palette.accent}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1920" height="400" fill="url(#bg)"/>
  <circle cx="1510" cy="70" r="360" fill="url(#glow)"/>
  <circle cx="270" cy="410" r="270" fill="url(#glow)"/>
  <path d="M1320 0L1920 0L1920 400L1640 400Z" fill="#fff" opacity=".025"/>
  <g text-anchor="middle" font-family="Arial, Noto Sans KR, Malgun Gothic, sans-serif">
    <text x="960" y="82" fill="${palette.accent}" font-size="23" font-weight="700" letter-spacing="8">SINDOH CLOUD</text>
    <rect x="902" y="106" width="116" height="3" rx="1.5" fill="${palette.accent}"/>
    <text x="960" y="202" fill="#fff" font-size="55" font-weight="700" letter-spacing="-2">사무실에 필요한 출력 솔루션</text>
    <text x="960" y="257" fill="${palette.sub}" font-size="25" letter-spacing="1">복합기 · 프린터 · 문서세단기</text>
    <rect x="848" y="298" width="224" height="48" rx="24" fill="${palette.button}"/>
    <text x="960" y="330" fill="${palette.ink}" font-size="20" font-weight="700" letter-spacing="1">렌탈 · 구매 상담</text>
  </g>
</svg>`;

return sharp(Buffer.from(svg))
  .png()
  .toFile(`public/images/smartstore-main-banner-1920x400-${palette.name}.png`);
};

Promise.all(palettes.map(render)).then(() => console.log('created 3 variants'));
