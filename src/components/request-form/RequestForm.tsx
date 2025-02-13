import { useState } from 'react'
import { fetchChatResponse } from '../../api/api'
import { clearSymbols, russianRequest, task } from '../../data/data'

export const RequestForm = () => {
	const [textQuestion, setTextQuestion] = useState<string[]>([])
	const [textResponse, setTextResponse] = useState<string[]>([])
	const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
		number | null
	>(null)

	const handleCreateQuestions = async () => {
		const data = await fetchChatResponse(
			russianRequest +
				clearSymbols +
				'Составь три актуальных вопроса по теории для задачи написанной дальше и создай его в виде массива [], где каждый отдельный элемент это один вопрос в виде строки "" и разделены запятыми без начального объяснения' +
				task
		)

		setTextQuestion(data)
		setTextResponse([])
	}

	const handleGettingResponses = async (index: number) => {
		if (selectedQuestionIndex === index) {
			setSelectedQuestionIndex(null)
			return
		}

		const question = textQuestion[index]
		const data = await fetchChatResponse(
			russianRequest +
				clearSymbols +
				'дай короткий ответ на вопрос: "' +
				question +
				'"'
		)

		setTextResponse(prevResponses => {
			const newResponses = [...prevResponses]
			newResponses[index] = data
			return newResponses
		})
		setSelectedQuestionIndex(index)
	}

	return (
		<>
			<h2>{task}</h2>
			<button onClick={handleCreateQuestions}>Показать подсказки</button>
			<div>
				{textQuestion.length > 0
					? textQuestion.map((item, i) => {
							return (
								<div key={i}>
									<button onClick={() => handleGettingResponses(i)}>
										{item}
									</button>
									{selectedQuestionIndex === i && textResponse[i] && (
										<p>{textResponse[i]}</p>
									)}
								</div>
							)
					  })
					: ''}
			</div>
		</>
	)
}
