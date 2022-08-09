import React, { useState } from 'react';
import membershipImg from '../../image/my_page/membershipImg.png';
import slideDownButton from '../../image/my_page/slideDownButton.png'
import slideUpButton from '../../image/my_page/slideUpButton.png'
import MyPageSlide_Sub from './MyPageSlide_Sub';

const MyPage = () => {
   
    const [isShow1, setIsShow1] = useState(false)
    const [isShow2, setIsShow2] = useState(false)
    const [isShow3, setIsShow3] = useState(false)
    const [isShow4, setIsShow4] = useState(false)
    
    const onToggle1 = () => {
        setIsShow1(!isShow1)
    }
    const onToggle2 = () => {
        setIsShow2(!isShow2)
    }
    const onToggle3 = () => {
        setIsShow3(!isShow3)
    }
    const onToggle4 = () => {
        setIsShow4(!isShow4)
    }
    
    return (
        <div className="m2_screen w-[100%] h-[100%]">
            {/* 배경색이 gray인데 전체 페이지가 먹지 않음. 거슬려서 bg-gray-100 일단 주석처리함 */}
            <div className="m2_header bg-[#141414] h-24">
                <div className="italic pt-6 py-3 pl-9 text-red-600 text-4xl font-semibold">
                    PLANET
                    <img
                        className="w-9 rounded-md float-right mr-20 mt-1"
                        src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5dFVMUR0LX_jOm4VTxM-V5Y4vPHyzKkyCDSLeysR0X3wxYU65NJOYWf7DVXfDR_2wKh6wCO6MO9tA63XkD9Y5qDnLyQ0U.png?r=bd7"
                    />
                </div>
            </div>
            <div className="m2_container px-32 py-8">
                <div className="m2_section_top">
                    <h1 className="text-4xl float-left pr-6">계정</h1>
                    <img className="mt-2 float-left " src={membershipImg} width="30" height="300" />
                    <h3 className="pt-3  text-zinc-600 font-bold">멤버십 시작 : 2022년 8월</h3>
                </div>
                <div className="m2_section">
                    <div className="border-solid mt-9 border-t-[1px] h-9 border-zinc-700">
                        <div className="flex justify-between">
                            <div className="m2_account_right">
                                <div className="text-zinc-500 text-xl pb-5 pt-5">멤버십 & 결제정보</div>
                                <div><button className="float-none w-56 pt-4 pb-4 rounded-md bg-gray-300">멤버십 해지</button></div>
                            </div>
                            <div>
                                <div className="flex justify-between w-full">
                                    <div className="pt-6 font-bold">1006pp@naver.com</div>
                                    <button>
                                        <div className="pt-6 pl-90 text-blue-500">계정 이메일 변경</div>
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="pr-96 pt-5 text-neutral-500">비밀번호 : ****************</div>
                                    <button>
                                        <div className="pl-90 pt-5 text-blue-500">계정 비밀번호 바꿈</div>
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="pr-80 pt-5 text-neutral-500">전화번호 : 010-1234-5678</div>
                                    <button>
                                        <div className="pl-90 pt-5 text-blue-500">전화번호 바꾸기</div>
                                    </button>
                                </div>
                                <div className="border-solid pl- mt-6 border-t-[1px] h-9 border-neutral-200"></div>
                                <div className="flex justify-between">
                                    <div>
                                        <img className="pt-4 w-7 float-left" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_kakaopay_2x.png" />
                                        <div className="pt-4 pl-10 font-bold ">jeoooo97@naver.com</div>
                                    </div>
                                    <button>
                                        <div className="pl-90 pt-5 text-blue-500">결제 정보 관리</div>
                                    </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="pt-5">다음 결제일은 2022년 9월 1일입니다.</div>
                                    <button>
                                        <div className="pl-90 pt-5 text-blue-500">예비 결제 수단 등록</div>
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <div className="pl-90 pt-5 text-blue-500">결제 상세 정보</div>
                                </div>
                                <div className="flex justify-end">
                                    <button>
                                        <div className="pl-90 pt-5 text-blue-500">결제일 변경</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="border-solid mt-9 border-t-[1px] h-2 border-zinc-700"></div>
                        <div className="flex justify-start mb-5">
                            <div className="text-zinc-500 text-xl  pb-5 pt-5">멤버십 상세정보</div>
                            <div className=" pt-6 pl-36 font-bold">베이식</div>
                            <button>
                                <div className="ml-[570px] text-blue-500">멤버십 변경</div>
                            </button>
                        </div>
                        <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-700"></div>
                        <div className="flex flex-wrap">
                            <div className=" text-zinc-500 text-xl pb-5">프로필 & 자녀 보호 설정</div>
                            <img
                                className="ml-20 w-14 rounded-md"
                                src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR2_CnwLC_fGf1EGaAxpU3cAzAwjj4q3yVg_n99iZREET5eSWAZ_B0kemHB5GOEPXtk7ekGULELzDrWZk4WCAULubeSwxTg_UQ.png?r=229"
                            />
                            <div className="pt-3 pl-5 ">
                                <h3 className="font-bold pb-2">박정수</h3>
                                <div className="text-gray-600 text-xs">모든 관람등급</div>
                            </div>
                            <button onClick={ onToggle1 }>
                                { isShow1 ? <img src={ slideUpButton } className="slideButton ml-[509px] w-8 h-7"></img> : <img src={ slideDownButton } className="slideButton ml-[509px] w-8 h-7"></img> }
                            </button>
                        </div>
                        <div className="border-solid ml-72 mt-6 border-t-[1px] h-9 border-neutral-400"></div>
                        { isShow1? <MyPageSlide_Sub/>: ''}
                        <div className="flex flex-wrap ml-56">
                            <img
                                className="ml-20 w-14 rounded-md"
                                src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABULvkIoX3Lsmb1j9ZGivfBory3qQ5p32A0lWmVmbGm2v2zJdJTNE3XCnqRbKOXhjcJsQijTuPlPo5QDZXjto885KBMbGWkheqg.png?r=1d4"
                            />
                            <div className="pt-3 pl-5">
                                <h3 className="font-bold pb-2">이어른</h3>
                                <div className="text-gray-600 text-xs">모든 관람등급</div>
                            </div>
                            <button onClick = { onToggle2 }>
                                {isShow2 ? <img src={slideUpButton} className="ml-[510px] w-8 h-7" /> : <img src={slideDownButton} className="ml-[510px] w-8 h-7" />}
                            </button>
                        </div>
                        
                        <div className="border-solid ml-72 mt-6 border-t-[1px] h-9 border-neutral-400"></div>
                        { isShow2 ? <MyPageSlide_Sub/> : ''}

                        <div className="flex flex-wrap ml-56">
                            <img
                                className="ml-20 w-14 rounded-md"
                                src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZgyZnNWMWbC0ToPJh3fckR_pd-zegBVlQ4CexqZz1pg6MzPqliR7LNySvHgpmKWgiIXzKKk7AyXS_A58rPBfItSuWoPMgBVaQ.png?r=bd7"
                            />
                            <div className="pt-3 pl-5 ">
                                <h3 className="font-bold pb-2">김어른</h3>
                                <div className="text-gray-600 text-xs">모든 관람등급</div>
                            </div>
                            <button onClick = { onToggle3 }>
                                { isShow3 ? <img src={  slideUpButton } className="ml-[510px] w-8 h-7" /> :<img src= { slideDownButton } className="ml-[510px] w-8 h-7" />}
                                
                            </button>
                        </div>
                        <div className="border-solid ml-72 mt-6 border-t-[1px] h-9 border-neutral-400"></div>
                        { isShow3 ? <MyPageSlide_Sub/> : '' }
                        <ul>
                            <li>
                                <div class="m2_user">
                                    <div className="flex flex-wrap ml-56 mb-5">
                                        <img
                                            className="ml-20 w-14 rounded-md"
                                            src="https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWG8kTfZ7jmDE0Q7j3amzJqHSu8-xZtnJ6JBhMqFIWA9GBXI8rVc-25IaVNxHfGAKx29HifG2wwygT7ogbGM9KShYBKyOGrYDg.png?r=11f"
                                        />
                                        <div className="pt-3 pl-5 ">
                                            <h3 className="font-bold pb-2">키즈당</h3>
                                            <div className="text-gray-600 text-xs">12+ 12+ 등급 이하</div>
                                        </div>
                                        <button onClick={ onToggle4 }>
                                            { isShow4 ? <img src={ slideUpButton } className="ml-[482px] w-8 h-7" /> : <img src={ slideDownButton } className="ml-[482px] w-8 h-7" />}
                                        </button>
                                    </div>
                                </div>
                                { isShow4 ? <MyPageSlide_Sub/> : '' }
                            </li>
                        </ul>
                        <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-700"></div> 
                        <div className = "m2_footer pb-40">
                            <div className = "pb-10 text-gray-500">질문이 있으신가요? 고객센터에 문의하세요.</div>
                            <div className = " flex justify-cnotent : space-x-40">
                                <a href = "">고객 센터</a>
                                <a href = "">음성 및 자막</a> {/* 유저 고르는 첫 화면으로 이동 */}
                                <a href = "">개인정보 처리방침</a>
                                <a href = "">이용 약관</a>
                            </div>
                            <div className = "">넷플릭스서비시스코리아 유한회사 통신판매업신고번호 : 제2018-서울종로-0426호 전화번호:</div>
                            <div className = ""></div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        /* screen`` */
    );
};



export default MyPage;