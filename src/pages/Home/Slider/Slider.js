import classNames from 'classnames/bind';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import styles from './Slider.module.scss';
import images from '~/assets/images';
import Container from 'react-bootstrap/Container';

const cx = classNames.bind(styles);

const dataSlider = [
    {
        thumb: images.backgroundAccounts,
    },
    {
        thumb: images.backgroundAccounts,
    },
    {
        thumb: images.backgroundAccounts,
    },
    {
        thumb: images.backgroundAccounts,
    },
    {
        thumb: images.backgroundAccounts,
    },
];

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        speed: 250,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        arrows: true,
    };

    return (
        <Container>
            <div className={cx('wrapper')}>
                <Slider {...settings} className={cx('slider')}>
                    {dataSlider.map((sliderItem, index) => {
                        return (
                            <div key={index} className={cx('slider-item')}>
                                <Link to="/">
                                    <img src={sliderItem.thumb} alt="thumb" />
                                </Link>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </Container>
    );
}

export default Carousel;
