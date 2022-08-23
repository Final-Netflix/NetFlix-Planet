import React, { useEffect, useState } from 'react';
import About from './About';
import APITest from './APITest';
import InfoText from './InfoText';
import Linked from './Linked';
import MoreLikeThis from './MoreLikeThis';
import Top from './Top';

const DetailForMovie = () => {
  const KEY = "bc61587b22cd0e5226a33d30e467d867";
  const URL = "https://api.themoviedb.org/3/movie/"

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [credits, setCredits] = useState([]);

  const getMovies = async () => {
      const json = await(
          await fetch(
              `https://api.themoviedb.org/3/search/movie?api_key=${ KEY }&query=octopus%20teacher&language=ko-KR`)
          ).json();
      setMovies(json.results);
      setLoading(false);
      getGenre();
  }

  const getGenre = async () => {
      const json = await(
          await fetch(
              `https://api.themoviedb.org/3/genre/movie/list?api_key=${ KEY }`)
          ).json();

      console.log("hihihi | " + JSON.stringify(json));
  }

  const getNames = async () => {
    const json = await(
      await fetch(
          `https://api.themoviedb.org/3/movie/682110/credits?api_key=${ KEY }&language=ko-KR`)
      ).json();
    setCredits(json.cast);
}

  useEffect(() => {
      getMovies();
      getNames();
  }, [])

  return (
    <div>
      {/* <Main /> */}
      <div className='c2_focus_trap_wrapper h-[100%] w-[100%] box-border flex justify-center left-0 absolute top-0 will-change-scroll break-keep-all'>
        <div className='c2_dialog mt-[30px] left-auto origin-[50%_12.5%] top-[2em] w-[848px] opacity-100 mb-[2em] transform-none min-w-0 z-[2] bg-transparent rounded-[6px] text-[#fff] text-[16px] will-change-transform'>
        { 
          loading ? <h1>Loading... </h1> :
          <div>{ movies.map(movie =>
                <Top
                    key={ movie.id }
                    poster_path={ movie.poster_path }
                    title={ movie.title }
                />) } 
          </div>
        }
          <div className='c2_previewModal_info opacity-[1] bg-[#181818] relative block text-[#fff] text-[16px] leading-[1.4]'>
            <div className='c2_detail_modal_container py-0 px-[3em] block text-[#fff] text-[16px] leading-[1.4]'>
              {
                <div>{ movies.map (movie =>
                      <InfoText 
                      key={ movie.id }
                      poster_path={ movie.poster_path }
                      title={ movie.title }
                      overview={ movie.overview }
                      genre_ids={ movie.genre_ids }
                      />)
                      }
                </div>
              }
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
              {
                <div>{ credits.map (credit =>
                      <About 
                      key={ credit.id }
                      name={ credit.name }
                      />)
                      }
                </div>
              }
            </div>
          </div>
          <Linked />
          {/* <APITest /> */}
        </div>
      </div>
      <div tabIndex="-1" className='opacity-[0.7] leading-[1.4]'>
        <div className="previewModal--backDrop bg-[#000] h-[100%] left-0 fixed top-0 w-[100%] block leading-[1.4]" tabIndex="-1" data-uia="previewModal--backDrop"></div>
      </div>
    </div>
  );
};

export default DetailForMovie;