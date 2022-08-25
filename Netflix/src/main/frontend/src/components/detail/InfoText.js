import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";

import { Link } from 'react-router-dom';

const InfoText = () => {
  const KEY = "bc61587b22cd0e5226a33d30e467d867";

  const [movies, setMovies] = useState([]);
  const [credits, setCredits] = useState([]);
  const [genres, setGenres] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [episodeCounts, setEpisodeCounts] = useState([]);

  const getMovies = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${ KEY }&query=octopus%20teacher&language=ko-KR`)
        ).json();
    setMovies(json.results);
  }
  const getNames = async () => {
    const json = await(
      await fetch(
          `https://api.themoviedb.org/3/movie/682110/credits?api_key=${ KEY }&language=ko-KR`)
      ).json();
    setCredits(json.cast);
  }
  const getGenre = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${ KEY }&language=ko-KR`)
        ).json();
      setGenres(json.genres);
    /* console.log("hihihi | " + JSON.stringify(json)); */
  }
  const getKeywords = async () => {
    const json = await(
        await fetch(
            `https://api.themoviedb.org/3/movie/682110/keywords?api_key=${ KEY }&language=ko-KR`)
        ).json();
    setKeywords(json.keywords);

    /* console.log("hihihi | " + JSON.stringify(json)); */
  }

  const getEpisodeCounts = async () => {
    const json = await(
      await fetch(
          `https://api.themoviedb.org/3/tv/197067?api_key=${ KEY }&language=ko-KR`)
      ).json();
      setEpisodeCounts(json.seasons);
  }

  useEffect(() => {
    getMovies();
    getNames();
    getGenre();
    getKeywords();
    getEpisodeCounts();
  }, [])


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
                    { episodeCounts.map (episodeCount =>
                    <span className='duration whitespace-nowrap mr-[0.5em] text-[#fff] text-[16px] leading-[1.4]'>
                      에피소드 { episodeCount.episode_count }개
                    </span>
                    )}
                    <span className='player_feature_badge mr-[0.5em] border-[1px] border-solid border-[hsla(0,0%,100%,.4)] rounded-[3px] text-[hsla(0,0%,100%,.9)] text-[.7em] py-0 px-[0.5em] whitespace-nowrap leading-[1.4]'>HD</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='css mb-[0.5em] flex items-center text-[#fff] text-[16px] leading-[1.4]'></div> */}
            <div className='detailMetadata_css mb-[0.5em] flex items-center text-[#fff] text-[16px] leading-[1.4]'></div>
            { movies.map ( movie => 
            <p className='preview_modal_synopsis text-[14px] leading-[24px] mb-[0.5em] block text-[#fff] font-sans'>
              <div className='ptrack_content block text-[14px] leading-[24px] text-[#fff] font-sans'>
                { movie.overview }
              </div>
            </p>
            )}
          </div>
          <div className='detailMetadata_right flex flex-col text-[#fff] text-[16px] leading-[1.4] font-sans'>
            <div className='previewModal_tags_person text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
              <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>출연:</span>
              
              { credits.map (credit => 
              <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
              <Link to='searchActor' state = {{id:credit.id, name:credit.name }}>
                <a className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  { credit.name },
                </a>
              </Link>
              </span>
              )}

              <span className='tag_more text-[14px] leading-[20px] break-words font-sans'>
                <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  더 보기
                </a>
              </span>
            </div>
            <div className='previewModal_tags_genre text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
              <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>장르:</span>
              
              { movies.map (movie => 
              <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
                { genres.map (genre =>
                <Link to='searchGenre' state = {{id:genre.id, name:genre.name }}>
                
                {
                  movie.genre_ids ==  genre.id  &&
                <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                   { genre.name },
                </a>
                }
                 
                </Link>
                )}
              </span>
              )}

            </div>
            <div className='previewModal_tags_series text-[14px] leading-[20px] my-[0.5em] mr-[0.5em] ml-0 break-words text-[#fff] font-sans'>
              <span className='tags_label text-[#777] text-[14px] leading-[20px] break-words font-sans'>시리즈 특징:</span>
              { keywords.map (keyword =>
              <span className='tag_item text-[14px] leading-[20px] break-words font-sans'>
              <Link to='searchKeyword' state = {{id:keyword.id, name:keyword.name }}>
                <a href='#' className='text-[#fff] cursor-pointer no-underline text-[14px] leading-[20px] break-words font-sans'>
                  { keyword.name },
                </a>
              </Link>
              </span>
              )}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* InfoText.propTypes = {
  poster_path : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  overview : PropTypes.string.isRequired,
  genre_ids : PropTypes.arrayOf(PropTypes.number).isRequired,
  name : PropTypes.string.isRequired
} */

export default InfoText;