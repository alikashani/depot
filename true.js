const fs = require('fs');

var output = fs.readFileSync('data.txt', 'utf8')
	.trim()
	.split('\r\n')
	.map( line => line.split('\t') )
	.reduce( (customers, line) => {
		customers[line[0]] = customers[line[0]] || []
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantity: line[3]
		})
		return customers
	}, {})

console.log((JSON.stringify(output, null, 4)).trim())

var fun = true ? 1 : 0

const orange = () => fun ? '\nlemons' : '\nlimes'
console.log(orange())

var price = 8123;
console.log( ( /* 5 + 3 */ -9 + 6/*8*/ / 2 ) / /*+4*/ -10 )
