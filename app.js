var app = require('./config/server');
var rotaNoticias = require('./app/routes/noticias');
var rotaFormulario = require('./app/routes/formulario_inclusao_noticias');
var rotaHome = require('./app/routes/home');

rotaNoticias(app);
rotaFormulario(app);
rotaHome(app);

app.listen(3000, function(){
    console.log("start server");
});