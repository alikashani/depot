

// Object.defineProperty(person, 'firstName', {
//       value: 'Ali',
//       writable: true,
//       enumerable: true,
//       configurable: true
// });
//
// Object.defineProperty(person, 'lastName', {
//       value: 'Kashani',
//       writable: true,
//       enumerable: true,
//       configurable: true
// });

var config = {
      writable: true,
      enumerable: true,
      configurable: true
};

var defineProperty = function(obj, name, value) {
      config.value = value;
      Object.defineProperty(obj, name, config);
};


var fromPrototype = function(prototype, object) {
      var newObject = Object.create(prototype);

      for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                  newObject[prop] = object[prop];
            }
      }

      return newObject;
};

var person = {
      toString: function() {
            return this.firstName + ' ' + this.lastName;
      }
};

var man = fromPrototype(person, { sex: 'male' });

var ali = fromPrototype(man, {
      firstName: 'Ali',
      lastName: 'Kashani'
});

console.log(ali);
console.log(ali.sex);
console.log(ali.toString());

var liver = fromPrototype(ali, {
      condition: 'healthy'
});

console.log(liver);

var food = {
      junk: ['pizza', 'cheeseburger', 'chips', 'candy', 'ice cream'],
      herbs: ['cilantro', 'parsley', 'basil', 'dill'],
      bread: ['sourdough', 'bagette', 'whole wheat', 'white']
}

console.log(food.junk);
