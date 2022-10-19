import classNames from 'classnames/bind';
import Form from 'react-bootstrap/Form';

import styles from './PostQuiz.module.scss';
import Uploady from '@rpldy/uploady';
import UploadButton from '@rpldy/upload-button';
import UploadPreview from '@rpldy/upload-preview';

import UserForm from './UserForm';

const cx = classNames.bind(styles);

function PostQuiz() {
    const filterBySize = (file) => {
        return file.size <= 5242880;
    };

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
                    <div className={cx('upload-image')}>
                        <Uploady
                            destination={{ url: 'my-server.com/upload' }}
                            fileFilter={filterBySize}
                            accept="image/*"
                        >
                            <UploadButton />
                            <UploadPreview />
                        </Uploady>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-add-question')}>
                <div className={cx('information-add-question')}>
                    Câu hỏi và trả lời
                </div>

                <div className={cx('heading-add-question')}>
                    <Form>
                        {['radio'].map((type) => (
                            <div
                                key={`default-${type}`}
                                className={cx('typeshowanswer')}
                            >
                                Chế độ
                                <Form.Check
                                    type={type}
                                    name="group1"
                                    label={`Sau khi trả lời mỗi câu hỏi `}
                                />
                                <Form.Check
                                    type={type}
                                    name="group1"
                                    label={`Không hiện đáp án `}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form>
                        {['radio'].map((type) => (
                            <div
                                key={`default-${type}`}
                                className={cx('typeswork')}
                            >
                                Loại câu hỏi
                                <Form.Check
                                    type={type}
                                    label={`Trắc nghiệm `}
                                />
                            </div>
                        ))}
                    </Form>
                    <Form.Select className={cx('set-time')}>
                        <option value="1">Thời gian làm bài</option>
                        <option value="2">Không giới hạn</option>
                        <option value="3">30 phút</option>
                        <option value="4">60 phút</option>
                        <option value="5">90 phút</option>
                        <option value="6">120 phút</option>
                    </Form.Select>
                </div>
                <UserForm />
            </div>
        </div>
    );
}

export default PostQuiz;
