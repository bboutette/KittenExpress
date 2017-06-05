var express = require('express');
var ejs = require('ejs');
var router = express.Router();
var request = require ('request');
const https = require('https');

// var buttons = ["Moar Kourage", "Help Meowout", "In a Purrdicament"];

// console.log('YO!');
// https.request('https://api.github.com/zen', function(error, res, body){
//   console.log('hello world!');
// });

// const reqOptions = {
//   headers: {'User-Agent': 'bboutette'},
//   host: 'api.github.com',
//   path: '/zen',
//   method: 'GET'
// };
//
// const zenReq = https.request(reqOptions, (res) => {
//   //console.log('statusCode:', res.statusCode);
//   //console.log('headers:', res.headers);
//
//   res.on('data', (d) => {
//     process.stdout.write(d);
//   });
// });
//
// zenReq.on('error', (e) => {
//   console.error(e);
// });
// zenReq.end();

/* GET home page. */
router.get('/', function(req, res, next) {
//
  var colors = ["#fd6c3b", "#4edacf","#65a576","#f2d83d"];
  var color = colors[Math.floor(Math.random()*colors.length)];

  const reqOptions = {
    headers: {'User-Agent': 'bboutette'},
    host: 'api.github.com',
    path: '/zen',
    method: 'GET'
  };

  const zenReq = https.request(reqOptions, (zenRes) => {
    //console.log('statusCode:', res.statusCode);
    //console.log('headers:', res.headers);

    zenRes.on('data', (quote) => {
      res.render('index', { title: 'Express', colors: color, quote: quote });
    });
  });

  zenReq.on('error', (e) => {
    console.error(e);
  });
  zenReq.end();

  // https.request('https://api.github.com/zen', function(error, res, body){
  //   console.log('hello world!');
  // });

  // var customHeaderRequest = request.defaults({
  //   headers: {'User-Agent': 'bboutette'}
  // });
  // customHeaderRequest.get('https://api.github.com/zen', function(error, res, body){
  //   console.log(body);
  //   //res.send('hi!');
  //   //var sentence = res.body;
  //   //   var color = colors[Math.floor(Math.random()*colors.length)];
  //   //res.render('index', {colors: color});
  //   //res.render('hello world');
  //
  //   //res.render('index', { title: 'Express', colors: color });
  // });

  // res.render('index', { title: 'Express', colors: color });

});

//
// var customHeaderRequest = request.defaults({
//   headers: {'User-Agent': 'bboutette'}
// });
//
// customHeaderRequest.get('https://api.github.com/zen', function(error, res, body){
//   console.log(body);
//   //var sentence = res.body;
//   //   var color = colors[Math.floor(Math.random()*colors.length)];
//   //res.render('index', {colors: color});
//   res.render('hello world');
//
//   // res.render('index', {quote: sentence});
// });

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

module.exports = router;
