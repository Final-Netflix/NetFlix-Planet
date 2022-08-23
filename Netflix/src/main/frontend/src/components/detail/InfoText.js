import React from 'react';
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

const InfoText = ({poster_path, title, overview, genre_ids, id, name}) => {

  /* const scrollDown=() => {
    window.scrollTo({
      bottom: 0,
      behavior: "smooth"
    }); 
  }*/

  return (
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
                    {/* <a href='#' onClick={scrollDown} className='mr-[0.5em] text-[#fff] text-[16px] leading-[1.4] cursor-pointer no-underline'> */}
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
              <div className='ptrack_content block text-[14px] leading-[24px] text-[#fff] font-sans'>{ overview }</div>
              {/* <div className='ptrack_content block text-[14px] leading-[24px] text-[#fff] font-sans'>스파이, 암살자 그리고 초능력자. 각자 다른 사정이 있는 세 사람이 서로에게 정체를 숨기고 가상 가족을 결성한다.</div> */}
            </p>
          </div>
          <div className='detailMetadata_right flex flex-col text-[#fff] text-[16px] leading-[1.4] font-sans'>
            <div className='previewModal_tags_person text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
              <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>출연:</span>
              <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
              <Link to='searchActor'>
                <a className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  에구치 타쿠야,
                </a>
              </Link>
              </span>
              <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                {/* <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  { name },
                </a> */}
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
                <Link to='searchGenre'>
                <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  { genre_ids },
                </a>
                {/* <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  일본 작품,
                </a> */}
                </Link>
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
              <Link to='searchGenre'>
                <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  색다른,
                </a>
              </Link>
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
  );
};

InfoText.propTypes = {
  poster_path : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  overview : PropTypes.string.isRequired,
  genre_ids : PropTypes.arrayOf(PropTypes.number).isRequired,
  name : PropTypes.string.isRequired
}

export default InfoText;