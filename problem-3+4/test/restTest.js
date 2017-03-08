const {expect} = require("chai");
const request = require("request");
const http = require("http");
const app = require('../app');
const TEST_PORT = 3456;
var server;

before(function(done){
  server = http.createServer(app);
  server.listen(TEST_PORT,function(){
    done();
  });
})
after(function(done){
  server.close();
  done();
})
//http://localhost:3000/api/all-jokes
describe("POST: /api/all-jokes", function () {
  let allJokesOptions = {
    url: "http://localhost:" + TEST_PORT + "/api/all-jokes",
    method: "POST",
    json: true
  }

  it("should get all jokes as json array", function (done) {
    request(allJokesOptions, function (error, res, body) {
      expect(body).to.equal("");
      var allJokes = JSON.parse(body);
      expect(error).to.equal(null);
      expect(allJokes.length).to.be.equal(6);
      //You should also check whether the joke actually was added to the Data-store
      done();
    });
  })
});
