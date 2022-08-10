import React from 'react';
import About from './About';
import Content from './Content';
import InfoText from './InfoText';
import MoreLikeThis from './MoreLikeThis';
import Others from './Others';

const Info = () => {
  return (
    <div className='c2_previewModal_info opacity-[1] bg-[#181818] relative block text-[#fff] text-[16px] leading-[1.4]'>
      <div className='c2_detail_modal_container py-0 px-[3em] block text-[#fff] text-[16px] leading-[1.4]'>
        <InfoText />
        <Content />
        <MoreLikeThis />
        <Others />
        <About />
      </div>
    </div>
  );
};

export default Info;