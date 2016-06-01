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
  return title
})
.catch( error => console.error(error.stack))
.then( x => console.log('Run resulted in', x))

function run(generator) {
  const iterator = generator()
  function iterate(iteration) {
    if (iteration.done) return iteration.value
    const promise = iteration.value
    return promise.then( x => iterate(iterator.next(x)))
  }
  return iterate(iterator.next())
}
