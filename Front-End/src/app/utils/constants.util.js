export const baseUrl = `${window.location.hostname}:1005`

export const scriptTypes = [
	{ 'name': 'vadoo' },
	{ 'name': 'openAI' },
	{ 'name': 'etc' },
]

export const videoTopics = [
    "Random AI Story",
    "Scary Stories",
    "Motivational",
    "Bedtime Stories",
    "Interesting History",
    "Fun Facts",
    "Long Form Jokes",
    "Life Pro Tips",
    "ELI5",
    "Philosophy",
    "Custom"
]

export const aiImageThemes = [
    "None",
    "3d model",
    "analog film",
    "anime",
    "cartoon",
    "cinematic",
    "comic book",
    "craft clay",
    "digital art",
    "fantasy art",
    "isometric",
    "line art",
    "low poly",
    "neon punk",
    "origami",
    "photographic",
    "pixel art",
    "playground",
    "texture",
    "watercolor"
]

export const captionThemes = [
    "Hormozi_1",
    "Beast",
    "Tracy",
    "Noah",
    "Karl",
    "Luke",
    "Devin",
    "Hormozi_2",
    "Hormozi_3",
    "Ali",
    "Celine",
    "Maya",
    "Ella",
    "Dan",
    "David",
    "Umi",
    "Iman",
    "William"
]

export const languages = [
    "English",
    "English (USA)",
    "English (UK)",
    "English (Australia)",
    "English (Canada)",
    "Japanese",
    "Chinese",
    "German",
    "Hindi",
    "French",
    "French (France)",
    "French (Canada)",
    "Korean",
    "Portuguese (Brazil)",
    "Portuguese (Portugal)",
    "Portuguese",
    "Spanish (Spain)",
    "Spanish (Mexico)",
    "Italian",
    "Spanish",
    "Indonesian",
    "Dutch",
    "Turkish",
    "Filipino",
    "Polish",
    "Swedish",
    "Bulgarian",
    "Romanian",
    "Arabic (Saudi Arabia)",
    "Arabic (UAE)",
    "Arabic",
    "Czech",
    "Greek",
    "Finnish",
    "Croatian",
    "Malay",
    "Slovak",
    "Danish",
    "Tamil",
    "Ukrainian",
    "Russian",
    "Hungarian",
    "Norwegian",
    "Vietnamese"
]

export const durations = [
	'30 To 60 Seconds',
	'60 To 90 Seconds',
	'90 To 120 Seconds',
	'120 To 180 Seconds',
	'5 Minutes',
	'10 Minutes',
]

export const ratios = [
    { wn: 9, hn: 16, w: 9, h: 16, name: 'Vertical' },
    { wn: 16, hn: 9, w: 16, h: 9, name: 'Horizontal' },
    { wn: 1, hn: 1, w: 12, h: 12, name: 'Square' },
]

export const styles = [{
    style: "/ai_styles/white-bg.jpg",
    name: "None"
}, {
    style: "/ai_styles/cinematic.jpg",
    name: "Cinematic"
}, {
    style: "/ai_styles/photographic.jpg",
    name: "Photographic"
}, {
    style: "/ai_styles/digital-art.jpg",
    name: "Digital art"
}, {
    style: "/ai_styles/fantasy-art.jpg",
    name: "Fantasy art"
}, {
    style: "/ai_styles/3d-model.jpg",
    name: "3d model"
}, {
    style: "/ai_styles/neon-punk.jpg",
    name: "Neon punk"
}, {
    style: "/ai_styles/analog-film.jpg",
    name: "Analog film"
}, {
    style: "/ai_styles/anime.jpg",
    name: "Anime"
}, {
    style: "/ai_styles/cartoon.jpg",
    name: "Cartoon"
}, {
    style: "/ai_styles/comic-book.jpg",
    name: "Comic book"
}, {
    style: "/ai_styles/craft-clay.jpg",
    name: "Craft clay"
}, {
    style: "/ai_styles/isometric.jpg",
    name: "Isometric"
}, {
    style: "/ai_styles/line-art.jpg",
    name: "Line art"
}, {
    style: "/ai_styles/low-poly.jpg",
    name: "Low poly"
}, {
    style: "/ai_styles/origami.jpg",
    name: "Origami"
}, {
    style: "/ai_styles/pixel-art.jpg",
    name: "Pixel art"
}, {
    style: "/ai_styles/playground.jpg",
    name: "Playground"
}, {
    style: "/ai_styles/texture.jpg",
    name: "Texture"
}, {
    style: "/ai_styles/watercolor.jpg",
    name: "Watercolor"
}]

