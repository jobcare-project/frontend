import classNames from 'classnames/bind';
import styles from './PostQuiz.module.scss';
import FormBuilder from './FormBuilder';
import { Container } from 'react-bootstrap';


const cx = classNames.bind(styles);

function PostQuiz() {
    return (
        <div className={cx('wrapper')}>
            <Container>
            <div className={cx('wrapper-add-question')}>
                <div className={cx('add-question')}>
                   <FormBuilder/>
                </div>
            </div>
            </Container>
        </div>
    );
}

export default PostQuiz;
