import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Col, Row } from 'react-bootstrap';

import SubMenu from '../../SubMenu';
import MenuItem from '../../MenuItem';
import { arrFonts } from '~/pages/CV/themes';
import FontItem from './FontItem';

function FontsControl() {
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <Tippy
            interactive
            appendTo={document.body}
            visible={visible}
            render={(attrs) => (
                <div {...attrs} tabIndex="-1">
                    <SubMenu title="Lựa chọn phông chữ">
                        {arrFonts.map((font, index) => {
                            return <FontItem key={index} name={font.name} />;
                        })}
                    </SubMenu>
                </div>
            )}
        >
            <div onClick={handleToggle}>
                <MenuItem
                    title="Phông chữ"
                    icon={<ion-icon name="text-outline"></ion-icon>}
                />
            </div>
        </Tippy>
    );
}

export default FontsControl;
