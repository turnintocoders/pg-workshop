var test = require("tape");
var supertest = require("supertest");
var assetsHandler = require("../src/assetsHandler.js");

test("Loads index.html", function(assert){
  assert.plan(1);
  supertest(assetsHandler.index)
    .get("/")
    .end(function(error, result) {
      assert.ok(result.text.includes("PG workshop"), "includes page title");
    });
});

test("Loads main.css", function(assert){
  assert.plan(1);
  supertest(assetsHandler.static)
    .get("/main.css")
    .end(function(error, result) {
      assert.ok(result.text.includes("PG workshop - style"), "includes CSS title");
    });
});
