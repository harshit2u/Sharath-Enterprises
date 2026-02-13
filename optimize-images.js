import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'src', 'assets', 'images');

async function optimizeImages() {
    try {
        const files = fs.readdirSync(imagesDir);

        for (const file of files) {
            if (file.match(/\.(png|jpe?g)$/i)) {
                const inputPath = path.join(imagesDir, file);
                const outputPath = path.join(imagesDir, `${path.parse(file).name}.webp`);

                // Skip if webp already exists and is newer
                if (fs.existsSync(outputPath)) {
                    const inputStat = fs.statSync(inputPath);
                    const outputStat = fs.statSync(outputPath);
                    if (outputStat.mtime > inputStat.mtime) {
                        console.log(`Skipping ${file}, WebP already up to date.`);
                        continue;
                    }
                }

                console.log(`Converting ${file} to WebP...`);
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Converted ${file} -> ${path.basename(outputPath)}`);
            }
        }
        console.log('Image optimization complete!');
    } catch (err) {
        console.error('Error optimizing images:', err);
    }
}

optimizeImages();
