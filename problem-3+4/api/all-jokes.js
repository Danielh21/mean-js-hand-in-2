var express = require('express');
var router = express.Router();
var jokes = require("../model/jokes");
/* GET home page. */
router.get('/', function(req, res, next) {
  let arr = jokes.allJokes();
  let j = JSON.stringify(arr);
  res.send(j);
});


module.exports = router;