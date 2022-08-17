import React from 'react';
import { Link } from 'react-router-dom';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';

const ProfileLock_Sub = () => {
    return (
        <div>
            <MyPageHeader/>
            <div className = "m-[20px] p-0 block">
                <div className = "px-[20%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">
                    <div className = "flex justify-start ">
                        <div className = "text-[#333] w-[90%] text-5xl mb-100">프로필 잠금</div>
                        <img className = "rounded w-[60px] h-[50px]" src = "https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABQraYEep-xEIjH8un2d94vqdnSOy6XOgdstZB4LNWxH02R2Lr61kagmfitUGDi9oBzVvLrMd23CUeWAi1b0VTiprSmqigKI.png?r=229"></img>
                    </div>
                    <div className ="w-[100%] text-4xl mt-3">4자리 PIN번호를 생성해 이 프로필을 잠그세요.</div>
                    <div className = "flex">
                        <input className= "w-[25px] h-[25px] mt-5 text-lg" type = "checkbox"></input>
                        <div className ="w-[100%] text-xl mt-6 pl-5">정수 프로필을 이용하려면 PIN 번호를 입력하도록 합니다.</div>
                    </div>
                     <div className = "text-red-600 mt-5">PIN 번호는 4자리여야 합니다.</div>
                    <Link to = "/my">
                        <button className = "rounded w-[98px] bg-[#0080ff] text-[#fff] h-[37px] font-bold text-lg mt-20 ml-80 ">저장</button>
                    </Link>
                    <Link to = "/my">
                        <button className = "rounded w-[98px] bg-[#ccc] h-[37px] text-inherit font-bold ml-4 text-lg ">취소</button>
                    </Link>
                </div>
            </div>
             <MypageFooter/>
        </div>
    );
};

export default ProfileLock_Sub;
