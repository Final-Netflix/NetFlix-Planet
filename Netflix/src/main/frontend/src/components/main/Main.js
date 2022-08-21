import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

    return (
        <div className={ tab === 'search' ? 'bg-[#141414] absolute' : 'bg-[#141414]'}>
            <div className={ scroll ? 'bg-[#141414] z-[1]' : 'z-[1]'}>
                <Header scroll={ scroll } search={ search } setSearch={ setSearch }/>
                {tab === 'series' || tab === 'movie' ? <SubHeader scroll={ scroll }/> : ''}
            </div>
            {tab === undefined && <View/>}
            {tab === 'series' && <View/>}
            {tab === 'movie' && <View/>}
            {tab === 'new' && <New/>}
            {tab === 'like' && <Like/>}
            {tab === 'search' && <SearchResult/>}

            <Footer/>

            {/* <APITest/> */}

            <Link to="/detail">
    	        <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
        	        Detail
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
        </div>
    );
};
export default Main;