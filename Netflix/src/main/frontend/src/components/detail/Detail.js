import React, { useState } from 'react';

const Detail = () => {
  const[moreContent, setMoreContent] = useState(false)

  const openContent=()=>{
    setMoreContent(!moreContent)
  }
  
    return (
      <div className='c2_focus_trap_wrapper h-[100%] w-[100%] box-border flex justify-center left-0 absolute top-0 will-change-scroll break-keep-all'>
        <div className='c2_dialog left-auto origin-[50%_12.5%] top-[2em] w-[880.68px] opacity-100 mb-[2em] transform-none min-w-0 z-[2] bg-transparent rounded-[6px] text-[#fff] text-[16px] will-change-transform'>
          <div className='c2_previewModal rounded-t-md overflow-hidden bg-[#000] cursor-pointer relative text-[#fff] text-[16px]'>
            <div className='absolute w-[100%] h-[100%] overflow-hidden cursor-pointer text-[#fff] text-[16px]'>
              <div id='81593318' className='relative w-[100%] h-[100%] overflow-hidden cursor-pointer text-[#fff] text-[16px]'>
                <video src='blob:https://www.netflix.com/f882d0a2-b791-4023-842a-059fea5d8ab6' className='absolute w-[100%] h-[100%] object-cover inline-block align-baseline'></video> {/* video 실행 안됨 */}
                <div className='c2_player_timedtext absolute inset-0 hidden mt-0 mr-[88.2px] mb-0 ml-[235.2px]'></div>
              </div>
            </div>
            <div className='c2_videoMerchPlayer_boxart_wrapper absolute h-[100%] pt-[56.3925%] w-[100%]'>
              <img aria-hidden="true" className='c2_previewModal_boxart opacity-0 bg-cover h-[100%] left-0 absolute top-0 w-[100%] border-0' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQhM9UIOiaYmBg96LoJL9C-yj7Vx6_8dPdHVvyCMpRv2UP1PQOJgLBcCFDngWDhXJ5leiW1SGSTEZge7mTxo0IP95RlwnmKzkE4sZJ90_L5nLX41LHU8MJAgdWgjZGeu62W35r2E7ziLxDN0QbBG4DBmpUGBGY9witDoj6gEykXyXwAJ2rNvGiNxYuvxyzt0lRQE_WwDyUZeCtglbin4o1pnEp8gEtSLE1QRsJHY6YEryjBRskBxELAoeZMEQAfrPZ5LnQj9WeP7WCKJOQKPi83u5lBy57ThjIvhT4rwjwVeBxMJxxHQ6Rlbo-pP5mQW_tLMuq3dpVQaY33ePcHCADYSgDltvFrSVOREUd10GxinWhkDu-FSm9ch3A1C6E4NXBD1vkWm7su5ISbxbnZTHG6bZuuc9dbQWPs5SwC-4s4f44.webp?r=4a8'></img>
              <img className='hidden border-0' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQhM9UIOiaYmBg96LoJL9C-yj7Vx6_8dPdHVvyCMpRv2UP1PQOJgLBcCFDngWDhXJ5leiW1SGSTEZge7mTxo0IP95RlwnmKzkE4sZJ90_L5nLX41LHU8MJAgdWgjZGeu62W35r2E7ziLxDN0QbBG4DBmpUGBGY9witDoj6gEykXyXwAJ2rNvGiNxYuvxyzt0lRQE_WwDyUZeCtglbin4o1pnEp8gEtSLE1QRsJHY6YEryjBRskBxELAoeZMEQAfrPZ5LnQj9WeP7WCKJOQKPi83u5lBy57ThjIvhT4rwjwVeBxMJxxHQ6Rlbo-pP5mQW_tLMuq3dpVQaY33ePcHCADYSgDltvFrSVOREUd10GxinWhkDu-FSm9ch3A1C6E4NXBD1vkWm7su5ISbxbnZTHG6bZuuc9dbQWPs5SwC-4s4f44.webp?r=4a8'></img>
            </div>
            <div className='c2_storyArt overflow-hidden pt-[56.3925%] w-[100%]'>
              <img src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZbVJV4TTlebZXyVIz1uynnmoRh_7Cp0L1vSHyJ_4yQtglDKpKcdhFL7LIq5DO9i7apdvdUBHWeuKHpJw1hcS31L_0UoF6QJ80i6.webp?r=450' className='opacity-[1] block left-0 max-w-[100%] absolute top-0 transition-height duration-[.2s] ease-in-out border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></img>
              <img src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZbVJV4TTlebZXyVIz1uynnmoRh_7Cp0L1vSHyJ_4yQtglDKpKcdhFL7LIq5DO9i7apdvdUBHWeuKHpJw1hcS31L_0UoF6QJ80i6.webp?r=450' aria-hidden="true" className='hidden border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></img>
            </div>
            <div className='opacity-[1]'>
              <div className='previewModal_player_titleTreatmentWrapper opacity-[1] from-[#181818] to-[transparent 50%] bg-gradient-to-t h-[100%] absolute top-0 w-[100%]'>
                <div className='previewModal_player_titleTreatment_left bottom-[5%] left-[3em] absolute w-[40%]'>
                  <img className='hidden border-0' alt='spy family logo' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfckc9vjUDZDDb51BIkxA4HvHTnlLBfgluBzpzNdE5bEGKWmpnVi0tt7i1emKTiSBEs9GnzbYQ6lHxhkhCefhR62xBj-GCQiF8FS36aS4PM.webp?r=50e'></img>
                  <img className='previewModal_player_titleTreatment_logo w-[100%] mb-[1.5em] border-0' alt='spy family logo' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfckc9vjUDZDDb51BIkxA4HvHTnlLBfgluBzpzNdE5bEGKWmpnVi0tt7i1emKTiSBEs9GnzbYQ6lHxhkhCefhR62xBj-GCQiF8FS36aS4PM.webp?r=50e'></img>
                  <div className='buttonControls_container items-center flex mb-[1em] min-h-[2em]'>
                    <a href='#' className='m-[0.25em] text-[#fff] cursor-pointer no-underline bg-transparent'>
                      <button className='playButton max-h-[42px] min-h-[32px] pl-[2rem] pr-[2.4rem] bg-white text-black items-center appearance-none border-0 rounded-[4px] cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap'>
                        <div className='ltr_iconWrap leading-[0] block'>
                          <div className='medium_ltr_baseCss h-[2.4rem] w-[2.4rem] flex items-center justify-center'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='overflow-hidden h-[100%] w-[100%]'>
                              <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                        <div className='ltr_boxCss w-[1rem] flex h-[100%] relative'></div>
                        <span className='ltr_textCss font-sans block text-[1.6rem] font-bold leading-[2.4rem] text-black cursor-pointer select-none break-words whitespace-nowrap'>재생</span>
                      </button>
                    </a>
                    <div className='ltr_toolTipWrapper m-[0.25em] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <button className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] border-solid text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible' 
                                aria-label='내가 찜한 콘텐츠에 추가'>
                          <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                            <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap' xmlns='http://www.w3.org/2000/svg'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                              </svg>
                              {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                              </svg> */}
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                    {/* <div className='css'> */}
                      <div>
                        <div className='ltr_componentStyles m-[0.25em] relative z-[1] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                          <button className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                            <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap' xmlns='http://www.w3.org/2000/svg'>
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </button>
                          {/* <div className='thumbs_selection_overlay_container opacity-[1] translate-x-[-50%] translate-y-[-50%] translate-z-[0px] scale-[1] ml-[0.1rem] mt-[-0.1rem] absolute top-[50%] left-[50%] transition-opacity-[0.1s] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='thumbs_selection_popover cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <div className='block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                <div className='ltr_thumbContainerCss w-[13rem] bg-[rgb(35,35,35)] rounded-[3rem] shadow-[rgb(0 0 0 / 60%) 0px 0px 2px 0px, rgb(0 0 0 / 50%) 0px 8px 16px 0px] flex p-[0.8rem] justify-between items-center cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                  <div className='ltr_toolTipWrapper my-0 mx-[0.2rem] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                    <button aria-label='맘에 안 들어요로 평가하기' className='ButtonColorStatesCss max-h-[42px] max-w-[42px] items-center appearance-none flex justify-center opacity-[1] relative select-none will-change-[background-color, color] break-words whitespace-nowrap border-none bg-transparent font-[inherit] p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                      <svg xmlns='' className='w-[100%] h-[100%] pointer-events-none z-0 scale-[2] overflow-hidden select-none break-words whitespace-nowrap font-[inherit] cursor-pointer text-[rgb(169,169,169)] normal-case'>
                                        <defs>
                                          <clipPath id='lottie_element_0'>
                                            <rect className='w-[72] h-[72] x-0 y-0 pointer-events-none select-none break-words whitespace-nowrap cursor-pointer text-[rgb(169,169,169)]'></rect>
                                          </clipPath>
                                          <clipPath id='lottie_element_1'>
                                            <rect></rect>
                                          </clipPath>
                                        </defs>
                                        <g clipPath='url(#lottie_element_0)'>
                                          <g clipPath='url(#lottie_element_1)'>
                                            <g>
                                              <g>
                                                <path className=''></path>
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path></path>
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path></path>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div className='ltr_toolTipWrapper'>
                                  <button aria-label='좋아요로 평가하기' className='ButtonColorStatesCss'>
                                      <svg xmlns=''>
                                        <defs>
                                          <clipPath id='lottie_element_0'>
                                            <rect></rect>
                                          </clipPath>
                                          <clipPath id='lottie_element_1'>
                                            <rect></rect>
                                          </clipPath>
                                        </defs>
                                        <g clipPath='url(#lottie_element_0)'>
                                          <g clipPath='url(#lottie_element_1)'>
                                            <g>
                                              <g>
                                                <path className=''></path>
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path></path>
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path></path>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                  <div className='ltr_toolTipWrapper'>
                                  <button aria-label='최고예요로 평가하기' className='ButtonColorStatesCss'>
                                      <svg xmlns=''>
                                        <defs>
                                          <clipPath id='lottie_element_0'>
                                            <rect></rect>
                                          </clipPath>
                                          <clipPath id='lottie_element_1'>
                                            <rect></rect>
                                          </clipPath>
                                        </defs>
                                        <g clipPath='url(#lottie_element_0)'>
                                          <g clipPath='url(#lottie_element_1)'>
                                            <g>
                                              <g>
                                                <path className=''></path>
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path></path>
                                              </g>
                                            </g>
                                            <g>
                                              <g>
                                                <path></path>
                                              </g>
                                            </g>
                                          </g>
                                        </g>
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                                <div className='ltr justify-center text-white mt-[0.5rem] mx-auto mb-0 p-0 border-[2px] border-solid border-transparent opacity-0 hidden cursor-pointer text-[16px] leading-[1.4]'>
                                  <button className='color_supplemental max-h-[42px] max-w-[42px] pl-[0.8rem] pr-[0.8rem] shadow-[rgb(0 0 0 / 60%) 0px 0px 2px 0px, rgb(0 0 0 / 50%) 0px 8px 16px 0px] items-center appearance-none flex justify-center opacity-[1] relative select-none will-change-[background-color, color] break-words whitespace-nowrap border-none text-inherit p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                    <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block select-none break-words whitespace-nowrap text-inherit cursor-pointer text-[rgb(169, 169, 169)]'>
                                      <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 select-none break-words whitespace-nowrap text-inherit cursor-pointer text-[rgb(169, 169, 169)]'>
                                        <svg className='Hawkins_Icon_Standard scale-[0.8] pointer-events-none z-0 h-[100%] w-[100%] select-none break-words whitespace-nowrap text-inherit cursor-pointer text-[rgb(169, 169, 169)]'>
                                          <path></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    {/* </div> */}
                  </div>
                  <div className='buttonControls_messaging h-[20px] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></div>
                </div>
                <div className='detail_modal opacity-[0.4] block overflow-hidden cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='global_supplemental_audio_toggle cursor-pointer block text-[#fff] text-[16px] leading-[1.4]'>
                    <button aria-label='음성 켜기' className='audio_onoff max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] border-solid border-[rgba(255, 255, 255, 0.7)] text-white pl-[0.8rem] pr-[0.8rem] items-center cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                      <div className='ltr_audio_onoff_button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                        <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] text-white cursor-pointer select-none break-words whitespace-nowrap'>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='c2_previewModal_close block cursor-pointer m-[1em] absolute right-0 top-0 z-[2] text-[#fff] text-[16px] leading-[1.4]'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="button" aria-label="close" tabindex="0" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard bg-[#181818] rounded-[50%] h-[36px] p-[8px] w-[36px] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path>
            </svg>
          </div>
          <div className='c2_previewModal_info opacity-[1] bg-[#181818] relative block text-[#fff] text-[16px] leading-[1.4]'>
            <div className='c2_detail_modal_container py-0 px-[3em] block text-[#fff] text-[16px] leading-[1.4]'>
              <div className='c2_ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
                <div className='text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='detailMetadata gap-x-[2em] grid-cols-2 bg-[#181818] grid relative w-[100%] text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='detailMetadata_left text-[#fff] text-[16px] leading-[1.4]'>
                      <div className='detailMetadata_info my-[0.8em] mx-0 block text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='block text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='videoMetadata_container items-center text-[#fff] flex flex-wrap justify-start text-[16px] leading-[1.4]'>
                            <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 max-w-[100%] block text-[#fff] text-[16px] leading-[1.4]'>
                              <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                                <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                                  {/* <div className='meta_thumb_container_down inline-block mb[-2px] text-[#fff] text-[16px] leading-[1.4]'>
                                    <svg className='thumb_down opacity-0 border-[1px] border-solid overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4]'>
                                      <path></path>
                                    </svg>
                                  </div>
                                  <div className='meta_thumb_container_up inline-block mb[-2px] text-[#fff] text-[16px] leading-[1.4]'>
                                    <svg className='thumb_up opacity-0 border-[1px] border-solid overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4]'>
                                      <path></path>
                                    </svg>
                                  </div> */}
                                  <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>98%일치</span>
                                </div>
                              </span>
                            </div>
                            <div className='videoMetadata_second_line items-center flex flex-wrap text-[#fff] text-[16px] leading-[1.4]'>
                              <div className='year mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4]'>2022</div>
                              <a href='#' className='mr-[0.5em] text-[#fff] text-[16px] leading-[1.4] cursor-pointer no-underline'>
                                <span className='maturity_rating inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                  <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                                </span>
                              </a>
                              <span className='duration whitespace-nowrap mr-[0.5em] text-[#fff] text-[16px] leading-[1.4]'>에피소드 12개</span>
                              <span className='player_feature_badge mr-[0.5em] border-[1px] border-solid border-[hsla(0,0%,100%,.4)] rounded-[3px] text-[hsla(0,0%,100%,.9)] text-[.7em] py-0 px-[0.5em] whitespace-nowrap leading-[1.4]'>HD</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className='css mb-[0.5em] flex items-center text-[#fff] text-[16px] leading-[1.4]'></div> */}
                      <div className='detailMetadata_css mb-[0.5em] flex items-center text-[#fff] text-[16px] leading-[1.4]'></div>
                      <p className='preview_modal_synopsis text-[14px] leading-[24px] mb-[0.5em] block text-[#fff] font-sans'>
                        <div className='ptrack_content block text-[14px] leading-[24px] text-[#fff] font-sans'>스파이, 암살자 그리고 초능력자. 각자 다른 사정이 있는 세 사람이 서로에게 정체를 숨기고 가상 가족을 결성한다.</div>
                      </p>
                    </div>
                    <div className='detailMetadata_right flex flex-col text-[#fff] text-[16px] leading-[1.4] font-sans'>
                      <div className='previewModal_tags_person text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
                        <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>출연:</span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            에구치 타쿠야,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            타네자키 아츠미,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            하야미 사오리,
                          </a>
                        </span>
                        <span className='tag_more text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            더 보기
                          </a>
                        </span>
                      </div>
                      <div className='previewModal_tags_genre text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
                        <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>장르:</span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            일본 작품,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            망가 원작 시리즈,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            일본 소년 만화를 만나다
                          </a>
                        </span>
                      </div>
                      <div className='previewModal_tags_series text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
                        <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>시리즈 특징:</span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            색다른,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                          <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                            흥미진진
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='episodeSelector bg-[#181818] pt-[1em] px-0 pb-0 block text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='episodeSelector_header items-baseline flex justify-between text-[#fff] text-[16px] leading-[1.4]'>
                      <h3 className='section_header text-[24px] font-bold mb-[20px] mt-[48px] block text-[#fff] leading-[1.4]'>회차</h3>
                      <div className='episodeSelector_dropdown text-[12px] font-semibold block text-[#fff] leading-[1.4]'></div>
                      <div className='episodeSelector_season_name text-[18px] block text-[#fff] leading-[1.4]'>SPYxFAMILY 스파이 패밀리</div>
                    </div>
                    <div className='episodeSelector_container flex flex-col flex-wrap justify-start text-[#fff] text-[16px] leading-[1.4]'>
                      <div className='titleCardList bg-[#333] border-t-[1px] border-solid border-t-[#404040] min-h-[10em] items-center border-b-[1px] border-b-[#404040] rounded-[0.25em] cursor-pointer flex overflow-hidden p-[1em] relative text-[#fff] text-[16px] leading-[1.4]' aria-label='오퍼레이션 올빼미' role="button">
                        <div className='titleCard_title_index text-[#d2d2d2] flex flex-[0_0_7%] text-[1.5em] justify-center cursor-pointer leading-[1.4]'>1</div>
                        <div className='titleCard_imageWrapper rounded-[4px] flex-[0_0_18%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <img className='block max-w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                            src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABXv5d0NNs57Mc_FcCDfPSVBsfz9QnPTiPX7B-VPKHKV5xTgW4a75CHCULnNvaXSzJdIYsFSe7cbGWpLHD_cBxOAro1tpL0wv4830aLfcVUneXkH4B1t6_U_C.webp?r=51e' alt='오퍼레이션 올빼미'></img>
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
                      
                      <div className='titleCardList min-h-[10em] items-center border-b-[1px] border-solid border-b-[#404040] rounded-[0.25em] cursor-pointer flex overflow-hidden p-[1em] relative text-[#fff] text-[16px] leading-[1.4]' aria-label='아내 역을 확보하라' role="button">
                        <div className='titleCard_title_index text-[#d2d2d2] flex flex-[0_0_7%] text-[1.5em] justify-center cursor-pointer leading-[1.4]'>2</div>
                        <div className='titleCard_imageWrapper rounded-[4px] flex-[0_0_18%] overflow-hidden relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <img className='block max-w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                            src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABQDz2t-tFedeCu-yPMz6WGyM3FdxnNMcA20QdJlADrsWekw4TDiVYCfYIelekaeHgv2bCJbnw7HqCB_lEh-uQjK8NQyH7_A5Ff4.webp?r=c9e' alt='아내 역을 확보하라'></img>
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
                        <button onClick={()=>openContent()} aria-label='expand section' className='section_expandButton max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] bottom-0 absolute translate-y-[50%] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                          <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                            <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-[white] cursor-pointer select-none break-words whitespace-nowrap'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='underArrow w-auto h-[100%] leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap' xmlns='http://www.w3.org/2000/svg'>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='moreLikeThis_wrapper bg-[#181818] text-[#fff] text-[16px] leading-[1.4]'>
                    <h3 className='moreLikeThis_header text-[24px] font-bold mb-[20px] mt-[48px] block leading-[1.4]'>함께 시청된 콘텐츠</h3>
                    <div className='section_container max-h-[65em] overflow-hidden block text-[#fff] text-[16px] leading-[1.4]'>
                      <div className='moreLikeThis_continer grid grid-cols-3 gap-x-[2em] items-stretch text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='문호 스트레이독스'>
                          <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                              src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWrjUJ6SFpSid-BbBvAs0iYtQTQdhNduw1myC9vb0LuI4FMI5soSqskzIEBFw-gsc2tGEx0yimt1sgRD6M7lIausswDvaoVi6_Y.webp?r=e19' alt='문호 스트레이독스'></img>
                            </div>
                            <div className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span>
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
                                    <button aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                                      <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                        <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
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
                                <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>무장탐정사. 특별한 능력으로 경찰 대신 크고 작은 사건을 해결하는 탐정들의 집단.</div>
                              </div>
                            </p>
                          </div>
                        </div>
                        <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='호리미야'>
                          <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                              src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWrjUJ6SFpSid-BbBvAs0iYtQTQdhNduw1myC9vb0LuI4FMI5soSqskzIEBFw-gsc2tGEx0yimt1sgRD6M7lIausswDvaoVi6_Y.webp?r=e19' alt='문호 스트레이독스'></img>
                            </div>
                            <div className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <svg className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                                <path></path>
                              </svg>
                            </div>
                            <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span>
                          </div>
                          <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                                <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                  <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                                    <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                                      {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                        <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns='http://www.w3.org/2000/svg'>
                                          <path></path>
                                        </svg>
                                      </div>
                                      <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                        <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns='http://www.w3.org/2000/svg'>
                                          <path></path>
                                        </svg>
                                      </div> */}
                                      <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                                    </div>
                                  </span>
                                </div>
                                <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                  <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2021</div>
                                  <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                    <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                                  </span>
                                </div>
                              </div>
                              <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                  <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                    <button aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                                      <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                        <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
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
                                <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>학교에서 친구도 많고 인기도 많지만, 알고 보면 집에만 붙어 있는 소녀.</div>
                              </div>
                            </p>
                          </div>
                        </div>
                        <div className='moreLikeThis_item h-[100%] m-[0.1em] flex-[0_0_47%] min-h-[22em] rounded-[0.25em] cursor-pointer overflow-hidden relative block text-[#fff] text-[16px] leading-[1.4]' role="button" aria-label='호리미야'>
                          <div className='titleCard_imageWrapper relative cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <img className='block w-[100%] border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'
                              src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWrjUJ6SFpSid-BbBvAs0iYtQTQdhNduw1myC9vb0LuI4FMI5soSqskzIEBFw-gsc2tGEx0yimt1sgRD6M7lIausswDvaoVi6_Y.webp?r=e19' alt='문호 스트레이독스'></img>
                            </div>
                            <div className='titleCard_playIcon items-center bottom-0 flex justify-center left-0 opacity-0 absolute right-0 top-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='titleCard_playSVG bg-[rgba(30,30,20,.5)] border-[1px] border-solid border-[#fff] rounded-[2em] h-[3em] p-[0.5em] w-[3em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]' xmlns='http://www.w3.org/2000/svg'>
                                <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                              </svg>
                            </div>
                            <span className='duration absolute right-[5%] top-[5%] whitespace-nowrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>시즌 3개</span>
                          </div>
                          <div className='titleCard_metadataWrapper bg-[#2f2f2f] min-h-[100%] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='videoMetadata_container items-center flex justify-between p-[1em] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <div className='videoMetadata_container_container min-w-[unset] p-0 items-center flex-col justify-center text-[#fff] flex flex-wrap cursor-pointer text-[16px] leading-[1.4]'>
                                <div className='videoMetadata_first_line mt-[0.25em] mr-[0.5em] mb-[0.25em] ml-0 block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                  <span className='match_score_wrapper text-[#fff] text-[16px] leading-[1.4]'>
                                    <div className='show_match_score flex text-[#fff] text-[16px] leading-[1.4]'>
                                      {/* <div className='meta_thumb_container_down inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                        <svg className='thumb_down_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns='http://www.w3.org/2000/svg'>
                                          <path></path>
                                        </svg>
                                      </div>
                                      <div className='meta_thumb_container_up inline-block mb-[-2px] text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                        <svg className='thumb_up_filled opacity-0 border-[1px] border-solid border-transparent my-0 mx-[-1px] overflow-visible scale-[1] pointer-events-none text-[#fff] text-[16px] leading-[1.4] cursor-pointer' xmlns='http://www.w3.org/2000/svg'>
                                          <path></path>
                                        </svg>
                                      </div> */}
                                      <span className='match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[16px] leading-[1.4]'>97% 일치</span>
                                    </div>
                                  </span>
                                </div>
                                <div className='videoMetadata_second_line items-center flex flex-wrap cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                  <div className='year order-2 mr-[0.5em] block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>2021</div>
                                  <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                    <span className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>15+</span>
                                  </span>
                                </div>
                              </div>
                              <div className='block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                <div className='ltr_toolTipWrapper relative block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                  <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                                    <button aria-label='내가 찜한 콘텐츠에 추가' className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-100 p-[0.8rem] relative select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                                      <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                        <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] leading-0 cursor-pointer select-none break-words whitespace-nowrap'>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
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
                                <div className='ptrack_content block text-[#d2d2d2] text-[14px] leading-[20px] cursor-pointer'>학교에서 친구도 많고 인기도 많지만, 알고 보면 집에만 붙어 있는 소녀.</div>
                              </div>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='section_divider h-0 mt-0 border-b-[2px] border-solid border-b-[#404040] shadow-none flex justify-center m-auto relative w-[100%] text-[#fff] text-[16px] leading-[1.4]'>
                      <button aria-label='expand_section' className='section_expandButton max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] bottom-0 absolute translate-y-[50%] pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] select-none will-change-[background-color, color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                        <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                          <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-[white] cursor-pointer select-none break-words whitespace-nowrap' role="presentation">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='underArrow w-auto h-[100%] leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='trailersAndMore_wrapper bg-[#181818] block text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='trailersAndMore_header block text-[#fff] text-[16px] leading-[1.4]'>
                      <h3 className='text-[24px] font-bold mb-[20px] mt-[48px] block text-[#fff] leading-[1.4]'>예고편 및 다른 영상</h3>
                    </div>
                    <div className='trailersAndMore_container grid-cols-2 gap-x-[2em] items-stretch grid justify-items-stretch text-[#fff] text-[16px] leading-[1.4]'>
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
              <div className='ptrack_container block text-[#fff] text-[16px] leading-[1.4]'>
                <div className='ptrack_content block text-[#fff] text-[16px] leading-[1.4]'>
                  <div className='about_wrapper bg-[#181818] pb-[2em] block text-[#fff] text-[16px] leading-[1.4]'>
                    <div className='about_header block text-[#fff] text-[16px] leading-[1.4]'>
                      <h3 className='section_header font-normal text-[24px] mb-[20px] mt-[48px] block text-[#fff] leading-[1.4]'>
                        <strong className='font-bold text-[24px] leading-[1.4]'>SPTxFAMILY 스파이 패밀리</strong>
                        &nbsp;상세 정보
                      </h3>
                    </div>
                    <div className='about_container block text-[#fff] text-[16px] leading-[1.4]'>
                      <div className='previewModal_tags_person text-[14px] leading-[20px] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0 break-words block text-[#fff]'>
                        <span className='previewModal_tags_label text-[#777] text-[14px] leading-[20px] break-words'>출연:</span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            에구치 타쿠야,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            타네자키 아츠미,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            하야미 사오리,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            요시노 히로유키,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            카이다 유코,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            야마지 카즈히로
                          </a>
                        </span>
                      </div>
                      <div className='previewModal_tags_genre text-[14px] leading-[20px] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0 break-words block text-[#fff]'>
                        <span className='previewModal_tags_label text-[#777] text-[14px] leading-[20px] break-words'>장르:</span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            일본 작품,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            망가 원작 시리즈,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            일본 소년 만화를 만나다,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            드라마 장르 애니메이션,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            액션 애니
                          </a>
                        </span>
                      </div>
                      <div className='previewModal_tags_series text-[14px] leading-[20px] mt-[0.5em] mr-[0.5em] mb-[0.5em] ml-0 break-words block text-[#fff]'>
                        <span className='previewModal_tags_label text-[#777] text-[14px] leading-[20px] break-words'>시리즈 특징:</span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            색다른,
                          </a>
                        </span>
                        <span className='tag_item text-[14px] leading-[20px] break-words'>
                          <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                            흥미진진
                          </a>
                        </span>
                      </div>
                      <div className='maturity_rating_wrapper flex text-[14px] leading-[20px] mt-[0.5em] text-[#fff]'>
                        <span className='title text-[#777] text-[14px] leading-[20px] break-words'>관람등급:</span>
                        <span className='maturity_rating mr-[0.5em] inline-block text-[#fff] text-[16px] leading-[1.4] cursor-pointer'>
                          <a href='' className='maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[16px] leading-[1.4] cursor-pointer inline-block align-middle'>15+</a>
                          <p className='maturityDescription ml-[1em] inline-block align-middle m-0 text-[14px] leading-[20px] text-[#fff]'>15세이상관람가</p>
                        </span>
                      </div>
                      <div className='broadcaster text-[14px] leading-[20px] block text-[#fff]'>
                        <div className='block text-[14px] leading-[20px] text-[#fff]'>Aniplus</div>
                        <div className='block text-[14px] leading-[20px] text-[#fff]'>2022. 4. 9.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Detail;
