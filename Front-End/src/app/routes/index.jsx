import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { MainLayout, SimpleLayout } from '@layouts'

import routes from './routes'

const AppRouter = () => {
	return (
		<Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
			<Routes>
				<Route element={<MainLayout />}>
					{
						routes.filter((route) => route.layout === 'main').map((route, route_idx) => (
							<Route key={route_idx} path={route.path} element={route.element} />
						))
					}
				</Route>
				<Route element={<SimpleLayout />}>
					{
						routes.filter((route) => route.layout === 'simple').map((route, route_idx) => (
							<Route key={route_idx} path={route.path} element={route.element} />
						))
					}
				</Route>
			</Routes>
		</Router>
	)
}

export default AppRouter