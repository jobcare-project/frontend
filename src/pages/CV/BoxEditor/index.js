import classNames from 'classnames/bind';

import InputEditor from '~/components/Editor/InputEditor';
import { BoxIconStyled } from '../styledComponents/BoxIcon';
import { Title } from '../styledComponents/Title';

import styles from './BoxEditor.module.scss';

const cx = classNames.bind(styles);

function BoxEditor({ icon, heading, children }) {
    const handleDelete = () => {
        console.log('handleDelete');
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left', 'controls')}>
                <div className={cx('controls-left-list')}>
                    <span className={cx('controls-icon')}>
                        <ion-icon name="add-circle-sharp"></ion-icon>
                    </span>
                    <div>
                        <span className={cx('controls-icon')}>
                            <ion-icon name="chevron-up-circle-sharp"></ion-icon>
                        </span>
                        <span className={cx('controls-icon')}>
                            <ion-icon name="chevron-down-circle-sharp"></ion-icon>
                        </span>
                    </div>
                    <span className={cx('controls-icon')}>
                        <ion-icon name="add-circle-sharp"></ion-icon>
                    </span>
                    <span
                        onClick={() => {
                            handleDelete();
                        }}
                        className={cx('controls-icon', 'trash-icon')}
                    >
                        <ion-icon name="trash-sharp"></ion-icon>
                    </span>
                </div>
            </div>
            {/* <div className={cx('controls-right', 'controls')}>
                <span
                    onClick={() => {
                        handleDelete();
                    }}
                    className={cx('controls-icon')}
                >
                    <ion-icon name="trash-sharp"></ion-icon>
                </span>
            </div> */}
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
    );
}

export default BoxEditor;
