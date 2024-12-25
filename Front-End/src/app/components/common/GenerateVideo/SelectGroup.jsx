const SelectGroup = ({ label, options, selected, setSelected }) => {

	const handleChange = (e) => {
		setSelected(e.target.value)
	}

	return (
		<div className='my-2'>
			<h3 className='text-lg'>{label}</h3>
			<select className='w-full border border-gray-900 rounded-lg p-2 cursor-pointer' onChange={handleChange}>
				{
					options.map((item, idx) => (
						<option className='p-4' value={item}>{item}</option>
					))
				}
			</select>
		</div>
	)
}

export default SelectGroup