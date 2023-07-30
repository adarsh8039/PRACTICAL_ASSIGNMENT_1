const zlib = require('zlib');  
const fs = require('fs');  

const inputFile = fs.createReadStream('input.txt'); 
const outputFile = fs.createWriteStream('input.txt.zip');

inputFile.pipe(zlib.createGzip()).pipe(outputFile);