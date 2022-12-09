import CardAds from '~/components/CardAds/CardAds';
import RelatedJob from '../RecruitmentDetail/RelatedJob/RelatedJob';
import BestRecruitment from './BestRecruitment/BestRecruitment';
import FindJobs from './FindJobs/FindJobs';
import RuleBottom from './RuleBottom/RuleBottom';
import Signin from './Signin/Signin';

export default function Home() {
    return (
        <>
            <FindJobs />
            {/* <BestRecruitment /> */}
            {/* <Carousel /> */}
            <CardAds></CardAds>
            <RelatedJob />
            <RuleBottom />
            <Signin />
        </>
    );
}
