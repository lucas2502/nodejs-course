module.exports = function(application){

application.get('/', function(req, res){
    application.app.controllers.index.home(application, res, res);
    //res.render('index'); => to move ./controllers/index.js
})
}