import React from 'react';
import Info from './Info';
import Top from './Top';

const Detail = () => {
  
    return (
      <div className='c2_focus_trap_wrapper h-[100%] w-[100%] box-border flex justify-center left-0 absolute top-0 will-change-scroll break-keep-all'>
        <div className='c2_dialog left-auto origin-[50%_12.5%] top-[2em] w-[848px] opacity-100 mb-[2em] transform-none min-w-0 z-[2] bg-transparent rounded-[6px] text-[#fff] text-[16px] will-change-transform'>
          <Top />
          <Info />
        </div>
      </div>
    );
};

export default Detail;
