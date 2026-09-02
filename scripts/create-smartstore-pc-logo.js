import sharp from 'sharp';

const input = 'public/images/스크린샷 2026-09-01 164630.png';
const output = 'public/images/smartstore-pc-logo-1200x80.png';

await sharp(input)
  .resize({ width: 1200, height: 80, fit: 'contain', background: '#ffffff', withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toFile(output);

const metadata = await sharp(output).metadata();
console.log(`${output} ${metadata.width}x${metadata.height}`);
