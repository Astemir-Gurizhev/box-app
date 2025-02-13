import React, { useState } from 'react'
import { fetchChatResponse } from '../../api/api'
import { clearSymbols, russianRequest, task } from '../../data/data'

export const RequestForm = () => {
	const [response, setResponse] = useState<string | null>(null)
	const [inputValue, setInputValue] = useState<string>('')
	const [textQuestion, setTextQuestion] = useState([])
	const [textResponse, setTextResponse] = useState([])

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const data = await fetchChatResponse(
			russianRequest + clearSymbols + inputValue
		)
		setResponse(data)
	}

	const handleCreateQuestions = async () => {
		const data = await fetchChatResponse(
			russianRequest +
				clearSymbols +
				'Составь три актуальных вопроса по теории задачи не связанные с результатом задачи написанной дальше и создай его в виде массива [], где каждый отдельный элемент это один вопрос в виде строки "" и разделены запятыми без начального объяснения' +
				task
		)

		setTextQuestion(data)
	}
	const handleGettingResponses = async () => {
		const data = await fetchChatResponse(
			russianRequest + clearSymbols + 'дай ответы на вопросы и создай его в виде массива [], где каждый отдельный элемент это ответ на один вопрос в виде строки "" и разделены запятыми без начального объяснения' + textQuestion
		)
		setTextResponse(data)
	}
	console.log(textResponse);
	

	return (
		<>
			<h2>{task}</h2>
			<button onClick={handleCreateQuestions}>Составить вопросы</button>
			<div>
				{textQuestion.length > 0
					? textQuestion.map((item, i) => {
							return <p key={i}>{item}</p>
					  })
					: ''}
			</div>
			<button onClick={handleGettingResponses}>Составить ответы</button>
			<div>
				{textResponse.length > 0
					? textResponse.map((item, i) => {
							return <p key={i}>{item}</p>
					  })
					: ''}
			</div>
			{/* <h2>Request Form</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					value={inputValue}
					onChange={e => setInputValue(e.target.value)}
					placeholder='Введите сообщение'
				/>
				<button type='submit'>Отправить</button>
			</form>
			{response && <div>Ответ: {JSON.stringify(response)}</div>} */}
		</>
	)
}
