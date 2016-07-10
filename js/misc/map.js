// Array.prototype.map

'use strict';

const fruit = ['apple', 'strawberry', 'orange', 'tomato', 'plum', 'peach', 'kiwi'];

const veg = [
  { name : 'cucumber', color: 'green'  },
  { name : 'tomato',   color: 'red'    },
  { name : 'onion',    color: 'white'  },
  { name : 'cilantro', color: 'green'  },
  { name : 'celery',   color: 'green'  },
  { name : 'carrot',   color: 'orange' }
];

let fruitLength = fruit.map(fruit => fruit.length);

let selectFruit = fruit.filter(fruit => fruit.length > 5);

let vegFilter = veg.filter(veggie => veggie.name.indexOf('c') === 0);

console.log(fruitLength);
console.log(selectFruit);
console.log(vegFilter);
