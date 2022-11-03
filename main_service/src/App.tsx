import { defineComponent, ref, computed } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { routes } from './router'
import store from './store'
export const isLoading = ref(true)
const ignore = computed(() => store.getGlobalState!('ignore'))

const App = defineComponent({
	setup() {
		return () => {
			return (
				<div class='main-App'>
					<nav>
						{routes.map((item) => {
							return (
								<RouterLink
									class='route-item'
									to={item.path}>
									{item.name}
								</RouterLink>
							)
						})}
					</nav>
					<main>
						<header>
							<h2>你好！</h2>
							<p>主应用的state：子应用名称: {ignore.value}</p>
						</header>
						<aside>
							<RouterView />
						</aside>
					</main>
				</div>
			)
		}
	},
})
export default App
