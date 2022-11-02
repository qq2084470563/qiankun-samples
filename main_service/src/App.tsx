import { defineComponent, ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import { routes } from './router'
export const isLoading = ref(true)
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
							<p>啊啊啊啊</p>
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
