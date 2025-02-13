import React, { useState } from 'react'
import { fetchChatResponse } from '../../api/api'
import { clearSymbols, russianRequest } from '../../data/data'

export const RequestForm = () => {
	const [response, setResponse] = useState<string | null>(null)
	const [inputValue, setInputValue] = useState<string>('')

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const data = await fetchChatResponse(
			russianRequest + clearSymbols + inputValue
		)
		setResponse(data)
	}

	return (
		<>
			<h2>Requst Form</h2>
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
		</>
	)
}
