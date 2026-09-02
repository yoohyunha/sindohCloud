import sharp from 'sharp';

const defs = `<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b1734"/><stop offset=".55" stop-color="#12254f"/><stop offset="1" stop-color="#1d3971"/></linearGradient><radialGradient id="g"><stop offset="0" stop-color="#5c83d8" stop-opacity=".24"/><stop offset="1" stop-color="#5c83d8" stop-opacity="0"/></radialGradient></defs>`;

const pc = `<svg width="1920" height="400" viewBox="0 0 1920 400" xmlns="http://www.w3.org/2000/svg">${defs}<rect width="1920" height="400" fill="url(#bg)"/><circle cx="1450" cy="200" r="470" fill="url(#g)"/>
<g font-family="Arial, Noto Sans KR, Malgun Gothic, sans-serif">
  <text x="400" y="82" fill="#9db7eb" font-size="21" font-weight="700" letter-spacing="5">SINDOH CLOUD CARE</text>
  <text x="400" y="174" fill="#fff" font-size="51" font-weight="700" letter-spacing="-2">사무기기 선택부터 관리까지</text>
  <text x="400" y="227" fill="#c9e6e8" font-size="25">필요한 방식에 맞춰 쉽고 빠르게 안내해드립니다.</text>
  <circle cx="410" cy="301" r="5" fill="#9db7eb"/><text x="430" y="309" fill="#9db7eb" font-size="21" font-weight="700" letter-spacing="1">렌탈 · 구매 전문 상담</text>
  <g text-anchor="middle">
    <rect x="1040" y="83" width="158" height="234" rx="20" fill="#fff" opacity=".96"/><circle cx="1119" cy="143" r="27" fill="#e8f8f7"/><text x="1119" y="151" fill="#168b8b" font-size="22" font-weight="700">01</text><text x="1119" y="215" fill="#102b4d" font-size="25" font-weight="700">렌탈</text><text x="1119" y="252" fill="#607386" font-size="17">초기 부담 없이</text><text x="1119" y="277" fill="#607386" font-size="17">편리하게</text>
    <rect x="1220" y="83" width="158" height="234" rx="20" fill="#fff" opacity=".96"/><circle cx="1299" cy="143" r="27" fill="#e8f8f7"/><text x="1299" y="151" fill="#168b8b" font-size="22" font-weight="700">02</text><text x="1299" y="215" fill="#102b4d" font-size="25" font-weight="700">구매</text><text x="1299" y="252" fill="#607386" font-size="17">환경에 맞는</text><text x="1299" y="277" fill="#607386" font-size="17">제품 선택</text>
    <rect x="1400" y="83" width="158" height="234" rx="20" fill="#fff" opacity=".96"/><circle cx="1479" cy="143" r="27" fill="#e8f8f7"/><text x="1479" y="151" fill="#168b8b" font-size="22" font-weight="700">03</text><text x="1479" y="215" fill="#102b4d" font-size="25" font-weight="700">관리</text><text x="1479" y="252" fill="#607386" font-size="17">설치 이후에도</text><text x="1479" y="277" fill="#607386" font-size="17">안심 지원</text>
  </g>
</g></svg>`;

const mobile = `<svg width="750" height="600" viewBox="0 0 750 600" xmlns="http://www.w3.org/2000/svg">${defs}<rect width="750" height="600" fill="url(#bg)"/><circle cx="680" cy="180" r="400" fill="url(#g)"/>
<g font-family="Arial, Noto Sans KR, Malgun Gothic, sans-serif">
  <text x="62" y="73" fill="#9db7eb" font-size="20" font-weight="700" letter-spacing="4">SINDOH CLOUD CARE</text>
  <text x="62" y="145" fill="#fff" font-size="43" font-weight="700" letter-spacing="-2">사무기기 선택부터</text><text x="62" y="200" fill="#fff" font-size="43" font-weight="700" letter-spacing="-2">관리까지</text>
  <text x="62" y="246" fill="#c9e6e8" font-size="22">필요한 방식에 맞춰 안내해드립니다.</text>
  <g>
    <rect x="62" y="292" width="626" height="74" rx="16" fill="#fff" opacity=".96"/><circle cx="111" cy="329" r="24" fill="#e8f8f7"/><text x="111" y="337" text-anchor="middle" fill="#168b8b" font-size="19" font-weight="700">01</text><text x="157" y="338" fill="#102b4d" font-size="25" font-weight="700">렌탈</text><text x="260" y="337" fill="#607386" font-size="20">초기 부담 없이 편리하게</text>
    <rect x="62" y="380" width="626" height="74" rx="16" fill="#fff" opacity=".96"/><circle cx="111" cy="417" r="24" fill="#e8f8f7"/><text x="111" y="425" text-anchor="middle" fill="#168b8b" font-size="19" font-weight="700">02</text><text x="157" y="426" fill="#102b4d" font-size="25" font-weight="700">구매</text><text x="260" y="425" fill="#607386" font-size="20">환경에 맞는 제품 선택</text>
    <rect x="62" y="468" width="626" height="74" rx="16" fill="#fff" opacity=".96"/><circle cx="111" cy="505" r="24" fill="#e8f8f7"/><text x="111" y="513" text-anchor="middle" fill="#168b8b" font-size="19" font-weight="700">03</text><text x="157" y="514" fill="#102b4d" font-size="25" font-weight="700">관리</text><text x="260" y="513" fill="#607386" font-size="20">설치 이후에도 안심 지원</text>
  </g>
</g></svg>`;

await Promise.all([
  sharp(Buffer.from(pc)).png({ compressionLevel: 9 }).toFile('public/images/smartstore-carousel-slide2-alt-navy-pc-1920x400-v2.png'),
  sharp(Buffer.from(mobile)).png({ compressionLevel: 9 }).toFile('public/images/smartstore-carousel-slide2-alt-navy-mobile-750x600.png'),
]);
console.log('created alternate carousel slide 2');
