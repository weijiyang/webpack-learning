const webpack = require('webpack')
module.exports = {
	entry : __dirname + "/app/main.js",
	output : {
		path : __dirname + "/public",
		filename : "bundle.js"
	},
	devtool : "eval-source-map",

	devServer : {
		contentBase : "./public",
		historyApiFallback : true,
		hot : true,
		port : 2222
	},

	module : {
		rules : [
			{
				test : /(\.jsx|\.js)$/,
				use  : {
					loader : "babel-loader",
					options : {
						presets : [
							"env" , "react"	
						]
					}
				},
				exclude : /noder_modules/
			}
		]
	}
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}