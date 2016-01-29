


const fs = require('fs');
const orders = [
      { amount: 250 },
      { amount: 400 },
      { amount: 100 },
      { amount: 325 },
];

/*
      let totalAmount = 0;
      for (let i = 0; i < orders.length; i++) { totalAmount += orders[i].amount; }
      console.log(totalAmount);
 */

var totalAmount = orders.reduce(function(sum, order) { return sum + order.amount }, -1075);

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
