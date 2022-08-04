import React from 'react';
import '../../css/serviceCenter.css';

const ServiceCenterHeader = () => {
    return (
        <div>
            <div className="container">
                <div className="inner-container">
                    <div className="branding">
                        <a className="logo nf-logo-link n-logo" href="">Planet
                            <svg className="netflix-svg w-[88px] h-[32px]" ></svg>
                            <svg className="n-svg"></svg>
                        </a>
                        <a className="helpcenter-logo">고객 센터</a>
                    </div>
                    <div className="actions">
                        <ul className="nav navbar-nav member-sign-in account-dropdown pull-right">
                            <li className="dropdown">
                                <a href="" className="btn btn-med hc-profile-name dropdown-toggle">옥지독지</a>
                            </li>
                            <li className="dropdown-menu">
                                <li>
                                    <a href="" className="your-account-link">계정</a>
                                </li>
                                <li>
                                    <a href="" className="signout-link">플래닛에서 로그아웃</a>
                                </li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCenterHeader;