import React from 'react';
import logo from 'image/main/logo.png';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
    return (
        <div className=''>
            <Link to="/">
                <div className='p-[20px]'>
                    <img className="w-[200px] h-auto mx-auto" src={logo}></img>
                </div>

            </Link>
                
        </div>
    );
};

export default LoginHeader;