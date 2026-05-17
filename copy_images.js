const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\HP\\.gemini\\antigravity\\brain\\8044ad99-8b6f-4792-ad40-f5a2cdff51e8';
const destDir = path.join(__dirname, 'public', 'collections', 'single_bed');

const files = [
  { src: 'single_bed_5_1778998899796.png', dest: 'img4 (5).jpeg' },
  { src: 'single_bed_6_1778998919048.png', dest: 'img4 (6).jpeg' },
  { src: 'single_bed_7_1778998939533.png', dest: 'img4 (7).jpeg' },
  { src: 'single_bed_8_1778998959712.png', dest: 'img4 (8).jpeg' },
  { src: 'single_bed_9_1778999001266.png', dest: 'img4 (9).jpeg' },
  { src: 'single_bed_10_1778999018489.png', dest: 'img4 (10).jpeg' },
  { src: 'single_bed_11_1778999035684.png', dest: 'img4 (11).jpeg' },
  { src: 'single_bed_12_1778999054431.png', dest: 'img4 (12).jpeg' },
];

files.forEach(file => {
  try {
    fs.copyFileSync(path.join(srcDir, file.src), path.join(destDir, file.dest));
    console.log(`Successfully copied ${file.dest}`);
  } catch (err) {
    console.error(`Error copying ${file.src}:`, err.message);
  }
});
console.log('Finished copying images!');
