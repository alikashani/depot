/*
 *
 *
 * Let's talk about CLOSURES && SCOPE
 * ----------------------------------
 * ==================================
 *
 *
 */


function createAdder(baseNum) {
      return function(numberToAdd) {
            return baseNum + numberToAdd;
      }
}

var addTen = createAdder(10);
console.log(addTen(2)); //12
console.log(addTen(0)); //10

// var age = 24;
//
// console.log(age);
//
// function localFunction(){
//       var age = 0;
//       age = 0;
//       console.log(age);
// }
// localFunction();
// console.log(age);

/*
function greetMaker(name) {
      function greet() {
            console.log('Hello ' + name + '!');
      }
      return greet;
}

var greetAli = greetMaker('Ali');
*///const secret = (msg) => () => msg;
