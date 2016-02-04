'use strict'

let countDownFrom = (num) => {
	if (num === 0) return;
	//console.log(num)
	countDownFrom(num - 1)
}

countDownFrom(10)

const categories = [
	{ id: 'animals', 'parent': null },
	{ id: 'mammals', 'parent': 'animals' },
	{ id: 'cats', 'parent': 'mammals' },
	{ id: 'dogs', 'parent': 'mammals' },
	{ id: 'chihuahua', 'parent': 'dogs' },
	{ id: 'labrador', 'parent': 'dogs' },
	{ id: 'persian', 'parent': 'cats' },
	{ id: 'siamese', 'parent': 'cats' }
]

let makeTree = (categories, parent) => {
	let node = {}
	categories
		.filter(c => c.parent === parent)
		.forEach(c => node[c.id] =
			makeTree(categories, c.id))
	return node
}


let treeOne = JSON.stringify(makeTree(categories, null), null, 2)

console.log(treeOne)
console.log(JSON.parse(treeOne))

// { // what we're trying to acheive
// 	animals: {
// 		mammals: {
// 			chihuahua: null
// 			labroador: null
// 		},
// 		cats: {
// 			persian: null
// 			siamese: null
// 		}
// 	}
// }
