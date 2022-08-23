import React from 'react';
import { Link } from 'react-router-dom';

const PaymentPick = () => {
    return (
        <div className='wh1-InfoContainer'>
            <div className='wh1-centerContainer'>
                <div className='wh1-paymentContainer'>
                    <div className='wh1-stepLogoContainer'>
                        <span className='wh1-paymentStepLogo'></span>
                    </div>
                    <div className="wh1-stepHeader-container">
                        <div className="wh1-stepHeader" >
                            <h1 className="wh1-stepTitle">
                                결제 정보 등록
                            </h1>
                        </div>
                    </div>
                    <div className="wh1-narrowContainer">
                        <div className="wh1-wallet-subtitle">
                            한 달도 놓치지 마세요. 예비 결제 수단은 기본 결제 수단으로 처리할 수 없을 때만 사용합니다.
                        </div>
                    </div>
                    <div class="wh1-server-badge">
                        종간단 암호화
                    </div>
                    <div>
                        <div className="wh1-basic-spinner-region">
                            
                            <div>
                                <div className="wh1-sessionForm">
                                    <Link to ='' className="wh1-paymentPicker wh1-tabSelection">
                                        <div className="wh1-mopNameAndLogos">
                                            <div className="wh1-card-type-text">
                                                <span className="wh1-selectionLabel">
                                                    신용카드 또는 체크카드
                                                </span>
                                            </div>
                                            <div className="wh1-logosContainer">
                                                <span className="wh1-logos wh1-logos-inline"  aria-label="BC, Hana, Hyundai, KB, Lotte, NH, Samsung, Shinhan 및 UNIONPAY로 결제할 수 있습니다.">
                                                    <img alt="" className="wh1-logoIcon BC"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/bc.svg"/>
                                                    <img alt="" className="wh1-logoIcon Hana"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/hana.svg"/>
                                                    <img alt="" className="wh1-logoIcon Hyundai"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/hyundai.svg"/>
                                                    <img alt="" className="wh1-logoIcon KB"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/kb.svg"/>
                                                    <img alt="" className="wh1-logoIcon Lotte" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/lotte.svg"/>
                                                    <img alt="" className="wh1-logoIcon NH"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/nh.svg"/>
                                                    <img alt="" className="wh1-logoIcon Samsung"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/samsung.svg"/>
                                                    <img alt="" className="wh1-logoIcon Shinhan"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/shinhan.svg"/>
                                                    <img alt="" className="wh1-logoIcon UNIONPAY"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/svg/unionpay.svg"/>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="ui-svg-icon ui-svg-icon--chevron pull-right pickerArrow" >
                                        </span>
                                    </Link>
                                </div>
                                <div className="wh1-sessionForm" >
                                    <Link to ='' className="wh1-paymentPicker wh1-tabSelection">
                                        <div className="wh1-mopNameAndLogos">
                                            <div className="wh1-card-type-text" >
                                                <span className="wh1-selectionLabel">
                                                    간편 결제
                                                </span>
                                            </div>
                                            <div className="wh1-logosContainer">
                                                <span className="wh1-logos wh1-logos-inline" >
                                                    <img alt="" className="wh1-logoIcon KAKAOPAY"  src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_kakaopay.png" srcset="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_kakaopay_2x.png 2x"/>
                                                </span>
                                            </div>
                                        </div>
                                        <span className="ui-svg-icon ui-svg-icon--chevron pull-right pickerArrow" >
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <Link to="" className="wh1-returnMypge">
                            기프트 코드 또는 특별 프로모션 코드 사용
                        </Link>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default PaymentPick;