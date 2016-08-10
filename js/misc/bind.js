'use strict';

let dog = {
  sound : 'woof',
  talk () { console.log(this.sound) }
}

dog.talk() // --> 'woof'

// `this` will not refer to the dog object
let talkFunction = dog.talk
// now we bind the dog object to the variable
// and now `this` will refer to the dog object
let boundFunction =  talkFunction.bind(dog)
boundFunction() // --> undefined
