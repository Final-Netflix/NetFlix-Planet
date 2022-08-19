import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View';

const New = ({ scroll }) => {
    return (
        <>
            <Header scroll={ scroll }/>
            <View/>
            <Footer/> 
        </>
    );
};

export default New;