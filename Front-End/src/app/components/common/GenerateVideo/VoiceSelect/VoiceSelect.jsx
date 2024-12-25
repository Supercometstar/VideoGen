import { useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import { VoiceSelectModal } from '.'

const VoiceSelect = ({ label, options, selected, setSelected }) => {
	
	const dialogRef = useRef(null)

	const handleClick = (e) => {
		dialogRef.current.classList.remove('hidden')

	}

	return (
		<div className='my-2'>
			<h3 className='text-lg'>{label}</h3>
			<button className='flex w-full border border-gray-900 rounded-lg p-2 cursor-pointer justify-between items-center' onClick={handleClick}>
				{selected?selected.name:'Select Voice'}
				<FontAwesomeIcon icon={faAngleDown} />
			</button>
			<VoiceSelectModal ref={dialogRef} options={options} selected={selected} setSelected={setSelected} />
		</div>
	)
}

export default VoiceSelect