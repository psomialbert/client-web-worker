var HOST = location.origin.replace(/^(http|https)/, 'ws') + '/time';
var ws = new WebSocket(HOST);

var i = 0;
ws.onopen = function(event) {
  setInterval(() => {
    ws.send(`hej ${i}`);
    i += 1;
  }, 1000);
};

ws.onmessage = function(event) {
  document.getElementById('server-time').innerHTML = 'time: ' + event.data;
};
