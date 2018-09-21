const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
	entry : __dirname + "/app/main.js",
	output : {
		path : __dirname + "/build",
		filename : "[name].[hash:8].js"
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
			},
			{
				test:/\.css$/,
				use : [
					{loader : "style-loader"},
					{
						loader : "css-loader",
						options:{
							modules : true ,//指定启用css modules
							localIdentName : '[name]__[local]--[hash:base64:5]'//指定css的类名格式 ：Greeter__root--16xre
						}
					},
					{loader : "postcss-loader"}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.BannerPlugin("糖少出品，必为精品"),
		new HtmlWebpackPlugin({
			template : __dirname + "/app/index.tmpl.html" 
		}),
		new ExtractTextPlugin("style.css"),
		new UglifyJsPlugin(),
		new CleanWebpackPlugin('build/*.*' ,{
			root : __dirname,
			verbose : true ,
			dry : false
		})
	]
}