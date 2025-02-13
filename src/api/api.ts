import axios from 'axios'

const url = '/api/api/chat'

export const fetchChatResponse = async (message: string) => {
	const data = {
		messages: [
			{
				content: message,
				role: 'user',
			},
		],
		model: 'deepseek-ai/DeepSeek-V3',
		max_tokens: '1024',
	}

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	}

	try {
		const response = await axios.post(url, data, config)
		return response.data
	} catch (error) {
		console.error(error)
		throw error
	}
}
