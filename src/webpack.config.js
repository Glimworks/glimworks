/** @format */

const path = require('path');

module.exports = {
	entry: './app.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, '../assets/js'),
		filename: 'bundle.js',
	},
};
