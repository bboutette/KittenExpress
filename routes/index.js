var express = require('express');
var router = express.Router();
var request = require ('request');

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {

  var color = colors[Math.floor(Math.random()*colors.length)];

  res.render('index', {colors: color});
});

router.get('/', function(req, res, next){
  request({ url: 'https://api.github.com/zen',
  dataType: 'html',
  success: function(response) { $('p').html(response); }
    // console.log('response: ', response)
});
});
module.exports = router;
