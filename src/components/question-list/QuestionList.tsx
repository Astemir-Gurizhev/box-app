import { QuestionListProps } from '../../types/types';
import { QuestionButton } from '../question-button/QuestionButton';
import styles from './QuestionList.module.scss';

export const QuestionList = ({
    questions,
    loadingIndex,
    onQuestionClick,
    selectedQuestionIndex,
    textResponse,
}: QuestionListProps) => {
 

    return (
        <div className={styles.buttons}>
            {questions.length > 0
                ? JSON.parse(questions).map((item, i) => (
                    <div className={styles.question} key={i}>
                        <QuestionButton
                            question={`${item}`}
                            isLoading={loadingIndex === i}
                            onClick={() => onQuestionClick(i)}
                        />
                        {selectedQuestionIndex === i && textResponse[i] && (
                            <p className={styles.response}>{textResponse[i]}</p>
                        )}
                    </div>
                ))
                : ''}
        </div>
    );
};