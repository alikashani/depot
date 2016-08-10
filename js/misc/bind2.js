'use strict';

let talk = function() {
  console.log(this.sound)
}

let boromir = {
  blabber : talk,
  sound : 'One does not simply walk into Mordor'
}

let gollum = {
  jabber : boromir.blabber,
  sound : 'My preciousssssss...'
}

gollum.jabber()
