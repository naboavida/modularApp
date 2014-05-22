var express = require('express'),
	path = require('path');

var app = module.exports = express();

app.set('views', __dirname);
app.set('engine', 'jade');

// app.use(express.static(path.join(__dirname, '../../public')));

// var controller = require('./controller');
// app.use(controller);

app.get('/projects', function(req, res){
	// console.log(res);
	res.render('index');
});

app.get('/addProject', function(req, res){
	// console.log(res);
	res.render('addProject');
});

// app.post('/addProject', function(req, res){
// 	// console.log(res);
// 	console.log("yeah posted!!");
// 	// res.render('index');
// });