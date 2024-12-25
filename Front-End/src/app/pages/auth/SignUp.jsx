import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { PaymentForm } from '@components'

import { registerUser } from '@store/actions/auth.action'

const SignUpPage = () => {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const [ email, setEmail ] = useState('')
	const [ password, setPassword ] = useState('')
	const [ confirm, setConfirm ] = useState('')

	const handleEmailChange = (e) => {
		setEmail(e.target.value)
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value)
	}

	const handleConfirmChange = (e) => {
		setConfirm(e.target.value)
	}
	
	const handleSubmit = async () => {
		if (password !== confirm) {
			alert('Confirm password is not corrent!')
			return
		}
		const response = await dispatch(registerUser({ email, password, confirm }))
		if (response) navigate('/auth/sign-in')
		else alert('Something went wrong!')
	}

	return (
		<div className='w-full'>
			<div className='w-full flex flex-col items-center justify-center'>
				<img className='pt-8' src='/assets/img/logo.png' width={150} alt='logo' />
				<div className='bg-white rounded-lg flex flex-col md:w-full h-full md:max-w-[650px] mt-12 mx-6 md:mx-0 md:mt-24 shadow-md md:px-16 px-4 pt-12 border mb-12 md:mb-0 border-gray-100'>
					<h3 className='md:text-4xl text-3xl font-bold'>Welcome</h3>
					<h3 className='text-sm mt-4'>Please fill your email and password to sign up</h3>
					{/*<h3 className='text-sm mt-4'>Please fill your email or use your Google account to sign in</h3>
					<button className='py-3 px-5 w-full rounded-md border shadow-sm border-gray-100 bg-white text-black mt-10 hover:bg-black hover:border-black hover:text-white'>
						<div className='flex items-center justify-center'>
							<img src='https://ai.vadoo.tv/google-signin-logo.svg' alt='google' width={20} height={20} />
							<span className='ml-2'>Login with Google</span>
						</div>
					</button>
					<div className='w-full flex items-center justify-center my-6'>
						<div class="w-full bg-gray-200 h-[1px]"></div>
						<div class="mx-4">OR</div>
						<div class="w-full bg-gray-200 h-[1px]"></div>
					</div>*/}
					<span className='text-base font-medium mt-2'>Email</span>
					<input placeholder='Enter Email' className='p-3 w-full border border-gray-100 rounded-xl' name='email' onChange={handleEmailChange} value={email} />
					<span className='text-base font-medium mt-2'>Password</span>
					<input placeholder='Enter Email' type='password' className='p-3 w-full border border-gray-100 rounded-xl' name='email' onChange={handlePasswordChange} value={password} />
					<span className='text-base font-medium mt-2'>Confirm</span>
					<input placeholder='Enter Email' type='password' className='p-3 w-full border border-gray-100 rounded-xl' name='email' onChange={handleConfirmChange} value={confirm} />
					{/*<PaymentForm />*/}
					<button className='py-3 px-5 w-full rounded-md border border-black bg-black text-white mt-5 hover:bg-white hover:text-black hover:border-gray-600' onClick={handleSubmit}>Submit</button>
					<div className='mt-4 text-xs mb-20'>
						By clicking Submit, you agree to our&nbsp;
						<a className='text-blue-500 hover:underline' target='_blank' href='#'>Terms of Service</a>
						&nbsp;and&nbsp;
						<a className='text-blue-500 hover:underline' target='_blank' href='#'>Privacy Policy</a>
						.
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage