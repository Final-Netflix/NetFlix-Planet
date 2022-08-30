import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecommendItems from './RecommendItems';

const RecommendList = ({ data, videoType, genres }) => {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1400,
                settings:{
                    dots: true,
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 1100,
                settings:{
                    dots: true,
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    cssEase: "linear",
                }
            },
            {
                breakpoint: 800,
                settings:{
                    dots: true,
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    cssEase: "linear",
                }
            }
        ]
    }

    return (
        <div className="sliderMask showPeek">
            <div className="sliderContent row-with-x-columns">
                <Slider { ...settings }>
                {
                    data.map((item, index) => 
                        { 
                        return <RecommendItems  key={ index } item={ item } videoType={ videoType } genres={ genres }/>}
                    )   
                }
                </Slider>
            </div>
        </div>
    );
};

export default RecommendList;