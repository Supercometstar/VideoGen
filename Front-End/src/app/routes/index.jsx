import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { MainLayout, SimpleLayout } from '@layouts'
import { privateRoute } from '@utils'

import routes from './routes'

const AppRouter = () => {
	return (
		<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Routes>
				<Route element={<MainLayout />}>
					{
						routes.filter((route) => route.layout === 'main').map((route, route_idx) => (
							<Route key={route_idx} path={route.path} element={privateRoute(route.element, route.isSign)} />
						))
					}
				</Route>
				<Route element={<SimpleLayout />}>
					{
						routes.filter((route) => route.layout === 'simple').map((route, route_idx) => (
							<Route key={route_idx} path={route.path} element={privateRoute(route.element, route.isSign)} />
						))
					}
				</Route>
				<Route path='*' element={<Navigate to='/video/generate' />} />
			</Routes>
		</Router>
	)
}

export default AppRouter