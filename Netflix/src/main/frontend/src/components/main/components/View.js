import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recommend from './Recommend';
import Special from './Special';
import TopTen from './TopTen';

const View = () => {
    const { tab } = useParams();

    let classificationNum;

    tab === undefined && (classificationNum = 27);
    tab === 'series'  && (classificationNum = 13); 
    tab === 'movie'   && (classificationNum = 14);
    tab === 'new'     && (classificationNum = 4);
    
    const recommendArr = useMemo(() => {
        return generateArr();
    }, []);
    
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

    return (
        <div className='bg-[#141414]'>
            <Special/>
            { tab === undefined ? <TopTen type='tv'/> : 
              tab === 'series'  ? <TopTen type='tv'/> : <TopTen type='movie'/>}
            {/* { tab === undefined && <TopTen type='movie'/>} */}
            {/* <Recommend order='1' classification = { recommendArr[0] }/>
            <Recommend order='2' classification = { recommendArr[1] }/>
            <Recommend order='3' classification = { recommendArr[2] }/>
            <Recommend order='4' classification = { recommendArr[3] }/>
            <Recommend order='5' classification = { recommendArr[4] }/>
            <Recommend order='6' classification = { recommendArr[5] }/>
            <Recommend order='7' classification = { recommendArr[6] }/>
            <Recommend order='8' classification = { recommendArr[7] }/>
            <Recommend order='9' classification = { recommendArr[8] }/> */}
        </div>
    );
};

export default View;