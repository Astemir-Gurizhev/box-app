import React, { useState } from 'react'
import { fetchChatResponse } from './api/api'

export const App = () => {
	const [response, setResponse] = useState<string | null>(null)
	const [inputValue, setInputValue] = useState<string>('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const data = await fetchChatResponse('ответь на русском:' + inputValue)
		setResponse(data)
	}

	return (
		<div>
			<h1>Chat API</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					placeholder='Введите сообщение'
				/>
				<button type='submit'>Отправить</button>
			</form>
			{response && <div>Ответ: {JSON.stringify(response)}</div>}
		</div>
	)
}
