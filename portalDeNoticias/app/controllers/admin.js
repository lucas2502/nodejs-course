module.exports.formulario_inclusao_noticias = function(app, req, res){
    res.render("admin/form_add_noticias",{validacao : {}, noticia : {}});
};

module.exports.noticias_salvar = function(app, req, res){
    var noticia = req.body;

        req.assert('Titulo', 'Titulo é Obrigatorio').notEmpty();
        req.assert('resumo', 'Resumo e obrigatorio').notEmpty(); 
        req.assert('resumo', 'Resumo deve conter 10 e 100 caracteres').len(10, 100);
        req.assert('autor', 'Autor e obrigatorio').notEmpty();
        req.assert('date_noticia', 'Data e obrigatorio').notEmpty().isDate({format: 'YYYY-MM-DD'});
        req.assert('noticia', 'Noticia e obrigatorio').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticias", {validacao : erros, noticia : noticia});
            return;
        }
        //salvarNoticia
        var connection = app.config.dbConnection(); 
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
            //res.render("noticias/noticias", {noticias  : result});
        });
};