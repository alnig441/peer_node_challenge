var http = require('http');
var balance = require('./balance');

http.createServer(function(req, res){
    res.writeHead(200);
    res.write(balance.string() + ' ' + balance.balance(100, 1000000) + '\n');
    res.end();
}).listen(process.env.PORT ||  3000);