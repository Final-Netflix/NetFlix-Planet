import React, { useEffect, useState } from 'react';
import About from './About';
import Content from './Content';
import InfoText from './InfoText';
import MoreLikeThis from './MoreLikeThis';
import Others from './Others';

const Info = () => {
  const KEY = "bc61587b22cd0e5226a33d30e467d867";

  const [episodes, setEpisodes] = useState([]);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
      const json = await(
          await fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=${ KEY }&query=octopus%20teacher&language=ko-KR`)
          ).json();
      setMovies(json.results);
  }

  const getEpisodes = async () => {
    const json = await(
      await fetch(
          `https://api.themoviedb.org/3/tv/197067/season/1?api_key=${ KEY }&language=ko-KR`)
      ).json();
      setEpisodes(json.episodes);
  }
  useEffect(() => {
    getMovies();
    getEpisodes();
  }, [])

  return (
    <div className='c2_previewModal_info opacity-[1] bg-[#181818] relative block text-[#fff] text-[16px] leading-[1.4]'>
      <div className='c2_detail_modal_container py-0 px-[3em] block text-[#fff] text-[16px] leading-[1.4]'>
        <InfoText />
        <Content />
        {
          <div>{ movies.map (movie =>
                <MoreLikeThis 
                key={ movie.id }
                poster_path={ movie.poster_path }
                title={ movie.title }
                overview={ movie.overview }
                genre_ids={ movie.genre_ids }
                />)
                }
          </div>
        }
        <Others />
        <About />
      </div>
    </div>
  );
};

export default Info;