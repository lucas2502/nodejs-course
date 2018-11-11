function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connectionconnection.query("SELECT * FROM noticias order by data_criacao desc", callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    this._connection.query('select * from noticias where id_noticias = ' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.salvarNoticias = function( noticia,callback){
    console.log(noticia);
    this._connection.query('insert into noticias ?', noticia, callback);
};

NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
    this._connection.query('select * FROM noticias order by data_criacao desc limit 5', callbck);
};


module.exports = function(){
    return NoticiasDAO;
}; 