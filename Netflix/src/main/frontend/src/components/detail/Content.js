import React, { useState } from 'react';
import 'css/detail/content.css';

const Content = () => {
  const [moreContent, setMoreContent] = useState(false);
  const [playIconHover, setPlayIconHover] = useState(false);
  const [playIconHover2, setPlayIconHover2] = useState(false);

  /* 재생버튼 */
  const playIconHoverEnter = () => {
    setPlayIconHover(true);
  }
  const playIconHoverLeave = () => {
    setPlayIconHover(false);
  }
  const playIconHoverEnter2 = () => {
    setPlayIconHover2(true);
  }
  const playIconHoverLeave2 = () => {
    setPlayIconHover2(false);
  }

  /* 더보기 */
  const openContent=()=>{
    setMoreContent(!moreContent)
  }

  return (
    <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
      <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
        <div className='episodeSelector bg-[#181818] pt-[1em] px-0 pb-0 block text-[#fff] text-[16px] leading-[1.4]'>
          <div className='episodeSelector_header items-baseline flex justify-between text-[#fff] text-[16px] leading-[1.4]'>
            <h3 className='section_header text-[24px] font-bold mb-[20px] mt-[48px] block text-[#fff] leading-[1.4]'>회차</h3>
            <div className='episodeSelector_dropdown text-[12px] font-semibold block text-[#fff] leading-[1.4]'></div>
            <div className='episodeSelector_season_name text-[18px] block text-[#fff] leading-[1.4]'>SPYxFAMILY 스파이 패밀리</div>
          </div>
          <div className='episodeSelector_container flex flex-col flex-wrap justify-start text-[#fff] text-[16px] leading-[1.4]'>
            <div onMouseEnter={playIconHoverEnter} onMouseLeave={playIconHoverLeave} className='titleCardList bg-[#333] border-t-[1px] border-solid border-t-[#404040] min-h-[10em] items-center border-b-[1px] border-b-[#404040] rounded-[0.25em] cursor-pointer flex overflow-hidden p-[1em] relative text-[#fff] text-[16px] leading-[1.4]' aria-label='오퍼레이션 올빼미' role="button">
              <div className='titleCard_title_index text-[#d2d2d2] flex flex-[0_0_7%] text-[1.5em] justify-center cursor-pointer leading-[1.4]'>1</div>
              <div className='titleCard_imageWrapper rounded-[4px] flex-[0_0_18%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block max-w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                  src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXv5d0NNs57Mc_FcCDfPSVBsfz9QnPTiPX7B-VPKHKV5xTgW4a75CHCULnNvaXSzJdIYsFSe7cbGWpLHD_cBxOAro1tpL0wv4830aLfcVUneXkH4B1t6_U_C.webp?r=51e' alt='오퍼레이션 올빼미'></img>
                </div>
                {/* play icon */}
                <div className='titleCard_playIcon items-center from-[hsla(0,0%,9%,.7)] to-[transparent 25%] bg-gradient-to-b bottom-0 flex justify-center left-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                { playIconHover && 
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] opacity-100 p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                  </svg>
                }
                </div>
                <progress className='titleCard_progress bg-[grey] bottom-0 text-[#e50914] h-[0.25em] m-0 p-0 absolute w-[100%] appearance-auto cursor-pointer text-[16px] leading-[1.4]'></progress>
              </div>
              <div className='titleCard_metadataWrapper flex-[0_0_70%] text-[1em] min-h-[100%] block cursor-pointer text-[#fff] leading-[1.4]'>
                <div className='titleCardList_title flex justify-between pt-[1em] px-[1em] pb-[0.5em] text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>
                  <span className='titleCard_title_text text-[#fff] text-[1em] font-bold overflow-wrap-anywhere cursor-pointer leading-[1.4]'>오퍼레이션 올빼미</span>
                  <span className='text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>
                    <span className='duration_ellipsized pl-[10px] text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>24분</span>
                  </span>
                </div>
                <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                  <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>이웃 나라의 고위직 정치인에게 접근하라는 명령을 받은 엘리트 스파이. 완벽한 위장을 위해 어린 딸을 입양한다.</div>
                </p>
              </div>
            </div>
            
            <div onMouseEnter={playIconHoverEnter2} onMouseLeave={playIconHoverLeave2} className='titleCardList min-h-[10em] items-center border-b-[1px] border-solid border-b-[#404040] rounded-[0.25em] cursor-pointer flex overflow-hidden p-[1em] relative text-[#fff] text-[16px] leading-[1.4]' aria-label='아내 역을 확보하라' role="button">
              <div className='titleCard_title_index text-[#d2d2d2] flex flex-[0_0_7%] text-[1.5em] justify-center cursor-pointer leading-[1.4]'>2</div>
              <div className='titleCard_imageWrapper rounded-[4px] flex-[0_0_18%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block max-w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                  src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQDz2t-tFedeCu-yPMz6WGyM3FdxnNMcA20QdJlADrsWekw4TDiVYCfYIelekaeHgv2bCJbnw7HqCB_lEh-uQjK8NQyH7_A5Ff4.webp?r=c9e' alt='아내 역을 확보하라'></img>
                </div>
                {/* play icon */}
                <div className='titleCard_playIcon items-center from-[hsla(0,0%,9%,.7)] to-[transparent 25%] bg-gradient-to-b bottom-0 flex justify-center left-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                { playIconHover2 &&
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] opacity-100 p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                  </svg>
                }
                </div>
                <progress className='titleCard_progress bg-[grey] bottom-0 text-[#e50914] h-[0.25em] m-0 p-0 absolute w-[100%] appearance-auto cursor-pointer text-[16px] leading-[1.4]'></progress>
              </div>
              <div className='titleCard_metadataWrapper flex-[0_0_70%] text-[1em] min-h-[100%] block cursor-pointer text-[#fff] leading-[1.4]'>
                <div className='titleCardList_title flex justify-between pt-[1em] px-[1em] pb-[0.5em] text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>
                  <span className='titleCard_title_text text-[#fff] text-[1em] font-bold overflow-wrap-anywhere cursor-pointer leading-[1.4]'>아내 역을 확보하라</span>
                  <span className='text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>
                    <span className='duration_ellipsized pl-[10px] text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>24분</span>
                  </span>
                </div>
                <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                  <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>이든 칼리지 어쩌구</div>
                </p>
              </div>
            </div>
            {/* moreContent area */}
            { moreContent &&
            <div className='titleCardList min-h-[10em] items-center border-b-[1px] border-solid border-b-[#404040] rounded-[0.25em] cursor-pointer flex overflow-hidden p-[1em] relative text-[#fff] text-[16px] leading-[1.4]' aria-label='수험 대책을 세워라' role="button">
              <div className='titleCard_title_index text-[#d2d2d2] flex flex-[0_0_7%] text-[1.5em] justify-center cursor-pointer leading-[1.4]'>3</div>
              <div className='titleCard_imageWrapper rounded-[4px] flex-[0_0_18%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block max-w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                  src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABTWYnmDS1e0WPyFYyOl47nDQ7Twf0noOgWLvfiIiP27wT7bocF0CPHu0XqSpHo1wGLtCilZwVB5QiIsXmYiiGORBWlmWk7OPbyw.webp?r=99a' alt='수험 대책을 세워라'></img>
                </div>
                <div className='titleCard_playIcon items-center from-[hsla(0,0%,9%,.7)] to-[transparent 25%] bg-gradient-to-b bottom-0 flex justify-center left-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] opacity-0 p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                  </svg>
                </div>
                <progress className='titleCard_progress bg-[grey] bottom-0 text-[#e50914] h-[0.25em] m-0 p-0 absolute w-[100%] appearance-auto cursor-pointer text-[16px] leading-[1.4]'></progress>
              </div>
              <div className='titleCard_metadataWrapper flex-[0_0_70%] text-[1em] min-h-[100%] block cursor-pointer text-[#fff] leading-[1.4]'>
                <div className='titleCardList_title flex justify-between pt-[1em] px-[1em] pb-[0.5em] text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>
                  <span className='titleCard_title_text text-[#fff] text-[1em] font-bold overflow-wrap-anywhere cursor-pointer leading-[1.4]'>수험 대책을 세워라</span>
                  <span>
                    <span className='duration_ellipsized pl-[10px] text-[1em] cursor-pointer text-[#fff] leading-[1.4]'>24분</span>
                  </span>
                </div>
                <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                  <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>포저 가족의 집에 들어온 요르.</div>
                </p>
              </div>
            </div>
            }

            {/* <div className='titleCardList' aria-label='명문 학교 면접시험' role="button">
              <div className='titleCard_title_index'>4</div>
              <div className='titleCard_imageWrapper'>
                <div className='ptrack_content'>
                  <img src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQrH5x5ol-6zFTnfq1Qlw8eSHCapR5eWb6N0COUXuf8eE6JBqIWeWfE4ujNe_vQH19T4ofJZ_aBBeF7agIbhT6sAf59ZzU0-KFY.webp?r=21b' alt='명문 학교 면접시험'></img>
                </div>
                <div className='titleCard_playIcon'>
                  <svg className='titleCard_playSVG' xmlns='http://www.w3.org/2000/svg'>
                    <path></path>
                  </svg>
                </div>
                <progress className='titleCard_progress'></progress>
              </div>
              <div className='titleCard_metadataWrapper'>
                <div className='titleCardList_title'>
                  <span className='titleCard_title_text'>명문 학교 면접시험</span>
                  <span>
                    <span className='duration_ellipsized'>24분</span>
                  </span>
                </div>
                <p className='titleCard_synopsis'>
                  <div className='ptrack_content'>입학 면접시험을 위해 이든 칼리지에 도착한 포저 가족.</div>
                </p>
              </div>
            </div> */}
            {/* <div className='titleCardList' aria-label='합격 여부의 행방' role="button">
              <div className='titleCard_title_index'>5</div>
              <div className='titleCard_imageWrapper'>
                <div className='ptrack_content'>
                  <img src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABWMld-xZkAcLvcIN64KJSTSx--ZRHYQ4irdRKHa4tmkwjxb7Sph6a0g9T_ki2tx4ZiIpcAhYMhr25VlqyJ2--zGTmg-8kH4ThCE.webp?r=c85' alt='합격 여부의 행방'></img>
                </div>
                <div className='titleCard_playIcon'>
                  <svg className='titleCard_playSVG' xmlns='http://www.w3.org/2000/svg'>
                    <path></path>
                  </svg>
                </div>
                <progress className='titleCard_progress'></progress>
              </div>
              <div className='titleCard_metadataWrapper'>
                <div className='titleCardList_title'>
                  <span className='titleCard_title_text'>합격 여부의 행방</span>
                  <span>
                    <span className='duration_ellipsized'>24분</span>
                  </span>
                </div>
                <p className='titleCard_synopsis'>
                  <div className='ptrack_content'>합격자 명단을 보고 어깨가 축 처진 포저 가족.</div>
                </p>
              </div>
            </div> */}
            <div className='section_divider h-0 mt-0 border-b-[2px] border-solid border-b-[#404040] shadow-none flex justify-center m-auto relative w-[100%] text-[#fff] text-[16px] leading-[1.4]'>
              <button onClick={()=>openContent()} aria-label='expand section' className='section_expandButton max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] bottom-0 absolute translate-y-[50%] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                  <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-[white] cursor-pointer select-none break-words whitespace-nowrap'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='underArrow w-auto h-[100%] leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap' xmlns='http://www.w3.org/2000/svg'>
                      <path fillRule="evenodd" clipRule-="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;