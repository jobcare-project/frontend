import React from 'react';
import styles from './DescriptDetail.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

export default function DescriptDetail({ data }) {
    return (
        <>
            <div className={cx('descript-job')}>
                <h1>Mô tả công việc</h1>
                <div className={cx('content-tab')}>
                    <p>
                        - Xây dựng mục tiêu kinh doanh; Quản lý điều hành công
                        việc và chịu trách nhiệm về doanh số của Bộ phận
                        Telesales.
                        <br></br>- Lập Kế hoạch chi tiết cho bộ phận Telesales
                        đáp ứng chỉ tiêu doanh số của bộ phận.
                        <br></br>- Xây dựng quy chế doanh số, chính sách lương –
                        thưởng, đồng thời giám sát và đánh giá doanh số của nhân
                        viên
                        <br></br>- Giám sát, đánh giá chất lượng cuộc gọi của
                        toàn thể NV Telesales - Đào tạo, bồi dưỡng nâng cao
                        nghiệp vụ, kiến thức sản phẩm cho nhân viên Telesales
                        theo định kỳ.
                    </p>
                </div>
            </div>
            <div className={cx('descript-require')}>
                <h1>Yều cầu ứng viên</h1>
                <div className={cx('content-tab')}>
                    <p>
                        - Có kiến thức về bán hàng và quản lý đội nhóm bán hàng
                        qua điện thoại .<br></br>- Có khả năng tổ chức và tạo
                        động lực làm việc cho nhân viên tốt.
                        <br></br>- Thành thạo kĩ năng đàm phán thuyết phục, có
                        khả năng xử lí các vấn đề phát sinh .<br></br>- Có khả
                        năng giao tiếp, giọng nói chuẩn, dễ nghe, chịu được áp
                        lực công việc cao.
                    </p>
                </div>
            </div>
            <div className={cx('descript-benefit')}>
                <h1>Quyền lợi</h1>
                <div className={cx('content-tab')}>
                    <p>
                        - Lương cứng từ 10.000.000 VNĐ + thưởng KPI. Thu nhập
                        trung bình từ 15.000.0000đ - 20.000.000đ .<br></br>- hụ
                        cấp ăn trưa 25.000đ/ ngày.
                        <br></br>- Chính sách thưởng đa dạng: Thưởng hiệu quả
                        công việc, thưởng nhân viên xuất sắc, ý tưởng đột phá,…
                        <br></br>- Được hưởng lương tháng 13 và thưởng tết theo
                        cơ chế của công ty .
                    </p>
                </div>
            </div>
            
        </>
    );
}
