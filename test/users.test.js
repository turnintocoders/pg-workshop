var test = require("tape");
var supertest = require("supertest");
var usersHandler = require("../src/usersHandler.js");

test("Returns users in array", function(assert){
  supertest(usersHandler)
    .get("/users")
    .end(function(error, result) {
      var parsedResult = JSON.parse(result.text);
      assert.ok(parsedResult.length > 0, "has items");
      assert.ok(parsedResult[0].hasOwnProperty("name"), "item has name");
      assert.ok(parsedResult[0].hasOwnProperty("location"), "item has location");
      assert.end();
    });
});
