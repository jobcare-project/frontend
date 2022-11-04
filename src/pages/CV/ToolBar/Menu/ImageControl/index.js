import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import SubMenu from '../../SubMenu';
import MenuItem from '../../MenuItem';

function ImageControl() {
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
                    <SubMenu title="Ảnh hồ sơ"></SubMenu>
                </div>
            )}
        >
            <div onClick={handleToggle}>
                <MenuItem
                    title="Ảnh hồ sơ"
                    icon={<ion-icon name="image-outline"></ion-icon>}
                />
            </div>
        </Tippy>
    );
}

export default ImageControl;
