module.exports={
	entry: './public/js/app.jsx',
	output:{
		path:__dirname,
		filename:'./public/js/bundle.js'

	},
	module:{
		loaders:[
			{
				loader:"babel-loader",
				query:{
					presets:['react','es2015']
				},
				test:/\.jsx?$/,
				exclude:/node_modules/
			},
		]
	}
}