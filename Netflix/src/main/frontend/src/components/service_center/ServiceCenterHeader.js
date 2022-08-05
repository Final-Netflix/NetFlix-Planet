import React from 'react';
import '../../css/serviceCenter.css';
import Recommendations from './serviceCenterComponents/Recommendations';

const recommendationsData = [
    {
        title: '계정 보안을 유지하는 방법',
        alt: '계정 보안을 유지하는 방법',
        url: 'https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg',
    },
    {
        title: '플레닛 자녀 보호 기능',
        alt: '플레닛 자녀 보호 기능',
        url: 'https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg',
    },
    {
        title: '멤버십 변경 방법',
        alt: '멤버십 변경 방법',
        url: 'https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg',
    },
]

const ServiceCenterHeader = () => {
    return (
        <div className="page-home bg-[#000000] text-white">
            <div className="global-header">
                <div className="overlay">
                    <div className="container">
                        <div className="inner-container flex flex-row justify-between pt-6 pr-6 pl-6">
                            <div className="branding flex">
                                <a className="logo nf-logo-link n-logo text-[#E50914] text-5xl font-bold italic inline-block " href="">Planet
                                    {/* <svg className="netflix-svg w-[88px] h-[32px]" ></svg>
                                    <svg className="n-svg"></svg> */}
                                </a>
                                {/* <a className="helpcenter-logo">고객 센터</a> */}
                            </div>
                            <div className="actions relative flex justify-center items-center">
                                {/* justify/align-item은 display-flex일때만 적용됨 */}
                                <ul className="nav navbar-nav member-sign-in account-dropdown pull-right flex">
                                    <li className="dropdown">
                                        <a href="" className="btn btn-med hc-profile-name dropdown-toggle flex flex-row justify-end text-[#F5F5F1] pr-[35px]">옥지독지</a>
                                        <img className="arrow" src="https://help.nflxext.com/helpcenter/d8b50ece09e6271eb5688c85a1d7eab5.svg"></img>
                                    </li>
                                    {/* <li className="dropdown-menu">
                                        <li>
                                            <a href="" className="your-account-link">계정</a>
                                        </li>
                                        <li>
                                            <a href="" className="signout-link">플래닛에서 로그아웃</a>
                                        </li>
                                    </li>   가려지는부분 주석   */} 
                                </ul>
                            </div>
                        </div>
                        <div className="logo-wrapper flex justify-center">
                            <a className="helpcenter-logo text-4xl font-extrabold">고객 센터</a>
                        </div>
                        <div className="search-form-container">
                            <div className="search-placeholder">
                                <form action="">
                                    <div className="input-group">
                                        <div role={'combobox'} className="react-autosuggest__container">
                                            <div className="search-control-wrapper">
                                                <input type='text' id="search-input" className="form-control placeholder:'어떤 도움이 필요하세요?' "></input>
                                                <button type='submit' className="search-control">검색</button>
                                            </div>
                                            <div id="react-autowhatever-1" role={'listbox'} className="react-autosuggest__suggestions-container"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="notifications">
                <div className="notification-holder">
                    <div></div>
                </div>
            </div>
            <div id ="personalization-placeholder">
                <div id="personalization-container" className="personalization">
                    <div className="container">
                        <h2 className="personalization-intro">옥지독지 님, 안녕하세요.</h2>
                    </div>
                    <div className="personalization-module">
                        <div className="container">
                            <div id="device-errors-container" className="device-errors">
                                <div id="recommendations-placeholder">
                                    <div className="recommendations">
                                        <p className="recommendations-title">도움이 될 만한 문서</p>
                                        <div className="recommendations-wrapper">
                                            
                                            <Recommendations
                                                data={recommendationsData}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default ServiceCenterHeader;