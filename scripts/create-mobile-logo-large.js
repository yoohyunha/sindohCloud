import sharp from 'sharp';

const input = 'public/images/smartstore-pc-logo-1200x80-transparent.png';
const output = 'public/images/smartstore-mobile-logo-750x80-transparent-large.png';

const trimmed = await sharp(input).trim({ background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
const logo = await sharp(trimmed).resize({ height: 68, fit: 'inside' }).png().toBuffer();
const meta = await sharp(logo).metadata();

await sharp({ create: { width: 750, height: 80, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([{ input: logo, left: Math.round((750 - meta.width) / 2), top: Math.round((80 - meta.height) / 2) }])
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(`${output} 750x80, logo ${meta.width}x${meta.height}`);
