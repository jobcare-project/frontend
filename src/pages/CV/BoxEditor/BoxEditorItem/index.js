import classNames from 'classnames/bind';

import styles from './BoxEditorItem.module.scss';
import InputEditor from '~/components/Editor/InputEditor';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);

function BoxEditorItem({ title, editorValue = '' }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left', 'controls')}>
                <div className={cx('controls-left-list')}>
                    <Tippy
                        theme="material"
                        placement="right"
                        content="Thêm mục ở trên"
                    >
                        <span className={cx('controls-icon')}>
                            <ion-icon name="add-circle-sharp"></ion-icon>
                        </span>
                    </Tippy>
                    <div>
                        <Tippy
                            theme="material"
                            placement="right"
                            content="Di chuyển lên trên"
                        >
                            <span className={cx('controls-icon')}>
                                <ion-icon name="chevron-up-circle-sharp"></ion-icon>
                            </span>
                        </Tippy>
                        <Tippy
                            theme="material"
                            placement="right"
                            content="Di chuyển xuống dưới"
                        >
                            <span className={cx('controls-icon')}>
                                <ion-icon name="chevron-down-circle-sharp"></ion-icon>
                            </span>
                        </Tippy>
                    </div>
                    <Tippy
                        theme="material"
                        placement="right"
                        content="Thêm mục ở dưới"
                    >
                        <span className={cx('controls-icon')}>
                            <ion-icon name="add-circle-sharp"></ion-icon>
                        </span>
                    </Tippy>
                </div>
            </div>
            <div className={cx('controls-right', 'controls')}>
                <Tippy theme="material" placement="right" content="Gỡ bỏ">
                    <span className={cx('controls-icon', 'trash-icon')}>
                        <ion-icon name="trash-sharp"></ion-icon>
                    </span>
                </Tippy>
            </div>
            <div className={cx('controls-mark')}></div>

            {title && (
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
            )}
        </div>
    );
}

export default BoxEditorItem;
