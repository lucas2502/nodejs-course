// Import server config ( config/server.js)
const app = require('./config/server');

// Parametrizar porta de escuta
const server = app.listen(80, function(){
    console.log('Server ON!');
});

const io = require('socket.io').listen(server);

app.set('io', io);

// Creat connect websocket
io.on('connection', function(socket){
    console.log('Cliente conectou!')
    socket.on('disconnect'), function(){
        console.log("Cliente desconectou");
    }

    socket.on('msgParaServidor', function(data){
        //*Chat
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        //Peoples
        if(parseInt(data.apelido_atualizado_nos_clientes) == 0){
            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );
            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );
        };
    });
    
});



