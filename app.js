var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index.ejs");
});
app.get('/admin', function(req, res){
    res.render("admin/form_add_noticias.ejs");
});
app.get('/noticias', function(req, res){
    res.render("noticias/noticias.ejs");
});


app.listen(3000, function(){
    console.log('express');
});