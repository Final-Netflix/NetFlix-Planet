import React, { useEffect, useState } from 'react';
import 'css/main/topTen.css';
import TopTenList from './TopTenList';
import { useParams } from 'react-router-dom';

const TopTen = ({ type }) => {
    
    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    let URL;

    const { tab } = useParams();

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    if(tab === 'movie') {
        URL = "https://api.themoviedb.org/3/movie/";
    } else {
        URL = "https://api.themoviedb.org/3/tv/";
    }

    const getData = async () => {
        const json = await(
            await fetch(
                `${ URL }popular?api_key=${ KEY }&language=ko-KR&page=1`)
            ).json();
        setData(json.results.slice(0, 10));
        console.log(data);
        setLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    // const [data, setData] = useState([
    //     {index: 1, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZ3X4h02lWYNAQdGJP_GQQurfKG7nktUwK3uDDrRW5BSuYIv5tjYJNtKN6Ljy08lpVMPXgoA9CebHyEr8Xz__r_MUsPnfqXKy10u-rWEgQ-CbbtFUe8_gdhDcquzXBIQpxJASYCViJXoV9pM2SvC8Q.webp?r=15c', title: '이상한 변호사 우영우'},
    //     {index: 2, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR4-SKX3hJWAD_F67B8ghjm3bvZ5nOpcmT9QNYokQ_yK9pfePaFbxQkSmjd0B08nWqPjY2rmc0Vojo6lpj7uJqftS-4GTM7XyiKL.webp?r=d83', title: '인사이더'},
    //     {index: 3, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABY7nKzXAPEyadyT4U07OR0uduJUSWZWD_FfH0I-dnFAGOyVyYUTSb5Wk5rA0wtf5nDLx7sUP_-P57csneTA2MLYxmjr8Le5w-ol6GLLD5UDCIUusxBW1jvuHwmGq1VobglrhZZrTpWkM7u_beSjDUg.webp?r=cf3', title: '환혼'},
    //     {index: 4, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABXDFQO9iWjYO4g1leMhq0t51vqlj3BJVwZi5OVNMDtg-1BsNKUrcJQxcUtD8fdK1fwv57LSBriGfCYWkGC6XNSYe6BBKo9MHTMuz.webp?r=f83',  title: '모범형사'},
    //     {index: 5, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZR-O9X7rV3zgtT7twcmx6bEP35VVz9JhzJhixKZAFxhn9zsXfZ0EzjUiAVYuJMqTec6LJ73BFDUOwqVsBoguCG91cY_GJRP6YBX.webp?r=a62', title: '클리닝 업'},
    //     {index: 6, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABR17KCvW5vqQv5HKM-B8eWB_WC0qa7HRJ1GaGwzWsxa2PquX8Th2J9pjWMRWD5VIXABNkdOvQQeRwXcZD8beryN9Vw7JUYJEIGi-zBnjbk-bz8WA_RzlRVjI8fel_yAsxXQJ6_EjF9fCRRRq661M6Q.webp?r=795', title: '체인지데이즈'},
    //     {index: 7, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZyCpQm9DbkugfzbZY7o6bqmFHklgrcj30mhoEAiTH-icClQXv93khRFyJzNssw5QrvXOB-7uxKgkaq94gqaE47wz5qybrSjLYm0AIaS_hOfT5ai8yRuc-W7NDvjuZ8dmyF5WuB2B3PhYYj50wSemw.webp?r=548', title: '미남당'},
    //     {index: 8, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABfUyK9AgmYPgjUbSyj2AV05xr8pDBRmOfAUrio7Cdu6QM1a3S0HE_6ydC_m98jOIcaF_X_M_I9NM5dm06FiIMUo20GL5FeRZCUpaQoHNmb_7wRnmC92ZDOB1Z--SgdI-zJ5N6BDLGfaCvX7zoZvGgA.webp?r=8c0', title: '나는 솔로'},
    //     {index: 9, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABZam2k5pnetFLpOgUM4sYNGgR3Occs_FnoXL6lmTv2NyaHxjdBaYdcl0omeoyG8ptYNWAdy56Z18VrNS3tOpsg8zd-3YvWVzMJBl.webp?r=cd7', title: '차시천하'},
    //     {index: 10, src: 'https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABc1nAdcdKPWjdTUAcxoIi_t118oIu5PU0S4nXS8XwoD2_C8UlYNABDcLc67hEecq2ZBRjkIG_fwTBVLv7d41xrQ6H7iJ8M0WNCjlV04rsX13UuIRkBZLQ0nZ7jX1MwzTgwlHIb_8Q8n2nQK9fWSNVA.webp?r=f66', title: '도시어부'}
    // ]);

    const goNextSlide = () => {
        document.getElementsByClassName("slick-next")[0].click();
    }

    const goPrevSlide = () => {
        document.getElementsByClassName("slick-prev")[0].click();
    }

    return (
        <div>
            {
                loading ? '' :
                <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="mostWatched">
                    <h2 className="rowHeader css-0">
                        <span className="rowTitle css-0"><div className="row-header-title">오늘 대한민국의 TOP 10 { type==='tv' ? '시리즈' : '영화'}</div></span>
                    </h2>
                    <div className="rowContainer rowContainer_title_card" id="row-1">
                        <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                                <div className="slider">
                                    <span onClick={ goPrevSlide } className="handle handlePrev active" tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b className="indicator-icon icon-leftCaret"></b></span>
                                    <TopTenList data={ data } setData={ setData }/>
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