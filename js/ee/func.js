// Functional programming basics - filter() & map()
var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

// filter() returns new array w/ only desired items
const notDog = animals.filter( animal => animal.species !== 'dog' )
console.log(JSON.stringify(notDog, null, 4) + '\n')

// map() iterates over array & returns new array w/ each item tranformed
const species = animals.map( x => x.species )
console.log(species)

// Impure function
const time = () => new Date().toLocaleTimeString();
const regTime = () => new Date()

console.log(time())
console.log(regTime())

// Pure functionf
const highpass = (cutoff, value) => value >= cutoff;

console.log(highpass(5, 5));
