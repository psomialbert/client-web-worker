var HOST = location.origin.replace(/^(http|https)/, 'ws') + '/time';
var ws = new WebSocket(HOST);

ws.onmessage = function(event) {
  document.getElementById('server-time').innerHTML = 'time: ' + event.data;
};
