import React, { useEffect, useState } from 'react';
import 'css/main/searchResult.css';
import SearchResultList from './SearchResultList';
import SearchResultHeaderList from './SearchResultHeaderList';

const SearchResult = ({ search }) => { // search = 아이언맨
    
    const [searchMovieList, setSearchMovieList] = useState([]);
    const [searchTvList, setSearchTvList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState();

    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    
    const getSearchMovieList = async () => {
        const apiResult = `https://api.themoviedb.org/3/search/movie?api_key=bc61587b22cd0e5226a33d30e467d867&query=${search}&language=kr-KO`
        //console.log('apiResult = ' + apiResult)
        const json = await(
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=bc61587b22cd0e5226a33d30e467d867&query=${search}&language=kr-KO`)
        ).json();
        setSearchMovieList(json.results);
        if(json.results[0] != undefined) { setId(json.results[0].id); }
    }

    const getSearchTvList = async () => {
        const json = await(
            await fetch(`https://api.themoviedb.org/3/search/tv?api_key=bc61587b22cd0e5226a33d30e467d867&query=${search}&language=kr-KO`)
        ).json();
        setSearchTvList(json.results);
        setLoading(false);
    }

     useEffect(() => {
        getSearchMovieList();
        getSearchTvList();
    }, [search]);

    return (
        <div className="c1-mainView">
            { loading ? '' :
                <div className="c1-gallery c1-row-with-x-columns c1-search relative top-[5vw]">
                    <SearchResultHeaderList idx = { id } searchList = { searchMovieList } />
                    <SearchResultList searchMovieList={ searchMovieList } searchTvList={ searchTvList }/>
                </div>
            }
        </div>
    );
};

export default SearchResult;
