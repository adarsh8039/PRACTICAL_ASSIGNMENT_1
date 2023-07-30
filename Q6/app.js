const zlib = require('zlib');  
const fs = require('fs');  
  
const inputFile = fs.createReadStream('input.txt.zip');  
const outputFile = fs.createWriteStream('input2.txt');  
  
inputFile.pipe(zlib.createUnzip()).pipe(outputFile);