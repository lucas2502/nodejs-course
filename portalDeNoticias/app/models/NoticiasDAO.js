function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connectionconnection.query("SELECT * FROM noticias", callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('select * from noticias where id_noticias = 2', callback);
};

NoticiasDAO.prototype.salvarNoticias = function( noticia,callback){
    console.log(noticia);
    this._connection.query('insert into noticias ?', noticia, callback);
};


module.exports = function(){
    return NoticiasDAO;
}; 