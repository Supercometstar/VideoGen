import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<div className='w-full border-b border-gray-200 p-2 py-4'>
			<div className='container flex flex-row justify-between mx-auto items-center'>
				<div className='flex flex-row items-center gap-8'>
					<img src='/assets/img/logo.png' width={150} alt='logo' />
					<div className='flex flex-row items-center gap-6'>
						<Link to='/video/generate'>
							<button className='text-lg hover:bg-gray-100 rounded-lg py-2 px-3'>Generate</button>
						</Link>
						<Link to='/video/history'>
							<button className='text-lg hover:bg-gray-100 rounded-lg py-2 px-3'>History</button>
						</Link>
					</div>
				</div>
				<button className='rounded-full hover:bg-gray-100 w-10 h-10'>
					<FontAwesomeIcon icon={faRightFromBracket} className="text-md" />
				</button>
			</div>
		</div>
	)
}

export default Header