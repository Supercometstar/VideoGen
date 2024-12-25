import { Outlet } from 'react-router-dom'

import { Header, Container } from '@components'

const MainLayout = ({ children }) => {
	return (
		<div className='flex flex-col'>
			<Header />
			<Container>
				<Outlet />
			</Container>
		</div>
	)
}

export default MainLayout