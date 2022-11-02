import { defineConfig } from 'vite'
import qiankun from 'vite-plugin-qiankun'
import reactRefresh from '@vitejs/plugin-react-refresh'
// useDevMode 开启时与热更新插件冲突
const useDevMode = true
// https://vitejs.dev/config/
export default ({ mode }) => {
	const __DEV__ = mode === 'development'
	return defineConfig({
		plugins: [
			...(useDevMode ? [] : [reactRefresh()]),
			qiankun('sub-vite-react', {
				useDevMode: true,
			}),
		],
		server: {
			port: 40002,
			host: '0.0.0.0',
			// 设置源是因为图片资源会找错位置所以通过这个让图片等资源不会找错
			origin: '//localhost:40002',
			cors: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
		},
		base: __DEV__ ? '/' : '//localhost:40002',
	})
}
