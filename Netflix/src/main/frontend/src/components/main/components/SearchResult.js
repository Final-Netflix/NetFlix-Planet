import React, { useEffect, useState } from 'react';
import 'css/main/searchResult.css';

const SearchResult = () => {

    return (
        <div className = "mainView">
            <div className = "gallery row-with-x-columns search relative top-[5vw]">
                <div className = "search-title-header">
                    <div className="rail">
                            <div className="suggestions">
                                <div className="ptrack-container">
                                    <div
                                        className="ptrack-content"
                                        data-ui-tracking-context="%7B%22referenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22searchSuggestionResults%22%7D"
                                        data-tracking-uuid="bf2b3b1f-5b21-49b1-96d1-e77d91577178"
                                    >
                                        <div className="suggestionRailContainer">
                                            <span className="suggestionsLabel">다음과 관련된 콘텐츠:</span>
                                            <ul>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2281408129_collection%22,%22row%22:0,%22rank%22:0,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="88dbd352-94ad-4357-b755-644017a18da7"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=81408129_collection">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="title-group-collection">
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
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2230117534_person%22,%22row%22:0,%22rank%22:1,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="e4cbfa69-e297-4040-b0b7-01ce8177d0ef"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=30117534_person">아야세 하루카</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2270177689_video%22,%22row%22:0,%22rank%22:2,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="9a899d11-d15b-4a6b-8da2-42d17bb88c55"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=70177689_video">아이언맨: 아머 어드벤처</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2230181903_person%22,%22row%22:0,%22rank%22:3,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="b1099318-ebe8-4313-89ae-f1769aff4edc"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=30181903_person">아나벨 아코스타</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2270109883_video%22,%22row%22:0,%22rank%22:4,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="e7012d45-dc07-4f98-8b8e-ea801447a36a"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=70109883_video">아주르와 아스마르</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2281042346_video%22,%22row%22:0,%22rank%22:5,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="048995db-4830-4627-9c8f-0c7b456cebf0"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=81042346_video">아이두 아이두</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2281239564_video%22,%22row%22:0,%22rank%22:6,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="7048625c-c3ca-4534-bc51-cdeccd04e170"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=81239564_video">아비와 아기</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2270205622_video%22,%22row%22:0,%22rank%22:7,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="42344506-7c2b-47a7-bbaf-8d583d89f7dd"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=70205622_video">아트레베테 아 소냐르</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%22103922_collection%22,%22row%22:0,%22rank%22:8,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="aa44cd6a-800a-49a0-a7e2-3977f2a8e814"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=103922_collection">아버지-아들</a>
                                                    </div>
                                                </li>
                                                <li className="">
                                                    <div
                                                        className="ptrack-content"
                                                        data-ui-tracking-context="%7B%22parentReferenceId%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_suggestions/1//%EC%95%84%EC%95%84/0/0%22,%22trackId%22:255416684,%22entityId%22:%2240014585_person%22,%22row%22:0,%22rank%22:9,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22suggestionItem%22,%22usePresentedEvent%22:true%7D"
                                                        data-tracking-uuid="8793763c-aa8c-4976-81b3-9e754210577d"
                                                    >
                                                        <a href="/search?q=%EC%95%84%EC%95%84&amp;suggestionId=40014585_person">아드리아 아르호나</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className = "galleryContent">
                    <div className = "galleryLockups">
                        <div className="rowContainer rowContainer_title_card" id="row-0">
                            <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                                <div className="slider">
                                    <div className="sliderMask showPeek">
                                        <div className="sliderContent row-with-x-columns" >
                                            <div className="slider-item slider-item-0">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-0" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:0,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:70142405,%22image_key%22:%22sdp%7C5d8a1b20-3506-11eb-a97c-0a10c65f8683%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="ad5f312f-5e6e-45de-bcd1-fcac624993a6"
                                                        >
                                                            <a
                                                                href="/watch/70142405?tctx=0%2C0%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="아바타 아앙의 전설"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABceiGWpIyq39fty4ZT3m6hwyvnenr0ruBpRh6spwOfssLd-jty97STCe5AjZuXt4OYGYQ_8f5_v_QrxP9cxIefeLZDb5CtKgczw.webp?r=8a9"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아바타 아앙의 전설</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-1">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-1" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:1,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:81440819,%22image_key%22:%22sdp%7Cc8a4deb0-d919-11eb-bfc1-0a7c5e1549c5%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="5fb9a248-1ea3-463a-b524-7fe6acaf69df"
                                                        >
                                                            <a
                                                                href="/watch/81440819?tctx=0%2C1%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="아스코마치: 아스카 공업 고교 이야기"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7ivz2GjVh53vVqCW42J_VkcH41z88sed529K_YYPIeQ3y0OCA-aZt2KK7UWN9kYufQRipCRfFCJ_hGCOGwAzRP47BtOIdyT8I.webp?r=0e0"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아스코마치: 아스카 공업 고교 이야기</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-2">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-2" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:2,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:60020804,%22image_key%22:%22sdp%7C6ec0b341-c7ea-11ec-818e-0e9c82ed94fd%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="78cdafd0-3c39-444d-9500-01657feda46a"
                                                        >
                                                            <a
                                                                href="/watch/60020804?tctx=0%2C2%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="파이브 건스"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0FpSyYIn66n8GTg3TRy8QQsVHLNXhPhUUvTTYaA9mPTlbofqAlQN2dlw3TDgM0sU-9HshQSGtIuirwfPvt9ZV1OMRe4RxZ5qo.webp?r=1ce"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">파이브 건스</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-3">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-3" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:3,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:81043345,%22image_key%22:%22sdp%7C8b90fa82-2b16-11e9-8315-0a76ddcfee4a%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="a42397d3-8f28-491d-a8bd-d89be53b80de"
                                                        >
                                                            <a
                                                                href="/watch/81043345?tctx=0%2C3%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="오늘부터 패밀리"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeicFusnyfhuXXQpFlr_cv-5RUXAISJRh7QQ6HGEZyqtEdwgI75W0H6qliloBBoxP7ujch8WGof3pd42cTP0bltOs2uVq_lknGM.webp?r=628"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">오늘부터 패밀리</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-4">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-4" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:4,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:81316559,%22image_key%22:%22sdp%7C4116b851-3806-11ec-9abf-0e9a46954ee5%7Cko%7CoI8%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="2fa948b6-5742-436f-a9cf-09fff29fef17"
                                                        >
                                                            <a href="/watch/81316559?tctx=0%2C4%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C" role="link" aria-label="아야와 마녀" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXwjzn6oXAQXLVscRuasifznSV1SGVxTSKEzqb4MTeaNVvdb6P1yluJc1OOaQ6RG9_i4PVf3RUMJ2qTyyqUevJo4pO8HPArLzOo.webp?r=9aa"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아야와 마녀</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-5">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-5" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C63db0287-0621-41e6-ad6e-44224f2f1b65-283534047_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:5,%22request_id%22:%22NAPA@@%7C63db0287-0621-41e6-ad6e-44224f2f1b65-283534047_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:80043576,%22image_key%22:%22sdp%7C9c7e1370-8986-11e6-9dcc-0a86feed6df5%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%2263db0287-0621-41e6-ad6e-44224f2f1b65-283534047%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="3320ca39-a662-4b2d-9294-a240f5b2fab4"
                                                        >
                                                            <a href="/watch/80043576?tctx=0%2C5%2C%2C%2C%2C%2C63db0287-0621-41e6-ad6e-44224f2f1b65-283534047%7C1%2C%2C" role="link" aria-label="아인(亞人)" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDUod_WeVmRgDuuF8QhFjvFWtYDu0EXK6HfWXuKfDxrVXom_fBMgmQV8Le8BDco5iA2b-nrP9W1VqK6e83k44Ue2vTuwfmGmvKnOWupIvfLcgOwfCV4Sg6_XcGT2JoK9Gj8.jpg?r=02c"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아인(亞人)</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="rowContainer rowContainer_title_card" id="row-0">
                            <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                                <div className="slider">
                                    <div className="sliderMask showPeek">
                                        <div className="sliderContent row-with-x-columns" >
                                            <div className="slider-item slider-item-0">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-0" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:0,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:70142405,%22image_key%22:%22sdp%7C5d8a1b20-3506-11eb-a97c-0a10c65f8683%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="ad5f312f-5e6e-45de-bcd1-fcac624993a6"
                                                        >
                                                            <a
                                                                href="/watch/70142405?tctx=0%2C0%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="아바타 아앙의 전설"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABceiGWpIyq39fty4ZT3m6hwyvnenr0ruBpRh6spwOfssLd-jty97STCe5AjZuXt4OYGYQ_8f5_v_QrxP9cxIefeLZDb5CtKgczw.webp?r=8a9"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아바타 아앙의 전설</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-1">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-1" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:1,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:81440819,%22image_key%22:%22sdp%7Cc8a4deb0-d919-11eb-bfc1-0a7c5e1549c5%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="5fb9a248-1ea3-463a-b524-7fe6acaf69df"
                                                        >
                                                            <a
                                                                href="/watch/81440819?tctx=0%2C1%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="아스코마치: 아스카 공업 고교 이야기"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7ivz2GjVh53vVqCW42J_VkcH41z88sed529K_YYPIeQ3y0OCA-aZt2KK7UWN9kYufQRipCRfFCJ_hGCOGwAzRP47BtOIdyT8I.webp?r=0e0"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아스코마치: 아스카 공업 고교 이야기</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-2">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-2" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:2,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:60020804,%22image_key%22:%22sdp%7C6ec0b341-c7ea-11ec-818e-0e9c82ed94fd%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="78cdafd0-3c39-444d-9500-01657feda46a"
                                                        >
                                                            <a
                                                                href="/watch/60020804?tctx=0%2C2%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="파이브 건스"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS0FpSyYIn66n8GTg3TRy8QQsVHLNXhPhUUvTTYaA9mPTlbofqAlQN2dlw3TDgM0sU-9HshQSGtIuirwfPvt9ZV1OMRe4RxZ5qo.webp?r=1ce"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">파이브 건스</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-3">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-3" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:3,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:81043345,%22image_key%22:%22sdp%7C8b90fa82-2b16-11e9-8315-0a76ddcfee4a%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="a42397d3-8f28-491d-a8bd-d89be53b80de"
                                                        >
                                                            <a
                                                                href="/watch/81043345?tctx=0%2C3%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C"
                                                                role="link"
                                                                aria-label="오늘부터 패밀리"
                                                                tabIndex="0"
                                                                aria-hidden="false"
                                                                className="slider-refocus"
                                                            >
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeicFusnyfhuXXQpFlr_cv-5RUXAISJRh7QQ6HGEZyqtEdwgI75W0H6qliloBBoxP7ujch8WGof3pd42cTP0bltOs2uVq_lknGM.webp?r=628"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">오늘부터 패밀리</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-4">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-4" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:4,%22request_id%22:%22NAPA@@%7C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:81316559,%22image_key%22:%22sdp%7C4116b851-3806-11ec-9abf-0e9a46954ee5%7Cko%7CoI8%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%22355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="2fa948b6-5742-436f-a9cf-09fff29fef17"
                                                        >
                                                            <a href="/watch/81316559?tctx=0%2C4%2C%2C%2C%2C%2C355012ed-4a33-43e8-9560-85f84d8d83c6-250789344%7C1%2C%2C" role="link" aria-label="아야와 마녀" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXwjzn6oXAQXLVscRuasifznSV1SGVxTSKEzqb4MTeaNVvdb6P1yluJc1OOaQ6RG9_i4PVf3RUMJ2qTyyqUevJo4pO8HPArLzOo.webp?r=9aa"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아야와 마녀</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slider-item slider-item-5">
                                                <div className="title-card-container css-0">
                                                    <div id="title-card-0-5" className="title-card">
                                                        <div
                                                            className="ptrack-content"
                                                            data-ui-tracking-context="%7B%22list_id%22:%22NAPA@@%7C63db0287-0621-41e6-ad6e-44224f2f1b65-283534047_titles/1//%EC%95%84%EC%95%84/0/0%22,%22location%22:%22searchResults%22,%22rank%22:5,%22request_id%22:%22NAPA@@%7C63db0287-0621-41e6-ad6e-44224f2f1b65-283534047_titles/1//%EC%95%84%EC%95%84/0/0%22,%22row%22:0,%22track_id%22:255824129,%22video_id%22:80043576,%22image_key%22:%22sdp%7C9c7e1370-8986-11e6-9dcc-0a86feed6df5%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22napaRequestId%22:%2263db0287-0621-41e6-ad6e-44224f2f1b65-283534047%7C1%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                            data-tracking-uuid="3320ca39-a662-4b2d-9294-a240f5b2fab4"
                                                        >
                                                            <a href="/watch/80043576?tctx=0%2C5%2C%2C%2C%2C%2C63db0287-0621-41e6-ad6e-44224f2f1b65-283534047%7C1%2C%2C" role="link" aria-label="아인(亞人)" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                    <img
                                                                        className="boxart-image boxart-image-in-padded-container"
                                                                        src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWDUod_WeVmRgDuuF8QhFjvFWtYDu0EXK6HfWXuKfDxrVXom_fBMgmQV8Le8BDco5iA2b-nrP9W1VqK6e83k44Ue2vTuwfmGmvKnOWupIvfLcgOwfCV4Sg6_XcGT2JoK9Gj8.jpg?r=02c"
                                                                        alt=""
                                                                    />
                                                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아인(亞人)</p></div>
                                                                </div>
                                                                <div className="click-to-change-JAW-indicator">
                                                                    <div className="bob-jawbone-chevron">
                                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                clipRule="evenodd"
                                                                                d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                                                fill="currentColor"
                                                                            ></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <div className="bob-container"></div>
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
