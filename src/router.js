var http = require("http");
var assetsHandler = require("./assetsHandler.js");
var usersHandler = require("./usersHandler.js");

function router(request, response) {
    var endpoint = request.url;

    if (endpoint === "/") {
        assetsHandler.index(request, response);
    } else if (endpoint === "/users") {
        usersHandler.index(request, response);
    } else if (endpoint === "/user/create") {
        usersHandler.create(request, response);
    } else {
        assetsHandler.static(request, response);
    }
};

module.exports = router;
