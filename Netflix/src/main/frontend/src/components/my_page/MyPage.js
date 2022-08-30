import React from 'react';
import MyPageHeader from './MyPageHeader';
import MypageFooter from './MyPageFooter';
import MypageContainer from './MyPageContainer';
import Verification from './verification/Verification';
import { useParams } from 'react-router-dom';
import MyPageNewProfileEmail from './MyPageNewProfileEmail';
import MovieRating from './MovieRating';
import ProfileLock from './ProfileLock';
import WatchRecord from './WatchRecord';
import PlaySetting from './PlaySetting';
import MovieRating_Sub from './MovieRating_Sub';
import MypageMemberShip from './MypageMemberShip';
import MypagePassword from './MypagePassword';
import EvaluationContent from './EvaluationContent';
import ProfileLock_Sub from './ProfileLock_Sub';
import SuccessEmail from './SuccessEmail';
import SuccessPhone from './SuccessPhone';
const MyPage = () => {
    const {detail} = useParams();
    return (
		<div className=" m2_screen w-screen min-h-screen bg-[#f3f3f3]">
            <MyPageHeader/>
            <div className='relative h-[80%]'>
                {detail ? '' :<MypageContainer/> }
                {detail === 'mfa' && <Verification/>}
				{detail === 'newProfileEmail' && <MyPageNewProfileEmail/>}
				{detail === 'movieRating' && <MovieRating/>}
				{detail === 'movieRating_Sub' && <MovieRating_Sub/>}
				{detail === 'profileLock' && <ProfileLock/>}
				{detail === 'profileLock_Sub' && <ProfileLock_Sub/>}
				{detail === 'watchRecord' && <WatchRecord/>}
				{detail === 'evaluationContent' && <EvaluationContent/>}
				{detail === 'playSetting' && <PlaySetting/>}
				{detail === 'successEmail' && <SuccessEmail/>}
				{detail === 'successPhone' && <SuccessPhone/>}

				{detail === 'changePwd' && <MypagePassword/>}
				{detail === 'changePlan' && <MypageMemberShip/>}
           	</div>
			   {detail && <MypageFooter/>}
            
       </div>
    );
};

export default MyPage;
