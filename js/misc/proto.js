const  food = {
    init: (type) => { this.type = type },
    eat: () => { console.log('You ate the ' + this.type + '\n') }
}

const carrot = Object.create(food)
const waffle = Object.create(food)

food.eat = () => { console.log('YOU TOTALLY ATE THE ' + this.type.toUpperCase()) }

carrot.init('carrot')
carrot.eat()

waffle.init('waffle')
waffle.eat()

const double = x => x * 2

console.log(double(12))
//
// console.log('waffle is food', food.isPrototypeOf(waffle) + '\n')
// console.log('int is food', food.isPrototypeOf(12312)+ '\n')
// console.log('carrot is food', food.isPrototypeOf(carrot)+ '\n')
