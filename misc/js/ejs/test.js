// Eela Schedule
'use strict';

var may16_may22 = {
  Monday    : '7:00-1:00',
  Tuesday   : '7:00-1:00',
  Wednesday : '',
  Thurday   : '7:00-1:00',
  Friday    : '6:00-12:00',
  Saturday  : '6:30-12:00',
  Sunday    : '',
}

var str = JSON.stringify(may16_may22, null, 2);
// console.log(str)
//
// console.log(may16_may22)

let gifts = {
  'anniv': {
    'items': ['flowers', 'chocoloate', 'necklace', 'card', 'gift wrap'],
    'detail': '3-Year Anniversary'
  },
  'bday': {
    'items': ['ring', 'ballon', 'flowers', 'card', 'birkenstocks'],
    'detail': 'Eela\'s 26th Birthday'
  },
  desribe (day) {
    let list = [];
    for (let i = 0; i < 6; i++) {
      list.push(" - " + day.items + "\n")
    }
    list.join()
    return "Today is " + day.detail + "!" + "\nYou need to get: \n" + list + ".";
  }
}
console.log(gifts.anniv)

console.log(gifts.desribe('bday'))
