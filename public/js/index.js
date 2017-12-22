var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  // socket.emit('createMessage', {
  //   from: 'person@example.com',
  //   text: 'Hey, this is bob.'
  // })
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});

socket.on('welcomeToChatMessage', function (message) {
  console.log('New message', message);
});

socket.on('newUserJoined', function (message) {
  console.log('New message', message);
});
