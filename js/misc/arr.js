'use strict';

const arr = [ 4, 6, 1, 3, 6, 2, 6, 4, 4, 7, 3, 3 ];
const rev = [];

for (let i = arr.length-1; i >= 0; i--)
  rev.push(arr[i]);

console.log(rev);

const orange = [8, 2, 5, 1, 33, 5, 2, 5, 1, 5, 1, 2, 7, 89, 4];
const mapping = orange.reduce( (prev, curr) => prev + curr);

let lime = 0;
for (let i = 0; i < orange.length; i++) {
  lime += orange[i];
}

console.log(lime)
console.log(mapping)
