import { QuestionButtonProps } from '../../types/types'

export const QuestionButton = ({
	question,
	isLoading,
	onClick,
}: QuestionButtonProps) => {
	return (
		<button onClick={onClick} disabled={isLoading}>
			{isLoading ? 'Загрузка...' : question}
		</button>
	)
}
