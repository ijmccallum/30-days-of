
(function () {
    console.log('shared worker here!');
    var text = '';
    var portArray = [];

    self.addEventListener('connect', function(e) {
        console.log('connect: ', e);
        //note the ports are a 'sequence', not an array...
        var port = e.ports[0];
        connections++;
        portArray.push(port);
        port.postMessage('hi');

        port.addEventListener('message', function(e){
            text += e.data.toUpperCase();
            console.log('Message received from main script', ports);
            portArray.forEach(function(port){
                console.log('posting to port: ', port);
                port.postMessage('port here!');
            });
        });
    
        port.start();
    });

}());