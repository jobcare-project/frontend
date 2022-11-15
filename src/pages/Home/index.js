import BestRecruitment from './BestRecruitment/BestRecruitment';
import FindJobs from './FindJobs/FindJobs';
import Signin from './Signin/Signin';

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
