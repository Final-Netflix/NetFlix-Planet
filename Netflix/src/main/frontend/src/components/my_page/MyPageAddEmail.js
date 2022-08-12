import React, { useState } from 'react';

const MyPageAddEmail = () => {

    const [email, setEmail] = useState('');

    const onChangeEmail = (e) => {
        const { value } = e.target
        setEmail(value)
    }
    return (
        <div>
            <div className = "m-[20px] p-0 block">
                <div className = "px-[20%] min-h-[400px] min-w-[300px] m-auto block relative w-[90%]">
                    <form className='w-[200%] text-2xl pt-24' method="post">
                        <div className = "text-[#333] w-[90%] text-5xl mb-10">프로필 이메일 추가</div>
                        <div calssName ="w-[100%]">추천 작품, 새로운 기능, 특별 프로모션, 설문조사에 관해 알려드립니다.</div>
                        <div className = "mt-4">
                            <div className = "flex justify-start ">
                                <img alt = "userName" src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABS5zyiA_uDE4vs9AaQKq7KpZzp9enMkWlZ8tEAVdupwBwH-xsA7pN7Y3cUUYWGtKARFEBN-mUEpPigEi2COFrSUSp7tf3zE.png?r=bd7"></img>
                                <span className = "pl-3 pt-3">정수</span>
                            </div>
                            <div className = "mb-2 mt-5 " >
                                <input className=" w-[400px] h-[40px] border-x-2 border-y-2 border-t-1 border-r-1 border-b-1 border-l-1 text-sm border-green-600"  value = {email} onChange = { onChangeEmail } maxlength = "50" minlength = "5" placeholder = "이메일주소"></input>
                            </div>
                        </div>
                    </form>
                    <div className="  text-red-500 mb-4">5에서 50자 내외의 이메일 주소를 입력하세요. (예: name@example.com)</div>
                        <div className = "mb-5  text-lg">
                            <a className = "text-[#0080ff] text-lg" href ="#">프로필 약관 및 개인정보 처리방침</a>이 적용됩니다. 단, 만 19세 이상이어야 합니다.
                        </div>
                </div>
            </div>
        </div>
    );
};

export default MyPageAddEmail;