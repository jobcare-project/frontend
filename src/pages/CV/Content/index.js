import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { themeSelector } from '~/redux/Selectors/cvSelector';
import styles from './Content.module.scss';
import EditorGroup from './Group';
import Overview from './Overview';

const cx = classNames.bind(styles);

function Content() {
    const theme = useSelector(themeSelector);

    return (
        <ThemeProvider theme={theme}>
            <div className={cx('wrapper')}>
                <div className={cx('page')}>
                    <Overview />
                    <div className={cx('container')}>
                        <EditorGroup />
                        {/* <EditorGroup />
                        <EditorGroup /> */}
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Content;
