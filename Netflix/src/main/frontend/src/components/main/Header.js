import React from 'react';
import logo from 'image/main/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='c1-header bg-gradient-to-b from-[#141414] to-transparent h-[68px] text-[12px] text-white'>
            <div className='c1-header-container flex pl-[37px] items-center z-[2]'>
                <div className='h-[68px] '><img className='w-24 mt-[20px]' src={ logo }/></div>
                <ul className='m-0 p-0 flex items-center tracking-normal'>
                    <li className='ml-[18px]'><Link to="">홈</Link></li>
                    <li className='ml-[18px]'><Link to="">시리즈</Link></li>
                    <li className='ml-[18px]'><Link to="">영화</Link></li>
                    <li className='ml-[18px]'><Link to="">NEW! 요즘 대세 콘텐츠</Link></li>
                    <li className='ml-[18px]'><Link to="">내가 찜한 콘텐츠</Link></li>
                </ul>
                <div class="secondary-navigation">
                    <div class="nav-element">
                        <div class="searchBox">
                            <button class="searchTab" tabindex="0" aria-label="검색" data-uia="search-box-launcher">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="nav-element show-kids"><a href="/Kids">키즈</a></div>
                    <div class="nav-element">
                        <span class="notifications">
                            <button class="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="알림">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Hawkins-Icon Hawkins-Icon-Standard">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </button>
                        </span>
                    </div>
                    <div class="nav-element">
                        <div class="account-menu-item">
                            <div class="account-dropdown-button">
                                <a href="/YourAccount" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="&amp;#xAE40;&amp;#xBBF8;&amp;#xC18C;&nbsp;- 계정 &amp; 설정">
                                    <span class="profile-link" role="presentation">
                                        <img
                                            class="profile-icon"
                                            src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"
                                            alt=""
                                        />
                                    </span>
                                </a>
                                <span class="caret" role="presentation"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;