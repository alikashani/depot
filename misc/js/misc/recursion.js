'use strict'

let countDownFrom = (num) => {
  if (num === 0) return;
  //console.log(num)
  countDownFrom(num - 1)
}

const categories = [
  { id: 'animals',   'parent': null      },
  { id: 'mammals',   'parent': 'animals' },
  { id: 'cats',      'parent': 'mammals' },
  { id: 'dogs',      'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs'    },
  { id: 'labrador',  'parent': 'dogs'    },
  { id: 'persian',   'parent': 'cats'    },
  { id: 'siamese',   'parent': 'cats'    },
  { id: 'pit bull',  'parent': 'dogs'    },
  { id: 'tabby',     'parent': 'cats'    }
];

let makeTree = (categories, parent) => {
  let node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
  return node
}

let fact = (n) => {
  if (n == 0)
    console.log(1)
  else
    console.log(n * fact(n - 1));
}

fact(4)
countDownFrom(10)

let treeOne = JSON.stringify(makeTree(categories, null), null, 4)
console.log(treeOne)

/*
  { // what we're trying to acheive
    animals: {
      mammals: {
        chihuahua: null
        labroador: null
      },
      cats: {
        persian: null
        siamese: null
      }}}
 */
