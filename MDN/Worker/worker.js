console.log('Worker here!');
onmessage = function(e) {
    console.log('Message received from main script', e);
    var workerResult = e.data.toUpperCase();
    console.log('Posting message back to main script');
    postMessage(workerResult);
}