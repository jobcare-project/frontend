import TodoQuiz from './TodoQuiz';
import classNames from 'classnames/bind';
import styles from './DisplayQuizz.module.scss';
const cx = classNames.bind(styles);

function DisplayQuiz() {
    return (
        <div className={cx('wrapper')} >
            <TodoQuiz />
        </div>
    );
}

export default DisplayQuiz;
