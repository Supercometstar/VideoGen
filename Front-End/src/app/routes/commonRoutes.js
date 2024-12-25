import { 
	HomePage,
	GenerateVideoPage,
	VideoHistoryPage,
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
		path: '/video/generate',
		element: <GenerateVideoPage />,
		layout: 'main',
		isSign: true,
	},
	{
		path: '/video/history',
		element: <VideoHistoryPage />,
		layout: 'main',
		isSign: true
	},
	// {
	// 	path: '/setting',
	// 	element: <Setting />,
	// 	layout: 'main',
	// 	isSign: true,
	// }
]

export default commonRoutes