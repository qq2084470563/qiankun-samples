import { initGlobalState, MicroAppStateActions } from 'qiankun'
import { reactive } from 'vue'

type keys = keyof typeof initialState
const initialState = reactive({
	ignore: 'marster',
	user: {
		name: 'xiaochen',
		author: 'chenxiansheng',
		developer: 'vue@next',
	},
})
const actions: MicroAppStateActions & { getGlobalState?: Function } =
	initGlobalState(initialState)
// 在当前应用监听全局状态，
actions.onGlobalStateChange((newState, prev) => {
	// newState变更后状态，prev变更前状态
	console.log('main change', JSON.stringify(newState), JSON.stringify(prev))
	Object.assign(initialState, newState)
	console.log('state..', initialState)
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key?: keys) => {
	return key ? initialState[key] : initialState
}
export default actions
