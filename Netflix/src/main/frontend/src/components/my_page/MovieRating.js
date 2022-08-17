import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';

const MovieRating = () => {

    return (
        <div>
            <MyPageHeader/>
            <div className = "m-[20px] p-0 block">
                <div className = "px-[20%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">
                    <div className = "flex justify-start ">
                    <div className = "text-[#333] w-[90%] text-5xl mb-100">시청 제한</div>
                    <img className = "rounded w-[50px] h-[50px]" src = "https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQraYEep-xEIjH8un2d94vqdnSOy6XOgdstZB4LNWxH02R2Lr61kagmfitUGDi9oBzVvLrMd23CUeWAi1b0VTiprSmqigKI.png?r=229"></img>
                    </div>
                    <div className ="w-[100%] text-2xl mt-16"><span className = "font-bold">이원형</span>프로필의 <span className = "font-bold">관람등급</span> 및 <span className = "font-bold">콘텐츠 제한 설정</span>을 변경하려면 계정 비밀번호를 입력하세요.</div>
                        <div className = "flex justify-start">
                            <input type = "password" className=" rounded w-[300px] h-[40px] border-x-2 border-y-2 border-t-1 border-r-1 border-b-1 border-l-1 text-sm border-gray-400 mt-10" ></input>
                            <button className = "mt-12 text-[#0080ff] text-2xl ml-3"> 비밀번호를 잊으셨나요?</button>
                        </div>
                    <Link to = "/my/movieRating_Sub">
                        <button className = "rounded w-[98px]  bg-[#0080ff] text-[#fff] h-[37px] font-bold text-lg mt-20 ml-80 ">다음</button>
                    </Link>
                    <Link to = "/my">
                        <button className="rounded w-[98px] bg-[#ccc] h-[37px] text-inherit ml-4 text-lg">취소</button>
                    </Link>
                </div>
            </div>
            <MypageFooter/>
        </div>
    );
};

export default MovieRating;