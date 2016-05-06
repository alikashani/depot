'use strict';

let animal = {
	animalType: 'animal',
	describe () {
		return `An ${this.animalType}, with ${this.furColor} fur,
			${this.legs} legs and a ${this.tail} tail`
	}
}

let mouse = () => {
	let secret = 'secret agent';
	return Object.assign(Object.create(animal), {
		animalType: 'mouse',
		furColor: 'brown',
	  legs: 4,
	  tail: 'long, skinny',
		profession () {	return secret }
	})
}

let james = mouse()

console.log(james.profession())
