// for (var i = '#'; i.length <= 10; i += '#') console.log(i)

// for (var j = 1; j <= 100; j++)
// 	if (j % 3 == 0)
// 		if (j % 5 == 0)
// 			console.log('FizzBuzz')
// 		else
// 			console.log('Fizz')
// 	else if (j % 5 == 0)
// 		console.log('Buzz')
// 	else
// 		console.log(j);

var mack = []
mack.push('Mack')
mack.push('the', 'Knife')
console.log(mack)

mack.join(" ")
console.log(mack)

mack.pop()
console.log(mack)

const day1 = {
	squirrel: false,
	events: ['work', 'touched tree', 'pizza', 'running', 'television'],
	orange: (arr) => { return arr.join(" ") }
}

console.log(day1.squirrel)
console.log(day1.orange(day1.events))
console.log(day1.events)

var desc = {
	work: 'Went to work',
	'touched tree': 'Touched a tree'
}
