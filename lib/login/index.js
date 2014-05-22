var express = require('express');

var app = module.exports = express();

app.set('views', __dirname);
app.set('engine', 'jade');

app.get('/login', function(req, res){
	res.render('form');
});

app.post('/login', function(req, res){
	// console.log(res);
	// res.send("yeah login!!");
	res.render('index');
});