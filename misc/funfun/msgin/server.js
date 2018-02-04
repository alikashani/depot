const express = require('express');
const app     = express();
const http    = require('http');
const server  = http.createServer(app);
const io      = require('socket.io').listen(server);
const jade    = require('jade');

const pseudoArray = ['admin']; // Prevent username 'admin'
const appPort = 3333;

//
// View options
//
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout : false });
app.use(express.static(__dirname + '/public'));

//
// Render & send main page
//
app.get('/', (req, res) => {
  res.render('home.jade');
});
server.listen(appPort);
console.log('Server listening on port ' + appPort);

//
// Handle Socket IO connections
//
var users = 0; // Count the users

io.sockets.on('connection', (socket) => {
  users++; // Increment user count
  reloadUsers();

  //
  // Broadcast message to all users
  //
  socket.on('message', (data) => {
    if (pseudoSet(socket)) {
      var transmit = {
        date : new Date().toISOString(),
        pseudo : socket.nickname,
        message : data
      };
      socket.broadcast.emit('message', transmit);
      console.log('user ' + transmit['pseudo'] + ' said \'' + data + '\'');
    }
  });

  //
  // Assign a name to the user
  //
  socket.on('setPseudo', (data) => {
    // Test if name is taken
    if (pseudoArray.indexOf(data) === -1) {
      pseudoArray.push(data);
      socket.nickname = data;
      socket.emit('pseudoStatus', 'ok');
      console.log('user ' + data + ' connected');
      console.log(`user ${data} connected`);
    } else {
      socket.emit('pseudoStatus', 'error'); // Send error
    }
  });

  //
  // Handle client disconnection
  //
  socket.on('disconnect', () => {
    users--;
    reloadUsers();
    if (pseudoSet(socket)) {
      console.log('disconnect...');
      var pseudo = socket.nickname;
      var index = pseudoArray.indexOf(pseudo);
      pseudo.slice(index - 1, 1);
    }
  });
});

function reloadUsers () {
  /**
   * Send the count of the users to all
   * @return void
   */
	io.sockets.emit('nbUsers', {"nb": users});
}

function pseudoSet (socket) {
  /**
   * Test if the user has a name
   * @param {Object} socket
   * @return {Boolean}
   */
	var test;
	if (socket.nickname == null ) test = false;
	else test = true;
	return test;
}
