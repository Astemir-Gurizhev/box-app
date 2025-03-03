import { useState } from 'react'
import { TbProgressHelp } from 'react-icons/tb'
import { fetchChatResponse } from '../../api/api'
import { clearSymbols, noInitial, russianRequest, task } from '../../data/data'
import { Spinner } from '../../ui/spinner/Spinner'
import { QuestionList } from '../question-list/QuestionList'
import styles from './RequestForm.module.scss'

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
				'Ты учитель. Какие 3 связанных с задачей темы стоило бы предварительно дать изучить ученику. Перечисли эти темы в массиве, где каждая тема является элементом этого массива, в виде строки ""(компьютерные) и разделена запятыми. Пример вывода данных: ["компьютер", "телефон", "машина"] ' +
				noInitial +
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

		const question = JSON.parse(textQuestion)[index]
		const data = await fetchChatResponse(
			russianRequest + clearSymbols + 'дай пояснение:' + question 
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
			<img className={styles.taskImg} src='/math.webp' alt='' />
			<h2 className={styles.task}>{task}</h2>
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
