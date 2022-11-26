import classNames from 'classnames/bind';
import styles from './PostQuiz.module.scss';
import FormBuilder from './FormBuilder';


const cx = classNames.bind(styles);

function PostQuiz() {
    return (
        <div className={cx('wrapper')}>
            <br></br>
            <div className={cx('wrapper-add-question')}>
                <div className={cx('add-question-title')}>Xây dựng quiz</div>
                <div className={cx('add-question')}>
                   <FormBuilder/>
                </div>
            </div>
        </div>
    );
}

export default PostQuiz;
