//const fs = require('fs');
// const data = fs.readFileSync('file-data.txt', "utf-8")
// console.log(data);
import fs from "fs";

export function readFile(file){
    const data = fs.readFileSync(file, "utf-8")
    return data;
}
