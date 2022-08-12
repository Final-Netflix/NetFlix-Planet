import React, { useState } from 'react';

const Others = () => {
  const [playIconHover, setPlayIconHover] = useState(false);

  /* 재생버튼 */
  const playIconHoverEnter = () => {
    setPlayIconHover(true);
  }
  const playIconHoverLeave = () => {
    setPlayIconHover(false);
  }

  return (
    <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
      <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
        <div className='trailersAndMore_wrapper bg-[#181818] block text-[#fff] text-[16px] leading-[1.4]'>
          <div className='trailersAndMore_header block text-[#fff] text-[16px] leading-[1.4]'>
            <h3 className='text-[24px] font-bold mb-[20px] mt-[48px] block text-[#fff] leading-[1.4]'>예고편 및 다른 영상</h3>
          </div>
          <div className='trailersAndMore_container grid-cols-3 gap-x-[2em] gap-y-[1em] items-stretch grid justify-items-stretch text-[#fff] text-[16px] leading-[1.4]'>
            <div className='trailers_and_more_item h-[100%] m-[0.1em] min-h-[unset] flex-[0_0_47%] rounded-[0.25em] cursor-pointer relative overflow-hidden block text-[#fff] text-[16px] leading-[1.4]' aria-label='Season 1 Trailer: SPYxFAMILY 스파이 패밀리' role="button">
              <div className='titleCard_imageWrapper max-h-[70%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                  src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW-ixG_b6TOBDvjD2Am7vy6gLiWukcu4enVp0Q8HnSzDXcv0OdJb9AssSQIS-VFdGSnd7i8jd5C0hkQosqsnAG_otWPhg5TR9VZyyoBhxpTtRVdy5it3n8U0.webp?r=d63' alt='Season 1 Trailer: SPYxFAMILY 스파이 패밀리'></img>
                </div>
                {/* play icon */}
                <div onMouseEnter={playIconHoverEnter} onMouseLeave={playIconHoverLeave} className='titleCard_playIcon bg-none items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                { playIconHover &&  
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                  </svg>
                }
                </div>
              </div>
              <div className='titleCard_metadataWrapper bg-inherit min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='titleCard_title p-[1em] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <span className='titleCard_title_text text-[#fff] leading-[1.4] text-[1em] font-bold cursor-pointer'>Season 1 Trailer: SPYxFAMILY 스파이 패밀리</span>
                </div>
              </div>
            </div>
            <div className='trailers_and_more_item h-[100%] m-[0.1em] min-h-[unset] flex-[0_0_47%] rounded-[0.25em] cursor-pointer relative overflow-hidden block text-[#fff] text-[16px] leading-[1.4]' aria-label='Season 1 Trailer: SPYxFAMILY 스파이 패밀리' role="button">
              <div className='titleCard_imageWrapper max-h-[70%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                  src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABW-ixG_b6TOBDvjD2Am7vy6gLiWukcu4enVp0Q8HnSzDXcv0OdJb9AssSQIS-VFdGSnd7i8jd5C0hkQosqsnAG_otWPhg5TR9VZyyoBhxpTtRVdy5it3n8U0.webp?r=d63' alt='Season 1 Trailer: SPYxFAMILY 스파이 패밀리'></img>
                </div>
                <div className='titleCard_playIcon bg-none items-center bottom-0 flex justify-center left-0 opacity-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <svg className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                    <path></path>
                  </svg>
                </div>
              </div>
              <div className='titleCard_metadataWrapper bg-inherit min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='titleCard_title p-[1em] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <span className='titleCard_title_text text-[#fff] leading-[1.4] text-[1em] font-bold cursor-pointer'>Season 1 Trailer: SPYxFAMILY 스파이 패밀리</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;