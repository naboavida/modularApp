var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path');

var app = express();

app.use(bodyParser());
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

var login = require('./lib/login');
var signup = require('./lib/signup');
// var project = require('./lib/project');
var projects = require('./lib/projects');

var api = require('./lib/api');

app.use(login);
app.use(signup);
// app.use(project);
app.use(projects);

app.get('/api/projects', api.getProjects);
app.post('/api/projects', api.addProject);

app.get('*', function(req, res){
	res.redirect('/login');
});

app.listen(3000);

console.log("App listening on port 3000");