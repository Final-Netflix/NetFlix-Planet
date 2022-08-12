import React, { useState } from 'react';



import MyPageHeader from './MyPageHeader';
import MypageFooter from './MyPageFooter';
import MypageContainer from './MyPageContainer';
import { useParams } from 'react-router-dom';
import Verification from './verification/Verification';

const MyPage = () => {
   const{detail} = useParams()
   
    
    return (
        <div className=" m2_screen w-screen min-h-screen bg-[#f3f3f3]">
            <MyPageHeader/>
            {detail || <MypageContainer/> }
            {detail === 'mfa' && <Verification/>}
            <MypageFooter/>
        </div>
    );
};

export default MyPage;