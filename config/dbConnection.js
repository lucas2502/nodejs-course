var mysql = require('mysql');

var connMySql = function(){
    console.log("connection start bd");
    return mysql.createConnection({
        host    :   'localhost',
        user    :   'root',
        password:   '',
        database:   'portal_noticias'
    });
}

module.exports = function(){  
    console.log("Autoload load module connection");
    return connMySql;
}