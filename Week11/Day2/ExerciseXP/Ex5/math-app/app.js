import { add } from "./math.js";
import { multiply } from "./math.js";
import lodash from 'lodash';


//console.log(lodash);

let a = 5;
let b = 7;
let resultLodashSum = lodash.sum([a,b]);
console.log(resultLodashSum);
console.log(add(a,b));

