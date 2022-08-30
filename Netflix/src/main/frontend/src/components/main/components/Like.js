import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LikeItem from './LikeItem';

const Like = () => {

    const qs = require('qs');
    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    const [likeArr, setLikeArr] = useState([]);
    let backdropArr = [];
    let logoArr = [];

    const getLikes = () => {
        axios({
            url: '/getMyPickList',
            method: 'post',
            data: qs.stringify({
                'profile_id': localStorage.getItem('profile_id'),
            })
        }).then((res) => {
            setLikeArr(res.data);
           
        });
    }

    useEffect(() => {
        getLikes();
    }, []);

    useEffect(() => {
        
    }, [likeArr]);

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
                                                {likeArr.map((item,index)=>{
                                                    console.log(item.video_id);
                                                    return <LikeItem item={item.video_id} type={item.video_type} />
                                                })}
                                               
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