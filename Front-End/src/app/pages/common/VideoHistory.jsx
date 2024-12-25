import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { getVideos } from '@store/actions/video.action'

const VideoHistoryPage = () => {

	const dispatch = useDispatch()
	const videos = useSelector(store => store.video.data)

	useEffect(() => {
		const _ = async () => {
			const response = await dispatch(getVideos())
		}

		_()
	}, [])

	return (
		<div className='container flex flex-col m-auto mt-4 border border-gray-400 p-3 rounded-lg'>
			<h3 className='text-2xl my-3 font-bold'>Your Videos</h3>
			<div className='grid grid-cols-3 gap-2'>
				{
					videos.map((item, idx) => (
						<video className='rounded-lg shadow-lg w-full h-full' controls>
							<source src={item} />
						</video>
					))
				}
			</div>
		</div>
	)
}

export default VideoHistoryPage