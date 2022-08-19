import React, { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import View from './components/View';

const Home = ({ scroll }) => {

    return (
        <>
            <Header scroll={ scroll }/>
            <View/>
            <Footer/>  
        </>
    );
};

export default Home