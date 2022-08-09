import React from 'react';
import membershipImg from '../../image/my_page/membershipImg.png';
import downButton from '../../image/my_page/downButton.png'

const MyPage = () => {
    return (
        <div className="m2_screen"> {/* 배경색이 gray인데 전체 페이지가 먹지 않음. 거슬려서 bg-gray-100 일단 주석처리함 */}
            <div className="m2_header bg-[#141414] h-24">
                <div className="italic pt-6 py-3 pl-9 text-red-600 text-4xl font-semibold">
                    PLANET
                    <img className="w-9 rounded-md float-right mr-20 mt-1" src="https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABV5dFVMUR0LX_jOm4VTxM-V5Y4vPHyzKkyCDSLeysR0X3wxYU65NJOYWf7DVXfDR_2wKh6wCO6MO9tA63XkD9Y5qDnLyQ0U.png?r=bd7"></img>
                </div>
            </div>

            <div className="m2_container px-32 py-8">
                <div className="m2_section_top">
                    <h1 className="text-4xl float-left pr-6">계정</h1>
                    <img className="mt-2 float-left " src={membershipImg} width='30' height='300' />
                    <h3 className="pt-3  text-zinc-600 font-bold">멤버십 시작 : 2022년 8월</h3>
                </div>
                <div className="m2_section">
                    <div className="border-solid mt-9 border-t-[1px] h-9 border-zinc-700">
                        <div className='flex justify-between'>
                            <div className='m2_account_right'>
                                <div className="text-zinc-500 text-xl pb-5 pt-5">멤버십 & 결제정보</div>
                                <div><button className="float-none w-56 pt-4 pb-4 rounded-md bg-gray-300">멤버십 해지</button></div>
                            </div>
                            <div>
                                    <div className="flex justify-between w-full">
                                        <div className = "pt-6 font-bold">1006pp@naver.com</div>
                                        <button>
                                            <div className = "pt-6 pl-90 text-blue-500">계정 이메일 변경</div>
                                        </button>
                                    </div>
                                    
                                    <div className="flex justify-between">
                                        <div className = "pr-96 pt-5 text-neutral-500">비밀번호 : ****************</div>
                                        <button>
                                            <div className = "pl-90 pt-5 text-blue-500">계정 비밀번호 바꿈</div>
                                        </button>
                                    </div>

                                    <div className="flex justify-between">
                                        <div className = "pr-80 pt-5 text-neutral-500">전화번호 : 010-1234-5678</div>
                                        <button>
                                            <div className = "pl-90 pt-5 text-blue-500">전화번호 바꾸기</div>
                                        </button>
                                    </div>

                                <div className="border-solid pl- mt-6 border-t-[1px] h-9 border-neutral-200"></div>
                                
                                <div className="flex justify-between">
                                        <div>
                                            <img className = "pt-4 w-7 float-left" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/icon_kakaopay_2x.png"></img>
                                            <div className="pt-4 pl-10 font-bold ">jeoooo97@naver.com</div>
                                        </div>
                                        <button>
                                            <div className = "pl-90 pt-5 text-blue-500">결제 정보 관리</div>
                                        </button>
                                </div>
                                <div className="flex justify-between">
                                    <div className="pt-5">다음 결제일은 2022년 9월 1일입니다.</div>
                                    <button>
                                        <div className = "pl-90 pt-5 text-blue-500">예비 결제 수단 등록</div>
                                    </button>
                                </div>
                                <div className="flex justify-end">
                                    <div className = "pl-90 pt-5 text-blue-500">결제 상세 정보</div>
                                </div>
                                <div className="flex justify-end">
                                    <button>
                                        <div className = "pl-90 pt-5 text-blue-500">결제일 변경</div>
                                    </button>
                                </div>
                            </div>
                        </div>
                            <div className="border-solid mt-9 border-t-[1px] h-2 border-zinc-700"></div>
                            <div className="flex justify-start mb-5">
                                <div className="text-zinc-500 text-xl  pb-5 pt-5">멤버십 상세정보</div>
                                <div className = " pt-6 pl-36 font-bold">베이식</div>
                                <button>
                                    <div className = "ml- text-blue-500">멤버십 변경</div>
                                </button>    
                            </div>
                            <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-700"></div>

                            <div className = "flex flex-wrap">
                                <div className=" text-zinc-500 text-xl pb-5">프로필 & 자녀 보호 설정</div>
                                        <img className = "ml-20 w-14 rounded-md" src = "https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABR2_CnwLC_fGf1EGaAxpU3cAzAwjj4q3yVg_n99iZREET5eSWAZ_B0kemHB5GOEPXtk7ekGULELzDrWZk4WCAULubeSwxTg_UQ.png?r=229"></img>
                                        <div className = "pt-3 pl-5 ">
                                            <h3 className = "font-bold pb-2">박정수</h3>
                                            <div className = "text-gray-600 text-xs">모든 관람등급</div>
                                        </div>
                                            <button>
                                                <img src ={downButton} className= "ml-[500px] w-8 h-7"></img>
                                            </button> 
                            </div>
                                    <div className="border-solid ml-72 mt-6 border-t-[1px] h-9 border-neutral-400"></div>
                                        
                                        <div className = "flex flex-wrap ml-56">
                                            <img className = "ml-20 w-14 rounded-md" src = "https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABULvkIoX3Lsmb1j9ZGivfBory3qQ5p32A0lWmVmbGm2v2zJdJTNE3XCnqRbKOXhjcJsQijTuPlPo5QDZXjto885KBMbGWkheqg.png?r=1d4"></img>
                                            <div className = "pt-3 pl-5">
                                                    <h3 className = "font-bold pb-2">이어른</h3>
                                                    <div className = "text-gray-600 text-xs">모든 관람등급</div>
                                            </div>
                                                    <button>
                                                        <img src ={downButton} className= "ml-[500px] w-8 h-7"></img>
                                                    </button> 
                                        </div>
                                    <div className="border-solid ml-72 mt-6 border-t-[1px] h-9 border-neutral-400"></div>
                                        
                                        <div className = "flex flex-wrap ml-56">
                                            <img className = "ml-20 w-14 rounded-md" src = "https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABZgyZnNWMWbC0ToPJh3fckR_pd-zegBVlQ4CexqZz1pg6MzPqliR7LNySvHgpmKWgiIXzKKk7AyXS_A58rPBfItSuWoPMgBVaQ.png?r=bd7"></img>
                                            <div className = "pt-3 pl-5 ">
                                                    <h3 className = "font-bold pb-2">김어른</h3>
                                                    <div className = "text-gray-600 text-xs">모든 관람등급</div>
                                            </div>
                                                    <button>
                                                        <img src ={downButton} className= "ml-[500px] w-8 h-7"></img>
                                                    </button> 
                                        </div>
                                    <div className="border-solid ml-72 mt-6 border-t-[1px] h-9 border-neutral-400"></div>
                                       <ul>
                                            <li>
                                                <div class = "m2_user">
                                                    <div className = "flex flex-wrap ml-56 mb-10">
                                                        <img className = "ml-20 w-14 rounded-md" src = "https://occ-0-325-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWG8kTfZ7jmDE0Q7j3amzJqHSu8-xZtnJ6JBhMqFIWA9GBXI8rVc-25IaVNxHfGAKx29HifG2wwygT7ogbGM9KShYBKyOGrYDg.png?r=11f"></img>
                                                        <div className = "pt-3 pl-5 ">
                                                                <h3 className = "font-bold pb-2">키즈당</h3>
                                                                <div className = "text-gray-600 text-xs">12+ 12+ 등급 이하</div>
                                                        </div>
                                                                <button>
                                                                    <img src ={downButton} className= "ml-[473px] w-8 h-7"></img>
                                                                </button> 
                                                    </div>
                                                </div>
                                                <ul className = "m2_user2 link">
                                                    <li className = "m2_list1 flex justify-between w-full">
                                                            <div className="m2_user_Main "></div>
                                                                <div className = " pt-6 ">언어
                                                                    <h3 className = "pt-3 text-sm">한국어</h3>
                                                                </div>
                                                                <button>
                                                                    <div className = "flex justify-end w-full text-blue-500">변경</div>
                                                                </button>
                                                            
                                                    </li>
                                                    
                                                    <div className="border-solid ml-[45%] mt-4 border-t-[1px] h-7 border-neutral-400"></div>
                                                    
                                                    <li className = "m2_list1 flex justify-between w-full">
                                                            <div className="m2_user_Main"></div>
                                                                <div className = " pl-[7%]">시청제한
                                                                    <h3 className = "pt-3 text-sm">12+12+ 등급 이하.</h3>
                                                                </div>
                                                                <button>
                                                                    <div className = "flex justify-end text-blue-500">변경</div>
                                                                </button>
                                                            
                                                    </li>

                                                    <div className="border-solid ml-[45%] mt-4 border-t-[1px] h-7 border-neutral-400"></div>

                                                    <li className = "m2_list1 flex justify-between w-full">
                                                            <div className="m2_user_Main"></div>
                                                                <div className = "pl-10">프로필 잠금
                                                                    <h3 className = "pt-3 text-sm">꺼짐</h3>
                                                                </div>
                                                                <button>
                                                                    <div className = "flex justify-end w-full text-blue-500">변경</div>
                                                                </button>
                                                            
                                                    </li>

                                                    <div className="border-solid ml-[45%] mt-3 border-t-[1px] h-7 border-neutral-400"></div>

                                                    <li className = "m2_list1 flex justify-between w-full">
                                                            <div className="m2_user_Main"></div>
                                                                <div className = "pl-[2%]">시청기록
                                                                    
                                                                </div>
                                                                <button>
                                                                    <div className = "flex justify-end w-full text-blue-500">보기</div>
                                                                </button>
                                                            
                                                    </li>

                                                    <div className="border-solid ml-[45%] mt-6 border-t-[1px] h-9 border-neutral-400"></div>

                                                    <li className = "m2_list1 flex justify-between w-full">
                                                            <div className="m2_user_Main"></div>
                                                                <div className = "pt-6 ">평가한 콘텐츠
                                                                    <h3 className = "pt-3 text-sm"></h3>
                                                                </div>
                                                                <button>
                                                                    <div className = "flex justify-end w-full text-blue-500">보기</div>
                                                                </button>
                                                            
                                                    </li>
                                                    
                                                    <div className="border-solid ml-[45%] mt-6 border-t-[1px] h-9 border-neutral-400"></div>

                                                     <li className = "m2_list1 flex justify-between w-full">
                                                            <div className="m2_user_Main"></div>
                                                                <div className = "pt-6 ">재생 설정
                                                                    <h3 className = "pt-3 text-sm">다음화 자동 재생. 미리보기 자동 재생. 자동 설정된 화질 및 음질</h3>
                                                                </div>
                                                                <button>
                                                                    <div className = "flex justify-end w-full text-blue-500">변경</div>
                                                                </button>
                                                            
                                                    </li>
                                                    <div className = ""></div>
                                                </ul>
                                            </li>
                                        </ul> 
                                    <div className="border-solid pb-10 border-t-[1px] h-2 border-zinc-700"></div>
                    </div>
                </div>
            </div> 
        </div> /* screen */
    );
};



export default MyPage;