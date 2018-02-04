// ----------------------------------------------------------------------------
// Various methods of object creation


//
// `class` keyword syntax
//
class Greeter {
  constructor (name) {
    this.name = name || 'Ali Kashani';
  }
  hello () {
    return `Hello my name is ${this.name}`;
  }
}

const george = new Greeter('Ali');

const msg = george.hello();

console.log(msg); // Hello, my name is Ali

//
// ES5 constructor syntax
//
function Greeter (name) {
  this.name = name || 'John Doe';
}

Greeter.prototype.hello = function hello () {
  return 'Hello, my name is ' + this.name;
}

var george = new Greeter('Ali');
var msg = george.hello();

console.log(msg); // Hello, my name is Ali

//
// Factory syntax
//
const proto = {
  hello () {
    return `Hello, my name is ${ this.name }`;
  }
};

const greeter = (name) => Object.assign(
  Object.create(proto), { name }
);

const george = greeter('Ali');

const msg = george.hello();

console.log(msg);

//
// Concatenative Inheritance / Cloning / Mixins syntax
//
const proto = {
  hello: function hello () {
    return `Hello, my name is ${ this.name }`;
  }
};

const george = Object.assign({}, proto, {name: 'Ali'});

//
// Mixin syntax
//
import Events from 'eventemitter3';

const object = {};

Object.assign(object, Events.prototype);

object.on('event', payload => console.log(payload));
object.emit('event', 'some data'); // 'some data'
