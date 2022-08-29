import React, { useEffect, useState } from 'react';
import About from './About';
import APITest from './APITest';
import InfoText from './InfoText';
import Linked from './Linked';
import MoreLikeThis from './MoreLikeThis';
import Top from './Top';

const DetailForMovie = ({ type, value }) => {
  

  return (
    <div>
      {/* <Main /> */}
      <div className='c2_focus_trap_wrapper h-[100%] w-[100%] box-border flex justify-center left-0 absolute top-0 will-change-scroll break-keep-all'>
        <div className='c2_dialog mt-[30px] left-auto origin-[50%_12.5%] top-[2em] w-[848px] opacity-100 mb-[2em] transform-none min-w-0 z-[2] bg-transparent rounded-[6px] text-[#fff] text-[16px] will-change-transform'>
        
          <Top type={type} value={value}/>
        
          <div className='c2_previewModal_info opacity-[1] bg-[#181818] relative block text-[#fff] text-[16px] leading-[1.4]'>
            <div className='c2_detail_modal_container py-0 px-[3em] block text-[#fff] text-[16px] leading-[1.4]'>

            <InfoText type={type} value={value}/>
            <MoreLikeThis type={type} value={value}/>
            <About type={type} value={value}/>
                      
            </div>
          </div>
          <Linked type={type} value={value}/>
          {/* <APITest /> */}
        </div>
      </div>
      <div tabIndex="-1" className='opacity-[0.7] leading-[1.4]'>
        <div className="previewModal--backDrop bg-[#000] h-[100%] left-0 fixed top-0 w-[100%] block leading-[1.4]" tabIndex="-1" data-uia="previewModal--backDrop"></div>
      </div>
    </div>
  );
};

export default DetailForMovie;