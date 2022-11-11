import classNames from 'classnames/bind';

import InputEditor from '~/components/Editor/InputEditor';

import styles from './BoxEditor.module.scss';

const cx = classNames.bind(styles);

function BoxEditor({ title, editorValue = '' }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left', 'controls')}>
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
            <div className={cx('controls-right', 'controls')}>
                <span className={cx('controls-icon')}>
                    <ion-icon name="trash-sharp"></ion-icon>
                </span>
            </div>
            <div className={cx('controls-mark')}></div>

            <div className={cx('title')}>
                <span className={cx('title-content')}>
                    <InputEditor defaultValue={title} />
                </span>
            </div>
            <div className={cx('editor')}>
                <InputEditor defaultValue={editorValue} />
            </div>
        </div>
    );
}

export default BoxEditor;
