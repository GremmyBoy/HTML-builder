const fs = require('fs');
const path = require('path');
const fsPromises = fs.promises;

const secretFd = path.join(__dirname, 'secret-folder');
// fs.readdir(secretFd);
fsPromises.readdir(secretFd, {withFileTypes: true
}).then(docs => {
    docs.forEach((doc) => {
        if(!doc.isDirectory()){
            const FilePath =  path.join(secretFd, doc.name);
            const FileName = path.basename(FilePath);
            const ext = path.extname(FilePath);
            fsPromises.stat(FilePath).then(result => {
                console.log(`${FileName.replace(ext, '')} - ${ext.replace('.', '')} - ${Number(result.size/ 1024).toFixed(3)}kb`)
            })
        }
    })
})
// console.log(read);