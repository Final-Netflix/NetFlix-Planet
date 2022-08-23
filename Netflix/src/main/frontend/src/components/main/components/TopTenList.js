import React from 'react';
import Slider from "react-slick";
import TopTenItems from './TopTenItems';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopTenList = ({ data }) => {
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
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            },
            {
                breakpoint: 1100,
                settings:{
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 800,
                settings:{
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }
        ]
    }

    return (
        <div className="sliderMask showPeek">
            <div className="sliderContent row-with-x-columns">
                <Slider {...settings}>
                {
                    data.map((item, index) => <TopTenItems key={ index } item={ item } index={ index }/>)
                }
                </Slider>
            </div>
        </div>
    );
};

export default TopTenList;