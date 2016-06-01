const fetch = require('node-fetch');

// fetch('http://jsonplaceholder.typicode.com/posts/1')
//   .then( res => res.json())
//   .then( post => post.title)
//   .then( x => console.log('Title:', x))

run(function *() {

  const uri = 'http://jsonplaceholder.typicode.com/posts/1';
  const response = yield fetch(uri);

  const post = yield response.json();
  const title = post.title;
  console.log('Title:', title)

});

function run(generator) {
  const iterator = generator()
  const iteration = iterator.next()
  const promise = iteration.value
  promise.then( x =>  {
    const anotherIterator = iterator.next(x)
    const anotherPromise = anotherIterator.value
    anotherPromise.then( y => iterator.next(y))
  })
}
