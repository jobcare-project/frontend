import classNames from 'classnames/bind';
import styles from './UploadImage.module.scss';

import React, { useState } from 'react';

const cx = classNames.bind(styles);

const UploadImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            {selectedImage && (
                <div>
                    <img
                        alt="not fount"
                        width={'250px'}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <div />
                    <button onClick={() => setSelectedImage(null)}>
                        <div className={cx('remove-btn')}>Remove</div>
                    </button>
                </div>
            )}
            <br />

            <br />
            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadImage;
