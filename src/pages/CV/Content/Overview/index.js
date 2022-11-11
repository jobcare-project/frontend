import classNames from 'classnames/bind';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import InputEditor from '~/components/Editor/InputEditor';
import BoxEditor from '../../BoxEditor';
import { TitleLarge } from '../../styledComponents/Title';
import AvatarOverview from './Avatar';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

const initialOverviewValue = [
    {
        title: 'Họ tên',
        value: 'Nguyễn Văn A',
    },
    {
        title: 'Ngày sinh',
        value: '20/04/2000',
    },
    {
        title: 'Địa chỉ',
        value: '03 TNV - Đà Nẵng',
    },
];

function Overview() {
    const [overviewArr, setOverviewArr] = useState(initialOverviewValue);

    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col md={9}>
                    <div className={cx('header')}>
                        <TitleLarge>
                            <InputEditor defaultValue="Nguyễn Văn A" />
                        </TitleLarge>
                        <InputEditor defaultValue="Fullstack Developer" />
                    </div>
                    <Row>
                        {overviewArr.map((editor, index) => {
                            return (
                                <Col key={index} md={6}>
                                    <BoxEditor
                                        title={editor.title}
                                        editorValue={editor.value}
                                    />
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col md={3}>
                    <AvatarOverview />
                </Col>
            </Row>
        </div>
    );
}

export default Overview;
