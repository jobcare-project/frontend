import classNames from 'classnames/bind';

import Content from './Content';

import styles from './Cv.module.scss';
import Suggestor from './Suggestor';
import ToolBar from './ToolBar';

const cx = classNames.bind(styles);

function CV() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('toolbar')}>
                <ToolBar />
            </div>
            <div className={cx('content')}>
                <Content />
            </div>
            <div className={cx('suggestor')}>
                <Suggestor />
            </div>
        </div>
    );
}

export default CV;
