import React from 'react';
import classNames from 'classnames/bind';
import styles from './Recruitment.module.scss';
import Button from '~/components/Button';
// import AddLogo from './Addlogo';
const cx = classNames.bind(styles);

function Recruitment() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('content-title')}>
                        <input
                            type="text"
                            placeholder="NHẬP VỊ TRÍ MUỐN TUYỂN DỤNG"
                            className={cx('input')}
                        />
                        <input
                            type="text"
                            placeholder="NHẬP TÊN CÔNG TY"
                            className={cx('input')}
                        />
                    </div>
                    {/* <AddLogo /> */}
                    <div className={cx('content-avatar')}>
                        <label
                            for="upload-photo"
                            className={cx('upload-photo')}
                        >
                            <img src="" alt="" className={cx('logo')} />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            id="upload-photo"
                            className={cx('upimg-btn')}
                        />
                    </div>
                </div>
                {/* hàng 1 */}
                <div className={cx('content-detail')}>
                    <div className={cx('row')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>Nhập mức lương</div>
                            <div className={cx('value')}>
                                <select name="luong" id="luong">
                                    <option value="">Thoả thuận</option>
                                    <option value="">Từ</option>
                                    <option value="">Triệu</option>
                                </select>
                            </div>
                        </div>
                        {/* Cột 2 */}
                        <div className={cx('col2')}>
                            <div className={cx('label')}>Số lượng người</div>
                            <div className={cx('value')}>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    {/* Hàng 2 */}
                    <div className={cx('row')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>
                                Hình thức làm việc
                            </div>
                            <div className={cx('value')}>
                                <select name="thoigian" id="thoigian">
                                    <option value="">Toàn thời gian</option>
                                    <option value="">Bán thời gian</option>
                                    <option value="">Thực tập sinh</option>
                                </select>
                            </div>
                        </div>
                        {/* Cột 2 */}
                        <div className={cx('col2')}>
                            <div className={cx('label')}>Giới tính</div>
                            <div className={cx('value')}>
                                <select name="gioitinh" id="thoigian">
                                    <option value="">Nam</option>
                                    <option value="">Nữ</option>
                                    <option value="">Không yêu cầu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 3 */}
                    <div className={cx('row')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>Cấp bậc</div>
                            <div className={cx('value')}>
                                <input type="text" />
                            </div>
                        </div>
                        {/* Cột 2 */}
                        <div className={cx('col2')}>
                            <div className={cx('label')}>Kinh nghiệm</div>
                            <div className={cx('value')}>
                                <select name="kinhnghiem" id="kinhnghiem">
                                    <option value="">Không yêu cầu</option>
                                    <option value="">Trên</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 4 */}
                    <div className={cx('row')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>Tỉnh/ Thành</div>
                            <div className={cx('value')}>
                                <select name="tinhthan" id="tinhthanh">
                                    <option value="">Tỉnh/ Thành</option>
                                    <option value="">Đà Nẵng</option>
                                </select>
                            </div>
                        </div>
                        {/* Cột 2 */}
                        <div className={cx('col2')}>
                            <div className={cx('label')}>Quận/ Huyện</div>
                            <div className={cx('value')}>
                                <select name="quanhuyen" id="quanhuyen">
                                    <option value="">Quận/ Huyện</option>
                                    <option value="">Hải Châu</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 5 */}
                    <div className={cx('row')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>Địa chỉ</div>
                            <div className={cx('value')}>
                                <input type="text" />
                            </div>
                        </div>
                        {/* Cột 2 */}
                        <div className={cx('col2')}>
                            <div className={cx('label')}>Đường phố</div>
                            <div className={cx('value')}>
                                <select name="gioitinh" id="thoigian">
                                    <option value="">Đường phố</option>
                                    <option value="">Hà Huy Tập</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 6 */}
                    <div className={cx('row', 'row-discript')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>
                                Nhập mô tả công việc
                            </div>
                            <div className={cx('value-require')}>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 7 */}
                    <div className={cx('row', 'row-discript')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>Yêu cầu ứng viên</div>
                            <div className={cx('value-require')}>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 8 */}
                    <div className={cx('row', 'row-discript')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>Quyền lợi</div>
                            <div className={cx('value-require')}>
                                <textarea></textarea>
                            </div>
                        </div>
                    </div>
                    {/* Hàng 9 */}
                    <div className={cx('row', 'row-discript')}>
                        {/* cột 1 */}
                        <div className={cx('col1')}>
                            <div className={cx('label')}>
                                Hình thức đăng tin
                            </div>
                            <div
                                className={cx('value-require', 'value-header')}
                            >
                                <div className={cx('header-post')}>
                                    <div className={cx('type-post')}>
                                        <input type="radio" />
                                        <span>Tin thường</span>
                                        <div className="type-option">
                                            <select name="songay" id="songay">
                                                <option value="">
                                                    Số ngày
                                                </option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('body-post')}>
                                    <div className={cx('type-post')}>
                                        <input type="radio" />
                                        <span>Tin VIP theo ngày</span>
                                        <div
                                            className="type-option"
                                            style={{ display: 'flex' }}
                                        >
                                            <select name="songay" id="songay">
                                                <option value="">
                                                    Loại VIP
                                                </option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                            <span>x</span>
                                            <select name="songay" id="songay">
                                                <option value="">
                                                    Số ngày
                                                </option>
                                                <option value="">1</option>
                                            </select>
                                            <div> = </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('bottom-post')}>
                                    <div className={cx('type-post')}>
                                        <input type="radio" />
                                        <span>Tin VIP theo tháng</span>
                                        <div className="type-option">
                                            <select name="songay" id="songay">
                                                <option value="">
                                                    Loại VIP
                                                </option>
                                                <option value="">1</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('content-rule')}>
                        <input type="checkbox" />
                        <span className={cx('rule')}>
                            Tôi cam kết thông tin mô tả về việc làm là thật và
                            tuân thủ các quy tắc của JobCare.vn
                        </span>
                    </div>
                </div>
                <div className={cx('submit-btn')}>
                    <div className={cx('btn-left')}>
                        <Button saveInput>Lưu nháp</Button>
                    </div>

                    <div className={cx('btn-right')}>
                        <Button reInput>Nhập lại</Button>
                        <Button primary>Đăng bài</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recruitment;
