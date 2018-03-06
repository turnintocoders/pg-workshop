var test = require("tape");
var supertest = require("supertest");
var usersHandler = require("../src/usersHandler.js");
var populateDb = require("../src/database/db_populate.js");
var db = require("../src/database/db_connection.js");

test("Seed the DB", function(assert) {
  populateDb(function(){
    assert.end();
  });
});

test("Returns users in array", function(assert){
  supertest(usersHandler.index)
    .get("/users")
    .end(function(err, result) {
      if(err) {
        console.error(err);
      }
      var parsedResult = JSON.parse(result.text);
      assert.ok(parsedResult.length > 0, "has items");
      assert.ok(parsedResult[0].hasOwnProperty("name"), "item has name");
      assert.ok(parsedResult[0].hasOwnProperty("location"), "item has location");
      assert.end();
    });
});

test("Create a user", function(assert){
  supertest(usersHandler.create)
    .post("/user/create")
    .send("name=Test User&location=Test location")
    .end(function(err, result) {
      if(err) {
        console.error(err);
      }
      db.query("SELECT * FROM users WHERE name LIKE 'Test%'",
        function(err, result) {
          assert.ok(result.rows.length == 1, "has 1 item");
          assert.end();
        });
    });
});

test("End pool connection", function(assert){
  db.end(function(){
    assert.end();
  });
});
