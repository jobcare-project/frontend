import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import Button from '~/components/Button';
import ColorControl from './Menu/ColorControl';
import FontsControl from './Menu/FontsControl';
import ImageControl from './Menu/ImageControl';
import TemplateControl from './Menu/TemplateControl';
import styles from './ToolBar.module.scss';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

function ToolBar({ cvRef }) {
    useEffect(() => {
        console.log('contentRef', cvRef.current.offsetHeight);
    }, []);
    const generatePDF = () => {
        html2canvas(cvRef.current).then((canvas) => {
            const imgData = canvas.toDataURL('/image/png', 1.0);
            const doc = new jsPDF('p', 'mm', 'a4');
            // const imgProps = doc.getImageProperties(imgData);
            // const doc = new jsPDF();
            doc.addImage(imgData, 'PNG', 0, 0, 210, cvRef.current.offsetHeight);
            doc.save('jobcare.pdf');
            // doc.html(cvRef.current, {
            //     callback: (pdf) => {
            //         pdf.save('jobcare-cv.pdf');
            //     },
            // });
        });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('menu')}>
                <ColorControl />
                <FontsControl />
                <TemplateControl />
                <ImageControl />
            </div>
            <div className={cx('manager')}>
                <Button
                    onClick={() => {
                        generatePDF();
                    }}
                    primary
                    rounded
                    small
                >
                    Tải xuống
                </Button>
                <Link to="/manager-cv">
                    <Button rounded white small>
                        Quản lý CV
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default ToolBar;
