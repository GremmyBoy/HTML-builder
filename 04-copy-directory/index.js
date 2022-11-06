const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

fs.mkdir(path.join(__dirname, 'files-copy'), {recursive: true}, err => {
    if (err) throw err;
})

fs.readdir(path.join(__dirname, 'files-copy'), (err, files) => {
    files.forEach(file => {
        fs.rmdir(path.join(__dirname, 'files-copy', file), err => {
            if(err) throw err;
        })
    })
})

fs.readdir(path.join(__dirname, 'files'), (err, files) => {
    files.forEach(file => {
        fs.copyFile(path.join(__dirname, 'files', file), path.join(__dirname, 'files-copy', file), err => {
            if (err) throw err;
        })
    })
})

