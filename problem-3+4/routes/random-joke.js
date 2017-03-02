var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
/* GET home page. */
router.get('/', function (req, res, next) {
  req.session.randomJokeCount += 1;
  res.render('random-joke', { joke: jokes.getRandomJoke });
});

module.exports = router;