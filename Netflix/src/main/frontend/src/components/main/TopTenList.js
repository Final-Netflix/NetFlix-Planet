import React from 'react';
import TopTenItems from './TopTenItems';

const TopTenList = ({ data }) => {
    return (
        <div className="sliderMask showPeek">
            <div className="sliderContent row-with-x-columns">
                {
                    data.map(item => <TopTenItems key={ item.index } item = { item }/>)
                }
            </div>
        </div>
    );
};

export default TopTenList;