import React from 'react';
import Recommend from './Recommend';
import Special from './Special';
import TopTen from './TopTen';

const View = () => {
    return (
        <div className='bg-[#141414]'>
            <Special/>
            <TopTen/>
            <Recommend/>
        </div>
    );
};

export default View;