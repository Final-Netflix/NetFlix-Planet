import React, { useEffect, useState } from 'react';
import logo from '../../image/main/logo.png';
import { Link } from 'react-router-dom';


const Header = ({ scroll }) => {
    const [searchBox, setSearchBox] = useState(false);
    const openSearch = () => setSearchBox(!searchBox);

    const [notice, setNotice] = useState(false);
    const [profile, setProfile] = useState(false);

    let headerName = '';

    if(scroll){
        headerName='c1-header bg-[#141414] z-[10] fixed top-0 w-full h-[68px] text-[12px] text-white';
    } else {
        headerName = 'c1-header bg-gradient-to-b z-[10] from-[#141414] to-transparent absolute w-full h-[68px] text-[12px] text-white';
    }

    return (
        <div className={ headerName }>
            <div className='c1-header-container h-full flex pl-[37px] pr-[37px] justify-between items-center z-[10]'>
                <div>
                    <div className='flex'>
                        <div><img className='w-40' src={ logo }/></div>
                        <ul className='m-0 p-0 flex items-center tracking-normal'>
                            <li className='ml-[18px]'><Link to="">홈</Link></li>
                            <li className='ml-[18px]'><Link to="">시리즈</Link></li>
                            <li className='ml-[18px]'><Link to="">영화</Link></li>
                            <li className='ml-[18px]'><Link to="">NEW! 요즘 대세 콘텐츠</Link></li>
                            <li className='ml-[18px]'><Link to="">내가 찜한 콘텐츠</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex h-full py-[20px]">
                    <div className="c1-nav-element mr-[10px] mt-[4px] h-full">
                        <div className="c1-searchBox mr-[10px]">
                            <button className="c1-searchTab" tabIndex="0" aria-label="검색" data-uia="search-box-launcher">
                                {
                                    searchBox ? 
                                        <div className='c1-searchInput flex text-center bg-[#000000]/75 border-solid border-[1px] border-white'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="c1-search-icon m-[3px]" onClick={ openSearch }>
                                                <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                                    d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z">
                                                </path>
                                            </svg>
                                            <label id="c1-searchInput-label" className='hidden'>검색</label> 
                                            <input type='text' id="c1-searchInput" name="c1-searchInput" placeholder='제목, 사람, 장르' maxLength='80' className='c1-focus-visible outline-none bg-transparent border-none text-white inline-block text-[14px] py-[7px] pl-[14px] pr-[7px] w-[212px]' style={{opacity: 1, transitionDuration: '300ms'}}></input>
                                        </div>
                                    : 
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="c1-search-icon" onClick={ openSearch }>
                                        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                            d="M13 11C13 13.7614 10.7614 16 8 16C5.23858 16 3 13.7614 3 11C3 8.23858 5.23858 6 8 6C10.7614 6 13 8.23858 13 11ZM14.0425 16.2431C12.5758 17.932 10.4126 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 11.9287 15.8417 12.8205 15.5507 13.6497L24.2533 18.7028L22.7468 21.2972L14.0425 16.2431Z"
                                        ></path>
                                    </svg>
                                }
                            </button>
                        </div>
                    </div>
                    <div className="c1-nav-element mr-[10px] mt-[4px]">
                        <span className="c1-notifications mr-[10px]">
                            <button className="c1-notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="알림" onMouseEnter={() => setNotice(true)} onMouseLeave={() => setNotice(false)}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="c1-notify-icon">
                                    <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
                                        d="M13 4.57092C16.3922 5.05624 18.9998 7.9736 18.9998 11.5V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11.5C4.99978 7.97345 7.6076 5.05599 11 4.57086V2H13V4.57092ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z">
                                    </path>
                                </svg>
                            </button>
                            {
                                notice && 
                                <div className='absolute right-[7rem] m-4'>
                                    <div className="topbar translate-x-[375px] h-0 w-0 border-[8px] border-solid border-r-transparent border-l-transparent border-t-transparent border-b-[#e5e5e5]"></div>
                                    <ul className='c1-sub-menu-list border-[#e5e5e5] border-[1px] border-t-2 border-solid w-[400px] h-[116px] bg-[#222222]/70'>
                                        <li className='c1-sub-menu-item'>
                                            <div className='c1-ptrack-container'>
                                                <div className='c1-ptrack-content'>
                                                    <ul className='c1-notifications-container'>
                                                        <li className='c1-notification'>
                                                            <div className='c1-empty-notification text-center mt-[48px]'>
                                                                <div>최근 알림 메시지가 없습니다.</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </span>
                    </div>
                    <div className="c1-nav-element mr-[10px]">
                        <div className="c1-account-menu-item">
                            <div className="c1-account-dropdown-button flex" onMouseEnter={() => setProfile(true)} onMouseLeave={() => setProfile(false)}>
                                <a href="/YourAccount" role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-label="&amp;#xAE40;&amp;#xBBF8;&amp;#xC18C;&nbsp;- 계정 &amp; 설정">
                                    <span className="c1-profile-link" role="presentation">
                                        <img className="c1-profile-icon rounded-[4px]" alt=""
                                            src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4"/>
                                    </span>
                                </a>
                                <span className="c1-caret relative translate-y-[10px] h-0 w-0 border-[5px] border-solid border-r-transparent border-l-transparent border-b-transparent border-t-white ml-[10px]" role="presentation"></span>
                            </div>
                            <div className='absolute right-[3.5rem] m-4'>
                                <div className="topbar translate-x-[375px] h-0 w-0 border-[8px] border-solid border-r-transparent border-l-transparent border-t-transparent border-b-[#e5e5e5]"></div>
                                <ul className='c1-sub-menu-list border-[#e5e5e5] border-[1px] border-t-2 border-solid w-[180px] h-[116px] bg-[#222222]/70'>
                                    <li className='c1-sub-menu-item'>
                                        <div className='c1-ptrack-container'>
                                            <div className='c1-ptrack-content'>
                                                <ul className='c1-notifications-container'>
                                                    <li className='c1-notification'>
                                                        <div className='c1-empty-notification text-center mt-[48px]'>
                                                            <div>최근 알림 메시지가 없습니다.</div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;