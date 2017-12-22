const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message')
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');
  // socket.emit('welcomeToChatMessage',
  // {
  //   from: 'Admin',
  //   text: 'Welcome to the chat.',
  //   createdAt: 123,
  // }
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('createMessage', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback('This is from server');
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   created: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('user disconected')
  });
});

// console.log(__dirname + '/../public');
// console.log(publicPath);

server.listen(port, () => {
  console.log(`server is up on port ${port}`)
});
