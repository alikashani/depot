var animals = [
  { name: 'Fluffykins', species: 'rabbit' },
  { name: 'Caro', species: 'dog' },
  { name: 'Hamilton', species: 'dog' },
  { name: 'Harold', species: 'fish' },
  { name: 'Ursula', species: 'cat' },
  { name: 'Jimmy', species: 'fish' },
];

var dog = animals.filter(function(animal) {
      return animal.species === 'dog'
})

console.log(dog);

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
