import React, { useState } from 'react';



import MyPageHeader from './MyPageHeader';
import MypageFooter from './MyPageFooter';

import MypageContainer from './MyPageContainer';
import Verification from './verification/Verification';
import { useParams } from 'react-router-dom';
import MyPageNewProfileEmail from './MyPageNewProfileEmail';
import MovieRating from './MovieRating';
import MypageMemberShip from './MypageMemberShip';
import MypagePassword from './MypagePassword';

const MyPage = () => {
	
    const {detail} = useParams();

   
    
    return (
        <div className=" m2_screen w-screen min-h-screen bg-[#f3f3f3]">
            <MyPageHeader/>
            <div className='relative'>
            {detail || <MypageContainer/> }
            {detail === 'mfa' && <Verification/>}
            {detail === 'addEmail' && <MyPageNewProfileEmail/>}
            {detail === 'movieRating' && <MovieRating/> }
            {detail === 'changePwd' && <MypagePassword/>}
            {detail === 'changePlan' && <MypageMemberShip/>}
            </div>
            <MypageFooter/>
       </div>
    );
};

export default MyPage;