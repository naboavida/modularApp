var projects = [{title:'California', area:'123'},{title:'Texas', area:'321'}]

// get
exports.getProjects = function(req, res){
	res.json(projects);
};

// post
exports.addProject = function(req, res){
	console.log('API call: addProject');
	console.log(req.body);
	// projects.push({title:'New York', area:'231'});
	projects.push(req.body);
	// res.json(req.body);
	res.json(projects);
};

// exports.getProjects = function(req, res){
// 	console.log('asdasd');
// 	res.json([{title:'California', area:'123'},{title:'Texas', area:'321'}]);
// };

// app.get('/api/projects', function(req, res){
// 	console.log('asdasd');
// 	res.json([{title:'California', area:'123'},{title:'Texas', area:'321'}]);
// });
