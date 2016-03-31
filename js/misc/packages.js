(function() {
	'use strict';

	var binderFullOfNames = [
		{ name: "Sean" },
		{ name: "John" },
		{ name: "Mark" },
		{ name: "Bob" },
	];

	var fruit = ['tomato', 'orange', 'apple', 'cherry'];


	var rolodex = binderFullOfNames.sort(function (a, b) {
		if (a.name > b.name) return 1;
		if (a.name > b.name) return -1;
		return 0;
	});


	function fn(a){
		if (typeof(a) != 'number') {
			console.log('invalid parameter passed');
			return;
		}
		return a + 2;
	}

	var ali = 1024;

	var nAli = fn(ali);



	fruit.sort().forEach(console.log);

	function forEachTwo(array, action) {
		for (var i = 0; i < array.length; i++)
			action(array[i]);
	}

	forEachTwo(fruit, console.log);


})();
