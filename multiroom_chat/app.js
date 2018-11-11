// Import server config ( config/server.js)
const app = require('./config/server');

// Parametrizar porta de escuta
const server = app.listen(80, function(){
    console.log('Server ON!');
});

const io = require('socket.io').listen(server);

// Creat connect websocket
io.on('connection', function(socket){

});



