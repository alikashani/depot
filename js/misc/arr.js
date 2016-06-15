const arr = [ 4, 6, 1, 3, 6, 2, 6, 4, 4, 7, 3, 3];

const rev = [];

for (i = arr.length-1; i >= 0; i--)
  rev.push(arr[i]);

console.log(rev);
