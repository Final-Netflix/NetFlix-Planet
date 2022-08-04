import React from 'react';
import logo from '../../image/logo.png';

const Header = () => {
    return (
        <div className='bg-gradient-to-b from-[#141414] to-transparent h-16'>
            <img className='w-28' src={ logo }/>
        </div>
    );
};

export default Header;