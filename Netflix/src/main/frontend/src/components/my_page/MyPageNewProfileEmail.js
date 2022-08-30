import React, { useEffect, useState } from 'react';
import MypageFooter from './MyPageFooter';
import MyPageHeader from './MyPageHeader';
import MyPage from './MyPage';
import { Link, useNavigate } from 'react-router-dom';

const MyPageNewProfileEmail = () => {

    const [ email, setEmail ] = useState('');

    // input 에서 입력될때마다 state값 변경되게 하는 함수
    const onChangeEmail = (e) => {
        
        setEmail( e.target.value ); 
       
        if ( e.target.value.length < 5 || e.target.value.length > 50 ) { 
            setIsChk( true )
        } else if(e.target.value.length >= 5 && e.target.value.length <= 50) {
            setIsChk( false )
        } 
    };

    // email값 받아서 my페이지에 넘기기
    const navigate = useNavigate() /* 양식이 제출되거나 특정 event가 발생할 때,  url을 조작할 수 있는 interface를 제공 */

    const handleSelect = () => {
         navigate('/my',  { state : { type : email } }); 
      };

    // 유효성 검사
    const [ isChk , setIsChk ] = useState(false);  // 초기값 false

    return (
        <div>
                <div className = "m1_bd m-[20px] p-0 block">
                    <div className = "px-[20%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">
                        <form className='w-[200%] text-2xl' method = "post">
                            <div className = "text-[#333] w-[90%] text-5xl mb-10">프로필 이메일 추가</div>
                            <div className ="w-[100%]">추천 작품, 새로운 기능, 특별 프로모션, 설문조사에 관해 알려드립니다.</div>
                            <div className = "mt-4">
                                <div className = "flex justify-start">
                                    <img alt = "userName" src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7"></img>
                                    <span className = "pl-3 pt-3">정수</span>
                                </div>
                                <div className = "mb-2 mt-5">
                                    <input type = "text" value = {email} onChange = { onChangeEmail } className="w-[400px] h-[40px] border-x-2 border-y-2 border-t-1 border-r-1 border-b-1 border-l-1 text-sm border-green-600"  maxLength = "50" minLength = "5" placeholder = "이메일주소"></input>
                                </div>
                            </div>
                        { isChk && <div className=" text-red-500 mb-4" >5에서 50자 내외의 이메일 주소를 입력하세요. (예: name@example.com)</div> }
                            <div className = "mb-5 text-lg">
                                <a className = "text-[#0080ff] text-lg" href ="#">프로필 약관 및 개인정보 처리방침</a>이 적용됩니다. 단, 만 19세 이상이어야 합니다.
                            </div>
                                <button type = "button" onClick = { handleSelect } className = "rounded w-[98px] bg-[#e50914] text-[#fff] h-[37px] text-lg">저장</button> 
                                <Link to = "/my">
                                    <button className="rounded w-[160px] bg-[#ccc] h-[37px] text-inherit ml-4 text-lg text-[#000] font-semibold">이메일 주소 삭제</button>
                                </Link>
                                <Link to = "/my">
                                    <button className="rounded w-[98px] bg-[#ccc] h-[37px] text-inherit ml-4 text-lg text-[#000] font-semibold">취소</button>
                                </Link>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default MyPageNewProfileEmail;
