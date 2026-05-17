const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'public', 'collections', 'single_bed');

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, filename).then(resolve).catch(reject);
      }
      const fileStream = fs.createWriteStream(filename);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filename, () => reject(err));
    });
  });
}

async function main() {
  console.log('Downloading 16 single bed images...');
  for (let i = 5; i <= 20; i++) {
    const filename = path.join(dir, `img4 (${i}).jpeg`);
    // loremflickr redirects, so the downloadImage function handles it
    const url = `https://loremflickr.com/800/600/singlebed,furniture/all?random=${i}`;
    console.log(`Downloading ${filename}...`);
    try {
      await downloadImage(url, filename);
    } catch(e) {
      console.error(`Failed to download ${filename}`, e);
    }
  }
  console.log('Done!');
}

main();
