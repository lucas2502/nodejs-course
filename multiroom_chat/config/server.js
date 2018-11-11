//Import module fremework epress
const express = require ('express');
//Import module consign
const consign = require('consign');
//Import module body-parser
const bodyParser = require('body-parser');
//Import epressValidator
const expressValidator = require('express-validator');

//start object epress
const app = express();

//seters variables 'viw engine' and 'views' express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//config middleware express static
app.use(express.static('./app/public'));

//Config miffleware body-parser
app.use(bodyParser.urlencoded({extended: true}));

//Config middleware express-validator
app.use(expressValidator());
//Autoload for rotas, and models, controllers before object app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);
    
// export object app
module.exports = app;
