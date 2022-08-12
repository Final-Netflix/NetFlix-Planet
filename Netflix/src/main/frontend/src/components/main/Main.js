import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Test from './Test';
import View from './View';

const Main = () => {

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
            <Header scroll={ scroll }/>
            <View/>
            <Footer/>
            {/* <Test/> */}
        </div>
    );
};

export default Main;