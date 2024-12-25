import { useState } from 'react'

import { VoiceFilterGroup, VoiceItem } from '.'

const VoiceSelectModal = ({ ref, options, selected, setSelected }) => {

	const [ filter, setFilter ] = useState({
		accent: '',
		age: '',
		gender: ''
	})

	const handleClickBackdrop = (e) => {
		if (e.target === ref.current) {
			ref.current.classList.add('hidden')
		}
	}

	const handleCloseClick = () => {
		ref.current.classList.add('hidden')
	}

	return (
		<div ref={ref} className='fixed inset-0 z-10 bg-black bg-opacity-30 flex items-center justify-center transition duration-300 ease-in-out hidden' onClick={handleClickBackdrop}>
			<div className='flex flex-col bg-white rounded-lg shadow-lg max-w-sm w-full p-6 h-full max-h-[90%] w-full max-w-[90%] lg:max-w-[60%]'>
				<div className='border border-gray-500 p-2 h-full overflow-auto scrollbar-thin rounded-md'>
					<VoiceFilterGroup filter={filter} setFilter={setFilter} />
					<div className='grid grid-cols-3 gap-2'>
						{
							options
								.filter((item) => filter.accent === '' || item.accent.toLowerCase() === filter.accent.toLowerCase())
								.filter((item) => filter.age === '' || item.age.toLowerCase() === filter.age.toLowerCase())
								.filter((item) => filter.gender === '' || item.gender.toLowerCase() === filter.gender.toLowerCase())
								.map((item, idx) => (
								<VoiceItem item={item} selected={selected} setSelected={setSelected} />
							))
						}
					</div>
				</div>
				<div className='flex mt-2 gap-2'>
					<button className='border rounded-lg py-1 px-3 hover:bg-gray-200' onClick={handleCloseClick}>Close</button>
				</div>
			</div>
		</div>
	)
}

export default VoiceSelectModal