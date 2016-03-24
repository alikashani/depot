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
