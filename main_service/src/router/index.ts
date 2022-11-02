import { createRouter, createWebHistory } from 'vue-router'
import { MyRouteType } from '@/myTypes'
import { microApps } from '@/qiankun'
import { Main } from '@pages/Main'
import { Sub } from '@pages/sub'
const menuRoutes: MyRouteType[] = [
	{
		path: '/index',
		key: '/index',
		name: 'Index',
		component: () => Promise.resolve(Main),
	},
]

const routes: MyRouteType[] = [
	{
		path: '/',
		key: '/',
		redirect: '/index',
	},
	{
		path: '/:pathMatch(.*)',
		key: '*',
		redirect: '/404',
	},
]

microApps.forEach((item) => {
	menuRoutes.push({
		path: item.activeRule,
		key: item.name,
		name: item.name,
		component: () => Promise.resolve(Sub),
	})
})
routes.push(...menuRoutes)
const router = createRouter({
	history: createWebHistory(),
	routes,
})

export { router, menuRoutes as routes }
