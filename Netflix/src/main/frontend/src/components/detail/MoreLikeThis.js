import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

const MoreLikeThis = ({ type, id }) => {
  const KEY = "bc61587b22cd0e5226a33d30e467d867";
  const [movies, setMovies] = useState([]);
  const [moreOne, setMoreOne] = useState(true);
  const [moreTwo, setMoreTwo] = useState(true);
  const [ex1, setEx1] = useState(true);
  const [ex1_overview, setEx1_overview] = useState(true);
  const [ex2, setEx2] = useState(true);
  const [ex2_overview, setEx2_overview] = useState(true);

  const getMovies = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${ KEY }&query=octopus%20teacher&language=ko-KR`)
        ).json();
    setMovies(json.results);
  }
  const getMoreOne = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/movie/24428?api_key=${ KEY }&language=ko-KR`)
        ).json();
      setMoreOne(json.poster_path);
      setMoreTwo(json.overview);
  }
  const getEx1 = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/movie/961484?api_key=${ KEY }&language=ko-KR`)
        ).json();
      setEx1(json.poster_path);
      setEx1_overview(json.overview);
  }
  const getEx2 = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/movie/676705?api_key=${ KEY }&language=ko-KR`)
        ).json();
      setEx2(json.poster_path);
      setEx2_overview(json.overview);
  }

  useEffect(() => {
    getMovies();
    getMoreOne();
    getEx1();
    getEx2();
  }, [])

  const[moreContentList, setMoreContentList] = useState(false)
  const [playIconHover, setPlayIconHover] = useState(false);
  const [playIconHover2, setPlayIconHover2] = useState(false);
  const [wishHover, setWishHover] = useState(false);

  /* 재생버튼 */
  const playIconHoverEnter = () => {
    setPlayIconHover(true);
    setPlayIconHover2(true)
  }
  const playIconHoverLeave = () => {
    setPlayIconHover(false);
    setPlayIconHover2(false)
  }
  const playIconHoverEnter2 = () => {
    setPlayIconHover2(true)
  }
  const playIconHoverLeave2 = () => {
    setPlayIconHover2(false)
  }
  
  /* 더보기 */
  const openContentList=()=>{
    setMoreContentList(!moreContentList)
  }

  /* 찜 */
  const wishHoverEnter = () => {
    setWishHover(true);
  }
  const wishHoverLeave = () => {
    setWishHover(false);
  }
  

  return (
    <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
      { wishHover &&
      <div className='block break-words text-[1vw]'>
        <div className="css-1w5d83q-popupBaseCss-popupCss show left-[148px] top-[782px]">
          <div className="css-1y6cdq8-popupContentCss-Popup relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
            <div className="css-g5m0d-toolTip-chevronBottom-toolTip block">내가 찜한 콘텐츠에 추가</div>
          </div>
        </div>
      </div>
      }
      <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
        <div className='moreLikeThis_wrapper bg-[#181818] text-[#fff] text-[16px] leading-[1.4]'>
          <h3 className='moreLikeThis_header text-[24px] font-bold mb-[20px] mt-[48px] block leading-[1.4]'>함께 시청된 콘텐츠</h3>
          <div className='section_container overflow-hidden block text-[#fff] text-[16px] leading-[1.4]'>
            <div className='moreLikeThis_continer grid grid-cols-3 gap-x-[2em] gap-y-[1em] items-stretch text-[#fff] text-[16px] leading-[1.4]'>
              { type === 'movie' && movies.map (movie => 
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src={ "https://image.tmdb.org/t/p/w200" + movie.poster_path }></img>
                  </div>

                  {/* play icon */}
                  <div onMouseEnter={playIconHoverEnter} onMouseLeave={playIconHoverLeave} className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  { playIconHover &&   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  }
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>{ movie.overview }</div>
                    </div>
                  </p>
                </div>
              </div>
              )}
              { type === 'tv' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src="https://occ-0-993-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeR3508zMIppdd7VqJGaKmoJmbZ0uvj9bA6jsbwJN_MoL7lG-QUmUauU9ow7pFwGFMEOe6W-3LSFMULCa-EXgkIH8N3QGFPZDXc.webp?r=405"></img>
                  </div>

                  {/* play icon */}
                  <div onMouseEnter={playIconHoverEnter} onMouseLeave={playIconHoverLeave} className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  { playIconHover2 &&   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  }
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>어른이 된 후 매일매일 되풀이되는 단조로운 일상에 지친 세 남매. 한없이 평범한 삶 속에서 특별한 성취와 자유를 찾아 나선다.</div>
                    </div>
                  </p>
                </div>
              </div>}
              { type === 'tv' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src="https://occ-0-993-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSNrPz-rc4Xg_CEpc0ztclD1N0TvXsGPzwBsj65CTtS9nJFyz3wLGuquk0tegP4v1ra-6Hb_SiBmMJSGVVyqqMdneGNnoVKHT3M.webp?r=537"></img>
                  </div>

                  {/* play icon */}
                  <div onMouseEnter={playIconHoverEnter2} onMouseLeave={playIconHoverLeave2} className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  { playIconHover2 &&   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  }
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>1,000년을 거슬러 고려 시대로 시간 여행을 하게 된 21세기 여인. 궁중의 암투에 휘말리고 여러 황자들의 사랑을 한몸에 받게 된다.</div>
                    </div>
                  </p>
                </div>
              </div>}
              { type === 'tv' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src="https://occ-0-993-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfSN7DqeKCkBkNUokg3Afs7ie5DJy3LhRIvmbfm9CJ_MhtJKhTOJuNAcX5ahAcznyFzvPHlvv5-1rteijJ0fmbx2HpatqHY6wus.webp?r=708"></img>
                  </div>

                  {/* play icon */}
                  <div onMouseEnter={playIconHoverEnter} onMouseLeave={playIconHoverLeave} className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  { playIconHover &&   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  }
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>그는 반란을 꿈꾼다. 서울에서 가장 활력 넘치는 이태원에서. 전과자와 반항아들이 뭉친 단밤 포차. 그곳의 문을 열며 그는 다짐한다. 자신의 전부를 앗아간 이들에게 제대로 복수하리라. 지금은 한낱 작은 술집이지만, 그들이 이끄는 요식업계의 대기업 ‘장가’를 제치고 대한민국 최고가 되겠다고. 그는 조금씩 그러나 확실하게 나아간다. 신념과 정직, 젊음과 패기를 무기로. 동명의 인기 웹툰을 각색한 박진감 넘치는 드라마. 《그녀는 예뻤다》의 박서준이 주연을 맡았다.</div>
                    </div>
                  </p>
                </div>
              </div>}
              { type === 'movie' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src={"https://image.tmdb.org/t/p/w200" + ex1 }></img>
                  </div>

                  {/* play icon */}
                  <div onMouseEnter={playIconHoverEnter2} onMouseLeave={playIconHoverLeave2} className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  { playIconHover2 &&   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  }
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>{ ex1_overview }</div>
                    </div>
                  </p>
                </div>
              </div>}
              { type === 'movie' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src={"https://image.tmdb.org/t/p/w200" + ex2 }></img>
                  </div>

                  {/* play icon */}
                  <div onMouseEnter={playIconHoverEnter} onMouseLeave={playIconHoverLeave} className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-100 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  { playIconHover &&   
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  }
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>{ ex2_overview }</div>
                    </div>
                  </p>
                </div>
              </div>}

              {/* { movies.map (movie => */}
              { moreContentList && type === 'tv' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src="https://occ-0-993-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEsvtp9LXkSUGO47QOIXx4izBge3qpoMbHUk77aIDymBHfprqXnMzwzq92casNez-simvSWqCvZXhB7udcP2vX8WOp5wIUiMaM.webp?r=4fb"></img>
                  </div>
                  <div className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>이대로 주저앉지 않으리. 꿈을 가진 일흔 노인과 재능을 가진 스물셋 청년. 냉혹한 현실을 밟고 일어선다, 서로를 일으킨다. 그들은 발레리노가 되어 날아오를 수 있을까?</div>
                    </div>
                  </p>
                </div>
              </div>
              }
              {/* )} */}
              { moreContentList && type === 'movie' &&
              <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                    src={"https://image.tmdb.org/t/p/w200" + moreOne }></img>
                  </div>
                  <div className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                    </svg>
                  </div>
                  {/* 시즌 */}
                  {/* <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span> */}
                </div>
                <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                      <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                            {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div>
                            <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                              <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns=''>
                                <path></path>
                              </svg>
                            </div> */}
                            <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                          </div>
                        </span>
                      </div>
                      <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2019</div>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                        </span>
                      </div>
                    </div>
                    <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                      <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                        <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <button aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className='titleCard_synopsis text-[#d2d2d2] m-0 pt-0 px-[1em] pb-[1em] text-[14px] leading-[20px] block cursor-pointer'>
                    <div className='ptrack_container block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>
                      <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>{ moreTwo }</div>
                    </div>
                  </p>
                </div>
              </div>
              }
              
            </div>
          </div>
          <div className='section_divider h-0 mt-0 border-b-[2px] border-solid border-b-[#404040] shadow-none flex justify-center m-auto relative w-[100%] text-[#fff] text-[16px] leading-[1.4]'>
            <button onClick={()=>openContentList()} aria-label='expand_section' className='section_expandButton max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] bottom-0 absolute translate-y-[50%] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
              <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-[white] cursor-pointer select-none break-words whitespace-nowrap' role="presentation">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='underArrow w-auto h-[100%] leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* MoreLikeThis.propTypes = {
  poster_path : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  overview : PropTypes.string.isRequired,
  genre_ids : PropTypes.arrayOf(PropTypes.number).isRequired
} */

export default MoreLikeThis;