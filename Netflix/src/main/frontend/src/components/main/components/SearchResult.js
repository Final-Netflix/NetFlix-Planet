import React, { useEffect, useState } from 'react';
import 'css/main/searchResult.css';

const SearchResult = () => {

    return (
        <div className="c1-mainView">
            <div className="c1-gallery c1-row-with-x-columns c1-search relative top-[5vw]">
                <div className="c1-search-title-header">
                    <div className="c1-rail">
                            <div className="c1-suggestions">
                                <div className="c1-ptrack-container">
                                    <div className="c1-ptrack-content">
                                        <div className="c1-suggestionRailContainer">
                                            <span className="c1-suggestionsLabel">다음과 관련된 콘텐츠:</span>
                                            <ul>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a>
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="c1-title-group-collection">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    clipRule="evenodd"
                                                                    d="M2 3C0.895431 3 0 3.89543 0 5V19C0 20.1046 0.895431 21 2 21H22C23.1046 21 24 20.1046 24 19V5C24 3.89543 23.1046 3 22 3H2ZM2 5H22V19H2V5ZM5 7V17H7V7H5ZM9 17V7H11V17H9ZM13.0715 7.37139L17.0715 17.3714L18.9285 16.6286L14.9285 6.62861L13.0715 7.37139Z"
                                                                    fill="currentColor"
                                                                ></path>
                                                            </svg>
                                                            아바타 아앙의 전설 컬렉션
                                                        </a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content" >
                                                        <a>아야세 하루카</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content" >
                                                        <a>아이언맨: 아머 어드벤처</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a>아나벨 아코스타</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a>아주르와 아스마르</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content" >
                                                        <a>아이두 아이두</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a>아비와 아기</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a >아트레베테 아 소냐르</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a>아버지-아들</a>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="c1-ptrack-content">
                                                        <a>아드리아 아르호나</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="c1-galleryContent">
                    <div className="c1-galleryLockups">
                        <div className="c1-rowContainer c1-rowContainer_title_card" id="row-0">
                            <div className="c1-ptrack-container">
                            <div className="c1-rowContent c1-slider-hover-trigger-layer">
                                <div className="c1-slider">
                                    <div className="c1-sliderMask c1-showPeek">
                                        <div className="c1-sliderContent c1-row-with-x-columns" >
                                            <div className="c1-slider-item c1-slider-item-0">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-0" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a 
                                                                role="link"
                                                                aria-label="아바타 아앙의 전설"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-c1-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABceiGWpIyq39fty4ZT3m6hwyvnenr0ruBpRh6spwOfssLd-jty97STCe5AjZuXt4OYGYQ_8f5_v_QrxP9cxIefeLZDb5CtKgczw.webp?r=8a9"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-1">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-1" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="아스코마치: 아스카 공업 고교 이야기"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7ivz2GjVh53vVqCW42J_VkcH41z88sed529K_YYPIeQ3y0OCA-aZt2KK7UWN9kYufQRipCRfFCJ_hGCOGwAzRP47BtOIdyT8I.webp?r=0e0"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-2">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-2" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="파이브 건스"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0FpSyYIn66n8GTg3TRy8QQsVHLNXhPhUUvTTYaA9mPTlbofqAlQN2dlw3TDgM0sU-9HshQSGtIuirwfPvt9ZV1OMRe4RxZ5qo.webp?r=1ce"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-3">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-3" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="오늘부터 패밀리"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeicFusnyfhuXXQpFlr_cv-5RUXAISJRh7QQ6HGEZyqtEdwgI75W0H6qliloBBoxP7ujch8WGof3pd42cTP0bltOs2uVq_lknGM.webp?r=628"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-4">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-4" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a role="link" aria-label="아야와 마녀" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXwjzn6oXAQXLVscRuasifznSV1SGVxTSKEzqb4MTeaNVvdb6P1yluJc1OOaQ6RG9_i4PVf3RUMJ2qTyyqUevJo4pO8HPArLzOo.webp?r=9aa"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-5">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-5" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a role="link" aria-label="아인(亞人)" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDUod_WeVmRgDuuF8QhFjvFWtYDu0EXK6HfWXuKfDxrVXom_fBMgmQV8Le8BDco5iA2b-nrP9W1VqK6e83k44Ue2vTuwfmGmvKnOWupIvfLcgOwfCV4Sg6_XcGT2JoK9Gj8.jpg?r=02c"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-0">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-0" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="아바타 아앙의 전설"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABceiGWpIyq39fty4ZT3m6hwyvnenr0ruBpRh6spwOfssLd-jty97STCe5AjZuXt4OYGYQ_8f5_v_QrxP9cxIefeLZDb5CtKgczw.webp?r=8a9"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-1">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-1" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="아스코마치: 아스카 공업 고교 이야기"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7ivz2GjVh53vVqCW42J_VkcH41z88sed529K_YYPIeQ3y0OCA-aZt2KK7UWN9kYufQRipCRfFCJ_hGCOGwAzRP47BtOIdyT8I.webp?r=0e0"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-2">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-2" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="파이브 건스"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0FpSyYIn66n8GTg3TRy8QQsVHLNXhPhUUvTTYaA9mPTlbofqAlQN2dlw3TDgM0sU-9HshQSGtIuirwfPvt9ZV1OMRe4RxZ5qo.webp?r=1ce"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-3">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-3" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a
                                                                role="link"
                                                                aria-label="오늘부터 패밀리"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="c1-slider-refocus"
                                                            >
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeicFusnyfhuXXQpFlr_cv-5RUXAISJRh7QQ6HGEZyqtEdwgI75W0H6qliloBBoxP7ujch8WGof3pd42cTP0bltOs2uVq_lknGM.webp?r=628"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-4">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-4" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a role="link" aria-label="아야와 마녀" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXwjzn6oXAQXLVscRuasifznSV1SGVxTSKEzqb4MTeaNVvdb6P1yluJc1OOaQ6RG9_i4PVf3RUMJ2qTyyqUevJo4pO8HPArLzOo.webp?r=9aa"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="c1-slider-item c1-slider-item-5">
                                                <div className="c1-title-card-container css-0">
                                                    <div id="title-card-0-5" className="c1-title-card">
                                                        <div className="c1-ptrack-content">
                                                            <a role="link" aria-label="아인(亞人)" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                                                                <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                                                    <img
                                                                        className="c1-boxart-image c1-boxart-image-in-padded-container"
                                                                        src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDUod_WeVmRgDuuF8QhFjvFWtYDu0EXK6HfWXuKfDxrVXom_fBMgmQV8Le8BDco5iA2b-nrP9W1VqK6e83k44Ue2vTuwfmGmvKnOWupIvfLcgOwfCV4Sg6_XcGT2JoK9Gj8.jpg?r=02c"
                                                                        alt=""
                                                                    />
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="c1-bob-container"></div>
                                                    	</div>
                                                	</div>
                                            	</div>
                                        	</div>
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

export default SearchResult;
