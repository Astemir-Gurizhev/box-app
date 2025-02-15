import { useState } from 'react'
import { fetchChatResponse } from '../../api/api'
import { clearSymbols, russianRequest, task } from '../../data/data'
import { Spinner } from '../../ui/Spinner'
import { QuestionList } from '../question-list/QuestionList'
import styles from './RequestForm.module.css'
import { TbProgressHelp } from 'react-icons/tb'

export const RequestForm = () => {
	const [textQuestion, setTextQuestion] = useState<string[]>([])
	const [textResponse, setTextResponse] = useState<string[]>([])
	const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<
		number | null
	>(null)
	const [loadingIndex, setLoadingIndex] = useState<number | null>(null)
	const [loadingQuestions, setLoadingQuestions] = useState<boolean>(false)

	const handleCreateQuestions = async () => {
		setLoadingQuestions(true)
		const data = await fetchChatResponse(
			russianRequest +
				clearSymbols +
				'Представь, что ты учитель. Какие 3 темы стоит предварительно изучить по вопросу и создай его в виде массива [], где каждый ответ является элементом в виде строки "" и разделен запятыми без начального объяснения' +
				task
		)

		setTextQuestion(data)
		setTextResponse([])
		setLoadingQuestions(false)
	}

	const handleGettingResponses = async (index: number) => {
		if (selectedQuestionIndex === index) {
			setSelectedQuestionIndex(null)
			return
		}

		setLoadingIndex(index)

		const question = textQuestion[index]
		const data = await fetchChatResponse(
			russianRequest +
				clearSymbols +
				'дай короткое пояснение' +
				question +
				'"'
		)

		setTextResponse(prevResponses => {
			const newResponses = [...prevResponses]
			newResponses[index] = data
			return newResponses
		})
		setSelectedQuestionIndex(index)
		setLoadingIndex(null)
	}

	return (
		<div className={styles.container}>
			<h2>{task}</h2>
			<button
				className={styles.btn}
				onClick={handleCreateQuestions}
				disabled={loadingQuestions}
			>
				{loadingQuestions ? (
					<span>
						<Spinner />
					</span>
				) : (
					<TbProgressHelp />
				)}
			</button>
			<QuestionList
				questions={textQuestion}
				loadingIndex={loadingIndex}
				onQuestionClick={handleGettingResponses}
				selectedQuestionIndex={selectedQuestionIndex}
				textResponse={textResponse}
			/>
		</div>
	)
}
