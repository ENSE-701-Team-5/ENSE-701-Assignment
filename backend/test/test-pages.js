var assert = require("assert");
const { connection } = require("../src/app");
const fetch = require("node-fetch");

describe("Simple String Test", function () {
  it("should return number of characters in a string", function () {
    assert.equal("Hello World!".length, 12);
  });
});

describe("database connectivity test", function () {
  it("connects to database", function () {
    const CONNECTED_STATE = 2;
    assert.equal(connection.readyState, CONNECTED_STATE);
    connection.close();
  });
});
