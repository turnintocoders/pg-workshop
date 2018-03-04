var users = require("./static.js");

function usersHandler(request, response) {
  // Replace the 3 lines below below with your own function that gets data from your database
  var output = JSON.stringify(users);
  response.writeHead(200, {
      "Content-Type": "application/json"
  });
  response.end(output);
}

module.exports = usersHandler;
