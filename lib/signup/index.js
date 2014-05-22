var express = require('express');

var app = module.exports = express();

app.set('views', __dirname);
app.set('engine', 'jade');

app.get('/signup', function(req, res){
	res.render('form');
});