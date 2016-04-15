'use strict'
const arr = [1, 2, 3, 4, 5, 6, 7, 23, 1, 4, 3, 6, 1, 11, 48, 18, 51, 12]

function getMax(anArray) {
	return Math.max.apply(null, anArray)
}

console.log(getMax(arr))

const sorter = () => {
	let sortedArr = []
	for (let n = 0; n < arr.length; n++)
		if (arr[n / 2] >= arr[(n / 2) - 1])
			sortedArr.push(arr[n])
	return sortedArr
}

const testing = () => {
	const newArr = arr.sort((a, b) => a - b)
	return newArr
}

console.log(sorter())
console.log(arr)
console.log(testing())
console.log(arr.sort((a, b) => b - a))
