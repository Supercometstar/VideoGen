import { useState } from 'react'

import { SelectGroup, TypeSelect, StyleSelect, RatioSelect, VoiceSelect, InputScript, OutputScript } from '@components'

import { scriptTypes, videoTopics, voices, languages, durations, ratios, styles } from '@utils'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons'

const GenerateVideoPage = () => {

	const [ selectedScript, setSelectedScript ] = useState(scriptTypes[0])
	const [ selectedRatio, setSelectedRatio ] = useState(ratios[0])
	const [ selectedStyle, setSelectedStyle ] = useState(styles[0])
	const [ selectedVoice, setSelectedVoice ] = useState(voices[0])

	const [ selectedTopic, setSelectedTopic ] = useState(videoTopics[0])
	const [ selectedLanguage, setSelectedLanguage ] = useState(languages[0])
	const [ selectedDuration, setSelectedDuration ] = useState(durations[0])

	const [ inputedScript, setInputedScript ] = useState('')
	const [ outputedScript, setOutputedScript ] = useState('')

	return (
		<div className='container flex flex-col mx-auto px-7 py-10 w-full h-full max-w-[95%] md:max-w-[80%] lg:max-w-4xl border border-gray-200 shadow-sm rounded-lg mt-4 overflow-auto scrollbar-thin'>
			<h3 className='text-2xl font-bold text-center mb-3'>Generate Video</h3>
			<TypeSelect types={scriptTypes} selected={selectedScript} setSelected={setSelectedScript} />
			<SelectGroup label={'What will your video be about?'} options={videoTopics} selected={selectedTopic} setSelected={setSelectedTopic} />
			<VoiceSelect label={'Voices'} options={voices} selected={selectedVoice} setSelected={setSelectedVoice} />
			<SelectGroup label={'Video Language'} options={languages} selected={selectedLanguage} setSelected={setSelectedLanguage} />
			<SelectGroup label={'Duration'} options={durations} selected={selectedDuration} setSelected={setSelectedDuration} />
			<StyleSelect label={'Styles'} options={styles} selected={selectedStyle} setSelected={setSelectedStyle} />
			<RatioSelect label={'Aspect Ratio'} options={ratios} selected={selectedRatio} setSelected={setSelectedRatio} />
			<InputScript label={'Input Script'} inputed={inputedScript} setInputed={setInputedScript} />
			<OutputScript label={'Output Script'} outputed={outputedScript} setOutputed={setOutputedScript} />

			<div className=''>
				<button className='bg-blue-500 rounded-md text-white py-2 px-4 text-sm shadow-md hover:bg-blue-400 w-fit'>
					<FontAwesomeIcon icon={faWandMagicSparkles} />&nbsp;&nbsp;Generate Script
				</button>
				<button className='bg-blue-500 rounded-md text-white py-2 px-4 text-sm shadow-md hover:bg-blue-400 w-fit'>
					<FontAwesomeIcon icon={faWandMagicSparkles} />&nbsp;&nbsp;Regenerate Script
				</button>
				<button className='bg-blue-500 rounded-md text-white py-2 px-4 text-sm shadow-md hover:bg-blue-400 w-fit'>
					<FontAwesomeIcon icon={faWandMagicSparkles} />&nbsp;&nbsp;Process
				</button>
			</div>
		</div>
	)
}

export default GenerateVideoPage