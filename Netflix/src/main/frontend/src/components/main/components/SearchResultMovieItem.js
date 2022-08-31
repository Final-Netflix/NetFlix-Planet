import React, { useCallback, useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchResultMovieItem = ({ searchItem, search }) => {

    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    const [backdrop, setBackdrop] = useState('');
    const [logo, setLogo] = useState({});
    
    const navigate = useNavigate();

    const getImage = async () => {
        let backdrop = '';
        let logo = '';
        const json = await(
            await fetch(
                `https://api.themoviedb.org/3/movie/${ searchItem.id }/images?api_key=${ KEY }`)
                ).json();
        
        if(json.backdrops[0] != undefined){
            backdrop = json.backdrops[0].file_path;
            setBackdrop(backdrop);
        }
        let temp = json.logos.find((logo) => logo.iso_639_1 === 'ko');
        if(!temp)       { temp = json.logos.find((logo) => logo.iso_639_1 === 'en');    }
        if(temp)        { logo = temp;                                            }
        
        setLogo(logo);
    };
     useEffect(() => {
        getImage();
   }, [search]);

   const movieClick = () => {
        navigate('/detailMain' , { state : { movieId :  searchItem.id }})
   }

    if(backdrop === ''){
        return;
    }
    else {
        return (
            <div className="c1-slider-item" onClick={ movieClick }>
                <input type='hidden' className='searchId' value={ searchItem.id } />
                <div className="c1-title-card-container css-0">
                    <div id="title-card-0-1" className="c1-title-card">
                        <div className="c1-ptrack-content">
                            <a role="link" aria-label="{state.title}" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                    {
                                        backdrop != undefined &&
                                        <>
                                        <img className='w-full rounded relative' src = {"https://image.tmdb.org/t/p/w500" + backdrop }/>
                                        <input type='hidden' value={ backdrop }></input></>
                                    }
                                    {
                                        logo === '' ?
                                        <div className='text-white font-extrabold w-full text-2xl absolute bottom-[10%] w-[80%] text-center mx-[10%]'>{ searchItem.title }</div> :
                                        <img className='w-full rounded absolute max-h-[100px] bottom-[10%] w-[70%] mx-[18%]' src = { "https://image.tmdb.org/t/p/w500" + logo.file_path } /> 
                                    }
                                </div>
                                <div className="c1-ptrack-content"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchResultMovieItem;
