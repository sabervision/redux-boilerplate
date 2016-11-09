var path = require('path');

module.exports = {
	entry: [
		'babel-polyfill',
		[__dirname, '.','src', 'app', 'index.js'].join(path.sep)
	],
	resove: {
		modulesDirectories: ['node_modules']
	},
	output: {
		path: [__dirname, 'src'].join(path.sep),
		filename: 'bundles.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: / (node_modules) /,
			loader: 'babel'
		}]
	}
};