import React, { useState } from 'react';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';

const PlaySetting = () => {

    const [count, setCount] = useState(0);

    const onAdd = () => setCount(count+1);
    const onSub = () => setCount(count-1);

    return (
        <div>
             <MyPageHeader/>
            <div className = "m-[20px] p-0 block">
                <div className = "px-[20%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">
                    <div className = "flex justify-start ">
                    <div className = "text-[#333] w-[90%] text-4xl mb-100">재생 설정</div>
                    <img className = "rounded w-[50px] h-[50px]" src = "https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQraYEep-xEIjH8un2d94vqdnSOy6XOgdstZB4LNWxH02R2Lr61kagmfitUGDi9oBzVvLrMd23CUeWAi1b0VTiprSmqigKI.png?r=229"></img>
                    </div>
                    <div className ="w-[100%] text-2xl mt-10 mb-5">키즈 프로필의 자동 재생 설정</div>
                        <div className = "flex text-lg">
                            <input className= "w-[25px] h-[25px] " type = "checkbox"></input>
                            <div className = "ml-3">모든 디바이스에서 시리즈의 다음 화 자동 재생</div>
                        </div>   
                        <div className = "flex text-lg mt-3">
                            <input className= "w-[25px] h-[25px] " type = "checkbox"></input>
                            <div className = "ml-3">모든 디바이스에서 탐색 중 미리보기 자동 재생</div>
                        </div>   
                    <div className="border-solid mt-[17px] border-t-[1px] h-1 border-neutral-300 w-[100%]"></div>    
                    
                    <div className ="w-[100%] text-2xl mt-10 mb-5">화질 및 데이터 이용 설정</div>
                        <div>
                            <div className = "flex">
                                {/* <input className = "w-5 h-5 rounded-full" type = "checkbox"></input> */}
                                <input className= "w-[25px] h-[25px] " type = "checkbox"></input>
                                <div className = "text-lg ml-3">자동</div>
                            </div>
                                <div className = "ml-3 text-[grey] pl-7 mt-2">자동 설정된 화질, 음질 및 데이터 이용</div>

                                <div className = "flex">
                                <input className= "w-[25px] h-[25px] mt-4" type = "checkbox"></input>
                                <div className = "text-lg ml-3 mt-4">저화질</div>
                            </div>
                                <div className = "ml-3 text-[grey] pl-7 mt-2">기본 화질 및 음질, 최대 0.3GB/시간</div>
                            
                                <div className = "flex">
                                <input className= "w-[25px] h-[25px] mt-4" type = "checkbox"></input>
                                <div className = "text-lg ml-3 mt-4">중간</div>
                            </div>
                                <div className = "ml-3 text-[grey] pl-7 mt-2">일반 화질 및 음질, 최대 0.7GB/시간</div>

                                <div className = "flex">
                                <input className= "w-[25px] h-[25px] mt-4" type = "checkbox"></input>
                                <div className = "text-lg ml-3 mt-4">고화질</div>
                            </div>
                                <div className = "ml-3 text-[grey] pl-7 mt-2">최상 화질 및 음질, HD 최대 3GB/시간, UHD 최대 7GB/시간</div>

                        </div>   
                    <button className = "rounded w-[98px]  bg-[#0080ff] text-[#fff] h-[37px]  text-lg mt-20 ml-80 "  onClick={ onAdd } >저장</button>
                    <button className = "rounded w-[98px] bg-[#ccc] h-[37px] text-inherit  ml-4 text-lg" onClick={ onSub }>취소</button>
                </div>
            </div>        
             <MypageFooter/>
        </div>
    );
};

export default PlaySetting;