// Import server config ( config/server.js)
const app = require('./config/server');

// Parametrizar porta de escuta
app.listen(80, function(){
    console.log('Server ON!');
});



