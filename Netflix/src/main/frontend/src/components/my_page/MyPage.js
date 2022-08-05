import React from 'react';
import membershipImg from '../../image/membershipImg.png';

const MyPage = () => {
    return (
        <div className="my_screen">
            <div className="my_header bg-[#141414] h-20">
                <div className="italic pt-5 py-3 pl-9  text-red-600 text-3xl font-semibold">
                    PLANET
                    <img className="w-8 rounded-md float-right mr-20 mt-1" src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5dFVMUR0LX_jOm4VTxM-V5Y4vPHyzKkyCDSLeysR0X3wxYU65NJOYWf7DVXfDR_2wKh6wCO6MO9tA63XkD9Y5qDnLyQ0U.png?r=bd7"></img>
                </div>

            </div>

            <div className="my_container px-40 py-20">
                <div className="my_section_top">
                    <h1 className="text-4xl float-left pr-6">계정</h1>
                    <img className=" mt-2 float-left " src={membershipImg} width='30' height='300' />
                    <h3 className="pt-3 text-zinc-600">멤버십 시작 : 2022년 8월</h3>
                </div>
                <div className="my_section1">
                    <div className="border-solid mt-9 border-t-[1px] h-9 border-zinc-700">
                        <div className='flex justify-between'>
                            <div className='my_account_right'>
                                <div><h2 className="text-zinc-500 pb-5 ">멤버십 & 결제정보</h2></div>
                                <div><button className="float-none w-56 pt-4 pb-4 rounded-md bg-gray-300">멤버십 해지</button></div>
                            </div>
                            <div>
                                <div className="">
                                    <div className="pr-96  font-bold">
                                        1006pp@naver.com
                                    </div>
                                </div>
                                <div className="pr-96 pt-5 text-gray-400">비밀번호 : ****************</div>
                                <div className="pr-80 pt-5 text-gray-400">전화번호 : 010-1234-5678</div>
                                <div className="font-bold">jeoooo97@nvaer.com</div>
                                <div className="">다음 결제일은 2022년 9월 1일입니다.</div>
                            </div>
                        </div>
                <div className="border-solid mt-9 border-t-[1px] h-9 border-zinc-700"></div>
                    </div>
                </div>
            </div>

            <div className="my_section2">

            </div>

            <div className="my_footer"></div>
        </div> /* screen */
    );
};

export default MyPage;