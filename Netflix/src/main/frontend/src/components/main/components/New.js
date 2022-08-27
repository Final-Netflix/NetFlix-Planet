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
            <Recommend order='1' classification='0'/>
            <Recommend order='2' classification='1'/>
            <TopTen type='movie'/>
            <Recommend order='3' classification='2'/>
            <Recommend order='4' classification='3'/>
        </>
    );
};

export default New;