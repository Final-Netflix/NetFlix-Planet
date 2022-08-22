import React, { useState } from 'react';
import PropTypes from "prop-types";

import 'css/detail/top.css';
import { Link } from 'react-router-dom';

function Top ({poster_path, title, genre_ids ,id}) {
  const [wishHover, setWishHover] = useState(false);
  const [wishDelete, setWishDelete] = useState(false);
  const [wishDeleteHover, setWishDeleteHover] = useState(false);
  const [likeHover, setLikeHover] = useState(false);
  const [likeDetailHover, setLikeDetailHover] = useState(false);
  const [dislikeDetailHover, setDislikeDetailHover] = useState(false);
  const [bestDetailHover, setBestDetailHover] = useState(false);
  const [audioMute, setAudioMute] = useState(false);
  const [likeClick, setLikeClick] = useState(false);
  const [dislikeClick, setDislikeClick] = useState(false);
  const [bestClick, setBestClick] = useState(false);
  const [rated, setRated] = useState(false);

  /* 찜 */
  //찜한 콘텐츠에 추가
  const wishHoverEnter = () => {
    setWishHover(true);
  }
  const wishHoverLeave = () => {
    setWishHover(false);
  }
  //찜한 콘텐츠 삭제
  const wishDeleteHandler = () => {
    setWishDelete(!wishDelete);
  }
  const wishDeleteEnter = () => {
    setWishDeleteHover(true);
  }
  const wishDeleteLeave = () => {
    setWishDeleteHover(false);
  }

  /* 평가하기 */
  const likeHoverEnter = () => {
    setLikeHover(true);
  }
  const likeHoverLeave = () => {
    setLikeHover(false);
  }
  
  /* 평가하기 디테일 */
  //좋아요
  const likeDetailHoverEnter = () => {
    setLikeDetailHover(true);
  }
  const likeDetailHoverLeave = () => {
    setLikeDetailHover(false);
  }
  //맘에 안 들어요
  const dislikeDetailHoverEnter = () => {
    setDislikeDetailHover(true);
  }
  const dislikeDetailHoverLeave = () => {
    setDislikeDetailHover(false);
  }
  //최고예요
  const bestDetailHoverEnter = () => {
    setBestDetailHover(true);
  }
  const bestDetailHoverLeave = () => {
    setBestDetailHover(false);
  }
  //좋아요 활성화
  const likeActive=()=>{
    setLikeClick(!likeClick);
  }
  //싫어요 활성화
  const dislikeActive=()=>{
    setDislikeClick(!dislikeClick);
  }
  //최고예요 활성화
  const bestActive=()=>{
    setBestClick(!bestClick);
  }

  //평가함
  const ratedEnter=()=>{
    setRated(true);
  }
  const ratedLeave=()=>{
    setRated(false);
  }

  /* 음소거 */
  const mute = () => {
    setAudioMute(!audioMute);
  }

  return (

    <div>
      { wishHover &&
      <div className='block break-words text-[1vw]'>
        <div className="css-1w5d83q-popupBaseCss-popupCss show left-[130px] top-[325px]">
          <div className="css-1y6cdq8-popupContentCss-Popup relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
            <div className="css-g5m0d-toolTip-chevronBottom-toolTip block">내가 찜한 콘텐츠에 추가</div>
          </div>
        </div>
      </div>
      }
      { wishDeleteHover &&
      <div className='block break-words text-[1vw]'>
        <div className="css-1w5d83q-popupBaseCss-popupCss show left-[124px] top-[325px]">
          <div className="css-1y6cdq8-popupContentCss-Popup relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
            <div className="css-g5m0d-toolTip-chevronBottom-toolTip block">내가 찜한 콘텐츠에서 삭제</div>
          </div>
        </div>
      </div>
      }
      { likeDetailHover &&
      <div className='block break-words text-[1vw]'>
        <div className="css-1ef3g7z show left-[233px] top-[322px]">
          <div className="css-m6m86k relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
            <div className="css-1th9py block">좋아요</div>
          </div>
        </div>
      </div>
      } 
      { dislikeDetailHover &&
      <div className="css-1ef3g7z show left-[156px] top-[322px]">
        <div className="css-m6m86k relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
          <div className="css-1th9py block">맘에 안 들어요</div>
        </div>
      </div>
      }
      { bestDetailHover &&
      <div className="css-1ef3g7z show left-[276px] top-[322px]">
        <div className="css-m6m86k relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
          <div className="css-1th9py block">최고예요</div>
          </div>
      </div>
      }
      { likeClick && rated &&
      <div className="css-1ef3g7z show left-[233px] top-[322px]">
        <div className="css-m6m86k relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
          <div className="css-1th9py block">평가함</div>
        </div>
      </div>
      }
      { dislikeClick && rated &&
      <div className="css-1ef3g7z show left-[180px] top-[322px]">
        <div className="css-m6m86k relative overflow-hidden block pointer-events-auto visible text-[0.8rem]">
          <div className="css-1th9py block">평가함</div>
        </div>
      </div>
      }

      <div className='c2_previewModal rounded-t-md overflow-hidden bg-[#000] cursor-pointer relative text-[#fff] text-[16px]'>
        <div className='absolute w-[100%] h-[100%] overflow-hidden cursor-pointer text-[#fff] text-[16px]'>
          <div id='81593318' className='relative w-[100%] h-[100%] overflow-hidden cursor-pointer text-[#fff] text-[16px]'>
            {/* <video src='blob:https://www.netflix.com/f882d0a2-b791-4023-842a-059fea5d8ab6' className='absolute w-[100%] h-[100%] object-cover inline-block align-baseline'></video> {/* video 실행 안됨  */}
            <div className='c2_player_timedtext absolute inset-0 hidden mt-0 mr-[88.2px] mb-0 ml-[235.2px]'></div>
          </div>
        </div>
        <div className='c2_videoMerchPlayer_boxart_wrapper absolute h-[100%] pt-[56.3925%] w-[100%]'>
          {/* <img aria-hidden="true" className='c2_previewModal_boxart opacity-0 bg-cover h-[100%] left-0 absolute top-0 w-[100%] border-0' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXQhM9UIOiaYmBg96LoJL9C-yj7Vx6_8dPdHVvyCMpRv2UP1PQOJgLBcCFDngWDhXJ5leiW1SGSTEZge7mTxo0IP95RlwnmKzkE4sZJ90_L5nLX41LHU8MJAgdWgjZGeu62W35r2E7ziLxDN0QbBG4DBmpUGBGY9witDoj6gEykXyXwAJ2rNvGiNxYuvxyzt0lRQE_WwDyUZeCtglbin4o1pnEp8gEtSLE1QRsJHY6YEryjBRskBxELAoeZMEQAfrPZ5LnQj9WeP7WCKJOQKPi83u5lBy57ThjIvhT4rwjwVeBxMJxxHQ6Rlbo-pP5mQW_tLMuq3dpVQaY33ePcHCADYSgDltvFrSVOREUd10GxinWhkDu-FSm9ch3A1C6E4NXBD1vkWm7su5ISbxbnZTHG6bZuuc9dbQWPs5SwC-4s4f44.webp?r=4a8'></img> */}
          <img aria-hidden="true" className='c2_previewModal_boxart opacity-0 bg-cover h-[100%] left-0 absolute top-0 w-[100%] border-0' src={ "https://image.tmdb.org/t/p/w200" + poster_path } alt={ title }></img>
          {/* <img className='hidden border-0' src={ "https://image.tmdb.org/t/p/w200" + poster_path } alt={ title }></img> */}
        </div>
        <div className='c2_storyArt overflow-hidden pt-[56.3925%] w-[100%]'>
          <img src={ "https://image.tmdb.org/t/p/w200" + poster_path } alt={ title } className='opacity-[1] block left-0 max-w-[100%] absolute top-0 transition-height duration-[.2s] ease-in-out border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></img>
          <img src={ "https://image.tmdb.org/t/p/w200" + poster_path } alt={ title } aria-hidden="true" className='hidden border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></img>
          {/* <img src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZbVJV4TTlebZXyVIz1uynnmoRh_7Cp0L1vSHyJ_4yQtglDKpKcdhFL7LIq5DO9i7apdvdUBHWeuKHpJw1hcS31L_0UoF6QJ80i6.webp?r=450' className='opacity-[1] block left-0 max-w-[100%] absolute top-0 transition-height duration-[.2s] ease-in-out border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></img>
          <img src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABZbVJV4TTlebZXyVIz1uynnmoRh_7Cp0L1vSHyJ_4yQtglDKpKcdhFL7LIq5DO9i7apdvdUBHWeuKHpJw1hcS31L_0UoF6QJ80i6.webp?r=450' aria-hidden="true" className='hidden border-0 cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></img> */}
        </div>
        <div className='opacity-[1]'>
          <div className='previewModal_player_titleTreatmentWrapper opacity-[1] from-[#181818] to-[transparent 50%] bg-gradient-to-t h-[100%] absolute top-0 w-[100%]'>
            <div className='previewModal_player_titleTreatment_left bottom-[5%] left-[3em] absolute w-[40%]'>
              <h2 className='hidden border-0' >{ title }</h2>
              <h2 className='previewModal_player_titleTreatment_logo w-[100%] mb-[1.5em] border-0' >{ title }</h2>
              {/* <img className='hidden border-0' alt='spy family logo' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfckc9vjUDZDDb51BIkxA4HvHTnlLBfgluBzpzNdE5bEGKWmpnVi0tt7i1emKTiSBEs9GnzbYQ6lHxhkhCefhR62xBj-GCQiF8FS36aS4PM.webp?r=50e'></img>
              <img className='previewModal_player_titleTreatment_logo w-[100%] mb-[1.5em] border-0' alt='spy family logo' src='https://occ-0-993-395.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfckc9vjUDZDDb51BIkxA4HvHTnlLBfgluBzpzNdE5bEGKWmpnVi0tt7i1emKTiSBEs9GnzbYQ6lHxhkhCefhR62xBj-GCQiF8FS36aS4PM.webp?r=50e'></img> */}
              <div className='buttonControls_container items-center flex mb-[1em] min-h-[2em]'>
                <a href='#' className='m-[0.25em] text-[#fff] cursor-pointer no-underline bg-transparent'>
                  <button className='playButton hover:bg-[#e5e7eb] max-h-[42px] min-h-[32px] pl-[2rem] pr-[2.4rem] bg-white text-black items-center appearance-none border-0 rounded-[4px] cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap overflow-visible'>
                    <div className='ltr_iconWrap leading-[0] block'>
                      <div className='medium_ltr_baseCss h-[2.4rem] w-[2.4rem] flex items-center justify-center'>
                        <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns='http://www.w3.org/2000/svg' className='overflow-hidden h-[100%] w-[100%]'>
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
                    {/* 추가버튼 */}
                    <button className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] border-solid text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible' 
                            aria-label='내가 찜한 콘텐츠에 추가' onMouseEnter={wishHoverEnter} onMouseLeave={wishHoverLeave} onClick={wishDeleteHandler}>
                      <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap' onMouseLeave={wishDeleteLeave}>
                        <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap' xmlns='http://www.w3.org/2000/svg'>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                          </svg>
                          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard">
                              <path fillRule="evenodd" clipRule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path>
                          </svg> */}
                        </div>
                      </div>
                      {/* 삭제버튼 */}
                      { wishDelete &&
                      <button className="color-supplementary absolute max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[#000] border-white border-[2px] border-solid text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible" 
                              aria-label="내가 찜한 콘텐츠에서 삭제" data-uia="add-to-my-list-added" type="button" onMouseEnter={wishDeleteEnter} onMouseLeave={wishDeleteLeave}>
                        <div class="ltr-1ksxkn9 leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap">
                          <div class="small ltr-18dhnor h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap" role="presentation">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                fill="currentColor"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                      }
                    </button>

                  </div>
                </div>
                {/* <div className='css'> */}
                  <div>
                    <div className='ltr_componentStyles m-[0.25em] relative z-[1] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                      <button onMouseOver={likeHoverEnter} className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                      {/* <button onMouseOver={likeHoverEnter} onMouseLeave={likeHoverLeave} className='color_supplementary max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'> */}
                        <div className='ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                          <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap' xmlns='http://www.w3.org/2000/svg'>
                              <path fillRule="evenodd" clipRule="evenodd" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                      </button>
                      {/* 평가하기 */}
                      { likeHover &&
                      <div onMouseLeave={likeHoverLeave} className='thumbs_selection_overlay_container opacity-[1] translate-x-[-50%] translate-y-[-50%] translate-z-[0px] scale-[1] ml-[0.1rem] mt-[-0.1rem] absolute top-[50%] left-[50%] transition-opacity-[0.1s] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                        <div className='thumbs_selection_popover cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                          <div className='block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                            <div className='ltr_thumbContainerCss h-[3.8rem] w-[13.3rem] bg-[rgb(35,35,35)] rounded-[3rem] shadow-[rgb(0 0 0 / 60%) 0px 0px 2px 0px, rgb(0 0 0 / 50%) 0px 8px 16px 0px] flex p-[0.8rem] justify-between items-center cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <div className='ltr_toolTipWrapper my-0 mx-[0.2rem] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                                <button onMouseOver={dislikeDetailHoverEnter} onMouseLeave={dislikeDetailHoverLeave} onClick={dislikeActive} aria-label='맘에 안 들어요로 평가하기' className='ButtonColorStatesCss max-h-[42px] max-w-[42px] items-center appearance-none flex justify-center opacity-[1] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap border-none bg-transparent font-[inherit] p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                  <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 72 72" width="72" height="72" className='w-[100%] h-[100%] pointer-events-none z-0 scale-[2] overflow-hidden select-none break-words whitespace-nowrap font-[inherit] cursor-pointer text-[rgb(169,169,169)] normal-case'>
                                    <defs>
                                      <clipPath id="__lottie_element_115">
                                        <rect width="72" height="72" x="0" y="0" className='w-[72] h-[72] x-0 y-0 pointer-events-none select-none break-words whitespace-nowrap cursor-pointer text-[rgb(169,169,169)]'></rect>
                                      </clipPath>
                                      <clipPath id="__lottie_element_117">
                                        <path d="M0,0 L31,0 L31,31 L0,31z"></path>
                                      </clipPath>
                                    </defs>
                                    <g clipPath='url(#__lottie_element_115)'>
                                      <g clipPath='url(#__lottie_element_117)' transform="matrix(1,0,0,1,18.875,20.5)" opacity="1">
                                        <g transform="matrix(0.49998003244400024,0,0,0.49998003244400024,16.243000030517578,16)" opacity="1">
                                          <g opacity="1" transform="matrix(2,0,0,2,0,0)">
                                            <path
                                                fill="rgb(255,255,255)"
                                                fill-opacity="1"
                                                d=" M1.25,4.2870001792907715 C1.25,3.9119999408721924 1.3550000190734863,3.5450000762939453 1.5540000200271606,3.2269999980926514 C1.5540000200271606,3.2269999980926514 3.494999885559082,0.12200000137090683 3.494999885559082,0.12200000137090683 C3.888000011444092,-0.5070000290870667 4.5,-0.968999981880188 5.214000225067139,-1.1729999780654907 C5.214000225067139,-1.1729999780654907 7.25,-1.753999948501587 7.25,-1.753999948501587 C7.25,-1.753999948501587 7.25,-6.5 7.25,-6.5 C6.133999824523926,-6.505000114440918 5.025000095367432,-6.686999797821045 3.9660000801086426,-7.039999961853027 C3.9660000801086426,-7.039999961853027 2.4730000495910645,-7.538000106811523 2.4730000495910645,-7.538000106811523 C1.5549999475479126,-7.843999862670898 0.593999981880188,-8 -0.37299999594688416,-8 C-0.37299999594688416,-8 -4.25,-8 -4.25,-8 C-5.078000068664551,-8 -5.75,-7.328000068664551 -5.75,-6.5 C-5.75,-6.5 -5.75,-6.000999927520752 -5.75,-6.000999927520752 C-5.75,-6.000999927520752 -6.14900016784668,-5.701000213623047 -6.14900016784668,-5.701000213623047 C-6.515999794006348,-5.426000118255615 -6.75,-4.989999771118164 -6.75,-4.5 C-6.75,-4.4070000648498535 -6.742000102996826,-4.316999912261963 -6.72599983215332,-4.230000019073486 C-6.72599983215332,-4.230000019073486 -6.644999980926514,-3.7850000858306885 -6.644999980926514,-3.7850000858306885 C-6.644999980926514,-3.7850000858306885 -6.926000118255615,-3.430999994277954 -6.926000118255615,-3.430999994277954 C-7.129000186920166,-3.174999952316284 -7.25,-2.8529999256134033 -7.25,-2.5 C-7.25,-2.1470000743865967 -7.129000186920166,-1.8250000476837158 -6.926000118255615,-1.569000005722046 C-6.926000118255615,-1.569000005722046 -6.644999980926514,-1.215000033378601 -6.644999980926514,-1.215000033378601 C-6.644999980926514,-1.215000033378601 -6.72599983215332,-0.7699999809265137 -6.72599983215332,-0.7699999809265137 C-6.742000102996826,-0.6830000281333923 -6.75,-0.5929999947547913 -6.75,-0.5 C-6.75,0.328000009059906 -6.078000068664551,1 -5.25,1 C-5.25,1 -1.180999994277954,1 -1.180999994277954,1 C-1.180999994277954,1 -1.503999948501587,2.25 -1.503999948501587,2.25 C-1.6480000019073486,2.808000087738037 -1.75,3.4149999618530273 -1.75,4 C-1.75,4.7729997634887695 -1.5729999542236328,5.7729997634887695 -1.3569999933242798,6.689000129699707 C-1.1779999732971191,7.447000026702881 -0.4650000035762787,8 0.41200000047683716,8 C0.41200000047683716,8 1.25,8 1.25,8 C1.25,8 1.25,4.2870001792907715 1.25,4.2870001792907715z M3.25,8.5 C3.25,9.32800006866455 2.578000068664551,10 1.75,10 C1.75,10 0.41200000047683716,10 0.41200000047683716,10 C-1.2929999828338623,10 -2.890000104904175,8.902999877929688 -3.303999900817871,7.1479997634887695 C-3.5290000438690186,6.193999767303467 -3.75,5.011000156402588 -3.75,4 C-3.75,3.6600000858306885 -3.7249999046325684,3.3239998817443848 -3.684000015258789,3 C-3.684000015258789,3 -5.25,3 -5.25,3 C-7.183000087738037,3 -8.75,1.4329999685287476 -8.75,-0.5 C-8.75,-0.5630000233650208 -8.748000144958496,-0.6259999871253967 -8.744999885559082,-0.6880000233650208 C-9.0649995803833,-1.2170000076293945 -9.25,-1.8380000591278076 -9.25,-2.5 C-9.25,-3.1619999408721924 -9.0649995803833,-3.7829999923706055 -8.744999885559082,-4.311999797821045 C-8.748000144958496,-4.374000072479248 -8.75,-4.436999797821045 -8.75,-4.5 C-8.75,-5.4710001945495605 -8.354000091552734,-6.349999904632568 -7.7170000076293945,-6.982999801635742 C-7.48199987411499,-8.687999725341797 -6.019000053405762,-10 -4.25,-10 C-4.25,-10 -0.37299999594688416,-10 -0.37299999594688416,-10 C0.8090000152587891,-10 1.9839999675750732,-9.8100004196167 3.1059999465942383,-9.435999870300293 C3.1059999465942383,-9.435999870300293 4.598999977111816,-8.937999725341797 4.598999977111816,-8.937999725341797 C5.468999862670898,-8.64799976348877 6.380000114440918,-8.5 7.296999931335449,-8.5 C8.37600040435791,-8.5 9.25,-7.625999927520752 9.25,-6.546999931335449 C9.25,-6.546999931335449 9.25,-1.753999948501587 9.25,-1.753999948501587 C9.25,-0.8610000014305115 8.657999992370605,-0.07599999755620956 7.798999786376953,0.16899999976158142 C7.798999786376953,0.16899999976158142 5.763999938964844,0.75 5.763999938964844,0.75 C5.526000022888184,0.8180000185966492 5.322000026702881,0.972000002861023 5.190999984741211,1.1820000410079956 C5.190999984741211,1.1820000410079956 3.25,4.2870001792907715 3.25,4.2870001792907715 C3.25,4.2870001792907715 3.25,8.5 3.25,8.5z"
                                            ></path>
                                          </g>
                                        </g>
                                        <g className='hidden'>
                                          <g>
                                            <path></path>
                                          </g>
                                        </g>
                                        <g className='hidden'>
                                          <g>
                                            <path></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                  {/* 싫어요 누른 상태 */}
                                  { dislikeClick &&
                                  <button aria-label="'싫어요'로 이미 평가함" type="button" onMouseEnter={ratedEnter} onMouseLeave={ratedLeave} className='ButtonColorStatesCss_active max-h-[42px] max-w-[42px] items-center appearance-none flex justify-center opacity-[1] absolute select-none will-change-[background-color,_color] break-words whitespace-nowrap border-none bg-transparent font-[inherit] p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 72 72" width="72" height="72" className='w-[100%] h-[100%] pointer-events-none z-0 scale-[2] overflow-hidden select-none break-words whitespace-nowrap font-[inherit] cursor-pointer text-[rgb(169,169,169)] normal-case'>
                                      <defs>
                                        <clipPath id="__lottie_element_1487"><rect width="72" height="72" x="0" y="0" className='w-[72] h-[72] x-0 y-0 pointer-events-none select-none break-words whitespace-nowrap cursor-pointer text-[rgb(169,169,169)]'></rect></clipPath>
                                        <clipPath id="__lottie_element_1489"><path d="M0,0 L31,0 L31,31 L0,31z"></path></clipPath>
                                      </defs>
                                      <g clipPath='url(#__lottie_element_1487)'>
                                        <g clipPath='url(#__lottie_element_1489' transform="matrix(1,0,0,1,19.625,20.5)" opacity="1">
                                          <g className='hidden'>
                                            <g></g>
                                            <g>
                                              <path></path>
                                            </g>
                                          </g>
                                          <g className='hidden'>
                                            <g></g>
                                            <g>
                                              <path></path>
                                            </g>
                                          </g>
                                          <g transform="matrix(1,0,0,1,15.71399974822998,15.83899974822998)" opacity="1" className='block'>
                                            <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                            <path 
                                              fill="rgb(255,255,255)" 
                                              fill-opacity="1" 
                                              d=" M-1.312999963760376,6.495999813079834 C-1.312999963760376,6.495999813079834 -1.406999945640564,5.74399995803833 -1.406999945640564,5.74399995803833 C-1.468999981880188,5.25 -1.468999981880188,4.75 -1.406999945640564,4.25600004196167 C-1.406999945640564,4.25600004196167 -1.125,2 -1.125,2 C-1.125,2 -5.5,2 -5.5,2 C-6.328000068664551,2 -7,1.3279999494552612 -7,0.5 C-7,-0.02199999988079071 -6.732999801635742,-0.48100000619888306 -6.328999996185303,-0.75 C-6.328999996185303,-0.75 -6.5,-0.75 -6.5,-0.75 C-7.328000068664551,-0.75 -8,-1.4220000505447388 -8,-2.25 C-8,-2.9800000190734863 -7.478000164031982,-3.5889999866485596 -6.7870001792907715,-3.7230000495910645 C-7.215000152587891,-3.986999988555908 -7.5,-4.460000038146973 -7.5,-5 C-7.5,-5.828000068664551 -6.828000068664551,-6.5 -6,-6.5 C-6,-6.5 -5.618000030517578,-6.5 -5.618000030517578,-6.5 C-5.855999946594238,-6.764999866485596 -6,-7.116000175476074 -6,-7.5 C-6,-8.32800006866455 -5.328000068664551,-9 -4.5,-9 C-4.5,-9 -0.01600000075995922,-9 -0.01600000075995922,-9 C1.3049999475479126,-9 2.6029999256134033,-8.654999732971191 3.75,-8 C3.75,-8 3.9230000972747803,-7.901000022888184 3.9230000972747803,-7.901000022888184 C4.955999851226807,-7.310999870300293 6.125999927520752,-7 7.315999984741211,-7 C7.693999767303467,-7 8,-6.693999767303467 8,-6.315999984741211 C8,-6.315999984741211 8,-0.7540000081062317 8,-0.7540000081062317 C8,-0.30799999833106995 7.703999996185303,0.08399999886751175 7.275000095367432,0.2070000022649765 C7.275000095367432,0.2070000022649765 5.238999843597412,0.7889999747276306 5.238999843597412,0.7889999747276306 C4.763000011444092,0.925000011920929 4.355000019073486,1.2319999933242798 4.0929999351501465,1.6519999504089355 C4.0929999351501465,1.6519999504089355 2.1519999504089355,4.756999969482422 2.1519999504089355,4.756999969482422 C2.052999973297119,4.915999889373779 2,5.099999904632568 2,5.2870001792907715 C2,5.2870001792907715 2,8.52400016784668 2,8.52400016784668 C2,8.786999702453613 1.7869999408721924,9 1.5240000486373901,9 C0.0820000022649765,9 -1.1339999437332153,7.927000045776367 -1.312999963760376,6.495999813079834z"
                                            ></path>
                                            </g>
                                          </g>
                                        </g>
                                      </g>
                                    </svg>
                                  </button>
                                  }
                                </button>
                              </div>
                            <div className='ltr_toolTipWrapper my-0 mx-[0.2rem] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <button onMouseOver={likeDetailHoverEnter} onMouseLeave={likeDetailHoverLeave} onClick={likeActive} aria-label='좋아요로 평가하기' type="button" className='ButtonColorStatesCss max-h-[42px] max-w-[42px] items-center appearance-none flex justify-center opacity-[1] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap border-none bg-transparent font-[inherit] p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 72 72" width="72" height="72" className='w-[100%] h-[100%] pointer-events-none z-0 scale-[2] overflow-hidden select-none break-words whitespace-nowrap font-[inherit] cursor-pointer text-[rgb(169,169,169)] normal-case'>
                                  <defs>
                                    <clipPath id="__lottie_element_127"><rect width="72" height="72" x="0" y="0" className='w-[72] h-[72] x-0 y-0 pointer-events-none select-none break-words whitespace-nowrap cursor-pointer text-[rgb(169,169,169)]'></rect></clipPath>
                                    <clipPath id="__lottie_element_129"><path d="M0,0 L31,0 L31,31 L0,31z"></path></clipPath>
                                  </defs>
                                  <g clipPath='url(#__lottie_element_127)'>
                                    <g clipPath='url(#__lottie_element_129)' transform="matrix(1,0,0,1,19.625,20.5)" opacity="1">
                                      <g transform="matrix(1,0,0,1,27.74799919128418,16.035999298095703)" opacity="1">
                                        <g opacity="1" transform="matrix(2,0,0,2,0,0)"></g>
                                        <g opacity="1" transform="matrix(1,0,0,1,-11.97599983215332,-0.03400000184774399)">
                                          <path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M-1.25,-4.2870001792907715 C-1.25,-3.9119999408721924 -1.3550000190734863,-3.5450000762939453 -1.5540000200271606,-3.2269999980926514 C-1.5540000200271606,-3.2269999980926514 -3.494999885559082,-0.12200000137090683 -3.494999885559082,-0.12200000137090683 C-3.888000011444092,0.5070000290870667 -4.5,0.968999981880188 -5.214000225067139,1.1729999780654907 C-5.214000225067139,1.1729999780654907 -7.25,1.753999948501587 -7.25,1.753999948501587 C-7.25,1.753999948501587 -7.25,6.5 -7.25,6.5 C-6.133999824523926,6.505000114440918 -5.025000095367432,6.686999797821045 -3.9660000801086426,7.039999961853027 C-3.9660000801086426,7.039999961853027 -2.4730000495910645,7.538000106811523 -2.4730000495910645,7.538000106811523 C-1.5549999475479126,7.843999862670898 -0.593999981880188,8 0.37299999594688416,8 C0.37299999594688416,8 4.25,8 4.25,8 C5.078000068664551,8 5.75,7.328000068664551 5.75,6.5 C5.75,6.5 5.75,6.000999927520752 5.75,6.000999927520752 C5.75,6.000999927520752 6.14900016784668,5.701000213623047 6.14900016784668,5.701000213623047 C6.515999794006348,5.426000118255615 6.75,4.989999771118164 6.75,4.5 C6.75,4.4070000648498535 6.742000102996826,4.316999912261963 6.72599983215332,4.230000019073486 C6.72599983215332,4.230000019073486 6.644999980926514,3.7850000858306885 6.644999980926514,3.7850000858306885 C6.644999980926514,3.7850000858306885 6.926000118255615,3.430999994277954 6.926000118255615,3.430999994277954 C7.129000186920166,3.174999952316284 7.25,2.8529999256134033 7.25,2.5 C7.25,2.1470000743865967 7.129000186920166,1.8250000476837158 6.926000118255615,1.569000005722046 C6.926000118255615,1.569000005722046 6.644999980926514,1.215000033378601 6.644999980926514,1.215000033378601 C6.644999980926514,1.215000033378601 6.72599983215332,0.7699999809265137 6.72599983215332,0.7699999809265137 C6.742000102996826,0.6830000281333923 6.75,0.5929999947547913 6.75,0.5 C6.75,-0.328000009059906 6.078000068664551,-1 5.25,-1 C5.25,-1 1.180999994277954,-1 1.180999994277954,-1 C1.180999994277954,-1 1.503999948501587,-2.25 1.503999948501587,-2.25 C1.6480000019073486,-2.808000087738037 1.75,-3.4149999618530273 1.75,-4 C1.75,-4.7729997634887695 1.5729999542236328,-5.7729997634887695 1.3569999933242798,-6.689000129699707 C1.1779999732971191,-7.447000026702881 0.4650000035762787,-8 -0.41200000047683716,-8 C-0.41200000047683716,-8 -1.25,-8 -1.25,-8 C-1.25,-8 -1.25,-4.2870001792907715 -1.25,-4.2870001792907715z M-3.25,-8.5 C-3.25,-9.32800006866455 -2.578000068664551,-10 -1.75,-10 C-1.75,-10 -0.41200000047683716,-10 -0.41200000047683716,-10 C1.2929999828338623,-10 2.890000104904175,-8.902999877929688 3.303999900817871,-7.1479997634887695 C3.5290000438690186,-6.193999767303467 3.75,-5.011000156402588 3.75,-4 C3.75,-3.6600000858306885 3.7249999046325684,-3.3239998817443848 3.684000015258789,-3 C3.684000015258789,-3 5.25,-3 5.25,-3 C7.183000087738037,-3 8.75,-1.4329999685287476 8.75,0.5 C8.75,0.5630000233650208 8.748000144958496,0.6259999871253967 8.744999885559082,0.6880000233650208 C9.0649995803833,1.2170000076293945 9.25,1.8380000591278076 9.25,2.5 C9.25,3.1619999408721924 9.0649995803833,3.7829999923706055 8.744999885559082,4.311999797821045 C8.748000144958496,4.374000072479248 8.75,4.436999797821045 8.75,4.5 C8.75,5.4710001945495605 8.354000091552734,6.349999904632568 7.7170000076293945,6.982999801635742 C7.48199987411499,8.687999725341797 6.019000053405762,10 4.25,10 C4.25,10 0.37299999594688416,10 0.37299999594688416,10 C-0.8090000152587891,10 -1.9839999675750732,9.8100004196167 -3.1059999465942383,9.435999870300293 C-3.1059999465942383,9.435999870300293 -4.598999977111816,8.937999725341797 -4.598999977111816,8.937999725341797 C-5.468999862670898,8.64799976348877 -6.380000114440918,8.5 -7.296999931335449,8.5 C-8.37600040435791,8.5 -9.25,7.625999927520752 -9.25,6.546999931335449 C-9.25,6.546999931335449 -9.25,1.753999948501587 -9.25,1.753999948501587 C-9.25,0.8610000014305115 -8.657999992370605,0.07599999755620956 -7.798999786376953,-0.16899999976158142 C-7.798999786376953,-0.16899999976158142 -5.763999938964844,-0.75 -5.763999938964844,-0.75 C-5.526000022888184,-0.8180000185966492 -5.322000026702881,-0.972000002861023 -5.190999984741211,-1.1820000410079956 C-5.190999984741211,-1.1820000410079956 -3.25,-4.2870001792907715 -3.25,-4.2870001792907715 C-3.25,-4.2870001792907715 -3.25,-8.5 -3.25,-8.5z"
                                          ></path>
                                        </g>
                                      </g>
                                      <g className='hidden'>
                                        <g>
                                          <path></path>
                                        </g>
                                      </g>
                                      <g className='hidden'>
                                        <g>
                                          <path></path>
                                        </g>
                                      </g>
                                    </g>
                                  </g>
                                </svg>
                                {/* 좋아요 누른 상태 */}
                                { likeClick &&
                                <button aria-label="'좋아요'로 이미 평가함" type="button" onMouseEnter={ratedEnter} onMouseLeave={ratedLeave} className='ButtonColorStatesCss_active max-h-[42px] max-w-[42px] items-center appearance-none flex justify-center opacity-[1] absolute select-none will-change-[background-color,_color] break-words whitespace-nowrap border-none bg-transparent font-[inherit] p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                  <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 72 72" width="72" height="72" className='w-[100%] h-[100%] pointer-events-none z-0 scale-[2] overflow-hidden select-none break-words whitespace-nowrap font-[inherit] cursor-pointer text-[rgb(169,169,169)] normal-case'>
                                    <defs>
                                      <clipPath id="__lottie_element_1487"><rect width="72" height="72" x="0" y="0" className='w-[72] h-[72] x-0 y-0 pointer-events-none select-none break-words whitespace-nowrap cursor-pointer text-[rgb(169,169,169)]'></rect></clipPath>
                                      <clipPath id="__lottie_element_1489"><path d="M0,0 L31,0 L31,31 L0,31z"></path></clipPath>
                                    </defs>
                                    <g clipPath='url(#__lottie_element_1487)'>
                                      <g clipPath='url(#__lottie_element_1489' transform="matrix(1,0,0,1,19.625,20.5)" opacity="1">
                                        <g className='hidden'>
                                          <g></g>
                                          <g>
                                            <path></path>
                                          </g>
                                        </g>
                                        <g className='hidden'>
                                          <g></g>
                                          <g>
                                            <path></path>
                                          </g>
                                        </g>
                                        <g transform="matrix(1,0,0,1,15.71399974822998,15.83899974822998)" opacity="1" className='block'>
                                          <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                                          <path
                                            fill="rgb(255,255,255)"
                                            fill-opacity="1"
                                            d=" M1.312999963760376,-6.495999813079834 C1.312999963760376,-6.495999813079834 1.406999945640564,-5.74399995803833 1.406999945640564,-5.74399995803833 C1.468999981880188,-5.25 1.468999981880188,-4.75 1.406999945640564,-4.25600004196167 C1.406999945640564,-4.25600004196167 1.125,-2 1.125,-2 C1.125,-2 5.5,-2 5.5,-2 C6.328000068664551,-2 7,-1.3279999494552612 7,-0.5 C7,0.02199999988079071 6.732999801635742,0.48100000619888306 6.328999996185303,0.75 C6.328999996185303,0.75 6.5,0.75 6.5,0.75 C7.328000068664551,0.75 8,1.4220000505447388 8,2.25 C8,2.9800000190734863 7.478000164031982,3.5889999866485596 6.7870001792907715,3.7230000495910645 C7.215000152587891,3.986999988555908 7.5,4.460000038146973 7.5,5 C7.5,5.828000068664551 6.828000068664551,6.5 6,6.5 C6,6.5 5.618000030517578,6.5 5.618000030517578,6.5 C5.855999946594238,6.764999866485596 6,7.116000175476074 6,7.5 C6,8.32800006866455 5.328000068664551,9 4.5,9 C4.5,9 0.01600000075995922,9 0.01600000075995922,9 C-1.3049999475479126,9 -2.6029999256134033,8.654999732971191 -3.75,8 C-3.75,8 -3.9230000972747803,7.901000022888184 -3.9230000972747803,7.901000022888184 C-4.955999851226807,7.310999870300293 -6.125999927520752,7 -7.315999984741211,7 C-7.693999767303467,7 -8,6.693999767303467 -8,6.315999984741211 C-8,6.315999984741211 -8,0.7540000081062317 -8,0.7540000081062317 C-8,0.30799999833106995 -7.703999996185303,-0.08399999886751175 -7.275000095367432,-0.2070000022649765 C-7.275000095367432,-0.2070000022649765 -5.238999843597412,-0.7889999747276306 -5.238999843597412,-0.7889999747276306 C-4.763000011444092,-0.925000011920929 -4.355000019073486,-1.2319999933242798 -4.0929999351501465,-1.6519999504089355 C-4.0929999351501465,-1.6519999504089355 -2.1519999504089355,-4.756999969482422 -2.1519999504089355,-4.756999969482422 C-2.052999973297119,-4.915999889373779 -2,-5.099999904632568 -2,-5.2870001792907715 C-2,-5.2870001792907715 -2,-8.52400016784668 -2,-8.52400016784668 C-2,-8.786999702453613 -1.7869999408721924,-9 -1.5240000486373901,-9 C-0.0820000022649765,-9 1.1339999437332153,-7.927000045776367 1.312999963760376,-6.495999813079834z"
                                          ></path>
                                          </g>
                                        </g>
                                      </g>
                                    </g>
                                  </svg>
                                </button>
                                }
                              </button>
                            </div>
                            <div className='ltr_toolTipWrapper my-0 mx-[0.2rem] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
                              <button onMouseOver={bestDetailHoverEnter} onMouseLeave={bestDetailHoverLeave} onClick={bestActive} aria-label='최고예요로 평가하기' className='ButtonColorStatesCss max-h-[42px] max-w-[42px] items-center appearance-none flex justify-center opacity-[1] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap border-none bg-transparent font-[inherit] p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
                                
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard relative text-[#fff]"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 2V5.76393C13.5 6.07442 13.4277 6.38065 13.2889 6.65836L12.7708 7.69437C12.6876 7.22319 12.5917 6.77987 12.5006 6.39344C12.31 5.5852 11.9615 4.87278 11.5 4.2696V1.5C11.5 0.671574 12.1716 0 13 0H14.3377C16.0428 0 17.6401 1.09702 18.0539 2.85235C18.2788 3.80611 18.5 4.98865 18.5 6C18.5 6.33974 18.4752 6.6755 18.4338 7H20C21.933 7 23.5 8.567 23.5 10.5C23.5 10.5631 23.4983 10.6258 23.495 10.6883C23.8153 11.217 24 11.8378 24 12.5C24 13.1622 23.8153 13.783 23.495 14.3118C23.4983 14.3742 23.5 14.4369 23.5 14.5C23.5 15.4709 23.1039 16.3496 22.467 16.9827C22.2319 18.6873 20.7692 20 19 20H17.7925C17.9004 19.6191 17.9683 19.2213 17.9913 18.8115C18.1119 18.5513 18.2129 18.2801 18.2922 18H19C19.8284 18 20.4999 17.3285 20.5 16.5001L20.5 16.0006L20.8994 15.7006C21.266 15.4253 21.5 14.9901 21.5 14.5C21.5 14.4071 21.4917 14.317 21.476 14.2301L21.3955 13.7851L21.6764 13.4308C21.8794 13.1748 22 12.8529 22 12.5C22 12.1471 21.8794 11.8252 21.6764 11.5692L21.3955 11.2149L21.476 10.7699C21.4917 10.6831 21.5 10.5929 21.5 10.5C21.5 9.67157 20.8284 9 20 9H17.2219H15.9315L16.2536 7.75039C16.3976 7.1919 16.5 6.58478 16.5 6C16.5 5.22716 16.3233 4.22758 16.1073 3.31126C15.9285 2.55292 15.2152 2 14.3377 2H13.5ZM6 9.76393V6H6.83772C7.71518 6 8.42852 6.55292 8.60729 7.31126C8.82331 8.22758 9 9.22716 9 10C9 10.5848 8.89755 11.1919 8.75359 11.7504L8.43147 13H9.72193H12.5C13.3284 13 14 13.6716 14 14.5C14 14.5929 13.9917 14.6831 13.976 14.7699L13.8955 15.2149L14.1764 15.5692C14.3794 15.8252 14.5 16.1471 14.5 16.5C14.5 16.8529 14.3794 17.1748 14.1764 17.4308L13.8955 17.7851L13.976 18.2301C13.9917 18.317 14 18.4071 14 18.5C14 18.9901 13.766 19.4253 13.3994 19.7006L13 20.0006L13 20.5001C12.9999 21.3285 12.3284 22 11.5 22H9H8H7.90394C6.78317 22 5.67407 21.7724 4.64392 21.3309L3.82098 20.9782C3.24116 20.7297 2.62633 20.576 2 20.5219V15.618L2.85093 15.1926C3.43151 14.9023 3.90228 14.4315 4.19257 13.8509L5.78885 10.6584C5.92771 10.3806 6 10.0744 6 9.76393ZM5.5 4C4.67157 4 4 4.67157 4 5.5V9.76393L2.40372 12.9565C2.30695 13.15 2.15003 13.307 1.9565 13.4037L1.10557 13.8292C0.428005 14.168 0 14.8605 0 15.618V21.0086C0 21.8323 0.667718 22.5 1.49139 22.5C2.02143 22.5 2.54595 22.6077 3.03314 22.8165L3.85608 23.1691C5.13519 23.7173 6.51232 24 7.90394 24H8H9H11.5C13.2692 24 14.7319 22.6873 14.967 20.9827C15.6039 20.3496 16 19.4709 16 18.5C16 18.4369 15.9983 18.3742 15.995 18.3118C16.3153 17.783 16.5 17.1622 16.5 16.5C16.5 15.8378 16.3153 15.217 15.995 14.6883C15.9983 14.6258 16 14.5631 16 14.5C16 12.567 14.433 11 12.5 11H10.9338C10.9752 10.6755 11 10.3397 11 10C11 8.98865 10.7788 7.80611 10.5539 6.85235C10.1401 5.09702 8.54284 4 6.83772 4H5.5Z" fill="currentColor"></path>
                                {/* 최고예요 누른 상태 */}
                                { bestClick &&
                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard absolute text-[#fff]"><path fill-rule="evenodd" clip-rule="evenodd" d="M17.313 2.50407L17.407 3.25579C17.4688 3.75001 17.4688 4.24999 17.407 4.74421L17.125 7H21.5C22.3284 7 23 7.67157 23 8.5C23 9.02174 22.7336 9.48127 22.3295 9.75H22.5C23.3284 9.75 24 10.4216 24 11.25C24 11.9804 23.478 12.5888 22.7867 12.7226C23.2148 12.9868 23.5 13.4601 23.5 14C23.5 14.8284 22.8284 15.5 22 15.5H21.6181C21.8556 15.7654 22 16.1158 22 16.5C22 17.3284 21.3284 18 20.5 18H20H17.9195C17.9722 17.7585 18 17.5075 18 17.25C18 16.2903 17.6138 15.4209 16.9883 14.7886C16.996 14.6934 17 14.5972 17 14.5C17 12.567 15.433 11 13.5 11H11.3906L11.3915 10.9923C11.4739 10.3333 11.4739 9.66668 11.3915 9.00772L11.2976 8.256L10.0645 8.41013L11.2976 8.256C11.2865 8.16745 11.2731 8.0797 11.2574 7.99281C11.519 7.83232 11.7422 7.61247 11.9074 7.34813L13.848 4.2432C13.9473 4.08427 14 3.90062 14 3.7132V0.47644C14 0.21331 14.2133 0 14.4764 0C15.9181 0 17.1342 1.07353 17.313 2.50407ZM9.31301 8.50407L9.40697 9.25579C9.46875 9.75001 9.46875 10.25 9.40697 10.7442L9.125 13H13.5C14.3284 13 15 13.6716 15 14.5C15 15.0217 14.7336 15.4813 14.3294 15.75H14.5C15.3284 15.75 16 16.4216 16 17.25C16 17.9804 15.478 18.5888 14.7867 18.7226C15.2147 18.9868 15.5 19.4601 15.5 20C15.5 20.8284 14.8284 21.5 14 21.5H13.6181C13.8556 21.7654 14 22.1158 14 22.5C14 23.3284 13.3284 24 12.5 24H12H9H8.01556C6.69475 24 5.39679 23.6553 4.25 23L4.07684 22.9011C3.04352 22.3106 1.874 22 0.683874 22C0.306181 22 0 21.6938 0 21.3161V15.7543C0 15.3078 0.295977 14.9154 0.725279 14.7928L2.76086 14.2112C3.23665 14.0752 3.64516 13.7677 3.90742 13.3481L5.848 10.2432C5.94733 10.0843 6 9.90062 6 9.7132V6.47644C6 6.21331 6.21331 6 6.47644 6C7.91812 6 9.13419 7.07353 9.31301 8.50407Z" fill="currentColor"></path></svg>
                                }
                                </svg>
                              </button>
                            </div>
                          </div>
                            <div className='ltr justify-center text-white mt-[0.5rem] mx-auto mb-0 p-0 border-[2px] border-solid border-transparent opacity-0 hidden cursor-pointer text-[16px] leading-[1.4]'>
                              <button className='color_supplemental max-h-[42px] max-w-[42px] pl-[0.8rem] pr-[0.8rem] shadow-[rgb(0 0 0 / 60%) 0px 0px 2px 0px, rgb(0 0 0 / 50%) 0px 8px 16px 0px] items-center appearance-none flex justify-center opacity-[1] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap border-none text-inherit p-0 cursor-pointer text-[rgb(169,169,169)] outline-none rounded-[50%] w-[3.2rem] h-[3.2rem] min-w-[inherit] min-h-[inherit] overflow-visible'>
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
                      </div>
                      }
                    </div>
                  </div>
                {/* </div> */}
              </div>
              <div className='buttonControls_messaging h-[20px] block cursor-pointer text-[#fff] text-[16px] leading-[1.4]'></div>
            </div>
            <div className='detail_modal opacity-[0.4] block overflow-hidden cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
              <div className='global_supplemental_audio_toggle cursor-pointer block text-[#fff] text-[16px] leading-[1.4]'>
                
                <button onClick={mute} aria-label='음성 켜기' className='audio_onoff max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[2px] border-solid border-[rgba(255, 255, 255, 0.7)] text-white pl-[0.8rem] pr-[0.8rem] items-center cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                  <div className='ltr_audio_onoff_button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                    <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] text-white cursor-pointer select-none break-words whitespace-nowrap'>
                        <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 8.28699 22.525 4.72603 19.8995 2.10052L18.4853 3.51474C20.7357 5.76517 22 8.81742 22 12C22 15.1826 20.7357 18.2349 18.4853 20.4853L19.8995 21.8995C22.525 19.274 24 15.7131 24 12ZM11 4.00001C11 3.59555 10.7564 3.23092 10.3827 3.07613C10.009 2.92135 9.57889 3.00691 9.29289 3.29291L4.58579 8.00001H1C0.447715 8.00001 0 8.44773 0 9.00001V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00001ZM5.70711 9.70712L9 6.41423V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70712ZM16.0001 12C16.0001 10.4087 15.368 8.8826 14.2428 7.75739L12.8285 9.1716C13.5787 9.92174 14.0001 10.9392 14.0001 12C14.0001 13.0609 13.5787 14.0783 12.8285 14.8285L14.2428 16.2427C15.368 15.1174 16.0001 13.5913 16.0001 12ZM17.0709 4.92896C18.9462 6.80432 19.9998 9.34786 19.9998 12C19.9998 14.6522 18.9462 17.1957 17.0709 19.0711L15.6567 17.6569C17.157 16.1566 17.9998 14.1218 17.9998 12C17.9998 9.87829 17.157 7.84346 15.6567 6.34317L17.0709 4.92896Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                  {/* 음소거 */}
                  { audioMute &&
                  <button aria-label='음성 켜기' className='audio_onoff max-h-[42px] max-w-[42px] min-h-[32px] min-w-[32px] bg-[#2a2a2a] border-[hsla(0,0%,100%,.5)] border-[2px] border-solid border-[rgba(255, 255, 255, 0.7)] text-white pl-[0.8rem] pr-[0.8rem] items-center cursor-pointer flex justify-center opacity-[1] p-[0.8rem] absolute select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible'>
                    <div className='ltr_audio_onoff_button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap'>
                      <div className='small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard w-auto h-[100%] text-white cursor-pointer select-none break-words whitespace-nowrap'>
                          <path fillRule="evenodd" clipRule="evenodd" d="M11 4.00003C11 3.59557 10.7564 3.23093 10.3827 3.07615C10.009 2.92137 9.57889 3.00692 9.29289 3.29292L4.58579 8.00003H1C0.447715 8.00003 0 8.44774 0 9.00003V15C0 15.5523 0.447715 16 1 16H4.58579L9.29289 20.7071C9.57889 20.9931 10.009 21.0787 10.3827 20.9239C10.7564 20.7691 11 20.4045 11 20V4.00003ZM5.70711 9.70714L9 6.41424V17.5858L5.70711 14.2929L5.41421 14H5H2V10H5H5.41421L5.70711 9.70714ZM15.2929 9.70714L17.5858 12L15.2929 14.2929L16.7071 15.7071L19 13.4142L21.2929 15.7071L22.7071 14.2929L20.4142 12L22.7071 9.70714L21.2929 8.29292L19 10.5858L16.7071 8.29292L15.2929 9.70714Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </button>
                  }
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='c2_previewModal_close block cursor-pointer m-[1em] absolute right-0 top-0 z-[2] text-[#fff] text-[16px] leading-[1.4]'>
        <Link to='/'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" role="button" aria-label="close" tabIndex="0" xmlns='http://www.w3.org/2000/svg' className='Hawkins_Icon_Standard bg-[#181818] rounded-[50%] h-[36px] p-[8px] w-[36px] cursor-pointer text-[#fff] text-[16px] leading-[1.4]'>
          <path fillRule="evenodd" clipRule="evenodd" d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z" fill="currentColor"></path>
        </svg>
        </Link>
      </div>
    </div>
  );
};

Top.propTypes = {
  poster_path : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
}

export default Top;