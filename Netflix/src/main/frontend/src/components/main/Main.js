import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Main = () => {
    return (
        <>
            <Header/>
            
            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                <Link to="/detail">Detail</Link>
            </button>
            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                <Link to="/my">마이페이지</Link>
            </button>
            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                <Link to="/service">go객센터</Link>
            </button>
            <Link to="/container">
                <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                    마이페이지안쪽
                </button>
            </Link>

        </>
    );
};

export default Main;