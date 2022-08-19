import React, { useEffect, useState } from 'react';
import "css/main/subHeader.css";
import { useParams } from 'react-router-dom';

const SubHeader = ({ scroll }) => {

    const { tab } = useParams();
    const [subScroll, setSubScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleSubScroll);
        return () => {
            window.removeEventListener('scroll', handleSubScroll);
        }
    }, []);

    const handleSubScroll = () => {
        if(window.scrollY >= 1){
            setSubScroll(true);
        } else {
            setSubScroll(false);
        }
    }

    let headerName;

    if(scroll){
        if(subScroll){
            headerName = 'c1-sub-header bg-[#141414] fixed z-[10] w-full h-[68px] top-0 py-[14px]';
        }
        else{
            headerName='c1-sub-header bg-[#141414] z-[10] fixed top-[68px] w-full h-[68px] py-[14px]';    
        }
    } else {
        headerName = 'c1-sub-header absolute z-[10] w-full h-[68px] top-[68px] py-[14px]';
        
    }

    return (
        <div className={ headerName }>
            <div className="c1-sub-header-wrapper w-full">
                <div className="c1-aro-gallery-header w-full">
                    <div className="c1-aro-genre-details">
                        <span className="c1-genreTitle text-white font-bold">{ tab === 'movie' ? '영화' : '시리즈'}</span>
                        <div className="c1-subgenres">
                            <div className="c1-ptrack-container">
                                <div className="c1-ptrack-content" data-ui-tracking-context="%7B%22appView%22:%22categorySelector%22,%22usePresentedEvent%22:true%7D" data-tracking-uuid="35645cd8-1a7e-4d2d-b762-367a57531ef2">
                                    <div label="장르" cols="3" className="c1-nfDropDown c1-theme-lakira">
                                        <div className="c1-label" role="button" aria-haspopup="true" tabIndex="0" aria-expanded="false" aria-labelledby="profileLanguageDropDown-header">장르
                                            <span className="c1-arrow relative h-0 w-0 border-[5px] border-solid border-r-transparent border-l-transparent border-b-transparent border-t-white ml-[10px]"></span>
                                        </div>
                                    </div>
                                    <div role="menu" className="c1-sub-menu c1-theme-lakira hidden" style={{opacity: 1, transitionDuration: '150ms'}}>
                                        <ul className="c1-sub-menu-list c1-multi-column">
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/2638104?bc=83">한국 드라마</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/2640196?bc=83">미국 드라마</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/2640197?bc=83">영국 드라마</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/2690727?bc=83">아시아 드라마</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/2070675?bc=83">전 세계 예능이 한곳에!</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/6721?bc=83">애니</a></li>
                                        </ul>
                                        <ul className="c1-sub-menu-list multi-column">
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/10375?bc=83">코미디</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/26156?bc=83">로맨스</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/11714?bc=83">드라마 장르</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/10673?bc=83">액션</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/89811?bc=83">스릴러</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/1372?bc=83">SF &amp; 판타지</a></li>
                                        </ul>
                                        <ul className="c1-sub-menu-list multi-column">
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/83059?bc=83">호러</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/27346?bc=83">키즈</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/60951?bc=83">청소년</a></li>
                                            <li className="c1-sub-menu-item" role="none"><a className="c1-sub-menu-link" href="/browse/genre/10105?bc=83">다큐시리즈</a></li>
                                        </ul>
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

export default SubHeader;