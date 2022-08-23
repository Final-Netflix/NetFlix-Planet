import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from "prop-types";


const SearchResultItems = ({poster_path, title, overview, genre_ids, id}) => { // input 에서 'search' 이름을 가진 keyword가 넘어온다. 

       return (
        <div>
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
                                    <img src = {"https://image.tmdb.org/t/p/w200" + poster_path} />
                                   
                                </div>
                                <div className="c1-ptrack-content">
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};
SearchResultItems.propTypes = {
    poster_path : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    overview : PropTypes.string.isRequired,
    genre_ids : PropTypes.arrayOf(PropTypes.number).isRequired
}

export default SearchResultItems;
