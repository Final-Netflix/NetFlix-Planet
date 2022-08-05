import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../image/logo.png';

const Header = () => {
    return (
        <div className='c1-header bg-gradient-to-b from-[#141414] to-transparent h-16 text-[12px] text-white'>
            <div className='c1-header-container flex pl-[37px] items-center z-[2]'>
                <img className='w-28' src={ logo }/>
                <ul className='m-0 p-0 flex items-center tracking-normal'>
                    <li className='ml-[18px]'><Link to="">홈</Link></li>
                    <li className='ml-[18px]'><Link to="">시리즈</Link></li>
                    <li className='ml-[18px]'><Link to="">영화</Link></li>
                    <li className='ml-[18px]'><Link to="">NEW! 요즘 대세 콘텐츠</Link></li>
                    <li className='ml-[18px]'><Link to="">내가 찜한 콘텐츠</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;