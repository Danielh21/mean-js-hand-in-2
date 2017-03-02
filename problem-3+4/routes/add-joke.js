var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
/* GET home page. */
router.get('/', function(req, res, next) {
    req.session.addJokeCount +=1;
  res.render('add-joke');
});

router.post("/", function(req, res, next) {
  var joke = req.body.joke;
  jokes.addJoke(joke);
  res.redirect("/");
});

module.exports = router;