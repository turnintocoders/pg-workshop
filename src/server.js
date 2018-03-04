var http = require("http");
var router = require("./router.js");

var server = http.createServer(router);
var port = process.env.PORT || 3000;

server.listen(port, function() {
    console.log("Listening on port: "+port);
});
