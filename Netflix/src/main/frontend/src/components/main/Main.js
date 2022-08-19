import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import APITest from './APITest';
import Home from './Home';
import Like from './Like';
import Movie from './Movie';
import New from './New';
import Search from './Search';
import Series from './Series';

const Main = () => {

    const {tab} = useParams();
    const [scroll, setScroll] = useState(false);

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
        <div className='bg-[#141414]'>
            {tab || <Home scroll={ scroll }/>}
            {tab === 'series' && <Series/>}
            {tab === 'movie' && <Movie/>}
            {tab === 'new' && <New/>}
            {tab === 'like' && <Like/>}
            {tab === 'search' && <Search/>}
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
            <Link to="/container">
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                    마이페이지안쪽
                </button>
            </Link>

        </div>
    );
};

export default Main;