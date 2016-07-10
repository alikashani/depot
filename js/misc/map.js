// Array.prototype.map

'use strict';

const fruit = ['apple', 'strawberry', 'orange', 'tomato', 'plum', 'peach', 'kiwi'];

const veg = [
  { name : 'cucumber', color: 'green' },
  { name : 'tomato', color: 'green' },
  { name : 'onion', color: 'green' },
  { name : 'cilantro', color: 'green' },
  { name : 'celery', color: 'green' },
  { name : 'bell pepper', color: 'green' },
]

let fruitLength = fruit.map(fruit => fruit.length);

let selectFruit = fruit.filter(fruit => fruit.length > 5);

let reducedFruit =

console.log(fruitLength);
console.log(selectFruit);
