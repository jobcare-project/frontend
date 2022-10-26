import BestRecruitment from './BestRecruitment/BestRecruitment';
import FindJobs from './FindJobs/FindJobs';
import Signin from './Signin/Signin';
// import classNames from 'classnames/bind';
// import styles from './Home.module.scss';
// const cx = classNames.bind(styles);

export default function Home() {
    return (
        <>
            <FindJobs />
            <BestRecruitment />
            {/* <Carousel /> */}
            <Signin />
        </>
    );
}
