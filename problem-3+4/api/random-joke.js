var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
/* GET home page. */
router.get('/', function(req, res, next) {
  let o = {joke: jokes.getRandomJoke()};
  let j = JSON.stringify(o);
  res.send(j);
});

module.exports = router;