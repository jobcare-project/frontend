import classNames from 'classnames/bind';
import styles from './DisplayQuizz.module.scss';
import QuizDetail from './QuizDetail';
const cx = classNames.bind(styles);

function DisplayQuiz() {
    return (
        <div className={cx('wrapper')} >
            <QuizDetail/>
        </div>
    );
}

export default DisplayQuiz;
