module.exports = function(app){   
    app.get('/noticias', function(req, res){
        var connection = app.config.dbConnection(); 
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.getNoticia(function(error, result){
            res.render("noticias/noticias", {noticia  : result});
        });    
    });
};