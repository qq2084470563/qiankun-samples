const { name } = require('./package.json')
console.log(name)

module.exports = {
	webpack: function (config, env) {
		if (Array.isArray(config.entry)) {
			config.entry = config.entry.filter(
				(e) => !e.includes('webpackHotDevClient')
			)
		}
		// config.entry = config.entry.includes('webpackHotDevClient')

		config.output.library = `${name}-[name]`
		config.output.libraryTarget = 'umd'
		config.output.chunkLoadingGlobal = `webpackJsonp_${name}`
		// 写项目启动的源，否则图片无法显示
		config.output.publicPath = 'http://localhost:40001/'
		return config
	},
	devServer: (configFunction) => {
		return function (proxy, allowedHost) {
			const config = configFunction(proxy, allowedHost)
			config.open = false
			config.hot = false
			config.headers = {
				'Access-Control-Allow-Origin': '*',
			}
			// Return your customised Webpack Development Server config.
			return config
		}
	},
}
