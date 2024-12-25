import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
	return (
		<div className='w-full border-b border-gray-200 p-2 py-4'>
			<div className='container flex flex-row justify-between mx-auto items-center'>
				<img src='/assets/img/logo.png' width={150} alt='logo' />
				<button className='rounded-full hover:bg-gray-100 w-10 h-10'>
					<FontAwesomeIcon icon={faUser} className="text-md" />
				</button>
			</div>
		</div>
	)
}

export default Header