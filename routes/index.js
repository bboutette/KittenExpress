var express = require('express');
var router = express.Router();

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {

  var color = colors[Math.floor(Math.random()*colors.length)];

  res.render('index', {colors: color});
});

module.exports = router;
