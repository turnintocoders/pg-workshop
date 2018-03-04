var test = require("tape");
var supertest = require("supertest");
var assetsHandler = require("../src/assetsHandler.js");

test("Loads index.html", function(assert){
  supertest(assetsHandler.index)
    .get("/")
    .end(function(error, result) {
      assert.ok(result.text.includes("PG workshop"), "includes page title");
      assert.end();
    });
});

test("Loads main.css", function(assert){
  supertest(assetsHandler.static)
    .get("/main.css")
    .end(function(error, result) {
      assert.ok(result.text.includes("PG workshop - style"), "includes CSS title");
      assert.end();
    });
});
