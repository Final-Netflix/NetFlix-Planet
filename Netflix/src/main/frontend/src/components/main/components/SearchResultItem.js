import React, { useEffect, useState } from 'react';

const SearchResultItem = ({ searchItem }) => {

    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    const [backdrop, setBackdrop] = useState({});
    const [logo, setLogo] = useState({});

    const getImage = async () => {
        let backdrop;
        let logo;

        const json = await(
            await fetch(
                `https://api.themoviedb.org/3/movie/${ searchItem.id }/images?api_key=${ KEY }`) 
                ).json();
                
        backdrop = json.backdrops[0];
        let temp = json.logos.find((logo) => logo.iso_639_1 === 'ko');

        if(!backdrop)   { backdrop = searchItem.poster_path;                            }
        if(!temp)       { temp = json.logos.find((logo) => logo.iso_639_1 === 'en');    }
        if(temp)        { logo = temp;                                            }
        
        setBackdrop(backdrop);
        setLogo(logo);
        console.log(logo);
    };
    
    useEffect(() => {
        getImage();
    }, []);

    return (
        <div className="c1-slider-item">
            <div className="c1-title-card-container css-0">
                <div id="title-card-0-1" className="c1-title-card">
                    <div className="c1-ptrack-content">
                        <a
                            role="link"
                            aria-label="{state.title}"
                            tabIndex="0"
                            aria-hidden="false"
                            className="c1-slider-refocus"
                        >
                        <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                            <img className='w-full rounded' src = {"https://image.tmdb.org/t/p/w500" + backdrop.file_path } /> 
                            {
                                logo === undefined ? 
                                <div className='text-white font-extrabold'>{ searchItem.title }</div> :
                                <img className='w-full rounded' src = {"https://image.tmdb.org/t/p/w500" + logo.file_path } /> 
                            }
                        </div>
                        <div className="c1-ptrack-content"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultItem;