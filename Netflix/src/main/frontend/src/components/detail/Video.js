import React, { useState } from 'react';
import 'css/detail/video.css';
import chat from '../../image/detail/chat.png';
import { Link } from 'react-router-dom';
import UserChatRoom from 'components/user_chat/UserChatRoom';

const Video = () => {

  const [isChat, setIsChat] = useState(false);
  const openChatting=()=>{
    setIsChat(!isChat);
  }
  return (
    <div>
      <div className="watch-video flex" data-uia="watch-video">
        <div className="watch-video--player-view" data-uia="watch-video-player-view-minimized" style={ isChat ? {width: '82%'} : {width: '100%'}}>
          <div className="active ltr-fntwn3" data-uia="player" data-videoid="81566007" tabIndex="0">
            <div className="ltr-op8orf" data-uia="video-canvas">
              <div className='relative w-[100%] h-[100%] overflow-hidden'>
                <div className='relative w-[100%] h-[100%] overflow-hidden' id="81566007">
                  <video src="blob:https://www.netflix.com/e5669d38-4bf8-404c-8a6d-9ae2ee9ac43f" tabIndex="-1" className='h-[100%] w-[1200px]'></video>
                  <div className="player-timedtext hidden [direction: ltr]"></div>
                </div>
              </div>
            </div>
            <div className="ltr-1420x7p items-[normal] justify-end">
              <div className="ltr-hpbgml items-start flex-grow-[1] justify-start">
                <div className="ltr-1i33xgl items-[normal] justify-[normal]">
                  <div className="watch-video--back-container ltr-hpbgml items-[normal] flex-grow-[1] justify-start">
                    <div className="medium ltr-1dcjcj4">
                      <Link to='/detail'>
                      <button aria-label="Back to Browse" className="ltr-1enhvti" data-uia="control-nav-back">
                        <div className="control-medium ltr-18dhnor" role="presentation">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M24 11.0001L3.41421 11.0001L8.70711 5.70718L7.29289 4.29297L0.292892 11.293C0.105356 11.4805 0 11.7349 0 12.0001C0 12.2653 0.105356 12.5196 0.292892 12.7072L7.29289 19.7072L8.70711 18.293L3.41421 13.0001H24V11.0001Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                      </Link>
                    </div>
                  </div>
                  <div className="watch-video--flag-container ltr-hpbgml items-[normal] flex-grow-[1] justify-end">
                    <div className="medium ltr-1dcjcj4">
                      <button aria-label="Netflix 재생 문제 신고" className="ltr-1enhvti" data-uia="control-flag">
                        <div className="control-medium ltr-18dhnor" role="presentation">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M1 3C0.447715 3 0 3.44772 0 4V10.5714V21H2L2 11.5783C4.05836 11.6067 6.06478 11.7223 8 11.9167V14.5714C8 15.042 8.32807 15.4489 8.78794 15.5487C13.0747 16.4789 17.9011 17 23 17C23.5523 17 24 16.5523 24 16V9.42857C24 8.87629 23.5523 8.42857 23 8.42857C20.5907 8.42857 18.2474 8.30904 16 8.08326V5.42857C16 4.95801 15.6719 4.55111 15.2121 4.45132C10.9253 3.52108 6.09885 3 1 3ZM2 9.57813C4.44972 9.61098 6.83093 9.76415 9.11345 10.0248L10 10.126V11.0183V13.7591C13.6576 14.4969 17.7153 14.9341 22 14.9931V10.4219C19.5503 10.389 17.1691 10.2359 14.8866 9.97522L14 9.87399V8.98168V6.24091C10.3424 5.50309 6.2847 5.06594 2 5.00688V9.57813Z"
                                fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="watch-video--skip-content ltr-hpbgml items-center justify-end">
                  <button className="button-primary watch-video--skip-content-button medium hasLabel ltr-ublg01" data-uia="player-skip-intro" type="button"><span className="ltr-657tup">오프닝 건너뛰기</span></button>
              </div>
              <div className="watch-video--bottom-controls-container ltr-hpbgml items-end justify-center">
                  <div className="ltr-jezwko" data-uia="controls-standard" tabIndex="0">
                      <div className="ltr-1bt0omd">
                          <div className="ltr-1i33xgl items-[normal] justify-[normal]">
                              <div className="ltr-hpbgml items-center flex-grow-[1] justify-[normal]">
                                  <div aria-orientation="horizontal" className="medium ltr-13q34j2" data-uia="timeline" max="4626663" min="0" role="slider" tabIndex="-1">
                                      <div data-uia="timeline-bar" className="ltr-lbmpgb">
                                          <div className="ltr-xd82k2 w-[80px]"></div>
                                          <div className="ltr-1c4ubff w-[50px]"></div>
                                          <div
                                              aria-label="재생 시간 표시줄"
                                              aria-valuemax="4626663"
                                              aria-valuemin="0"
                                              aria-valuenow="35065"
                                              aria-valuetext="35/4626"
                                              data-uia="timeline-knob"
                                              tabIndex="0"
                                              className="ltr-uwc8j6"
                                          ></div>
                                      </div>
                                  </div>
                              </div>
                              <div className="ltr-6alejv items-center justify-center">
                                <span className="ltr-jgzoky" data-uia="controls-time-remaining">1:16:32</span>
                              </div>
                          </div>
                          <div className="ltr-1i33xgl h-[3rem] min-h-[3rem] min-w-[100%] w-[100%]"></div>
                          <div className="ltr-1bt0omd">
                              <div className="ltr-1i33xgl items-[normal] justify-[normal]">
                                  <div className="ltr-hpbgml items-[normal] justify-[normal]">
                                      <div className="medium ltr-1dcjcj4">
                                          {/* 일시정지 버튼 */}
                                          <button aria-label="일시정지" className="ltr-1enhvti" data-uia="control-play-pause-pause">
                                              <div className="control-medium ltr-18dhnor" role="presentation">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon-nfplayerPause">
                                                      <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M4.5 3C4.22386 3 4 3.22386 4 3.5V20.5C4 20.7761 4.22386 21 4.5 21H9.5C9.77614 21 10 20.7761 10 20.5V3.5C10 3.22386 9.77614 3 9.5 3H4.5ZM14.5 3C14.2239 3 14 3.22386 14 3.5V20.5C14 20.7761 14.2239 21 14.5 21H19.5C19.7761 21 20 20.7761 20 20.5V3.5C20 3.22386 19.7761 3 19.5 3H14.5Z"
                                                          fill="currentColor"
                                                      ></path>
                                                  </svg>
                                              </div>
                                          </button>
                                          {/* 재생버튼
                                          <button aria-label="재생" class="ltr-1enhvti" data-uia="control-play-pause-play">
                                            <div class="control-medium ltr-18dhnor" role="presentation">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon-nfplayerPlay">
                                                <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                              </svg>
                                            </div>
                                          </button> */}
                                      </div>
                                      <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                      <div className="medium ltr-1dcjcj4">
                                          <button aria-label="뒤로 가기" className="ltr-1enhvti" data-uia="control-back10">
                                              <div className="control-medium ltr-18dhnor" role="presentation">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                      <path
                                                          fillRule="evenodd"
                                                          clipRule="evenodd"
                                                          d="M11.0198 2.04817C13.3222 1.8214 15.6321 2.39998 17.5557 3.68532C19.4794 4.97067 20.8978 6.88324 21.5694 9.09718C22.241 11.3111 22.1242 13.6894 21.2388 15.8269C20.3534 17.9643 18.7543 19.7286 16.714 20.8192C14.6736 21.9098 12.3182 22.2592 10.0491 21.8079C7.77999 21.3565 5.73759 20.1323 4.26989 18.3439C2.80219 16.5555 2 14.3136 2 12L0 12C-2.74181e-06 14.7763 0.962627 17.4666 2.72387 19.6127C4.48511 21.7588 6.93599 23.2278 9.65891 23.7694C12.3818 24.3111 15.2083 23.8918 17.6568 22.5831C20.1052 21.2744 22.0241 19.1572 23.0866 16.5922C24.149 14.0273 24.2892 11.1733 23.4833 8.51661C22.6774 5.85989 20.9752 3.56479 18.6668 2.02238C16.3585 0.479975 13.5867 -0.214319 10.8238 0.057802C8.71195 0.2658 6.70517 1.02859 5 2.2532V1H3V5C3 5.55229 3.44772 6 4 6H8V4H5.99999C7.45608 2.90793 9.19066 2.22833 11.0198 2.04817ZM2 4V7H5V9H1C0.447715 9 0 8.55229 0 8V4H2ZM14.125 16C13.5466 16 13.0389 15.8586 12.6018 15.5758C12.1713 15.2865 11.8385 14.8815 11.6031 14.3609C11.3677 13.8338 11.25 13.2135 11.25 12.5C11.25 11.7929 11.3677 11.1759 11.6031 10.6488C11.8385 10.1217 12.1713 9.71671 12.6018 9.43389C13.0389 9.14463 13.5466 9 14.125 9C14.7034 9 15.2077 9.14463 15.6382 9.43389C16.0753 9.71671 16.4116 10.1217 16.6469 10.6488C16.8823 11.1759 17 11.7929 17 12.5C17 13.2135 16.8823 13.8338 16.6469 14.3609C16.4116 14.8815 16.0753 15.2865 15.6382 15.5758C15.2077 15.8586 14.7034 16 14.125 16ZM14.125 14.6501C14.5151 14.6501 14.8211 14.4637 15.043 14.0909C15.2649 13.7117 15.3759 13.1814 15.3759 12.5C15.3759 11.8186 15.2649 11.2916 15.043 10.9187C14.8211 10.5395 14.5151 10.3499 14.125 10.3499C13.7349 10.3499 13.4289 10.5395 13.207 10.9187C12.9851 11.2916 12.8741 11.8186 12.8741 12.5C12.8741 13.1814 12.9851 13.7117 13.207 14.0909C13.4289 14.4637 13.7349 14.6501 14.125 14.6501ZM8.60395 15.8554V10.7163L7 11.1405V9.81956L10.1978 9.01929V15.8554H8.60395Z"
                                                          fill="currentColor"
                                                      ></path>
                                                  </svg>
                                              </div>
                                          </button>
                                      </div>
                                      <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                      <div className="medium ltr-1dcjcj4">
                                          <button aria-label="앞으로 가기" className="ltr-1enhvti" data-uia="control-forward10">
                                              <div className="control-medium ltr-18dhnor" role="presentation">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                  <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6.4443 3.68532C8.36794 2.39998 10.6778 1.8214 12.9802 2.04817C14.8093 2.22833 16.5439 2.90793 18 4H16V6H20C20.5523 6 21 5.55228 21 5V1H19V2.2532C17.2948 1.02858 15.288 0.265799 13.1762 0.0578004C10.4133 -0.214321 7.64153 0.479973 5.33315 2.02238C3.02478 3.56479 1.32262 5.85989 0.516716 8.51661C-0.28919 11.1733 -0.148983 14.0273 0.913448 16.5922C1.97588 19.1572 3.8948 21.2744 6.34325 22.5831C8.79169 23.8918 11.6182 24.3111 14.3411 23.7694C17.064 23.2278 19.5149 21.7588 21.2761 19.6127C23.0374 17.4666 24 14.7763 24 12L22 12C22 14.3136 21.1978 16.5555 19.7301 18.3439C18.2624 20.1323 16.22 21.3565 13.9509 21.8079C11.6818 22.2592 9.32641 21.9098 7.28604 20.8192C5.24567 19.7286 3.64657 17.9643 2.76121 15.8269C1.87585 13.6894 1.75901 11.3111 2.4306 9.09717C3.10218 6.88324 4.52065 4.97066 6.4443 3.68532ZM22 4V7H19V9H23C23.5523 9 24 8.55228 24 8V4H22ZM12.6018 15.5758C13.0389 15.8586 13.5466 16 14.125 16C14.7034 16 15.2077 15.8586 15.6382 15.5758C16.0753 15.2865 16.4116 14.8815 16.6469 14.3609C16.8823 13.8338 17 13.2135 17 12.5C17 11.7929 16.8823 11.1758 16.6469 10.6488C16.4116 10.1217 16.0753 9.71671 15.6382 9.43388C15.2077 9.14463 14.7034 9 14.125 9C13.5466 9 13.0389 9.14463 12.6018 9.43388C12.1713 9.71671 11.8385 10.1217 11.6031 10.6488C11.3677 11.1758 11.25 11.7929 11.25 12.5C11.25 13.2135 11.3677 13.8338 11.6031 14.3609C11.8385 14.8815 12.1713 15.2865 12.6018 15.5758ZM15.043 14.0909C14.8211 14.4637 14.5151 14.6501 14.125 14.6501C13.7349 14.6501 13.4289 14.4637 13.207 14.0909C12.9851 13.7117 12.8741 13.1814 12.8741 12.5C12.8741 11.8186 12.9851 11.2916 13.207 10.9187C13.4289 10.5395 13.7349 10.3499 14.125 10.3499C14.5151 10.3499 14.8211 10.5395 15.043 10.9187C15.2649 11.2916 15.3759 11.8186 15.3759 12.5C15.3759 13.1814 15.2649 13.7117 15.043 14.0909ZM8.60395 10.7163V15.8554H10.1978V9.01928L7 9.81956V11.1405L8.60395 10.7163Z"
                                                    fill="currentColor"
                                                  ></path>
                                                </svg>
                                              </div>
                                          </button>
                                      </div>
                                      <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                      <div className="medium ltr-1dcjcj4">
                                          <button aria-label="음량" className="ltr-1enhvti" data-uia="control-volume-high">
                                            <div className="control-medium ltr-18dhnor" role="presentation">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                <path
                                                  fillRule="evenodd"
                                                  clipRule="evenodd"
                                                  d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z"
                                                  fill="currentColor"
                                                ></path>
                                              </svg>
                                            </div>
                                          </button>
                                      </div>
                                  </div>
                                  <div className="ltr-1fkysoc items-[normal] flex-grow-[1] justify-[normal]">
                                    <div className="c2-ltr-1i33xgl min-w-[3rem]"></div>
                                    <div className="medium ltr-qnht66" data-uia="video-title">
                                      <h4 className='text-white'>SPYxFAMILY 스파이 패밀리</h4>
                                      <span className='text-white'>1화</span>
                                      <span className='text-white'>오퍼레이션 올빼미</span>
                                    </div>
                                  </div>
                                  <div className="ltr-hpbgml items-[normal] justify-end">
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="medium ltr-1dcjcj4">
                                      {/* 채팅 */}
                                      <button aria-label="채팅" className="ltr-1enhvti" data-uia="control-next">
                                        <div className="control-medium ltr-18dhnor" role="presentation">
                                          <img src = { chat } className='w-[45px] h-[39px]' onClick={openChatting}></img>
                                        </div>
                                      </button>
                                    </div>
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="medium ltr-1dcjcj4">
                                      <button aria-label="다음 화" className="ltr-1enhvti" data-uia="control-next">
                                        <div className="control-medium ltr-18dhnor" role="presentation">
                                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                            <path
                                              fillRule="evenodd"
                                              clipRule="evenodd"
                                              d="M22 3H20V21H22V3ZM4.28615 3.61729C3.28674 3.00228 2 3.7213 2 4.89478V19.1052C2 20.2787 3.28674 20.9977 4.28615 20.3827L15.8321 13.2775C16.7839 12.6918 16.7839 11.3082 15.8321 10.7225L4.28615 3.61729ZM4 18.2104V5.78956L14.092 12L4 18.2104Z"
                                              fill="currentColor"
                                            ></path>
                                          </svg>
                                        </div>
                                      </button>
                                    </div>
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="medium ltr-1dcjcj4">
                                        <button aria-label="회차" className="ltr-1enhvti" data-uia="control-episodes">
                                            <div className="control-medium ltr-18dhnor" role="presentation">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M8 5H22V13H24V5C24 3.89543 23.1046 3 22 3H8V5ZM18 9H4V7H18C19.1046 7 20 7.89543 20 9V17H18V9ZM0 13C0 11.8954 0.895431 11 2 11H14C15.1046 11 16 11.8954 16 13V19C16 20.1046 15.1046 21 14 21H2C0.895431 21 0 20.1046 0 19V13ZM14 19V13H2V19H14Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="medium ltr-1dcjcj4">
                                        <button aria-label="음성 및 자막" className="ltr-1enhvti" data-uia="control-audio-subtitle">
                                            <div className="control-medium ltr-18dhnor" role="presentation">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0 4C0 3.44772 0.447715 3 1 3H23C23.5523 3 24 3.44772 24 4V16C24 16.5523 23.5523 17 23 17H19V20C19 20.3688 18.797 20.7077 18.4719 20.8817C18.1467 21.0557 17.7522 21.0366 17.4453 20.8321L11.6972 17H1C0.447715 17 0 16.5523 0 16V4ZM2 5V15H12H12.3028L12.5547 15.1679L17 18.1315V16V15H18H22V5H2ZM10 9H4V7H10V9ZM20 11H14V13H20V11ZM12 13H4V11H12V13ZM20 7H12V9H20V7Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="medium ltr-1dcjcj4">
                                        <button aria-label="1x (기본)" className="ltr-1enhvti" data-uia="control-speed">
                                            <div className="control-medium ltr-18dhnor" role="presentation">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M17.6427 7.43779C14.5215 4.1874 9.47851 4.1874 6.35734 7.43779C3.21422 10.711 3.21422 16.0341 6.35734 19.3074L4.91474 20.6926C1.02842 16.6454 1.02842 10.0997 4.91474 6.05254C8.823 1.98249 15.177 1.98249 19.0853 6.05254C22.9716 10.0997 22.9716 16.6454 19.0853 20.6926L17.6427 19.3074C20.7858 16.0341 20.7858 10.711 17.6427 7.43779ZM14 14C14 15.1046 13.1046 16 12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C12.1792 12 12.3528 12.0236 12.518 12.0677L15.7929 8.79289L17.2071 10.2071L13.9323 13.482C13.9764 13.6472 14 13.8208 14 14Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                    <div className="ltr-1i33xgl min-w-[3rem] w-[3rem]"></div>
                                    <div className="medium ltr-1dcjcj4">
                                        <button aria-label="전체 화면" className="ltr-1enhvti" data-uia="control-fullscreen-enter">
                                            <div className="control-medium ltr-18dhnor" role="presentation">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard" data-uia="control-fullscreen-enter">
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M0 5C0 3.89543 0.895431 3 2 3H9V5H2V9H0V5ZM22 5H15V3H22C23.1046 3 24 3.89543 24 5V9H22V5ZM2 15V19H9V21H2C0.895431 21 0 20.1046 0 19V15H2ZM22 19V15H24V19C24 20.1046 23.1046 21 22 21H15V19H22Z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div className="ltr-1i33xgl h-[3rem] min-h-[3rem] min-w-[100%] w-[100%]"></div>
                      </div>
                  </div>
              </div>
            </div>
            <div className="watch-video--evidence-overlay-container">
              <div className="medium ltr-1866cph" data-uia="evidence-overlay">
                <span className="ltr-7glqj7">시청 중인 콘텐츠</span>
                <h2 className="ltr-joozh9">이상한 변호사 우영우</h2>
                <h4 className="ltr-1htrcp1" data-uia="evidence-overlay-season-title">이상한 변호사 우영우</h4>
                <h3 className="ltr-1bcxbrq" data-uia="evidence-overlay-episode-title">이상한 변호사 우영우: 1화</h3>
                <p className="ltr-73cuwh" data-uia="evidence-overlay-synopsis">변호사 우영우의 첫 출근 날. 아군이 되어줄 동료와 냉소적인 상사, 그리고 오랜 지인을 만난다. 첫 사건으로는 노부부 폭행 사건을 맡게 되고.</p>
                <span className="ltr-4bd7j3">일시 중지됨</span>
              </div>
            </div>
          </div>
        </div>
        {/* 채팅창 */}
        <div className='bg-white absolute right-0 h-[100%]' style={ isChat ? {width: '18%'} : {width: '0%'}}>
          <UserChatRoom/>
        </div>
      </div>
      <div className="visually-hidden hidden">
        <div id="standaloneAudioDescriptionAvailable">화면 해설이 제공됩니다</div>
        <div id="episodesAudioDescriptionAvailable">일부 에피소드에 화면 해설이 제공됩니다</div>
        <div id="playWithAudioDescription">화면 해설을 켠 채로 시작합니다</div>
      </div>
    </div>
  );
};

export default Video;