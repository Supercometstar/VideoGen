import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const VoiceItem = ({ item, selected, setSelected }) => {

	const handleClick = () => {
		setSelected(item)
	}

	return (
		<div className='relative group flex flex-row items-center border border-gray-500 shadow-lg rounded-lg p-3 hover:bg-blue-400 hover:text-white cursor-pointer' onClick={handleClick}>
			<FontAwesomeIcon className={`${item===selected?'':'hidden'} absolute top-2 right-2 p-2 bg-blue-500 rounded-full text-white text-xs`} icon={faCheck} />
			<FontAwesomeIcon className='mr-2' icon={faCirclePlay} size='2x' />
			<div className='w-[calc(100%-40px)]'>
				<h3 className=''>{item.name}</h3>
				<h3 className='group-hover:text-white text-gray-500 text-ellipsis whitespace-nowrap overflow-hidden w-full'>{`${item.accent}, ${item.gender}, ${item.age}, ${item.description}`}</h3>
			</div>
		</div>
	)
}

export default VoiceItem