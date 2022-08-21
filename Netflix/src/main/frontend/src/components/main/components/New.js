import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Recommend from './Recommend';
import TopTen from './TopTen';
import View from './View';

const New = () => {
    return (
        <>
            <div className='h-[75px]'></div>
            <TopTen type='tv'/>
            <Recommend order='1' classification='21'/>
            <Recommend order='2' classification='22'/>
            <TopTen type='movie'/>
            <Recommend order='3' classification='23'/>
            <Recommend order='4' classification='24'/>
        </>
    );
};

export default New;