var binderFullOfNames = [
	{ name: "Sean" },
	{ name: "John" },
	{ name: "Mark" },
	{ name: "Bob" },
];

var fruit = ['tomato', 'orange', 'apple', 'cherry'];

console.log(fruit.sort());

var rolodex = binderFullOfNames.sort((a, b) => {
	if (a.name > b.name) return 1;
	if (a.name > b.name) return -1;
	return 0;
});

console.log(binderFullOfNames);

function fn(a){
	if (typeof(a) != 'number') console.log('invalid type');
	return a + 2;
}

var ali = 20;

var nAli = fn(ali);

console.log(nAli);
