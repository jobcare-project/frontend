import BestRecruitment from './BestRecruitment/BestRecruitment';
import Carousel from './Slider/Slider';
// import classNames from 'classnames/bind';
// import styles from './Home.module.scss';
// const cx = classNames.bind(styles);

export default function Home() {
    return (
        <>
            <Carousel />
            <BestRecruitment />
        </>
    );
}
