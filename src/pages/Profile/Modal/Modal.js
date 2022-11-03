import React from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
const cx = classNames.bind(styles);

function Modal({ setOpenModal, data, to }) {
    // if (!open) return null;
    return (
        <div className={cx('modal')}>
            <div className={cx('modal-overlay')}></div>
            <div className={cx('modal-content')}>
                <div className={cx('modal-header')}>
                    <h2 className={cx('modal-title')}>
                        Ứng tuyển vị trí:{' '}
                        <span className={cx('text-highlight')}>
                            Frontend Developer
                        </span>
                    </h2>
                    <span
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        className={cx('close')}
                    >
                        X
                    </span>
                </div>
                <div className={cx('modal-upload')}>
                    <div className={cx('modal-cv')}>
                        <h4>Tải CV lên từ máy tính</h4>
                        <Link to="/cv">
                            <span className={cx('text-highlight')}>
                                Bạn chưa có CV?
                            </span>
                        </Link>
                    </div>
                    <div className={cx('modal-file')}>
                        <Button primary>Chọn file</Button>
                    </div>
                    <div className={cx('modal-letter')}>
                        <h4>Thư giới thiệu:</h4>
                        <textarea
                            type="text"
                            placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này. Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn có chưa có kinh nghiệm làm việc (hoặc CV không tốt)."
                            className={cx('form-control')}
                        ></textarea>
                    </div>
                    <div className={cx('modal-btn')}>
                        <Button
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            saveInput
                            small
                        >
                            Thoát
                        </Button>
                        <Button primary small>
                            Nộp CV{' '}
                        </Button>
                    </div>
                </div>
            </div>
            {/* <div className={cx('modalContainer')}>
                

                <div className={cx('footer')}>
                    
                </div>
            </div> */}
        </div>
    );
}

export default Modal;
