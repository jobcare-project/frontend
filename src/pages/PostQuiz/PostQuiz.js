import classNames from 'classnames/bind';
import styles from './PostQuiz.module.scss';

import Form from 'react-bootstrap/Form';
import AddQuestion from './AddQuestion';

import UploadImage from './UploadImage';

const cx = classNames.bind(styles);

function PostQuiz() {
    return (
        <div className={cx('wrapper')}>
            <br></br>
            <div className={cx('section')}>
                <div className={cx('question-title-section')}>
                    <div className={cx('information')}>Thông tin chung</div>
                    <select className={cx('security')}>
                        <option>Công khai</option>
                        <option>Cá nhân</option>
                    </select>
                    <div className={cx('question-form-top')}>
                        <div className={cx('title-quiz')}>Tiêu đề quiz</div>
                        <input
                            type="text"
                            className={cx('input-title-quiz')}
                            placeholder="Nhập tiêu đề quiz"
                        ></input>
                        <div className={cx('title-describe')}>
                            Mô tả về quiz
                        </div>
                        <input
                            type="text"
                            className={cx('input-describe')}
                            placeholder="Giới thiệu một chút mô tả về bài Quiz này "
                        ></input>
                    </div>
                    <div className={cx('title-image')}>
                        Chọn hình đại diện của Quiz
                    </div>
                    <h2 className={cx('upload-image')}>
                        <UploadImage />
                    </h2>
                </div>
            </div>
            <div className={cx('wrapper-add-question')}>
                <div className={cx('information-add-question')}>
                    Câu hỏi và trả lời
                </div>
            <Form className={cx('inner-type')} >
                <Form.Group className={cx('mode')} >
                    Chế độ hiện đáp án
                    <Form.Check name = 'mode' label=' Sau khi trả lời mỗi câu hỏi ' type='radio' />
                    <Form.Check name = 'mode' label=' Không hiện đáp án ' type='radio' />
                </Form.Group >

                <Form.Group className={cx('gender')} >
                    Loại câu hỏi
                    <Form.Check name = 'gender ' label=' Trắc nghiệm ' type='radio' />
                </Form.Group>

                <Form.Group className={cx('set-time')} >
                    <Form.Control as='select' >
                        <option> 5 phút </option>
                        <option> 10 phút </option>
                        <option> 30 phút </option>
                        <option> 60 phút </option>
                        <option> 90 phút </option>
                        <option> 120 phút </option>
                        <option> 180 phút </option>
                    </Form.Control>
                </Form.Group>

            </Form>

                <div className={cx('add-question-title')}>Xây dựng quiz</div>
                <div className={cx('add-question')}>
                    <AddQuestion/>   
                </div>
            </div>
        </div>
    );
}

export default PostQuiz;
