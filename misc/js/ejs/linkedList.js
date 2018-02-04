// Cloned from wesleyhales
//   @ https://gist.github.com/wesleyhales/2023993

'use strict';

let LinkedList = function(e) {

  let that = {},
      first,
      last;

  that.push = function(value) {
    let node = new Node(value);
    if (first == null) {
      first = last = node;
    } else {
      last.next = node;
      last = node;
    }
  };

  that.pop = function() {
    let value = first;
    first = first.next;
    return value;
  };

  that.remove = function(index) {
    let i = 0;
    let current = first,
        previous;
    if (index === 0) {
      // handle special case - first node
      first = current.next;
    } else {
      while (i++ < index) {
        // set previous to first node
        previous = current;
        // set current to next one
        current = current.next
      }
      // skip to next node
      previous.next = current.next;
    }
    return current.value
  };

  let Node = function(value) {
    this.value = value;
    let next = {};
  };

  return that;
};

let ll = new LinkedList();

ll.push(1);
ll.push(2);
ll.push(3);
ll.push(4);

ll.remove(0);

console.log(ll.pop());
console.log(ll.pop());
console.log(ll.pop());
