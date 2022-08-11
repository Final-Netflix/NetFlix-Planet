import React, { useState } from 'react';
import headerButton from '../../image/my_page/headerButton.png';

const MyPageHeader = () => {

    const [visible, setVisible] = useState(false);

    const visibleEnter = () => {
        setVisible(true);
    }

    const visibleLeave = () => {
        setVisible(false);
    }

    return (
        <div className="m2_header fixed top-0 left-0 right-0 bg-[#141414] h-24 z-10">
            <div className="flex justify-start italic pt-6 py-3 pl-9 text-red-600 text-4xl font-semibold">
                PLANET
                <img className=" w-9 rounded-md mt-2 ml-[85%]" onMouseEnter = {visibleEnter} onMouseLeave = {visibleLeave} src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5dFVMUR0LX_jOm4VTxM-V5Y4vPHyzKkyCDSLeysR0X3wxYU65NJOYWf7DVXfDR_2wKh6wCO6MO9tA63XkD9Y5qDnLyQ0U.png?r=bd7"></img>
                <img className= "pl-1 w-12" src = {headerButton} onMouseEnter = {visibleEnter} onMouseLeave = {visibleLeave}></img>
            </div>
            <div>
                { visible && 
                <div>
                    <span className = "tigger tigger-active z-20 ml-[93.7%] opacity-100 visible border-b-[10px] border-solid border-b-[#e6e6e6] border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-0 bottom-0 left-[11px] mt-[-3px] absolute right-[15px] top-[inherit] w-0"></span>
                    <div className = "box-border mt-5 ml-[90%] w-44 h-80 p-4 border-4 bg-[#141414] "></div>
                </div>
                }       
            </div>
        </div> 
    );
};

export default MyPageHeader;
