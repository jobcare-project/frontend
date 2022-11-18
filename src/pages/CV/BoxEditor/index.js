import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';

import InputEditor from '~/components/Editor/InputEditor';
import { BoxIconStyled } from '../styledComponents/BoxIcon';
import { Title } from '../styledComponents/Title';

import 'tippy.js/dist/tippy.css';
import styles from './BoxEditor.module.scss';
import { useState } from 'react';
import ModalAddOptions from './ModalAddOptions';

const cx = classNames.bind(styles);

function BoxEditor({ icon, heading, children }) {
    const [showModal, setShowModal] = useState(false);

    const handleDelete = () => {
        console.log('handleDelete');
    };

    const handleAdd = () => {
        setShowModal(true);
    };

    return (
        <>
            <ModalAddOptions
                show={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
            />
            <div className={cx('wrapper')}>
                <div className={cx('controls')}>
                    <div className={cx('controls-left-list')}>
                        <Tippy theme="material" content="Thêm mục ở trên">
                            <span
                                onClick={() => {
                                    handleAdd();
                                }}
                                className={cx('controls-icon')}
                            >
                                <ion-icon name="add-circle-sharp"></ion-icon>
                            </span>
                        </Tippy>
                        <div>
                            <Tippy
                                theme="material"
                                content="Di chuyển lên trên"
                            >
                                <span className={cx('controls-icon')}>
                                    <ion-icon name="chevron-up-circle-sharp"></ion-icon>
                                </span>
                            </Tippy>
                            <Tippy
                                theme="material"
                                content="Di chuyển xuống dưới"
                            >
                                <span className={cx('controls-icon')}>
                                    <ion-icon name="chevron-down-circle-sharp"></ion-icon>
                                </span>
                            </Tippy>
                        </div>
                        <Tippy theme="material" content="Thêm mục ở dưới">
                            <span className={cx('controls-icon')}>
                                <ion-icon name="add-circle-sharp"></ion-icon>
                            </span>
                        </Tippy>
                        <Tippy theme="material" content="Gỡ bỏ">
                            <span
                                onClick={() => {
                                    handleDelete();
                                }}
                                className={cx('controls-icon', 'trash-icon')}
                            >
                                <ion-icon name="trash-sharp"></ion-icon>
                            </span>
                        </Tippy>
                    </div>
                </div>
                <div className={cx('controls-mark')}></div>

                {heading && (
                    <div className={cx('header')}>
                        {icon && (
                            <BoxIconStyled className={cx('header-icon')}>
                                {icon}
                            </BoxIconStyled>
                        )}
                        <div className={cx('heading')}>
                            <Title>
                                <InputEditor defaultValue={heading} />
                            </Title>
                        </div>
                    </div>
                )}

                <div className={cx('content')}>{children}</div>
            </div>
        </>
    );
}

export default BoxEditor;
