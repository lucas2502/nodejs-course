var app = require('./config/server');
/*var rotaNoticias = require('./app/routes/noticias')(app);
var rotaFormulario = require('./app/routes/formulario_inclusao_noticias')(app);
var rotaHome = require('./app/routes/home')(app);*/

app.listen(3000, function(){
    console.log("start server");
});