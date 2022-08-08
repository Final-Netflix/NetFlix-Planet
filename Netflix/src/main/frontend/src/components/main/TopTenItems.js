import React from 'react';

const TopTenItems = ({ item }) => {

    return (
        <div className="slider-item">
            <div className="title-card-container css-0">
                <div id="title-card" className="title-card title-card-top-10">
                    <div className="ptrack-content">
                    <a className="slider-refocus">
                        <div className="boxart-size-7x10 boxart-container boxart-rounded">
                        <svg id="rank-1" width="100%" height="100%" viewBox="-20 0 70 154" className="svg-icon svg-icon-rank-1 top-10-rank">
                            <path stroke="#595959" strokeLinejoin="square" strokeWidth="4" d={ item.icon }></path>
                        </svg>
                        <img className="boxart-image-in-padded-container" src={ item.src } alt="" />
                        <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">{ item.title }</p></div>
                        </div>
                        <div className="click-to-change-JAW-indicator">
                        <div className="bob-jawbone-chevron">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        </div>
                    </a>
                    </div>
                    <div className="bob-container"></div>
                </div>
            </div>
        </div>
    );
};

export default TopTenItems;