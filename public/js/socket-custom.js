var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

// escuchar
socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
})

// Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// escuchar informacion
socket.on('enviarMensaje', function(mensaje) {
    console.log("Servidor: ", mensaje);
});