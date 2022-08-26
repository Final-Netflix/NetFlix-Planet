import React from 'react';
import SearchResultItem from './SearchResultItem';

const SearchResultList = ({ searchList }) => {  

    console.log("searchList = " +JSON.stringify(searchList))
    //[{"adult":false,"backdrop_path":"/7lmBufEG7P7Y1HClYK3gCxYrkgS.jpg","genre_ids":[12,28,878],"id":10138,"original_language":"en","original_title":"Iron Man 2",
    
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
                                            searchList.map((searchItem, index) => {
                                                return <SearchResultItem key={ index } searchItem={ searchItem }/>
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