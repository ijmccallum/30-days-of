console.log('shared worker here!');
var text = '';
var pages = [];

var broadcast = function(text){
    console.log('Posting message back to main script');
    pages.forEach(function(port){
        port.postMessage(text);
    });
}

onconnect = function(e) {
    var port = e.port[0];
    pages.push  (port);
    console.log('connect: ', e);
  
    port.onmessage = function(e) {
        console.log('Message received from main script', ports);
        broadcast(e.data.toUpperCase());
    }
    port.start();
    broadcast('connected');
  
}