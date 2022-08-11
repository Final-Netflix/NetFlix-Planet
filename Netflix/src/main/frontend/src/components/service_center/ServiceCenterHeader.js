import React, { useState } from 'react';
import '../../css/serviceCenter/serviceCenter.css';
import Recommendations from './serviceCenterComponents/Recommendations';
import logo from '../../image/main/logo.png';
import { Link } from 'react-router-dom';

const ServiceCenterHeader = () => {
    
    
    const[visible,setVisible] = useState(false)

    const openTab = () =>  {
        setVisible(!visible)
    }

    

    return (
        <div className="k2-page-home">
            <div className="k2-global-header">
                <div className="k2-overlay">
                    <div className="k2-container">
                        <div className="k2-inner-container">
                            <div className="k2-branding flex">
                                <div className="k2-logo k2-nf-logo-link k2-n-logo">
                                    {/* <img className="w-40" src= { logo }> </img> */}
                                    {/* <svg className="k2-netflix-svg w-[88px] h-[32px]" ></svg>
                                    <svg className="n-svg"></svg> */}
                                    <img alt='로고' className="w-40" src={ logo }></img>
                                </div>
                                {/* <a className="helpcenter-logo">고객 센터</a> */}
                            </div>
                            <div className="k2-actions">
                                {/* justify/align-item은 display-flex일때만 적용됨 */}
                                <ul className="k2-nav k2-navbar-nav k2-member-sign-in k2-account-dropdown k2-pull-right ">
                                    <li className="k2-dropdown k2-open">
                                        <a className="k2-btn  k2-btn-med k2-hc-profile-name k2-dropdown-toggle">
                                            <Link className='k2-btn text-[#f5f5f1] -mr-4' to='' onClick={()=>openTab()}>
                                            옥지독지
                                            </Link>
                                        </a>
                                        <img className="k2-arrow" src="https://help.nflxext.com/helpcenter/d8b50ece09e6271eb5688c85a1d7eab5.svg"></img>
                                       
                                        { visible &&

                                            <ul className="k2-dropdown-menu">
                                                <li>
                                                    <a className="k2-your-account-link">계정</a>
                                                </li>
                                                <li> 
                                                    <a className="k2-signout-link">플래닛에서 로그아웃</a>
                                                </li>
                                            </ul>

                                        }

                                    </li>
                                    
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="k2-logo-wrapper flex justify-center">
                            <a className="k2-helpcenter-logo cursor-pointer text-[white] text-4xl font-extrabold pt-2 hover:no-underline ">고객 센터</a>
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
            <div className="k2-notifications">
                <div className="k2-notification-holder">
                    <div></div>
                </div>
            </div>
            <div id ="k2-personalization-placeholder">
                <div id="k2-personalization-container" className="k2-personalization blok pt-[32px] bg-stone-100 border-2 border-solid border-[#dedede] text-black pb-6">
                    <div className="k2-container">
                        <h2 className="k2-personalization-intro font-extrabold text-2xl">옥지님, 안녕하세요.</h2>
                    </div>
                    <div className="k2-personalization-module">
                        <div className="k2-container">
                            <div id="k2-device-errors-container" className="k2-device-errors">
                                <div id="k2-recommendations-placeholder">
                                    <div className="k2-recommendations pt-6">
                                        <p className="k2-recommendations-title text-[16px] mb-[16px]">도움이 될 만한 문서</p>
                                        <div className="k2-recommendations-wrapper flex flex-wrap flex-row">
                                            
                                            <Recommendations />
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