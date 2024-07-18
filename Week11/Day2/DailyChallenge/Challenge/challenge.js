import {greet} from "./greeting.js";
import { colorMessage } from "./colorful-message.js";
import {readFile} from './read-file.js';

console.log(greet('Debi'));

console.log(colorMessage('How are you?'));
console.log(readFile('./files/file-data.txt'));
