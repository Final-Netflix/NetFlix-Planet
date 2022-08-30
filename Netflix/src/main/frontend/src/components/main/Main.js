import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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