var http = require('http');

var server = http.createServer( function(req, res){
    
    var url = req.url;

    if( url == '/tecnologia'){
        res.end("<html><body>Portal de Tecnologia</body></html>");
    }else if( url === '/moda'){
        res.end("<html><body>Portal de Moda</body></html>");
    }else if( url === '/beleza'){
        res.end("<html><body>Portal de Beleza</body></html>");
    }else{
        res.end("<html><body>Portal de Noticias</body></html>");
    }
});

server.listen(3000);