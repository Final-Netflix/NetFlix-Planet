import React from 'react';
import { useParams } from 'react-router-dom';
import PaymentHeader from './PaymentHeader';
import PaymentInfo from './PaymentInfo';
import '../../../css/myPage/payment.css'
import PaymentPick from './PaymentPick';
import MypageFooter from '../MyPageFooter';
const Payment = () => {
    const {detail} = useParams();
    return (
        <div>
            <PaymentHeader/>
            <div>
                {detail === 'paymentInfo' && <PaymentInfo/> }
                {detail === 'paymentPick' && <PaymentPick/> }
            </div>
            <MypageFooter/>
        </div>
    );
};

export default Payment;