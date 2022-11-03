import {
	registerMicroApps,
	runAfterFirstMounted,
	setDefaultMountApp,
	start,
} from 'qiankun'
// 引入vue实例
import { isLoading } from '@/App'
import store from '@/store/index'

/**
 * 加载动画运行
 * @param loading
 *
 */
function loader(loading: boolean) {
	isLoading.value = loading
	// if(instance && instance.$children)
}
const microApps = [
	{
		name: 'sub-react',
		developer: 'react',
		entry: '//localhost:40001',
		activeRule: '/sub-react',
	},
	{
		name: 'sub-vite-react',
		developer: 'vite-react',
		entry: '//localhost:40002',
		activeRule: '/sub-vite-react',
	},
]
const apps = microApps.map((item) => {
	return {
		...item,
		loader, // 给子应用配置加上loader方法
		container: '#sub-container',
		props: {
			developer: item.developer, // 下发基础路由
			routerBase: item.activeRule, // 下发基础路由
			getGlobalState: store.getGlobalState,
			useAppIgnore: store.useAppIgnore,
		},
	}
})

registerMicroApps(apps, {
	beforeMount: [
		(app): any => {
			console.log('开始挂载：', app.name)
		},
	],
	afterMount: [
		(app): any => {
			console.log(app.name, '挂载成功了')
		},
	],
	afterUnmount: [
		(app): any => {
			console.log('贾维斯卸载 ', app.name)
			store.useAppIgnore!('marster', 'vue@next')
		},
	],
})

/**
 * 设置默认进入的子应用
 */

// setDefaultMountApp('/sub-vite2-react')
start({
	sandbox: {
		experimentalStyleIsolation: true,
	},
})

runAfterFirstMounted(() => {
	console.log('贾维斯开机')
})
export { microApps }
export default apps
