const HomePage = () => {
	return (
		<div className='container mx-auto'>
			<h3 className='text-4xl font-bold text-center mt-20'>All in one AI video platform</h3>
			<div className='grid grid-cols-2 items-center gap-12 border border-gray-100 rounded-xl shadow-sm w-[80%] mx-auto mt-8 p-16'>
				<div className='p-4 pr-20'>
					<h3 className='text-3xl font-bold mb-3'>Generate AI videos from text</h3>
					<div className='text-lg'>Enter your text or prompt and select a video style or template that fits your tone. Vadoo AI video generator will create an AI video with suitable visuals and animations, which you can then customize further. Enhance the audio by adding voiceovers, and use Vadoo AI's editing tools to refine your video. Once you're satisfied, export it for YouTube, Instagram, or TikTok. With Vadoo AI video generator, creating engaging and professional-quality AI videos is simple and intuitive.</div>
				</div>
				<div className='p-4'>
					<img className='rounded-xl shadow-md' alt='home-img' src='/assets/img/home-img.webp' />
				</div>
			</div>
		</div>
	)
}

export default HomePage