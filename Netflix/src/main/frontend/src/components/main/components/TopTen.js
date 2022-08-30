import React, { useEffect, useState } from 'react';
import 'css/main/topTen.css';
import TopTenList from './TopTenList';
import { useParams } from 'react-router-dom';

const TopTen = ({ type }) => {
    
    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    let URL;
    let GenreURL;

    const { tab } = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [genres, setGenres] = useState([]);
    
    if(tab === 'movie') {
        URL = "https://api.themoviedb.org/3/movie/";
        GenreURL = 'https://api.themoviedb.org/3/genre/movie/list?api_key=bc61587b22cd0e5226a33d30e467d867&language=ko-KR';
    } else {
        URL = "https://api.themoviedb.org/3/tv/";
        GenreURL = 'https://api.themoviedb.org/3/genre/tv/list?api_key=bc61587b22cd0e5226a33d30e467d867&language=ko-KR'
    }

    const getData = async () => {
        const json = await(
            await fetch(
                `${ URL }popular?api_key=${ KEY }&language=ko-KR&page=1`)
            ).json();
        setData(json.results.slice(0, 10));
    }

    const getGenres = async () => {
        const json = await(
            await fetch(GenreURL)
        ).json();
        setGenres(json.genres);
    }

    useEffect(() => {
        getData();
        getGenres();
        setLoading(false);
    }, []);

    const goNextSlide = () => {
        if(tab === 'new' && type === 'movie'){
            document.getElementsByClassName("slick-next")[3].click();
        }
        else {
            document.getElementsByClassName("slick-next")[0].click();
        }
    }

    const goPrevSlide = () => {
        if(tab === 'new' && type === 'movie'){
            document.getElementsByClassName("slick-prev")[3].click();
        }
        else {
            document.getElementsByClassName("slick-prev")[0].click();
        }
    }

    return (
        <div>
            {
                loading ? '' :
                <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="mostWatched">
                    <h2 className="rowHeader css-0">
                        <span className="rowTitle css-0"><div className="row-header-title">오늘 전세계 TOP 10 { type==='tv' ? '시리즈' : '영화'}</div></span>
                    </h2>
                    <div className="rowContainer rowContainer_title_card" id="row-1">
                        <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                                <div className="slider" style={{ overflow: 'visible', padding: '0 3.2%' }}>
                                    <span onClick={ goPrevSlide } className="handle handlePrev active" tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b className="indicator-icon icon-leftCaret"></b></span>
                                    <TopTenList data={ data } setData={ setData } genres={ genres }/>
                                    <span onClick={ goNextSlide } className="handle handleNext active" tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b className="indicator-icon icon-rightCaret"></b></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default TopTen;