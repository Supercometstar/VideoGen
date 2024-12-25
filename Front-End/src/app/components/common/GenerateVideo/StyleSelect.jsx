import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const StyleSelect = ({ label, options, selected, setSelected }) => {

	const handleClick = (item) => {
		setSelected(item)
	}

	return (
		<div className='my-2'>
			<h3 className='text-lg'>{label}</h3>
			<div className='flex flex-row rounded-lg border border-gray-500 overflow-auto gap-2 p-2 scrollbar-thin'>
				{
					options.map((item, idx) => (
						<div className={`${selected===item?'border-blue-500':'hover:border-blue-300'} relative flex flex-col min-w-[150px] border-2 border-gray-500 items-center cursor-pointer rounded-lg overflow-hidden duration-200`} onClick={() => {handleClick(item)}}>
							{
								selected===item?<FontAwesomeIcon className='absolute left-2 top-2 rounded-full bg-blue-500 text-white p-1 text-[6px]' icon={faCheck} />
								:<></>
							}
							<img className='' src={`https://d3adwkbyhxyrtq.cloudfront.net/static/public${item.style}`} width={150} alt={item.name} />
							<h3 className='absolute bottom-0 text-sm text-center bg-black bg-opacity-50 text-white w-full'>{item.name}</h3>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default StyleSelect