import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View';

const Series = () => {
    const scroll = false;

    return (
        <>
            <Header scroll={ scroll }/>
            <View/>
            <Footer/> 
        </>
    );
};

export default Series;