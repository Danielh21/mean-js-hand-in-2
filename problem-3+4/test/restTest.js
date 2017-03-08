const { expect } = require("chai");
const request = require("request");
const http = require("http");
const app = require('../app');
const TEST_PORT = 3000;
var server;

before(function (done) {
  server = http.createServer(app);
  server.listen(TEST_PORT, function () {
    done();
  });
})
after(function (done) {
  server.close();
  done();
})

describe("Testing jokes API", function () {

  // app.use('/api/all-jokes', apiAllJokes);
  let allJokesOptions = {
    url: "http://localhost:" + TEST_PORT + "/api/all-jokes",
    method: "GET",
    json: true
  }

  it("should get all jokes as json array", function (done) {
    request(allJokesOptions, function (error, res, body) {
      var allJokes = body;
      expect(error).to.equal(null);
      expect(res.statusCode).to.equal(200);
      expect(allJokes.length).to.be.equal(6);
      done();
    });
  })

  // app.use('/api/random-joke', apiRandomJoke);
  let randomJokeOptions = {
    url: "http://localhost:" + TEST_PORT + "/api/random-joke",
    method: "GET",
    json: true
  }

  it("shoud get one joke only", function (done) {
    request(randomJokeOptions, function (error, res, body) {
      var randomJoke = body;
      expect(error).to.equal(null);
      expect(res.statusCode).to.equal(200);      
      expect(randomJoke.joke.length).to.greaterThan(5);
      done();
    });
  })

  // app.use('/api/add-joke', apiAddJoke);
  var addJokeOptions = {
    url: "http://localhost:" + TEST_PORT + "/api/add-joke",
    method: "POST",
    json: true,
    body: {joke: "Its better to be late than to arrive ugly"}
  }

  it("should succeed", function (done) {
    request(addJokeOptions, function (error, res, body) {
      expect(error).to.equal(null);
      expect(res.statusCode).to.equal(200);
      done();
    });
  })
  it("length should now be incremented", function (done) {
    request(allJokesOptions, function (error, res, body) {
      var allJokes = body;
      expect(error).to.equal(null);
      expect(res.statusCode).to.equal(200);
      expect(allJokes.length).to.be.equal(7);
      done();
    });
  })


});


