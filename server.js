var http = require('http');


var port = process.env.PORT || 3001;
http.createServer(require('./app')).listen(port,function() {
    console.log('server started ' + port);
});