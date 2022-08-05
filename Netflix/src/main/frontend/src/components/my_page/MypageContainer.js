import React from 'react';
import my1_guard from 'image/guard.JPG'
const MypageContainer = () => {
    return (
        <div className='my1_bd md:w-[500px] mt-5 mx-[30px] mb-0 p-0 tracking-normal font-sans bg-[#333] text-[16px] cursor-default  break-[keep-all]' style={{wordBreak : 'keep-all' , direction : 'ltr'}}>
            <div className='my1_responsive-account-container md:w-[740px] text-[1em] @media max-w-[1024px] w-[95%] block my-0 mx-auto min-h-[400px] min-w-[300px] relative' style={{overflowWrap:'anywhere'}}>
                <div className='my1_mfa-challenge-container mt-[50px] mx-auto mb-0 min-w-[684px] box-border '>
                    <div>
                        <img className='my1_icon-shield overflow-hidden' src={my1_guard}></img>
                        
                    </div>
                </div>  
            </div>
        </div>
    );
};

export default MypageContainer;