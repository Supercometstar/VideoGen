import { 
	SignUpPage,
	SignInPage,
	VerifyPage,
	// ForgotPassword,
	// ResetPassword,
} from '@pages'

const authRoutes = [
	{
		path: '/auth/sign-up',
		element: <SignUpPage />,
		layout: 'simple',
		isSign: false,
	},
	{
		path: '/auth/sign-in',
		element: <SignInPage />,
		layout: 'simple',
		isSign: false,
	},
	{
		path: '/auth/verify',
		element: <VerifyPage />,
		layout: 'simple',
		isSign: false,
	},
	// {
	// 	path: '/auth/forgot-password',
	// 	element: <ForgotPassword />,
	// 	layout: 'simple',
	// 	isSign: false,
	// },
	// {
	// 	path: '/auth/reset-password',
	// 	element: <ResetPassword />,
	// 	layout: 'simple',
	// 	isSign: false,
	// },
	// {
	// 	path: '/auth/verify',
	// 	element: <Verification />,
	// 	layout: 'simple',
	// 	isSign: false,
	// }
]

export default authRoutes