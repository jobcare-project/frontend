import classNames from 'classnames/bind';
import { useState } from 'react';

import InputEditor from '~/components/Editor/InputEditor';
import { BoxIconStyled } from '../styledComponents/BoxIcon';
import { Title } from '../styledComponents/Title';

import styles from './BoxEditor.module.scss';

const cx = classNames.bind(styles);

function BoxEditor({ icon, heading, children }) {
    const [visibleControls, setVisibleControls] = useState(false);

    return (
        <div className={cx('wrapper')}>
            {visibleControls && (
                <>
                    <div className={cx('controls-left', 'controls')}>
                        <div className={cx('controls-left-list')}>
                            <span className={cx('controls-icon')}>
                                <ion-icon name="add-circle-sharp"></ion-icon>
                            </span>
                            <span className={cx('controls-icon')}>
                                <ion-icon name="chevron-up-circle-sharp"></ion-icon>
                            </span>
                            <span className={cx('controls-icon')}>
                                <ion-icon name="chevron-down-circle-sharp"></ion-icon>
                            </span>
                            <span className={cx('controls-icon')}>
                                <ion-icon name="add-circle-sharp"></ion-icon>
                            </span>
                        </div>
                    </div>
                    <div className={cx('controls-right', 'controls')}>
                        <span className={cx('controls-icon')}>
                            <ion-icon name="trash-sharp"></ion-icon>
                        </span>
                    </div>
                    <div className={cx('controls-mark')}></div>
                </>
            )}

            {heading && (
                <div
                    className={cx('header')}
                    onClick={() => {
                        setVisibleControls(true);
                    }}
                    onBlur={() => {
                        setVisibleControls(false);
                    }}
                >
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

            {/* Cần tách riêng component */}
            {/* {title && (
                <div className={cx('title')}>
                    <span className={cx('title-content')}>
                        <InputEditor defaultValue={title} />
                    </span>
                </div>
            )}
            {editorValue && (
                <div className={cx('editor')}>
                    <InputEditor defaultValue={editorValue} />
                </div>
            )} */}
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default BoxEditor;
