import React, { useEffect, useState } from 'react';
import 'css/main/searchResult.css';
import SearchResultItems from './SearchResultItems';
import { useLocation } from 'react-router-dom';
import SearchResultHeader from './SearchResultHeader';

const SearchResult = () => {

    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    const URL = "https://api.themoviedb.org/3/movie/"

    const handleLocation = useLocation()
    console.log('handleLocation = ' + JSON.stringify(handleLocation)) //handleLocation = {"pathname":"/search","search":"","hash":"","state":{"type":"아이언맨"},"key":"z4zd1cn2"}

    const state = handleLocation.state ? handleLocation.state : ''  
    console.log('state = ' + JSON.stringify(state.type)) //state = "아이언맨"

    useEffect(() => {
        /* api요청 보내기 */
        const apiResult = `https://api.themoviedb.org/3/search/movie?api_key=bc61587b22cd0e5226a33d30e467d867&query=${state.type}` 
        console.log('apiResult = ' + JSON.stringify(apiResult))/* apiResult = "https://api.themoviedb.org/3/search/movie?api_key=bc61587b22cd0e5226a33d30e467d867&query=아이언맨"*/
        
        fetch(apiResult)
        .then((response) => response.json()) // response 값을 json 형태로  { [ { } ] }
        .then(result => setSearchList(result)); // 함수에 값 넣어주기
    }, [state])

    const [searchList, setSearchList] = useState();
    console.log('searchList = ' + JSON.stringify(searchList)) // searchList = {"page":1,"results":[{"adult":false,"backdrop_path":"
 
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {

        const json = await(
            await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${ KEY }&query=${state.type}`)
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

        /* console.log("hihihi | " + JSON.stringify(json)); */
    }

    useEffect(() => {
        getMovies();
    }, [])

    return (
        <div className="c1-mainView">
            <div className="c1-gallery c1-row-with-x-columns c1-search relative top-[5vw]">
                <div className="c1-search-title-header">
                    <div className="c1-rail">
                        <div className="c1-suggestions">
                            <div className="c1-ptrack-container">
                                <div className="c1-ptrack-content">
                                    <div className="c1-suggestionRailContainer">
                                        <span className="c1-suggestionsLabel text-2xl">다음과 관련된 콘텐츠:</span>
                                        {
                                            <div>
                                                {   movies.map(movie =>
                                                    <SearchResultHeader
                                                        title = { movie.title }
                                                    />
                                                )
                                                }
                                            </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="c1-galleryContent">
                    <div className="c1-galleryLockups">
                        <div className="c1-rowContainer c1-rowContainer_title_card" id="row-0">
                            <div className="c1-ptrack-container">
                            <div className="c1-rowContent c1-slider-hover-trigger-layer">
                                <div className="c1-slider">
                                    <div className="c1-sliderMask c1-showPeek">
                                        <div className="c1-sliderContent c1-row-with-x-columns">
                                        { 
                                            loading ? <h1>Loading... </h1> :
                                            <div>{ movies.map(movie =>
                                                    <SearchResultItems
                                                        key={ movie.id }
                                                        poster_path={ movie.poster_path }
                                                        title={ movie.title }
                                                        overview={ movie.overview }
                                                        genre_ids={ movie.genre_ids }
                                                        
                                                    />) } 
                                            </div>
                                        }  
                                        	</div>
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

export default SearchResult;
