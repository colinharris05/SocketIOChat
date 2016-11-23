var socket = io();

var Events = {
  Message: 'message'
};

$('form').submit(function() {
  socket.emit(Events.Message, $('#content').val());
  $('#content').val('');
  return false;
});

socket.on('incoming_message', function(message) {
  $('#chat-messages').append($('<li>').text(message));
});
