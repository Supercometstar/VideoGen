const RatioSelect = ({ label, options, selected, setSelected }) => {

	const handleClick = (item) => {
		setSelected(item)
	}

	return (
		<div className='my-2'>
			<h3 className='text-lg'>{label}</h3>
			<div className='grid grid-cols-3 rounded-lg border border-gray-500 overflow-hidden'>
				{
					options.map((item, idx) => (
						<div className={`${selected===item?'bg-blue-400 text-white':'bg-white hover:bg-gray-100'} flex flex-col p-5 border-x border-gray-500 items-center cursor-pointer duration-200`} onClick={() => {handleClick(item)}}>
							<div className='h-8 flex flex-row items-center'>
								<div className={`${selected===item?'border-white ':''}border border-gray-500 rounded-md border-2`} style={{ width: item.w*2, height: item.h*2 }}></div>
							</div>
							<h3 className='text-md text-center'>{`${item.name} (${item.wn}:${item.hn})`}</h3>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default RatioSelect