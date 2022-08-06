import React from 'react';
import '../../css/serviceCenter/serviceCenter.css';
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
        <div className="k2-page-home bg-[#000000] text-white">
            <div className="k2-global-header">
                <div className="k2-overlay">
                    <div className="k2-container">
                        <div className="k2-inner-container flex flex-row justify-between pt-6">
                            <div className="k2-branding flex">
                                <a className="k2-logo nf-logo-link n-logo cursor-pointer text-[#E50914] text-5xl font-bold italic inline-block ">Planet
                                    {/* <svg className="k2-netflix-svg w-[88px] h-[32px]" ></svg>
                                    <svg className="n-svg"></svg> */}
                                </a>
                                {/* <a className="helpcenter-logo">고객 센터</a> */}
                            </div>
                            <div className="k2-actions relative flex justify-center items-center">
                                {/* justify/align-item은 display-flex일때만 적용됨 */}
                                <ul className="k2-nav navbar-nav member-sign-in account-dropdown pull-right flex">
                                    <li className="k2-dropdown">
                                        <a className="k2-btn  hover:text-white cursor-pointer btn-med hc-profile-name dropdown-toggle flex flex-row justify-end text-[#F5F5F1] pr-[35px]">옥지독지</a>
                                        <img className="k2-arrow" src="https://help.nflxext.com/helpcenter/d8b50ece09e6271eb5688c85a1d7eab5.svg"></img>
                                    </li>
                                    {/* <li className="k2-dropdown-menu">
                                        <li>
                                            <a className="k2-your-account-link">계정</a>
                                        </li>
                                        <li> 
                                            <a className="k2-signout-link">플래닛에서 로그아웃</a>
                                        </li>
                                    </li>   가려지는부분 주석   */} 
                                </ul>
                            </div>
                        </div>
                        <div className="k2-logo-wrapper flex justify-center">
                            <a className="k2-helpcenter-logo cursor-pointer text-4xl font-extrabold pt-2">고객 센터</a>
                        </div>
                        <div className="k2-search-form-container">
                            <div className="k2-search-placeholder">
                                <form action="">
                                    <div className="k2-input-group max-w-[60%] mx-auto pb-[32px]">
                                        <div role={'combobox'} className="k2-react-autosuggest__container">
                                            <div className="k2-search-control-wrapper flex  items-center pt-6">
                                                <input type='text' id="k2-search-input"  className="k2-form-control text-black  w-[811px] h-[44px] rounded border-2 border-[#d5d4d1] box-border text-base pl-12" placeholder='어떤 도움이 필요하세요?'></input>
                                                <button type='submit' className="k2-search-control ml-4 flex-row bg-no-repeat absolute">asd</button>
                                            </div>
                                            <div id="k2-react-autowhatever-1" role={'listbox'} className="react-autosuggest__suggestions-container"></div>
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
                <div id="personalization-container" className="personalization blok pt-[32px] bg-stone-100 border-2 border-solid border-[#dedede] text-black pl-[110px] pb-6">
                    <div className="container">
                        <h2 className="personalization-intro font-extrabold text-2xl">옥지독지 님, 안녕하세요.</h2>
                    </div>
                    <div className="personalization-module">
                        <div className="container">
                            <div id="device-errors-container" className="device-errors">
                                <div id="recommendations-placeholder">
                                    <div className="recommendations pt-6">
                                        <p className="recommendations-title text-[16px] mb-[16px]">도움이 될 만한 문서</p>
                                        <div className="recommendations-wrapper flex flex-wrap flex-row ">
                                            
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