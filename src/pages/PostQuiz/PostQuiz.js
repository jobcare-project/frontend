import classNames from 'classnames/bind';
import styles from './PostQuiz.module.scss';
import TodoQuiz from './components/TodoQuiz';


const cx = classNames.bind(styles);

function PostQuiz() {
    return (
        <div className={cx('wrapper')}>
            <br></br>
            <div className={cx('wrapper-add-question')}>
                <div className={cx('add-question-title')}>Xây dựng quiz</div>
                <div className={cx('add-question')}>
                    <TodoQuiz/>
                </div>
            </div>
        </div>
    );
}

export default PostQuiz;
