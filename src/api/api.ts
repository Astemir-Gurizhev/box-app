import axios from 'axios';
import { fetchOAuthToken } from './token'

const url = '/api/gigachat/chat/completions';

export const fetchChatResponse = async (message: string) => {
    const data = {
        messages: [
            {
                role: 'user',
                content: message,
            },
        ],
        model: 'GigaChat:latest',
        temperature: 1,
        top_p: 0.1,
        n: 1,
        stream: false,
        max_tokens: 512,
        repetition_penalty: 1,
        update_interval: 0,
    };
																								
		const token = await fetchOAuthToken();
		

    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${token['access_token']}`, 
        },
    };

    try {
        const response = await axios.post(url, data, config);
				// console.log(response.data.choices[0].message.content);
				
				return response.data.choices[0].message.content
    } catch (error) {
			console.log('error');
			
        throw error; 
    }
};