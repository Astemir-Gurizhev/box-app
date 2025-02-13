import { QuestionListProps } from '../../types/types'
import { QuestionButton } from '../question-button/QuestionButton'

export const QuestionList = ({
	questions,
	loadingIndex,
	onQuestionClick,
	selectedQuestionIndex,
	textResponse,
}: QuestionListProps) => {
	return (
		<div>
			{questions.length > 0
				? questions.map((item, i) => (
						<div key={i}>
							<QuestionButton
								question={item}
								isLoading={loadingIndex === i}
								onClick={() => onQuestionClick(i)}
							/>
							{selectedQuestionIndex === i && textResponse[i] && (
								<p>{textResponse[i]}</p>
							)}
						</div>
				  ))
				: ''}
		</div>
	)
}
