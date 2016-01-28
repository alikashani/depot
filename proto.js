const  food = {
      init: function(type) {
            this.type = type
      },
      eat: function() {
            console.log('You ate the ' + this.type)
      }
}

const waffle = Object.create(food);
waffle.init('waffle')

const carrot = Object.create(food)
carrot.init('carrot');

console.log('waffle is food', food.isPrototypeOf(waffle));

console.log('int is food', food.isPrototypeOf(12312));

console.log('carrot is food', food.isPrototypeOf(carrot));
