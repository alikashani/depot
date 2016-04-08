const arr = [1, 2, 3, 4, 5, 6, 7, 23, 1, 4, 3, 6, 1, 11, 48, 18, 51, 12];

// var sorted = arr.sort();
// console.log(sorted);
var sortedArr = [];

for (var n = 0; n < arr.length; n++)
	if (arr[n / 2] <= arr[(n / 2) - 1])
