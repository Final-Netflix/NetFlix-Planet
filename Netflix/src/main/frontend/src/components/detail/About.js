import React from 'react';
import PropTypes from "prop-types";

const About = ({name, id}) => {
  return (
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
                {/* <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                  에구치 타쿠야,
                </a> */}
                <a href="#" className='text-[#fff] cursor-pointer no-underline'>
                  { name },
                </a>
              </span>
              {/* <span className='tag_item text-[14px] leading-[20px] break-words'>
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
              </span> */}
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
  );
};

About.propTypes = {
  name : PropTypes.string.isRequired
}

export default About;