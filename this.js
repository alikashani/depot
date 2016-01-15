var person = {
      name: 'Ali Kashani',
      hello: function(thing) {
            console.log(this.name + ' says hello ' + thing + '!');
      }
}

// var bind = function(func, thisValue) {
//       return function() {
//             return func.apply(thisValue, arguments);
//       }
// }

var boundHello = person.hello.bind(person);

boundHello('world');
