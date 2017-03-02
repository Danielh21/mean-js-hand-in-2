var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.allJokesCount = 0;
  req.session.randomJokeCount = 0;
  req.session.addJokeCount = 0;
  res.render('login');
});

module.exports = router;