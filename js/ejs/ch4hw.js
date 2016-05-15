// Eloquent JavaScript
// Chapter 4 Exercises

'use strict';
// Exercise 1
function range(start, end, step) {
  let run = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      run.push(i);
    }
    return run;
  } else if (step < 0) {
    for (let i = start; i >= end; i += step) {
      run.push(i);
    }
    return run;
  }
  for (let i = start; i <= end; i++) {
    run.push(i);
  }
  return run;
}

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

// Exercise 2
function reverseArray(arr) {
  let revArr = [];
  for (let i = 0; i < arr.length; i++) {
    revArr.unshift(arr[i]);
  }
  return revArr;
}

console.log(reverseArray(range(1, 10)));
