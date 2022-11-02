import styles from './Main.module.scss'
import { defineComponent } from 'vue'
export const Main = defineComponent({
	setup() {
		return () => {
			return (
				<div class={styles.main}>
					<div class={styles.card}>
						<h2 style='letter-spacing: 30px;'>
							美女在主应用！！！
						</h2>
					</div>
				</div>
			)
		}
	},
})

// export default Main
