import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recommend from './Recommend';
import Special from './Special';
import TopTen from './TopTen';

const View = () => {

    const {tab} = useParams();
    const classificationNum = 21;

    function generateArr () {  
        let arr = [];  
        let i = 0;  
        while (i < 9) {    
            let n = Math.floor(Math.random() * classificationNum);
            if (!sameNum(n)) {      
                arr.push(n);
                i++;    
            }  
        }  
        
        function sameNum (n) {    
            for (var i = 0; i < arr.length; i++) {      
                if (n === arr[i]) {        
                    return true;      
                }    
            }    
            return false;  
        }  
        return arr;
    }

    const arr = generateArr();

    return (
        <div className='bg-[#141414]'>
            <Special/>
            <TopTen/>
            {
                arr.map((item, index) => {
                    return <Recommend key={ index } order={ index+1 } classification = { item }/>
                })
            }
        </div>
    );
};

export default View;