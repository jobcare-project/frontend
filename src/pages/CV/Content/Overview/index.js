import classNames from 'classnames/bind';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import InputEditor from '~/components/Editor/InputEditor';
import { overviewSelector } from '~/redux/Selectors/cvSelector';
import BoxEditorItem from '../../BoxEditor/BoxEditorItem';
import { cvSlice } from '../../cvSlice';
import { TitleLarge } from '../../styledComponents/Title';
import AvatarOverview from './Avatar';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

function Overview() {
    const dispatch = useDispatch();
    const overviewData = useSelector(overviewSelector);

    const handleAddNewEditor = () => {
        dispatch(cvSlice.actions.addIconicContainerItem());
    };

    return (
        <div className={cx('wrapper')}>
            <Row>
                <Col md={9}>
                    <div className={cx('header')}>
                        <TitleLarge>
                            <InputEditor
                                defaultValue={overviewData.iconic.name}
                            />
                        </TitleLarge>
                        <InputEditor
                            defaultValue={overviewData.iconic.position}
                        />
                    </div>
                    <Row>
                        {overviewData.container.map((overviewItem, index) => {
                            return (
                                <Col key={overviewItem.id} md={6}>
                                    <BoxEditorItem
                                        onAddNewEditor={handleAddNewEditor}
                                        index={index}
                                        title={overviewItem.title}
                                        editorValue={overviewItem.value}
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
