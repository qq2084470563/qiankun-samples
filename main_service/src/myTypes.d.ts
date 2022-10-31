import type { RouteRecordRaw } from 'vue-router'

export type MyRouteType = RouteRecordRaw & { key: string }

// type QianKunObj = RegistrableApp & {
// 	developer: string
// }
// export type MyQianKun = Array<QianKunObj>
