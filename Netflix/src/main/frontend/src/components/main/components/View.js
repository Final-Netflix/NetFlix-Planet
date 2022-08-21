import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Recommend from './Recommend';
import Special from './Special';
import TopTen from './TopTen';

const View = () => {

    const {tab} = useParams();
    
    let classificationNum;
    tab === undefined ? classificationNum = 21 :
    tab === 'series'  ? classificationNum = 14 : classificationNum = 14;

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
            { tab === undefined ? <TopTen type='tv'/> : 
              tab === 'series'  ? <TopTen type='tv'/> : <TopTen type='movie'/>}
            <Recommend order='1' classification = { arr[0] }/>
            <Recommend order='2' classification = { arr[1] }/>
            <Recommend order='3' classification = { arr[2] }/>
            <Recommend order='4' classification = { arr[3] }/>
            <Recommend order='5' classification = { arr[4] }/>
            { tab === undefined && <TopTen type='movie'/>}
            <Recommend order='6' classification = { arr[5] }/>
            <Recommend order='7' classification = { arr[6] }/>
            <Recommend order='8' classification = { arr[7] }/>
            <Recommend order='9' classification = { arr[8] }/>
            {/* {
                arr.map((item, index) => {
                    return <Recommend key={ index } order={ index+1 } classification = { item }/>
                })
            } */}
        </div>
    );
};

export default View;