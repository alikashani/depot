/**
 *
 * WHEEL OF LIFE
 * -- Ali Kashani --
 * >>>> 2016 <<<<
 *
 */

var order = ['orange chicken', 'mooshu', 'steamed rice', 'fresh spring rolls'];

console.log(order);

function addTwo(add2, add3) {
      function add2(uno, dos) {
            return uno + dos;
      }



      function add3(uno, dos, tres) {
            return uno + dos + tres;
      }

      return add3(1, 2, 3) + add2(5, 10);


}

console.log(addTwo());
