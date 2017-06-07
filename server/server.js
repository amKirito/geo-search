var app = require('./app');


var server = app.listen(6987,function(){
		var port = server.address().port;
		console.log('App is listening on port %s',port);
	});