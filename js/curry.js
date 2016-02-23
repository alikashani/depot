'use strict'

import _ from 'lodash'

let dragon =
	name =>
		size =>
			element =>
				name + ' is a ' +
				size + ' dragon that breathes ' +
				element + '!'

console.log(dragon('fluffy')('tiny')('light'))

let dragon = (name, size, element) =>
	name + ' is a ' +
	size + ' dragon that breathes ' +
	element + '!'

dragon = _.curry(dragon)

let fluffykinsDragon = dragon('fluffykins')
let tinyDragon = fluffykinsDragon('tiny')

console.log(tinyDragon('death'))

const dragons = [
	{ name: 'fluffykins', element: 'lightning' },
	{ name: 'noomi', element: 'ice' },
	{ name: 'karo', element: 'fire' },
	{ name: 'doomer', element: 'timewarp' }
]

const hasElement = _.curry((element, obj) => obj.element === element)

const lightningDragons = dragons.filter(hasElement('lightning'))

console.log(lightningDragons);
