import React, { useState } from 'react';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';

const MovieRating = () => {
    
    return (
        <div>
            <MyPageHeader/>
            <div className = "m-[20px] p-0 block">
                    <div className = "px-[20%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">
                            <div className = "text-[#333] w-[90%] text-5xl mb-100">프로필 이메일 추가</div>
                    </div>
            </div>        
             <MypageFooter/>
        </div>
    );
};

export default MovieRating;