import React from 'react';
import { Link } from 'react-router-dom';

const PaymentHeader = () => {
    return (
        <div className='wh1-paymentHeader'>
            <Link to='/' className="wh1-logoTagA">
                <img src="/static/media/logo.dcf369329db8e3715ac4.png"/>
            </Link>
            <Link to=''>
                <span className='wh1-headerLogout'>로그아웃</span>
            </Link>
        </div>
    );
};

export default PaymentHeader;