import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import ColorControl from './Menu/ColorControl';
import FontsControl from './Menu/FontsControl';
import ImageControl from './Menu/ImageControl';
import TemplateControl from './Menu/TemplateControl';
import styles from './ToolBar.module.scss';

const cx = classNames.bind(styles);

function ToolBar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <ColorControl />
                <FontsControl />
                <TemplateControl />
                <ImageControl />
            </div>
            <div className={cx('manager')}>
                <Button primary rounded small>
                    Tải xuống
                </Button>
                <Link to="/manager-cv">
                    <Button rounded white small>
                        Quản lý CV
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ToolBar;
