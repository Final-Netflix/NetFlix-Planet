import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                <Link to="/detail">Detail</Link>
            </button>
            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                <Link to="/my">마이페이지</Link>
            </button>
            <button className="border-[1px] p-5 m-4 bg-white text-[#141414]">
                <Link to="/service">go객센터</Link>
            </button>
        </div>
    );
};

export default Main;