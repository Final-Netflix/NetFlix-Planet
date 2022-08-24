import React, { useEffect, useState } from 'react';
import 'css/main/searchResult.css';
import SearchResultList from './SearchResultList';
import SearchResultHeaderList from './SearchResultHeaderList';

const SearchResult = ({ search }) => { // search = 아이언맨
    
    const [searchList, setSearchList] = useState([]); 
    const [loading, setLoading] = useState(true); // 로딩중이다

    const KEY = "bc61587b22cd0e5226a33d30e467d867";

    const getSearchList = async () => { // 
        const apiResult = `https://api.themoviedb.org/3/search/movie?api_key=bc61587b22cd0e5226a33d30e467d867&query=${search}` 
        console.log('apiResult = ' + apiResult)
        const json = await(
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc61587b22cd0e5226a33d30e467d867&query=${search}`)
        ).json();
        setSearchList(json.results);
        setLoading(false);
    }

     useEffect(() => {
        getSearchList();
    }, [search]); 

    return (
        <div className="c1-mainView">
            { loading ? '' :
                <div className="c1-gallery c1-row-with-x-columns c1-search relative top-[5vw]">
                    <SearchResultHeaderList/>
                    <SearchResultList searchList={ searchList }/>
                </div>
            }
        </div>
    );
};

export default SearchResult;
