module.exports = function(app){
    app.get('/formulario_inclusao_noticias', function(req, res){
        res.render("admin/form_add_noticias");
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        
        //salvarNoticia
        var connection = app.config.dbConnection(); 
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
            //res.render("noticias/noticias", {noticias  : result});
        });
    });
}