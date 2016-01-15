function hello(thing) {
      console.log(this + ' says hello ' + thing);
}

hello.call('Ali', 'orange');
