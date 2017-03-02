var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.allJokesCount +=1;
  res.render('all-jokes',{jokes: jokes.allJokes});
});


module.exports = router;