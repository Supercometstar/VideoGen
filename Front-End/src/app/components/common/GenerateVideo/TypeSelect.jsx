const TypeSelect = ({ types, selected, setSelected }) => {

	const handleClick = (item) => {
		setSelected(item)
	}

	return (
		<div className='rounded-lg bg-gray-100 border grid grid-cols-3 gap-3 p-1'>
			{
				types.map((item, idx) => (
					<div className={`${selected===item?'bg-white border text-blue-500 ':'hover:bg-gray-200 '}w-full text-center p-2 text-lg rounded-lg cursor-pointer duration-200 box-border`} onClick={() => {handleClick(item)}}>
						{item.name}
					</div>
				))
			}
		</div>
	)
}

export default TypeSelect