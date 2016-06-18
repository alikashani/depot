'use strict';

const proto = {
  hello () {
    return `Hello, my name is ${ this.name }!`;
  }
};

const greeter = (name) => Object.assign(Object.create(proto), {name});
const ali = greeter('ali');
const msg = ali.hello();

console.log(msg);