export const voices = [
    {
        "accent": "American",
        "age": "Adult",
        "description": "Natural",
        "gender": "Male",
        "name": "Alloy",
        "preview_url": "https://cdn.openai.com/API/docs/audio/alloy.wav",
        "source": "openai",
        "voice_id": "alloy"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Deep",
        "gender": "Male",
        "name": "Echo",
        "preview_url": "https://cdn.openai.com/API/docs/audio/echo.wav",
        "source": "openai",
        "voice_id": "echo"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Expressive",
        "gender": "Female",
        "name": "Fable",
        "preview_url": "https://cdn.openai.com/API/docs/audio/fable.wav",
        "source": "openai",
        "voice_id": "fable"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Authoritative",
        "gender": "Male",
        "name": "Onyx",
        "preview_url": "https://cdn.openai.com/API/docs/audio/onyx.wav",
        "source": "openai",
        "voice_id": "onyx"
    },
    {
        "accent": "American",
        "age": "Young",
        "description": "Energetic",
        "gender": "Female",
        "name": "Nova",
        "preview_url": "https://cdn.openai.com/API/docs/audio/nova.wav",
        "source": "openai",
        "voice_id": "nova"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Soft",
        "gender": "Female",
        "name": "Shimmer",
        "preview_url": "https://cdn.openai.com/API/docs/audio/shimmer.wav",
        "source": "openai",
        "voice_id": "shimmer"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "calm",
        "gender": "female",
        "name": "Rachel",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/21m00Tcm4TlvDq8ikWAM/b4928a68-c03b-411f-8533-3d5c299fd451.mp3",
        "source": "elevenlabs",
        "voice_id": "21m00Tcm4TlvDq8ikWAM"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "well-rounded",
        "gender": "male",
        "name": "Drew",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/29vD33N1CtxCmqQRPOHJ/b99fc51d-12d3-4312-b480-a8a45a7d51ef.mp3",
        "source": "elevenlabs",
        "voice_id": "29vD33N1CtxCmqQRPOHJ"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "war veteran",
        "gender": "male",
        "name": "Clyde",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/2EiwWnXFnvU5JabPnv8n/65d80f52-703f-4cae-a91d-75d4e200ed02.mp3",
        "source": "elevenlabs",
        "voice_id": "2EiwWnXFnvU5JabPnv8n"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "authoritative",
        "gender": "male",
        "name": "Paul",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/5Q0t7uMcjvnagumLfvZi/a4aaa30e-54c4-44a4-8e46-b9b00505d963.mp3",
        "source": "elevenlabs",
        "voice_id": "5Q0t7uMcjvnagumLfvZi"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "expressive",
        "gender": "female",
        "name": "Aria",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/9BWtsMINqrJLrRacOk9x/405766b8-1f4e-4d3c-aba1-6f25333823ec.mp3",
        "source": "elevenlabs",
        "voice_id": "9BWtsMINqrJLrRacOk9x"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "strong",
        "gender": "female",
        "name": "Domi",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/AZnzlk1XvdvUeBnXmlld/b3c36b01-f80d-4b16-a698-f83682dee84c.mp3",
        "source": "elevenlabs",
        "voice_id": "AZnzlk1XvdvUeBnXmlld"
    },
    {
        "accent": "British",
        "age": "young",
        "description": "conversational",
        "gender": "male",
        "name": "Dave",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/CYw3kZ02Hs0563khs1Fj/872cb056-45d3-419e-b5c6-de2b387a93a0.mp3",
        "source": "elevenlabs",
        "voice_id": "CYw3kZ02Hs0563khs1Fj"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "confident",
        "gender": "male",
        "name": "Roger",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/CwhRBWXzGAHq8TQ4Fs17/58ee3ff5-f6f2-4628-93b8-e38eb31806b0.mp3",
        "source": "elevenlabs",
        "voice_id": "CwhRBWXzGAHq8TQ4Fs17"
    },
    {
        "accent": "Irish",
        "age": "old",
        "description": "sailor",
        "gender": "male",
        "name": "Fin",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/D38z5RcWu1voky8WS1ja/a470ba64-1e72-46d9-ba9d-030c4155e2d2.mp3",
        "source": "elevenlabs",
        "voice_id": "D38z5RcWu1voky8WS1ja"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "soft",
        "gender": "female",
        "name": "Sarah",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/EXAVITQu4vr4xnSDxMaL/01a3e33c-6e99-4ee7-8543-ff2216a32186.mp3",
        "source": "elevenlabs",
        "voice_id": "EXAVITQu4vr4xnSDxMaL"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "well-rounded",
        "gender": "male",
        "name": "Antoni",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ErXwobaYiN019PkySvjV/2d5ab2a3-4578-470f-b797-6331e46a7d55.mp3",
        "source": "elevenlabs",
        "voice_id": "ErXwobaYiN019PkySvjV"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "upbeat",
        "gender": "female",
        "name": "Laura",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/FGY2WhTYpPnrIDTdsKH5/67341759-ad08-41a5-be6e-de12fe448618.mp3",
        "source": "elevenlabs",
        "voice_id": "FGY2WhTYpPnrIDTdsKH5"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "calm",
        "gender": "male",
        "name": "Thomas",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/GBv7mTt0atIp3Br8iCZE/98542988-5267-4148-9a9e-baa8c4f14644.mp3",
        "source": "elevenlabs",
        "voice_id": "GBv7mTt0atIp3Br8iCZE"
    },
    {
        "accent": "Australian",
        "age": "middle aged",
        "description": "natural",
        "gender": "male",
        "name": "Charlie",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/IKne3meq5aSn9XLyUdCD/102de6f2-22ed-43e0-a1f1-111fa75c5481.mp3",
        "source": "elevenlabs",
        "voice_id": "IKne3meq5aSn9XLyUdCD"
    },
    {
        "accent": "British",
        "age": "middle aged",
        "description": "warm",
        "gender": "male",
        "name": "George",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/JBFqnCBsd6RMkjVDRZzb/e6206d1a-0721-4787-aafb-06a6e705cac5.mp3",
        "source": "elevenlabs",
        "voice_id": "JBFqnCBsd6RMkjVDRZzb"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "calm",
        "gender": "female",
        "name": "Emily",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/LcfcDJNUP1GQjkzn1xUU/e4b994b7-9713-4238-84f3-add8fccaaccd.mp3",
        "source": "elevenlabs",
        "voice_id": "LcfcDJNUP1GQjkzn1xUU"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "emotional",
        "gender": "female",
        "name": "Elli",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/MF3mGyEYCl7XYWbV9V6O/d8ecadea-9e48-4e5d-868a-2ec3d7397861.mp3",
        "source": "elevenlabs",
        "voice_id": "MF3mGyEYCl7XYWbV9V6O"
    },
    {
        "accent": "Transatlantic",
        "age": "middle-aged",
        "description": "intense",
        "gender": "male",
        "name": "Callum",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/N2lVS1w4EtoT3dr4eOWO/ac833bd8-ffda-4938-9ebc-b0f99ca25481.mp3",
        "source": "elevenlabs",
        "voice_id": "N2lVS1w4EtoT3dr4eOWO"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "shouty",
        "gender": "male",
        "name": "Patrick",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ODq5zmih8GrVes37Dizd/0ebec87a-2569-4976-9ea5-0170854411a9.mp3",
        "source": "elevenlabs",
        "voice_id": "ODq5zmih8GrVes37Dizd"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "confident",
        "gender": "non-binary",
        "name": "River",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/SAz9YHcvj6GT2YYXdXww/e6c95f0b-2227-491a-b3d7-2249240decb7.mp3",
        "source": "elevenlabs",
        "voice_id": "SAz9YHcvj6GT2YYXdXww"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "anxious",
        "gender": "male",
        "name": "Harry",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/SOYHLrjzK2X1ezoPC6cr/86d178f6-f4b6-4e0e-85be-3de19f490794.mp3",
        "source": "elevenlabs",
        "voice_id": "SOYHLrjzK2X1ezoPC6cr"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "articulate",
        "gender": "male",
        "name": "Liam",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/TX3LPaxmHKxFdv7VOQHJ/63148076-6363-42db-aea8-31424308b92c.mp3",
        "source": "elevenlabs",
        "voice_id": "TX3LPaxmHKxFdv7VOQHJ"
    },
    {
        "accent": "British",
        "age": "young",
        "description": "pleasant",
        "gender": "female",
        "name": "Dorothy",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ThT5KcBeYPX3keUQqHPh/981f0855-6598-48d2-9f8f-b6d92fbbe3fc.mp3",
        "source": "elevenlabs",
        "voice_id": "ThT5KcBeYPX3keUQqHPh"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "deep",
        "gender": "male",
        "name": "Josh",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/TxGEqnHWrfWFTfGW9XjX/47de9a7e-773a-42a8-b410-4aa90c581216.mp3",
        "source": "elevenlabs",
        "voice_id": "TxGEqnHWrfWFTfGW9XjX"
    },
    {
        "accent": "american",
        "age": "middle aged",
        "description": "crisp",
        "gender": "male",
        "name": "Arnold",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/VR6AewLTigWG4xSOukaG/49a22885-80d5-48e8-87a3-076fc9193d9a.mp3",
        "source": "elevenlabs",
        "voice_id": "VR6AewLTigWG4xSOukaG"
    },
    {
        "accent": "Swedish",
        "age": "young",
        "description": "seductive",
        "gender": "female",
        "name": "Charlotte",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/XB0fDUnXU5powFXDhCwa/942356dc-f10d-4d89-bda5-4f8505ee038b.mp3",
        "source": "elevenlabs",
        "voice_id": "XB0fDUnXU5powFXDhCwa"
    },
    {
        "accent": "British",
        "age": "middle-aged",
        "description": "confident",
        "gender": "female",
        "name": "Alice",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/Xb7hH8MSUJpSbSDYk0k2/d10f7534-11f6-41fe-a012-2de1e482d336.mp3",
        "source": "elevenlabs",
        "voice_id": "Xb7hH8MSUJpSbSDYk0k2"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "friendly",
        "gender": "female",
        "name": "Matilda",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/XrExE9yKIg1WjnnlVkGX/b930e18d-6b4d-466e-bab2-0ae97c6d8535.mp3",
        "source": "elevenlabs",
        "voice_id": "XrExE9yKIg1WjnnlVkGX"
    },
    {
        "accent": "Australian",
        "age": "old",
        "description": "calm",
        "gender": "male",
        "name": "James",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/ZQe5CZNOzWyzPSCn5a3c/35734112-7b72-48df-bc2f-64d5ab2f791b.mp3",
        "source": "elevenlabs",
        "voice_id": "ZQe5CZNOzWyzPSCn5a3c"
    },
    {
        "accent": "British",
        "age": "middle-aged",
        "description": "articulate",
        "gender": "male",
        "name": "Joseph",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/Zlb1dXrM653N07WRdFW3/daa22039-8b09-4c65-b59f-c79c48646a72.mp3",
        "source": "elevenlabs",
        "voice_id": "Zlb1dXrM653N07WRdFW3"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "friendly",
        "gender": "male",
        "name": "Will",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/bIHbv24MWmeRgasZH58o/8caf8f3d-ad29-4980-af41-53f20c72d7a4.mp3",
        "source": "elevenlabs",
        "voice_id": "bIHbv24MWmeRgasZH58o"
    },
    {
        "accent": "Irish",
        "age": "young",
        "description": "excited",
        "gender": "male",
        "name": "Jeremy",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/bVMeCyTHy58xNoL34h3p/66c47d58-26fd-4b30-8a06-07952116a72c.mp3",
        "source": "elevenlabs",
        "voice_id": "bVMeCyTHy58xNoL34h3p"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "expressive",
        "gender": "female",
        "name": "Jessica",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/cgSgspJ2msm6clMCkdW9/56a97bf8-b69b-448f-846c-c3a11683d45a.mp3",
        "source": "elevenlabs",
        "voice_id": "cgSgspJ2msm6clMCkdW9"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "friendly",
        "gender": "male",
        "name": "Eric",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/cjVigY5qzO86Huf0OWal/d098fda0-6456-4030-b3d8-63aa048c9070.mp3",
        "source": "elevenlabs",
        "voice_id": "cjVigY5qzO86Huf0OWal"
    },
    {
        "accent": "American",
        "age": "old",
        "description": "calm",
        "gender": "male",
        "name": "Michael",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/flq6f7yk4E4fJM5XTYuZ/c6431a82-f7d2-4905-b8a4-a631960633d6.mp3",
        "source": "elevenlabs",
        "voice_id": "flq6f7yk4E4fJM5XTYuZ"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "soft",
        "gender": "male",
        "name": "Ethan",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/g5CIjZEefAph4nQFvHAz/26acfa99-fdec-43b8-b2ee-e49e75a3ac16.mp3",
        "source": "elevenlabs",
        "voice_id": "g5CIjZEefAph4nQFvHAz"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "casual",
        "gender": "male",
        "name": "Chris",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/iP95p4xoKVk53GoZ742B/3f4bde72-cc48-40dd-829f-57fbf906f4d7.mp3",
        "source": "elevenlabs",
        "voice_id": "iP95p4xoKVk53GoZ742B"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "childlish",
        "gender": "female",
        "name": "Gigi",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/jBpfuIE2acCO8z3wKNLl/3a7e4339-78fa-404e-8d10-c3ef5587935b.mp3",
        "source": "elevenlabs",
        "voice_id": "jBpfuIE2acCO8z3wKNLl"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "expressive",
        "gender": "female",
        "name": "Freya",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/jsCqWAovK2LkecY7zXl4/8e1f5240-556e-4fd5-892c-25df9ea3b593.mp3",
        "source": "elevenlabs",
        "voice_id": "jsCqWAovK2LkecY7zXl4"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "deep",
        "gender": "male",
        "name": "Brian",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/nPczCjzI2devNBz1zQrb/2dd3e72c-4fd3-42f1-93ea-abc5d4e5aa1d.mp3",
        "source": "elevenlabs",
        "voice_id": "nPczCjzI2devNBz1zQrb"
    },
    {
        "accent": "American (South)",
        "age": "young",
        "description": "pleasant",
        "gender": "female",
        "name": "Grace",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/oWAxZDx7w5VEj9dCyTzz/84a36d1c-e182-41a8-8c55-dbdd15cd6e72.mp3",
        "source": "elevenlabs",
        "voice_id": "oWAxZDx7w5VEj9dCyTzz"
    },
    {
        "accent": "British",
        "age": "middle-aged",
        "description": "authoritative",
        "gender": "male",
        "name": "Daniel",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/onwK4e9ZLuTAKqWW03F9/7eee0236-1a72-4b86-b303-5dcadc007ba9.mp3",
        "source": "elevenlabs",
        "voice_id": "onwK4e9ZLuTAKqWW03F9"
    },
    {
        "accent": "British",
        "age": "middle-aged",
        "description": "warm",
        "gender": "female",
        "name": "Lily",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pFZP5JQG7iQjIQuC4Bku/89b68b35-b3dd-4348-a84a-a3c13a3c2b30.mp3",
        "source": "elevenlabs",
        "voice_id": "pFZP5JQG7iQjIQuC4Bku"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "pleasant",
        "gender": "female",
        "name": "Serena",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pMsXgVXv3BLzUgSXRplE/d61f18ed-e5b0-4d0b-a33c-5c6e7e33b053.mp3",
        "source": "elevenlabs",
        "voice_id": "pMsXgVXv3BLzUgSXRplE"
    },
    {
        "accent": "american",
        "age": "middle aged",
        "description": "deep",
        "gender": "male",
        "name": "Adam",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pNInz6obpgDQGcFmaJgB/d6905d7a-dd26-4187-bfff-1bd3a5ea7cac.mp3",
        "source": "elevenlabs",
        "voice_id": "pNInz6obpgDQGcFmaJgB"
    },
    {
        "accent": "American",
        "age": "young",
        "description": "soft",
        "gender": "female",
        "name": "Nicole",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/piTKgcLEGmPE4e6mEKli/c269a54a-e2bc-44d0-bb46-4ed2666d6340.mp3",
        "source": "elevenlabs",
        "voice_id": "piTKgcLEGmPE4e6mEKli"
    },
    {
        "accent": "American",
        "age": "old",
        "description": "trustworthy",
        "gender": "male",
        "name": "Bill",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/pqHfZKP75CvOlQylNhV4/d782b3ff-84ba-4029-848c-acf01285524d.mp3",
        "source": "elevenlabs",
        "voice_id": "pqHfZKP75CvOlQylNhV4"
    },
    {
        "accent": "American",
        "age": "old",
        "description": "raspy",
        "gender": "male",
        "name": "Jessie",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/t0jbNlBVZ17f02VDIeMI/e26939e3-61a4-4872-a41d-33922cfbdcdc.mp3",
        "source": "elevenlabs",
        "voice_id": "t0jbNlBVZ17f02VDIeMI"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "raspy",
        "gender": "male",
        "name": "Sam",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/yoZ06aMxZJJ28mfd3POQ/b017ad02-8d18-4456-ad92-55c85ecf6363.mp3",
        "source": "elevenlabs",
        "voice_id": "yoZ06aMxZJJ28mfd3POQ"
    },
    {
        "accent": "American",
        "age": "middle-aged",
        "description": "witch",
        "gender": "female",
        "name": "Glinda",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/z9fAnlkpzviPz146aGWa/cbc60443-7b61-4ebb-b8e1-5c03237ea01d.mp3",
        "source": "elevenlabs",
        "voice_id": "z9fAnlkpzviPz146aGWa"
    },
    {
        "accent": "Italian",
        "age": "young",
        "description": "foreigner",
        "gender": "male",
        "name": "Giovanni",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/zcAOhNBS3c14rBihAFp1/e7410f8f-4913-4cb8-8907-784abee5aff8.mp3",
        "source": "elevenlabs",
        "voice_id": "zcAOhNBS3c14rBihAFp1"
    },
    {
        "accent": "Swedish",
        "age": "young",
        "description": "childish",
        "gender": "female",
        "name": "Mimi",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/premade/voices/zrHiDhphv9ZnVXBqCLjz/decbf20b-0f57-4fac-985b-a4f0290ebfc4.mp3",
        "source": "elevenlabs",
        "voice_id": "zrHiDhphv9ZnVXBqCLjz"
    },
    {
        "accent": "standard",
        "age": "middle_aged",
        "description": "",
        "gender": "female",
        "name": "Monika Sogam - Hindi Modulated",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/custom/voices/1qEiC6qsybMkmnNdVMbK/hHBUCDw9bJJDC3TZDDDn.mp3",
        "source": "elevenlabs",
        "voice_id": "1qEiC6qsybMkmnNdVMbK"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "",
        "gender": "female",
        "name": "Natasha - Valley girl",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/CpJRF07XekXZp2RcBTTkntmWfi72/voices/uxKr2vlA4hYgXZR1oPRT/b987a4d1-e94c-44ea-b42c-b40785a8e590.mp3",
        "source": "elevenlabs",
        "voice_id": "PYhkA6E9YLwRCQKD1klR"
    },
    {
        "accent": "american",
        "age": "young",
        "description": "",
        "gender": "male",
        "name": "Alex - expressive narrator",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/w7lEAjnWtGVr3Zo7LqhmV7SyJWI3/voices/7IouvDyzGC0g4zIMsNs9/fe254d49-de3f-47a5-b34e-e987cec3191c.mp3",
        "source": "elevenlabs",
        "voice_id": "Y4rXm5tKQDNx1LU92Z8r"
    },
    {
        "accent": "standard",
        "age": "middle_aged",
        "description": "",
        "gender": "male",
        "name": "Ramaa \u2013 Energetic Tamil Narrator",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/database/user/TLzQBQZ61wQrytFwliQpe4LeshE3/voices/ZhJ5LanYnCmLKQUXvsV7/VQD0eZl50ehojfmWlMQt.mp3",
        "source": "elevenlabs",
        "voice_id": "ZhJ5LanYnCmLKQUXvsV7"
    },
    {
        "accent": "standard",
        "age": "middle_aged",
        "description": "",
        "gender": "female",
        "name": "Meera - Conversational Tamil Voice",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/custom/voices/gCr8TeSJgJaeaIoV4RWH/ha2aASFQGRzGUGpylfpK.mp3",
        "source": "elevenlabs",
        "voice_id": "gCr8TeSJgJaeaIoV4RWH"
    },
    {
        "accent": "standard",
        "age": "middle_aged",
        "description": "",
        "gender": "male",
        "name": "Raju - Relatable Hindi Voice",
        "preview_url": "https://storage.googleapis.com/eleven-public-prod/custom/voices/zT03pEAEi0VHKciJODfn/E1SwTL1qIKPkIxyZQQfk.mp3",
        "source": "elevenlabs",
        "voice_id": "zT03pEAEi0VHKciJODfn"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Natural",
        "gender": "Female",
        "name": "Danielle",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Danielle.mp3",
        "source": "polly",
        "voice_id": "Danielle"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Clear",
        "gender": "Male",
        "name": "Gregory",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Gregory.mp3",
        "source": "polly",
        "voice_id": "Gregory"
    },
    {
        "accent": "American",
        "age": "Young",
        "description": "Expressive",
        "gender": "Female",
        "name": "Ivy",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Ivy.mp3",
        "source": "polly",
        "voice_id": "Ivy"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Natural",
        "gender": "Female",
        "name": "Joanna",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Joanna.mp3",
        "source": "polly",
        "voice_id": "Joanna"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Friendly",
        "gender": "Female",
        "name": "Kendra",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Kendra.mp3",
        "source": "polly",
        "voice_id": "Kendra"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Warm",
        "gender": "Female",
        "name": "Kimberly",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Kimberly.mp3",
        "source": "polly",
        "voice_id": "Kimberly"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Clear",
        "gender": "Female",
        "name": "Salli",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Salli.mp3",
        "source": "polly",
        "voice_id": "Salli"
    },
    {
        "accent": "American",
        "age": "Young",
        "description": "Friendly",
        "gender": "Male",
        "name": "Joey",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Joey.mp3",
        "source": "polly",
        "voice_id": "Joey"
    },
    {
        "accent": "American",
        "age": "Young",
        "description": "Natural",
        "gender": "Male",
        "name": "Justin",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Justin.mp3",
        "source": "polly",
        "voice_id": "Justin"
    },
    {
        "accent": "American",
        "age": "Young",
        "description": "Clear",
        "gender": "Male",
        "name": "Kevin",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Kevin.mp3",
        "source": "polly",
        "voice_id": "Kevin"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Clear",
        "gender": "Male",
        "name": "Matthew",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Matthew.mp3",
        "source": "polly",
        "voice_id": "Matthew"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Natural",
        "gender": "Female",
        "name": "Ruth",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Ruth.mp3",
        "source": "polly",
        "voice_id": "Ruth"
    },
    {
        "accent": "American",
        "age": "Adult",
        "description": "Clear",
        "gender": "Male",
        "name": "Stephen",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Stephen.mp3",
        "source": "polly",
        "voice_id": "Stephen"
    },
    {
        "accent": "German",
        "age": "Adult",
        "description": "Natural",
        "gender": "Female",
        "name": "Vicki",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Vicki.mp3",
        "source": "polly",
        "voice_id": "Vicki"
    },
    {
        "accent": "German",
        "age": "Adult",
        "description": "Clear",
        "gender": "Male",
        "name": "Daniel",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Daniel.mp3",
        "source": "polly",
        "voice_id": "Daniel"
    },
    {
        "accent": "French",
        "age": "Adult",
        "description": "Natural",
        "gender": "Female",
        "name": "Lea",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Lea.mp3",
        "source": "polly",
        "voice_id": "Lea"
    },
    {
        "accent": "French",
        "age": "Adult",
        "description": "Friendly",
        "gender": "Male",
        "name": "Remi",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Remi.mp3",
        "source": "polly",
        "voice_id": "Remi"
    },
    {
        "accent": "English (British)",
        "age": "Adult",
        "description": "Natural",
        "gender": "Female",
        "name": "Amy",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Amy.mp3",
        "source": "polly",
        "voice_id": "Amy"
    },
    {
        "accent": "English (British)",
        "age": "Adult",
        "description": "Clear",
        "gender": "Female",
        "name": "Emma",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Emma.mp3",
        "source": "polly",
        "voice_id": "Emma"
    },
    {
        "accent": "English (British)",
        "age": "Adult",
        "description": "Warm",
        "gender": "Male",
        "name": "Brian",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Brian.mp3",
        "source": "polly",
        "voice_id": "Brian"
    },
    {
        "accent": "English (British)",
        "age": "Adult",
        "description": "Expressive",
        "gender": "Male",
        "name": "Arthur",
        "preview_url": "https://d3adwkbyhxyrtq.cloudfront.net/pollyvoices/Arthur.mp3",
        "source": "polly",
        "voice_id": "Arthur"
    }
]

export const accents = [
    { value: '', label: 'All Accents' },
    { value: 'American', label: 'American' },
    { value: 'British', label: 'British' },
    { value: 'Irish', label: 'Irish' },
    { value: 'Australian', label: 'Australian' },
    { value: 'Transatlantic', label: 'Transatlantic' },
    { value: 'Swedish', label: 'Swedish' },
    { value: 'American (South)', label: 'American (South)' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Standard', label: 'Standard' },
    { value: 'German', label: 'German' },
    { value: 'French', label: 'French' },
    { value: 'English (British)', label: 'English (British)' },
]

export const ages = [
    { value: '', label: 'All Ages' },
    { value: 'Adult', label: 'Adult' },
    { value: 'Young', label: 'Young' },
    { value: 'Middle-Aged', label: 'Middle-Aged' },
    { value: 'Old', label: 'Old' },
    { value: 'Middle Aged', label: 'Middle Aged' },
    { value: 'Middle_aged', label: 'Middle_aged' },
]

export const genders = [
    { value: '', label: 'All Genders' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Non-Binary', label: 'Non-Binary' },
]