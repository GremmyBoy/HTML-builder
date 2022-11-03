const fs = require('fs');
const path = require('path');
// console.log(path.join(__dirname,  'text.txt'));

const rs = fs.createReadStream((path.join(__dirname,  'text.txt')), ('utf-8'));

// let data = '';
rs.on('data', chunk => console.log(chunk));
// rs.on('data', chunk => data += chunk);
// rs.on('end', () => console.log('End', data.length));
// rs.on('error', error => console.log('Error', error.message));