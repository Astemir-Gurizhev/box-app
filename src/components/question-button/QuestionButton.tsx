import { QuestionButtonProps } from '../../types/types'
import { Spinner } from '../../ui/spinner/Spinner'

export const QuestionButton = ({
	question,
	isLoading,
	onClick,
}: QuestionButtonProps) => {
	return (
		<button onClick={onClick} disabled={isLoading}>
			{isLoading ? (
				<span>
					Загрузка <Spinner />
				</span>
			) : (
				question
			)}
		</button>
	)
}
