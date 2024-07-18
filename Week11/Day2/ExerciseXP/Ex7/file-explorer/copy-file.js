const fs = require('fs');

const data = fs.readFileSync('source.txt', "utf-8");
console.log(data);
fs.writeFileSync('destination.txt',data);