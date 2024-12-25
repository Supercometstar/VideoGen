import { accents, ages, genders } from '@utils'

const FilterGroup = ({ filter, setFilter }) => {

	const filters = [
		{ name: 'accent', options: accents },
		{ name: 'age', options: ages },
		{ name: 'gender', options: genders },
	]

	const handleChangeFilter = (type, value) => {
		filter[type] = value
		setFilter({ ...filter })
	}

	return (
		<div className='mb-4 flex flex-row gap-2'>
			{
				filters.map((_filter, filter_idx) => (
					<select className='rounded-lg border border-gray-500 p-2 cursor-pointer' onChange={(e) => handleChangeFilter(_filter.name, e.target.value)}>
						{
							_filter.options.map((item, idx) => (
								<option value={item.value}>{item.label}</option>
							))
						}
					</select>
				))
			}
		</div>
	)
}

export default FilterGroup