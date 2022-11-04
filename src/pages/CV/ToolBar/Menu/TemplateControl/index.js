import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import SubMenu from '../../SubMenu';
import MenuItem from '../../MenuItem';

function TemplateControl() {
    const [visible, setVisible] = useState(false);

    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <Tippy
            interactive
            visible={visible}
            appendTo={document.body}
            render={(attrs) => (
                <div {...attrs} tabIndex="-1">
                    <SubMenu title="Mẫu CV"></SubMenu>
                </div>
            )}
        >
            <div onClick={handleToggle}>
                <MenuItem
                    title="Mẫu CV"
                    icon={<ion-icon name="layers-outline"></ion-icon>}
                />
            </div>
        </Tippy>
    );
}

export default TemplateControl;
