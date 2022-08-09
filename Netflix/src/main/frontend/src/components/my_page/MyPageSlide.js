import React, { useState } from 'react';
import MyPageSlide_Sub from './MyPageSlide_Sub';

const MyPageSlide = () => {


    return (
        <div>
            <button onClick = { onToggle }>{ isShow ? '숨기기' : '보이기' }</button> 
            <hr/>
            {
                isShow && <MyPageSlide_Sub/> 
            }
        </div>
    );
};

export default MyPageSlide;
