import React, { useEffect } from 'react';
import SearchResultMovieItem from './SearchResultMovieItem';
import SearchResultTvItem from './SearchResultTvItem';

const SearchResultList = ({ searchMovieList, searchTvList, search }) => {  

    return (
        <div className="c1-galleryContent mt-3">
            <div className="c1-galleryLockups">
                <div className="c1-rowContainer c1-rowContainer_title_card" id="row-0">
                    <div className="c1-ptrack-container">
                        <div className="c1-rowContent c1-slider-hover-trigger-layer">
                            <div className="c1-slider">
                                <div className="c1-sliderMask c1-showPeek">
                                    <div className="c1-sliderContent c1-row-with-x-columns">
                                        {
                                            searchMovieList != undefined &&
                                            searchMovieList.map((movie, item) => {
                                                return <SearchResultMovieItem key={ item } searchItem={ movie } search={ search }/>
                                            })
                                        }
                                        {
                                            searchTvList != undefined &&
                                            searchTvList.map((tv, item) => {
                                                return <SearchResultTvItem key={ item } searchItem={ tv } search={ search }/>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default SearchResultList;