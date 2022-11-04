import classNames from 'classnames/bind';
import styles from './InputEditor.module.scss';

const cx = classNames.bind(styles);

function InputEditor() {
    return (
        <div className={cx('wrapper')}>
            <h3>InputEditor</h3>
        </div>
    );
}

export default InputEditor;
