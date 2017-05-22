var express = require('express');
var router = express.Router();
var request = require ('request');
var http = require('http');

var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
// var buttons = ["Moar Kourage", "Help Meowout", "In a Purrdicament"];

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res, next) {

  var color = colors[Math.floor(Math.random()*colors.length)];

  res.render('index', {colors: color});
});

// router.get('/', function(req, res, next){
//   request({ url: '',
//   dataType: 'html',
//   success: function(response) { $('p').html(response); }
//     // console.log('response: ', response)
// });
// });

// var http = require('http');
//
// http.get("http://api.github.com/zen", function(res) {
//   console.log("reponse", res)
//   console.log("Got response: " + res.statusCode);
//
//   if(res.statusCode == 200) {
//     console.log("Got value: " + res.statusMessage);
//   }
//
// }).on('error', function(e) {
//   console.log("Got error: " + e.message);
//
// });

// var request = require('request');
// request('https://api.github.com/zen', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   }
// })

// var request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Print the google web page.
//   }
// })

var customHeaderRequest = request.defaults({
  headers: {'User-Agent': 'bboutette'}
})

customHeaderRequest.get('https://api.github.com/zen', function(error, response, body){
  console.log(body)
  var quotes = body

  res.render('index', {quote:quotes})
})


module.exports = router;
