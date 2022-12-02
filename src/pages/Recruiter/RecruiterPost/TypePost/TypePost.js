import React from 'react';

function TypePost() {
    return (
        <div>
            {/* Chọn gói đăng tin */}
            {/* <div className={cx('content-input')}>
        <div className={cx('detail-name')}>
            Hình thức đăng tin
        </div>
        <div className={cx('form-choice')}>
            <div className={cx('type-name')}>
                <div className={cx('checkbox')}>
                    <input
                        type="radio"
                        checked={
                            typeChecked === 'normal'
                        }
                        onChange={() =>
                            handleChangeTypeChecked(
                                'normal',
                            )
                        }
                    />
                </div>
                <span className={cx('type-post')}>
                    Tin thường
                </span>
            </div>
            <div
                className={cx('', {
                    overlay:
                        typeChecked !== 'normal',
                })}
            >
                <div className={cx('type-days')}>
                    <span>
                        * Tin thường phải chờ để
                        được kiểm duyệt trước khi
                        hiển thị, thường sẽ mất từ 5
                        phút đến 1 tiếng, tuỳ thuộc
                        vào lượng tin đăng trong
                        ngày
                        <br />
                        * Tin thường sẽ có thời gian
                        hiển thị là 30 ngày
                        <br />* Sẽ bị trôi nhanh do
                        có nhiều tin đăng trong ngày
                    </span>
                </div>
            </div>
        </div>
    </div> */}

            {/* <div className={cx('content-input')}>
        <div className={cx('detail-name')}></div>
        <div className={cx('form-choice')}>
            <div className={cx('type-name')}>
                <div className={cx('checkbox')}>
                    <input
                        type="radio"
                        checked={
                            typeChecked ===
                            'vipDate'
                        }
                        onChange={() =>
                            handleChangeTypeChecked(
                                'vipDate',
                            )
                        }
                    />
                </div>
                <span className={cx('type-post')}>
                    Tin VIP theo ngày
                </span>
            </div>

            <div
                className={cx('', {
                    overlay:
                        typeChecked !== 'vipDate',
                })}
            >
                <div className={cx('type-vip')}>
                    <DropDown
                        data={vipDateData}
                        className={cx('select-vip')}
                        title="Loại VIP"
                        onChangeSelect={(
                            value,
                            name,
                        ) =>
                            handleChangeVipValues(
                                value,
                                name,
                                'typeVipDay',
                            )
                        }
                    />
                    <span className={cx('multip')}>
                        x
                    </span>
                    <DropDown
                        data={dateData}
                        className={cx('select-vip')}
                        title="Số ngày"
                        onChangeSelect={(
                            value,
                            name,
                        ) =>
                            handleChangeVipValues(
                                value,
                                name,
                                'quantiyDay',
                            )
                        }
                    />

                    <span className={cx('cost')}>
                        ={totalQuantityVipDays}đ
                        <span
                            className={cx(
                                'cost-total',
                            )}
                        ></span>
                    </span>
                </div>
            </div>
        </div>
    </div> */}
            {/* <div className={cx('content-input')}>
        <div className={cx('detail-name')}></div>
        <div className={cx('form-choice')}>
            <div className={cx('type-name')}>
                <div className={cx('checkbox')}>
                    <input
                        type="radio"
                        checked={
                            typeChecked ===
                            'vipMonth'
                        }
                        onChange={() =>
                            handleChangeTypeChecked(
                                'vipMonth',
                            )
                        }
                    />
                </div>
                <span className={cx('type-post')}>
                    Tin VIP theo tháng
                </span>
            </div>
            <div
                className={cx('', {
                    overlay:
                        typeChecked !== 'vipMonth',
                })}
            >
                <div
                    className={cx(
                        'type-vip-special',
                    )}
                >
                    <DropDown
                        data={vipMonthData}
                        title="Loại VIP"
                    />
                </div>
            </div>
        </div>
    </div> */}
        </div>
    );
}

export default TypePost;
