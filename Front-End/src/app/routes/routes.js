import authRoutes from './authRoutes'
import commonRoutes from './commonRoutes'

const routes = [
	...authRoutes,
	...commonRoutes
]

export default routes