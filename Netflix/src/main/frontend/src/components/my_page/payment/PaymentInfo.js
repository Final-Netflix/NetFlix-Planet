import React from 'react';
import { Link } from 'react-router-dom';

const PaymentInfo = () => {
    return (
        <div className='wh1-InfoContainer'>
            <div className='wh1-centerContainer'>
                <div className='wh1-walletContainer'>
                    <div className='wh1-stepLogoContainer'>
                        <span className='wh1-paymentStepLogo'></span>
                    </div>
                    <div className="wh1-stepHeader-container">
                        <div className="wh1-stepHeader" >
                            <h1 className="wh1-stepTitle">
                                결제 정보 관리
                            </h1>
                        </div>
                    </div>
                    <div className="wh1-wallet-subtitle">
                        결제 정보를 수정하거나, 예비 결제 수단을 등록하거나, 기본 결제 수단을 변경하세요.
                    </div>
                    <div>
                        <div className="wh1-walletList">
                            <div className="wh1-walletItem">
                                <div className="wh1-walletDetails">
                                    <div className="wh1-walletMop">
                                        <img alt="KAKAOPAY" className="wh1-icon-payment-image" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_kakaopay.png"/>
                                        <span className="wh1-mopType">
                                            sm••••74@naver.com
                                        </span>
                                    </div>
                                    <div className="wh1-wallet-context">
                                        결제 수단을 삭제하려면, 먼저 다른 결제 수단을 등록하세요.
                                    </div>
                                </div>
                                <div>
                                    <span className="wh1-wallet-primary">기본설정</span>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="paymentAddBtn">
                            <span >+ 결제 수단 등록</span>
                        </button>
                        <Link to="" className="wh1-returnMypge">
                            계정 페이지로 돌아가기
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentInfo;