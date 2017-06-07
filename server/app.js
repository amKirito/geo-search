var express = require('express'),
	webpackDevMiddleware = require('webpack-dev-middleware'),
	webpack = require('webpack'),
	webpackconfig = require('../webpack.config.js'),
	path = require('path');

var app = express();
var compiler = webpack(webpackconfig);
app.use(express.static(path.join('__dirname','../src')));
try {
	console.log('server started, Hurrray!');
	app.use(webpackDevMiddleware(compiler,{	
		hot: true,
		filename: 'bundle.js',
		publicPath: '/build',
		stats: {
			colors: true,
		},
		historyApiFallback: true
	}));
	console.log('webpack compiled!');

	app.get('/', express.static(path.join('__dirname','../src')));

} catch (e) {
	console.log('An Error occured while running the server:'+ e);
}



module.exports = app;