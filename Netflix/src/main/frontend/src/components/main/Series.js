import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import View from './components/View';

const Series = ({ scroll }) => {
    return (
        <>
            <div className={ scroll ? 'bg-[#141414] z-[1]' : 'z-[1]'}>
                <Header scroll={ scroll }/>
                <SubHeader scroll={ scroll }/>
            </div>
            <View/>
            <Footer/> 
        </>
    );
};

export default Series;