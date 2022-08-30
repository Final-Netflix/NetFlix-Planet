import axios from 'axios';
import React, { useEffect } from 'react';

const Like = () => {

    const qs = require('qs');

    const getLikes = () => {
        axios({
            url: '/getMyPickList',
            method: 'post',
            data: qs.stringify({
                'profile_id': localStorage.getItem('profile_id'),
            })
        }).then((res) => {
            console.log(res.data);
        });
    }

    useEffect(() => {
        getLikes();
    }, []);

    return (
        <>
        <div className="c1-mainView h-[100%]">
            <div className="c1-gallery c1-row-with-x-columns c1-search relative top-[5vw]">
                <div className="c1-galleryContent mt-3">
                    <div className="c1-galleryLockups">
                        <div className="c1-rowContainer c1-rowContainer_title_card" id="row-0">
                            <div className="c1-ptrack-container">
                                <div className="c1-rowContent c1-slider-hover-trigger-layer">
                                    <div className="c1-slider">
                                        <div className="c1-sliderMask c1-showPeek">
                                            <div className="c1-sliderContent c1-row-with-x-columns">
                                                <div className="c1-slider-item">
                                                    <div className="c1-title-card-container css-0">
                                                        <div id="title-card-0-1" className="c1-title-card">
                                                            <div className="c1-ptrack-content">
                                                                <a role="link" aria-label="{state.title}" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                                                                    <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                        <img className='w-full rounded relative' src = {"https://image.tmdb.org/t/p/w500/udhU4oOPxAiNltoMVddSRq3lLAk.jpg" } />
                                                                        <img className='w-full rounded absolute max-h-[100px] bottom-[10%] w-[70%] mx-[18%]' src = {"https://image.tmdb.org/t/p/w500/2OaNZR8fEMAysxjgrVV59rHIQ7n.png"} /> 
                                                                    </div>
                                                                    <div className="c1-ptrack-content"></div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <div className='w-[2000px] h-[2000px]'></div>
        </>
    );
};

export default Like;