import React from 'react';
import { Link } from 'react-router-dom';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';

const MovieRating_Sub = () => {

    /* const reset = () => {
        
    } */

    return (
        <div>
             <MyPageHeader/>
                <div className = "m-[20px] p-0 block">
                    <div className = "px-[10%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">

                        <div className = "flex ">
                            <div className = "text-[#333] w-[90%] text-5xl mb-100">시청 제한</div>
                            <img className = "rounded w-[50px] h-[50px]" src = "https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQraYEep-xEIjH8un2d94vqdnSOy6XOgdstZB4LNWxH02R2Lr61kagmfitUGDi9oBzVvLrMd23CUeWAi1b0VTiprSmqigKI.png?r=229"></img>
                        </div>

                        <div className = "text-[#333] w-[100%] text-4xl mb-100 mt-[3%] ">정수 프로필의 관람등급</div>
                        
                            <div className = "w-[100%] text-2xl mt-10 mb-10">이 프로필에서는 모든 관람등급의 콘텐츠가 표시됩니다.</div>
                        
                        <div className = "flex">
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[90px] mt-7"></div>
                            <input className= "w-[32px] rounded-full " type = "radio"></input>
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[160px] mt-7"></div>
                            <input className= "w-[32px] rounded-full " type = "radio"></input>
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[160px] mt-7"></div>
                            <input className= "w-[32px] rounded-full " type = "radio"></input>
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[160px] mt-7"></div>
                            <input className= "w-[32px] rounded-full " type = "radio"></input>
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[160px] mt-7"></div>
                            <input className= "w-[32px] rounded-full " type = "radio"></input>
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[90px] mt-7"></div>
                            <input className= "w-[32px] rounded-full " type = "radio"></input>
                            <div className="border-solid pb-8 border-t-[5px] h-2 border-green-600 w-[90px] mt-7"></div>
                        </div>

                        <div className = "flex">
                            <div className = "bg-green-600 text-white w-[85px] h-[28px] text-center pt-2 pb-8 text-lg ml-20 mt-3 rounded-md ">전체 관람가</div>
                            <div className = "bg-green-600 text-white w-[90px] h-[28px] text-center pt-2 pb-8 text-lg ml-32 mt-3 rounded-md">7+ 관람가</div>
                            <div className = "bg-green-600 text-white w-[95px] h-[28px] text-center pt-2 pb-8 text-lg ml-28 mt-3 rounded-md">12+ 관람가</div>
                            <div className = "bg-green-600 text-white w-[95px] h-[28px] text-center pt-2 pb-8 text-lg ml-28 mt-3 rounded-md">15+ 관람가</div>
                            <div className = "bg-green-600 text-white w-[80px] h-[28px] text-center pt-2 pb-8 text-lg ml-28 mt-3 rounded-md">청불</div>
                            <div className = "bg-green-600 text-white w-[90px] h-[28px] text-center pt-2 pb-8 text-lg ml-10 mt-3 rounded-md">19+ 관람가</div>
                        </div>


                        <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-300 mt-10"></div>

                        <div className = "text-[#333] w-[100%] text-4xl mb-100 ">키즈 프로필</div>

                        <div className = "flex justify-start mb-[3%]">
                            <input className= "w-[25px] mt-10" type = "checkbox"></input>
                            <div className = "w-[100%] text-2xl mt-10 ml-5">어린이 전용 콘텐츠와 더불어 넷플릭스 키즈 환경을 표시합니다.</div>
                        </div>

                        <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-300"></div>
                        <div className = "text-[#333] w-[100%] text-4xl mb-100">정수 프로필의 작품별 제한 설정</div>
                        <div className = "w-[100%] text-2xl mt-10">관람등급에 상관없이 이 프로필에 특정 작품을 표시하지 않습니다.</div>
                        <input type = "text" className="w-[400px] h-[40px] border-x-2 border-y-2 border-t-1 border-r-1 border-b-1 border-l-1 text-sm mt-10"  maxlength = "50" minlength = "5" placeholder = "작품 제목을 입력하세요"></input>
                        <br/>
                        <br/>

                        <div className = "flex mt-8">
                            <Link to = "/my">
                                <button type = "button" className = "rounded w-[98px] bg-[#0080ff] text-[#fff] h-[37px] text-xl ml-[150%]">저장</button>
                            </Link>
                            <Link to = "/my">
                                <button type = "button"  className = "rounded w-[98px] bg-[#ccc] h-[37px] text-inherit ml-[170%] text-lg">취소</button>
                            </Link>
                        </div>
                    
                    </div>
                </div>
             <MypageFooter/>
        </div>
    );
};

export default MovieRating_Sub;
