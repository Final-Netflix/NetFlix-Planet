import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import APITest from './APITest';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchResult from './components/SearchResult';
import SubHeader from './components/SubHeader';
import View from './components/View';
import Like from './components/Like';
import New from './components/New';

const Main = () => {

    const {tab} = useParams();
    const [scroll, setScroll] = useState(false);
    const [search, setSearch] = useState('');

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScroll = () => {
        if(window.scrollY >= 1){
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const navigate = useNavigate();

    const key = 'bc61587b22cd0e5226a33d30e467d867';
    const tvId = '197067';
    const movieId = '682110';

    const goTv = () => {
        navigate(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${key}&language=ko-KR`)
    }
    const goMovie = () => {
        navigate(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ko-KR`)
    }

    return (
        <div className={ tab === 'search' ? 'bg-[#141414] absolute w-full' : 'bg-[#141414]'}>
            <div className={ scroll ? 'bg-[#141414] z-[1]' : 'z-[1]'}>
                <Header scroll={ scroll } search={ search } setSearch={ setSearch }/>
                {tab === 'series' || tab === 'movie' ? <SubHeader scroll={ scroll }/> : ''}
            </div>
            {tab === undefined && <View/>}
            {tab === 'series' && <View/>}
            {tab === 'movie' && <View/>}
            {tab === 'new' && <New/>}
            {tab === 'like' && <Like/>}
            {tab === 'search' && <SearchResult search={ search }/>}

            <Footer/>

            {/* <APITest/> */}

            <Link to="/detailMain">
    	        <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
        	        Detail
	            </button>
            </Link>
            <Link to="/detailMain" state={{tvId:tvId}}>
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]" onClick={goTv}>
        	        tv
	            </button>
            </Link>
            <Link to="/detailMain" state={{movieId:movieId}}>
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]" onClick={goMovie} value={movieId}>
        	        movie
	            </button>
            </Link>

            <Link to="/my">
            	<button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
					마이페이지
            	</button>
            </Link>
            <Link to="/service">
	            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
    	            go객센터
    	        </button>
            </Link>
            <Link to="/container">
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                    마이페이지안쪽
                </button>
            </Link>
            {/* <Link to="/">
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                    로그인
                </button>
            </Link> */}
        </div>
    );
};
export default Main;