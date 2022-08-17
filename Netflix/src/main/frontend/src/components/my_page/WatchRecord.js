import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';

const WatchRecord = () => {

    return (
        <div>
            <MyPageHeader/>
            <div className = "m-[20px] p-0 block w-full min-h-[1000px] max-w-[1248px] mx-auto min-w-[740px]">
                <div className = "px-[5%] min-h-[400px] min-w-[400px] m-auto block relative w-[100%]">
                    <div className = "flex justify-start w-[100%]">
                        <div className = "text-[#333] text-4xl mb-100 mt-2 relative w-[70%]">정수 프로필의 시청 기록</div>
                        <div className = "flex justify-end relative text-lg mt-4 ml-14 w-[100%]">
                            <a href = "#" className = "text-black">보고있는 콘텐츠</a>
                            <div className = "ml-3 mr-3">|</div>
                            <a className = "text-black">평가</a>
                        </div>
                        <img className = "rounded w-[50px] h-[50px] ml-10" src = "https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQraYEep-xEIjH8un2d94vqdnSOy6XOgdstZB4LNWxH02R2Lr61kagmfitUGDi9oBzVvLrMd23CUeWAi1b0VTiprSmqigKI.png?r=229"></img>
                    </div>

                    <div className="border-solid  mt-10 border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>
                    <ul>
                        <li>
                            <div className = "flex justify-start w-full relative">
                                <div className = "flex pl-3">
                                    <div className = "mt-3 text-xl">22.8.2</div>
                                    <a className = "mt-3 ml-20 text-xl w-[860px] text-[#0080ff]">슬기로운 의사생활 : 시즌 1 : "1화"</a>
                                </div>
                                <div className = "relative justify-end">
                                    <button className = " relative mt-3 text-xl">버그/문제신고</button>
                                    <button className = " mt-3 ml-1 text-xl" >⊘</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="border-solid mt-[17px] border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>
                    <ul>
                        <li>
                            <div className = "flex">
                                <div className = "flex pl-3">
                                    <div className = "mt-3 text-xl">22.8.2</div>
                                    <a className = "mt-3 ml-20 text-xl w-[860px] text-[#0080ff]">슬기로운 의사생활 : 시즌 1 : "1화"</a>
                                </div>
                                <div className = "relative justify-end">
                                    <button className = " relative mt-3 text-xl">버그/문제신고</button>
                                    <button className = " mt-3 ml-1 text-xl" >⊘</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="border-solid mt-[17px] border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>
                    <ul>
                        <li>
                            <div className = "flex">
                                <div className = "flex pl-3">
                                    <div className = "mt-3 text-xl">22.8.2</div>
                                    <a className = "mt-3 ml-20 text-xl w-[860px] text-[#0080ff]">슬기로운 의사생활 : 시즌 1 : "1화"</a>
                                </div>
                                <div className = "relative justify-end">
                                    <button className = " relative mt-3 text-xl">버그/문제신고</button>
                                    <button className = " mt-3 ml-1 text-xl" >⊘</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="border-solid mt-[17px] border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>
                    <ul>
                        <li>
                            <div className = "flex">
                                <div className = "flex pl-3">
                                    <div className = "mt-3 text-xl">22.8.2</div>
                                    <a className = "mt-3 ml-20 text-xl w-[860px] text-[#0080ff]">슬기로운 의사생활 : 시즌 1 : "1화"</a>
                                </div>
                               
                                <div className = "relative justify-end">
                                    <button className = " relative mt-3 text-xl">버그/문제신고</button>
                                    <button className = " mt-3 ml-1 text-xl" >⊘</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="border-solid mt-[17px] border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>
                        <div className = "flex">
                            <button className = "rounded w-[110px] bg-[#0080ff] text-[#fff] h-[43px] text-lg mt-6 " >더 보기</button>
                            <Link to = "/my">
                                <button className="rounded w-[220px] bg-[#ccc] h-[43px] ml-3 mt-6 text-lg text-[#000] font-semibold">계정 페이지로 돌아가기</button>
                            </Link>
                            
                            <div className = "flex relative text-lg ml-[50%] mt-6">
                                <a className = "text-[#0080ff]" href = "#">모두 숨기기</a>
                                <div className = "ml-3 mr-3 text-neutral-300">|</div>
                                <a className = "text-[#0080ff]">전체 다운로드</a>
                            </div>
                        </div>    
                    </div>
                </div>        
             <MypageFooter/>
        </div>
    );
};

export default WatchRecord;
