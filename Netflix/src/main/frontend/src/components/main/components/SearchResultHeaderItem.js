import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultHeaderItem = ({ content, setSearch, search }) => {
    
    const navigate = useNavigate();

    const goSearchPage = (e) => {
        setSearch(e.target.value)
    }

    useEffect (()=> {
        if(search != ''){
            navigate('/search' , { state : { type : search }}); // state : e.target.value
        }
        else{
            navigate('/');
        }
    }, [search])

    return (
        <button type = "button" value={ content.title } className = "c1-ptrack-content float-left mr-3 hover:text-red-500" onClick={ goSearchPage }>
            { content.title + " | " }
        </button>
    );
};

export default SearchResultHeaderItem;