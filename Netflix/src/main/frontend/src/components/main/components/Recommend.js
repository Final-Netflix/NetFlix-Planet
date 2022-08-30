import React, { useEffect, useState } from 'react';
import 'css/main/recommend.css';
import RecommendList from './RecommendList';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

const Recommend = ({ order, classification }) => {

    const {tab} = useParams();
    const [classificationArr, setClassificationArr] = useState([]);
    const [data, setData] = useState([]);
    const [classificationName, setClassificationName] = useState('');
    const [videoType, setVideoType] = useState('movie');
    const [genres, setGenres] = useState(movieGenres);
    
    const KEY = "bc61587b22cd0e5226a33d30e467d867";

    let search_url;

    const goNextSlide = () => {
        document.getElementsByClassName("slick-next")[order].click();
    }
    
    const goPrevSlide = () => {
        document.getElementsByClassName("slick-prev")[order].click();
    }

    const getData = async () => {
        console.log('추천메인')
        const json1 = await(
            await fetch(`${search_url}&page=1`)
        ).json();
        const json2 = await(
            await fetch(`${search_url}&page=2`)
        ).json();
        setData(json1.results.concat(json2.results));
    }

    const getClassifications = () => {
        axios({
            url: '/getClassifications',
        }).then(res => {
            tab === undefined && setClassificationArr(res.data);
            tab === 'series'  && setClassificationArr(res.data.filter(data => data.classification_type === 'tv'));
            tab === 'new'     && setClassificationArr(res.data.filter(data => data.classification_type === 'new'));
            tab === 'movie'   && setClassificationArr(res.data.filter(data => data.classification_type === 'movie'));
        });
    };

    useEffect(() => {
        if(classificationArr.length != 0){
            setClassificationName(classificationArr[classification].classification_name);
            search_url = classificationArr[classification].search_url;
            getData();
            if(search_url.includes('tv')) {  
                setVideoType('tv') 
                setGenres(tvGenres);
            }
        }
    }, [classificationArr]);

    useEffect(() => {
        getClassifications();
    }, []);
    
    return (
        <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="genre">
            <h2 className="rowHeader css-0">
                <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/genre/81434743">
                    <div className="row-header-title">{ classificationName }</div>
                    <div className="aro-row-header more-visible">
                        <div className="see-all-link">모두 보기</div>
                        <div className="aro-row-chevron icon-akiraCaretRight"></div>
                    </div>
                </a>
            </h2>
            <div className="rowContainer rowContainer_title_card" id="row-2">
                <div className="ptrack-container">
                    <div className="rowContent slider-hover-trigger-layer">
                        <div className="slider" style={{ padding: '0 3.2%'}}>
                            <span className="handle handlePrev active" onClick={ goPrevSlide } tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b className="indicator-icon icon-leftCaret"></b></span>
                            <RecommendList data={ data } setData={ setData } videoType={ videoType } genres={ genres }/>
                            <span className="handle handleNext active" onClick={ goNextSlide } tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b className="indicator-icon icon-rightCaret"></b></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;