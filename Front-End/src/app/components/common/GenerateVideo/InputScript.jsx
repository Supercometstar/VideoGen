const InputScript = ({ label, inputed, setInputed }) => {

	const handleChange = (e) => {
		setInputed(e.target.value)
	}

	return (
		<div className='my-2 w-full'>
			<h3 className='text-lg'>{label}</h3>
			<textarea className='w-full border border-gray-900 rounded-lg p-2 resize-none scrollbar-thin' rows={4} onChange={handleChange} />
		</div>
	)
}

export default InputScript