import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import InputEditor from '~/components/Editor/InputEditor';

import { themeSelector } from '~/redux/Selectors/cvSelector';
import styles from './Content.module.scss';
import Overview from './Overview';

const cx = classNames.bind(styles);

function Content() {
    const theme = useSelector(themeSelector);

    return (
        <ThemeProvider theme={theme}>
            <div className={cx('wrapper')}>
                <div className={cx('page')}>
                    <Overview />
                    <InputEditor />
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Content;