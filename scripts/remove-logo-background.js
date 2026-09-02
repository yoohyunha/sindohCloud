import sharp from 'sharp';

const input = 'public/images/smartstore-pc-logo-1200x80.png';
const output = 'public/images/smartstore-pc-logo-1200x80-transparent.png';
const { data, info } = await sharp(input).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);

for (let i = 0, j = 0; i < data.length; i += 3, j += 4) {
  const r = data[i];
  const g = data[i + 1];
  const b = data[i + 2];
  const min = Math.min(r, g, b);
  let alpha = 255 - min;
  if (alpha < 5) alpha = 0;
  if (alpha > 0) {
    const a = alpha / 255;
    rgba[j] = Math.max(0, Math.min(255, Math.round((r - 255 * (1 - a)) / a)));
    rgba[j + 1] = Math.max(0, Math.min(255, Math.round((g - 255 * (1 - a)) / a)));
    rgba[j + 2] = Math.max(0, Math.min(255, Math.round((b - 255 * (1 - a)) / a)));
  }
  rgba[j + 3] = alpha;
}

await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } })
  .png({ compressionLevel: 9 })
  .toFile(output);

console.log(output);
