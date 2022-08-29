import React, { useEffect, useState } from 'react';
import About from './About';
import Content from './Content';
import InfoText from './InfoText';
import MoreLikeThis from './MoreLikeThis';
import Others from './Others';

const Info = ({type, id}) => {

  return (
    <div className='c2_previewModal_info opacity-[1] bg-[#181818] relative block text-[#fff] text-[16px] leading-[1.4]'>
      <div className='c2_detail_modal_container py-0 px-[3em] block text-[#fff] text-[16px] leading-[1.4]'>
        <InfoText type={type} id={id} />
        <Content type={type} id={id} />
        <MoreLikeThis type={type} id={id} />
        <Others type={type} id={id} />
        <About type={type} id={id} />
      </div>
    </div>
  );
};

export default Info;