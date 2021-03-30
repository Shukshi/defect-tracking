module.exports = {
	entry: './ src/main.js',
	module: {
		rules: [
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },
			{ test: /\.(js)$/, use: 'babel-loader' }
		]
	}
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index_bundle.js'	
	}
}