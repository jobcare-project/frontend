import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { contentCvSelector, themeSelector } from '~/redux/Selectors/cvSelector';
import styles from './Content.module.scss';
import EditorGroup from './Group';
import Overview from './Overview';

const cx = classNames.bind(styles);

function Content(props, ref) {
    const theme = useSelector(themeSelector);
    const contentData = useSelector(contentCvSelector);

    console.log('content-data:::', contentData);

    return (
        <ThemeProvider theme={theme}>
            <div ref={ref} className={cx('wrapper')}>
                <Overview />
                {/* <div className={cx('page')}>
                    <div className={cx('overview')}>
                        <Overview />
                    </div>
                    <div className={cx('container')}>
                        <div className={cx('group-item')}>
                            <EditorGroup />
                        </div>
                    </div>
                </div> */}
                {/* {data.map((item, index) => {
                    return (
                        <div key={index} className={cx('page')}>
                            <div className={cx('page-item')}>{item}</div>
                        </div>
                    );
                })} */}
                {contentData.map((contentItem, index) => (
                    <EditorGroup
                        key={contentItem.id}
                        editorData={contentItem}
                    />
                ))}
            </div>
        </ThemeProvider>
    );
}

export default forwardRef(Content);
