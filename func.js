var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];


const dog = animals.filter((animal) => { return animal.species === 'dog' });

console.log(dog);

const names = animals.map((x) => x.name);

console.log(names);


/*
var dog = [];

for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog')
    dog.push(animals[i])
};

console.log(dog)

var isDog = function(animal){
  return animal.species === 'dog'
}
var dogs = animals.filter(isDog)
var otherAnimals = animals.map(isDog)



console.log(dogs);
console.log(otherAnimals)
*/
/*
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
*/

// var names = animals.map(function(animal){
//   return animal.name
// });
//
// console.log(names)
