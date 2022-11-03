import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'bootstrap/dist/css/bootstrap.css'
import App from './App'
import './public-path'
let root = null
function render(props) {
	const { container } = props
	const root = container
		? ReactDOM.createRoot(container.querySelector('#root'))
		: ReactDOM.createRoot(document.getElementById('root'))
	console.log(root)
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
	return root
}

if (!window.__POWERED_BY_QIANKUN__) {
	root = render({})
}
export async function bootstrap() {
	console.log('[react16] react app bootstraped')
}

export async function mount(props) {
	console.log('我来挂载咯....', props)
	props.useAppIgnore(props.name, props.developer)
	root = render(props)
}

export async function unmount(props) {
	console.log('我要走咯:sub-react....')
	root.unmount()
}
// function useqAppStore(props) {
// 	props.onGlobalStateChange &&
// 		props.onGlobalStateChange(
// 			(value, prev) =>
// 				console.log(
// 					`[onGlobalStateChange - ${props.name}]:`,
// 					value,
// 					prev
// 				),
// 			true
// 		)
// 	props.setGlobalState &&
// 		props.setGlobalState({
// 			ignore: props.name,
// 			user: {
// 				developer: props.developer,
// 			},
// 		})
// }
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
