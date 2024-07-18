const fs = require('fs');
// const data = fs.readFileSync('file-data.txt', "utf-8")
// console.log(data);

function readFile(file){
    const data = fs.readFileSync(file, "utf-8")
    console.log(data);
}

module.exports = {
readFile
}