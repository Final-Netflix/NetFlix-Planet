import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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

<<<<<<< HEAD
    const navigate = useNavigate();

    const key = 'bc61587b22cd0e5226a33d30e467d867';
    const tvId = '197067';
    /* const movieId = '682110'; */
    const movieId = '619803';

    const goTv = () => {
        navigate(`https://api.themoviedb.org/3/tv/${tvId}?api_key=${key}&language=ko-KR`)
    }
    const goMovie = () => {
        navigate(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=ko-KR`)
    }

=======
>>>>>>> b9cef09520b583ce022be454aea1bce6a02ab937
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
            {tab === 'search' && <SearchResult search={ search } setSearch={ setSearch }/>}

            <Footer/>
        </div>
    );
};
export default Main;