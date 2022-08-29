import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchResultHeaderItem from './SearchResultHeaderItem';

const SearchResultHeaderList = ({ idx, setSearch, search }) => { // idx = 10138

    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    const [contentArr, setContentArr] = useState();

    const getContentList = async () => {
        const apiResult = `https://api.themoviedb.org/3/movie/${idx}/similar?api_key=bc61587b22cd0e5226a33d30e467d867&language=ko-KR`
        const json = await(
            await fetch(apiResult)
        ).json();
        //console.log('1번지? = ' + json.results[1].title)
        //console.log('0번지? = ' + json.results[0].title)

        const arr = [];
        
        for (let i = 0; i < 10; i++) {
            arr.push(json.results[i]);
        }
        setContentArr(arr);
    }

     useEffect(() => {
        getContentList();
    }, []);

   /*  const handleClick = () => {
        naviagate('/search', {state : {type : } })
    } */

    if( idx != ''){
        return (
            <div className="c1-search-title-header">
                <div className="c1-rail">
                    <div className="c1-suggestions">
                        <div className="c1-ptrack-container">
                            <div className="c1-ptrack-content">
                                <div className="c1-suggestionRailContainer">
                                    <span className="c1-suggestionsLabel text-2xl mt-1">다음과 관련된 콘텐츠:</span>
                                    <div>
                                        <ul className = "c1-suggestions text-2xl text-white">
                                            <li>
                                                <div className = "mr-10">
                                                {
                                                    contentArr != undefined &&
                                                    contentArr.map((content, index) => <SearchResultHeaderItem key={ index } content={ content } search={ search } setSearch={ setSearch }/>)
                                                }
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return;
    }
};

export default SearchResultHeaderList;