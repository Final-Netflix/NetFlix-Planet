import React, { useEffect, useState } from 'react';
import 'css/main/topTen.css';
import TopTenList from './TopTenList';
import { useParams } from 'react-router-dom';

const movieGenres = [
    {"id": 28, "name": "액션"},
    {"id": 12, "name": "모험"},
    {"id": 16, "name": "애니메이션"},
    {"id": 35, "name": "코미디"},
    {"id": 80, "name": "범죄"},
    {"id": 99, "name": "다큐멘터리"},
    {"id": 18, "name": "드라마"},
    {"id": 10751, "name": "가족"},
    {"id": 14, "name": "판타지"},
    {"id": 36, "name": "역사"},
    {"id": 27, "name": "공포"},
    {"id": 10402, "name": "음악"},
    {"id": 9648, "name": "미스터리"},
    {"id": 10749, "name": "로맨스"},
    {"id": 878, "name": "SF"},
    {"id": 10770, "name": "TV 영화"},
    {"id": 53, "name": "스릴러"},
    {"id": 10752, "name": "전쟁"},
    {"id": 37, "name": "서부"}
  ];

const tvGenres = [
    { "id": 10759, "name": "Action & Adventure" },
    { "id": 16, "name": "애니메이션"},
    { "id": 35, "name": "코미디"},
    { "id": 80, "name": "범죄"},
    { "id": 99, "name": "다큐멘터리"},
    { "id": 18, "name": "드라마"},
    { "id": 10751, "name": "가족"},
    { "id": 10762, "name": "Kids"},
    { "id": 9648, "name": "미스터리"},
    { "id": 10763, "name": "News"},
    { "id": 10764, "name": "Reality"},
    { "id": 10765, "name": "Sci-Fi & Fantasy"},
    { "id": 10766, "name": "Soap"},
    { "id": 10767, "name": "Talk"},
    { "id": 10768, "name": "War & Politics" },
    { "id": 37, "name": "서부"  }
]

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
        // setGenres(movieGenres);
    } else {
        URL = "https://api.themoviedb.org/3/tv/";
        // setGenres(tvGenres);
    }

    const getData = async () => {
        const json = await(
            await fetch(
                `${ URL }popular?api_key=${ KEY }&language=ko-KR&page=1`)
            ).json();
        setData(json.results.slice(0, 10));
    }

    const getGenres = async () => {
        if(tab === 'movie') {
            setGenres(movieGenres);
        } else {
            setGenres(tvGenres);
        }
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