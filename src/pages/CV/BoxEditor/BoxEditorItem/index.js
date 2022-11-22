import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';

import styles from './BoxEditorItem.module.scss';
import InputEditor from '~/components/Editor/InputEditor';
import { useDispatch } from 'react-redux';
import { cvSlice } from '../../cvSlice';

const cx = classNames.bind(styles);

function BoxEditorItem({
    title,
    editorValue = '',
    timeline,
    index,
    typeBlock,
}) {
    const dispatch = useDispatch();

    const handleAddNewEditor = () => {
        dispatch(cvSlice.actions.addIconicContainerItem({ index, typeBlock }));
    };

    const handleAddNewEditorBefore = () => {
        dispatch(
            cvSlice.actions.addIconicContainerItemBefore({ index, typeBlock }),
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('controls-left', 'controls')}>
                <div className={cx('controls-left-list')}>
                    <Tippy
                        theme="material"
                        placement="right"
                        content="Thêm mục ở trên"
                    >
                        <span
                            onClick={() => {
                                handleAddNewEditorBefore();
                            }}
                            className={cx('controls-icon')}
                        >
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
                        <span
                            onClick={() => {
                                handleAddNewEditor();
                            }}
                            className={cx('controls-icon')}
                        >
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

            {timeline && (
                <div className={cx('timeline-block')}>
                    <span className={cx('title-content')}>
                        <InputEditor defaultValue={timeline} />
                    </span>
                </div>
            )}
            <div className={cx('editor-block')}>
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
        </div>
    );
}

export default BoxEditorItem;
