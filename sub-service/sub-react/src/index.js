import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import App from './App'

function render(props) {
	const { container } = props
	const root = container
		? container.querySelector('#root')
		: ReactDOM.createRoot(document.getElementById('root'))
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	)
}

if (!window.__POWERED_BY_QIANKUN__) {
	render({})
}
export async function bootstrap() {
	console.log('[react16] react app bootstraped')
}

export async function mount(props) {
	console.log('我来挂载咯....', props)
	render(props)
}

export async function unmount(props) {
	console.log('我要走咯:sub-react....')
	const { container } = props
	ReactDOM.unmountComponentAtNode(
		container
			? container.querySelector('#root')
			: document.querySelector('#root')
	)
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
