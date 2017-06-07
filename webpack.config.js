var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/* eslint-disable */
var config = {
    context : path.join(__dirname,'src'),
    entry : [
        './app.js',
    ],
    output: {
        path:  path.join(__dirname,'dist'),
        filename: 'bundle.js',
    },
    plugins: [
         new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel'],
            },
            {test: /\.json$/, loader: "json-loader" },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" }
        ]
    },
	

    resolveLoader: {
        root: [
            path.join(__dirname,'node_modules'),
        ],
    },
    resolve: {
        root: [
            path.join(__dirname,'node_modules'),
        ],
    },
};
/* eslint-enable*/
module.exports = config;
