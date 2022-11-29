import classNames from 'classnames/bind';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {
    contentCvSelector,
    overviewSelector,
    themeSelector,
} from '~/redux/Selectors/cvSelector';
import styles from './Content.module.scss';
import EditorGroup from './Group';
import Overview from './Overview';

const cx = classNames.bind(styles);

function Content(props, ref) {
    const theme = useSelector(themeSelector);
    const contentData = useSelector(contentCvSelector);
    const overview = useSelector(overviewSelector);

    console.log('overview-data:::', overview);
    console.log('content-data:::', contentData);

    return (
        <ThemeProvider theme={theme}>
            <div ref={ref} className={cx('wrapper')}>
                <Overview />

                {/* Content CV */}
                {contentData.map((contentItem) => (
                    <EditorGroup
                        key={contentItem.id}
                        groupId={contentItem.id}
                        editorData={contentItem}
                    />
                ))}
            </div>
        </ThemeProvider>
    );
}

export default forwardRef(Content);
