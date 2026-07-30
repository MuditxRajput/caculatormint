import sharp from "sharp";
import pngToIco from "png-to-ico";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

const svg = readFileSync("public/brand-mark.svg");
const outDir = "src/app";
const sizes = [16, 32, 48];
const pngBuffers = [];

for (const size of sizes) {
  pngBuffers.push(await sharp(svg).resize(size, size).png().toBuffer());
}

writeFileSync(path.join(outDir, "favicon.ico"), await pngToIco(pngBuffers));
await sharp(svg).resize(32, 32).png().toFile(path.join(outDir, "icon.png"));
await sharp(svg).resize(180, 180).png().toFile(path.join(outDir, "apple-icon.png"));
await sharp(svg).resize(512, 512).png().toFile("public/icon-512.png");

console.log("Favicon synced from public/brand-mark.svg");
