const http = require('http');
const fs = require('fs');

const url = process.argv[2];
const outputPath = process.argv[3];

if (!url || !outputPath) {
  console.log('Usage: node wget.js <url> <outputPath>');
  process.exit(1);
}

const file = fs.createWriteStream(outputPath);

http.get(url, response => {
  if (response.statusCode !== 200) {
    console.error(`HTTP error! Status: ${response.statusCode}`);
    process.exit(1);
  }

  response.pipe(file);

  response.on('end', () => {
    console.log('File downloaded successfully!');
  });
}).on('error', error => {
  console.error('Error downloading file:', error);
  process.exit(1);
});
