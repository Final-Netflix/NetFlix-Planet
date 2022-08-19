import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Recommend from './components/Recommend';
import TopTen from './components/TopTen';
import View from './components/View';

const New = ({ scroll }) => {
    return (
        <>
            <Header scroll={ scroll }/>
            <div className='h-[75px]'></div>
            <TopTen type='tv'/>
            <Recommend order='1' classification='21'/>
            <Recommend order='2' classification='22'/>
            <TopTen type='movie'/>
            <Recommend order='3' classification='23'/>
            <Recommend order='4' classification='24'/>
            <Footer/> 
        </>
    );
};

export default New;