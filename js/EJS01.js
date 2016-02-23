for (var i = '#'; i.length <= 10; i += '#') { console.log(i) }

for (var j = 1; j <= 100; j++)
	if ( j % 3 == 0 )
		if ( j % 5 == 0 )
			console.log('FizzBuzz')
		else
			console.log('Fizz')
	else if ( j % 5 == 0 )
		console.log('Buzz')
	else
		console.log(j);
