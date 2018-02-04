const app  = require('express')();
const http = require('http').Server(app);
const io   = require('socket.io')(http);

//
// Serve file to server
//
app.get('/', (req, res) => res.sendFile(__dirname, '/index.html'));

//
// Init socket IO
//
io.on('connection', socket => console.log('A user connected'));

//
// Set server port
//
http.listen(3000, () => console.log('listening on 3000'))
