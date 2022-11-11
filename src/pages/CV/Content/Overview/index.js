import classNames from 'classnames/bind';
import { Col, Row } from 'react-bootstrap';
import InputEditor from '~/components/Editor/InputEditor';
import { TitleLarge } from '../../styledComponents/Title';
import AvatarOverview from './Avatar';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview() {
    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col md={9}>
                    <TitleLarge>
                        <InputEditor defaultValue="Nguyễn Văn A" />
                    </TitleLarge>
                    <InputEditor defaultValue="Fullstack Developer" />
                </Col>
                <Col md={3}>
                    <AvatarOverview />
                </Col>
            </Row>
        </div>
    );
}

export default Overview;
