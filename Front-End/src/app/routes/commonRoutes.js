import { 
	HomePage,
	GenerateVideoPage,
	// Dashboard,
	// Setting,
} from '@pages'

const commonRoutes = [
	{
		path: '/',
		element: <HomePage />,
		layout: 'main',
		isSign: false,	
	},
	{
		path: '/generate-video',
		element: <GenerateVideoPage />,
		layout: 'main',
		isSign: true,
	}
	// {
	// 	path: '/dashboard',
	// 	element: <Dashboard />,
	// 	layout: 'main',
	// 	isSign: true
	// },
	// {
	// 	path: '/setting',
	// 	element: <Setting />,
	// 	layout: 'main',
	// 	isSign: true,
	// }
]

export default commonRoutes