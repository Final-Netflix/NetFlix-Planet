import React from 'react';
import Slider from "react-slick";
import TopTenItems from './TopTenItems';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopTenList = ({ data }) => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        cssEase: "linear"
    }


    return (
        <div className="sliderMask showPeek">
            <div className="sliderContent row-with-x-columns">
                <Slider {...settings}>
                {
                    data.map(item => <TopTenItems key={ item.index } item = { item }/>)
                }
                </Slider>
            </div>
        </div>
    );
};

export default TopTenList;