export interface QuestionButtonProps {
	question: string
	isLoading: boolean
	onClick: () => void
}

export interface QuestionListProps {
	questions: string[]
	loadingIndex: number | null
	onQuestionClick: (index: number) => void
	selectedQuestionIndex: number | null
	textResponse: string[]
}