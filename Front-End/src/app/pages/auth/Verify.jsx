import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const VerifyPage = () => {
	return (
		<div className='w-full'>
			<div className='w-full flex flex-col items-center justify-center'>
				<img className='pt-8' src='/assets/img/logo.png' width={150} alt='logo' />
				<div className='bg-white rounded-lg flex flex-col md:w-full h-full md:max-w-[650px] mt-12 mx-6 md:mx-0 md:mt-24 shadow-md md:px-16 px-4 pt-12 border mb-12 md:mb-0 border-gray-100'>
					<h3 className='md:text-4xl text-3xl font-bold'>Welcome</h3>
					<h3 className='text-sm my-4'>Please fill your verification 6 code to verify</h3>
					<span className='text-base font-medium mb-2'>Verification Code</span>
					<input placeholder='Enter Verification Code' className='p-3 w-full border border-gray-100 rounded-xl' name='email' value='' />
					<button className='py-3 px-5 w-full rounded-md border border-black bg-black text-white mt-5 hover:bg-white hover:text-black hover:border-gray-600'>Submit</button>
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

export default VerifyPage