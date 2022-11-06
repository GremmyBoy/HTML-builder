const fs = require('fs');
const path = require('path');
const { stdin } = process;
const {exit} = process;

const output = fs.createWriteStream((path.join(__dirname,  'destination.txt')));
stdin.on('data', data => {
    const dataStringify = data.toString().trim();
    if(dataStringify === 'exit'){ 
        console.log('До связи!')
        exit();
    }
    output.write(dataStringify);
})

process.on('SIGINT', () => {
    console.log('До связи!');
    exit();
});




// const input = fs.createReadStream((path.join(__dirname,  'destination.txt')), 'utf-8');

// input.on('data', chunk => output.write(chunk));
// input.on('error', error => console.log('Error', error.message));
// stdin.on('data', data => output.write(data));
// console.log(`${data.toString()}`)
