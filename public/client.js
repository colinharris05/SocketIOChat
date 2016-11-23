var socket = io();

var Events = {
  Message: 'message',
  IncomingMessage: 'incoming_message'
};

$('form').submit(function() {
  socket.emit(Events.Message, $('#content').val());
  $('#content').val('');
  return false;
});

socket.on(Events.IncomingMessage, function(message) {
  $('#chat-messages').append($('<li>').text(message));
});
