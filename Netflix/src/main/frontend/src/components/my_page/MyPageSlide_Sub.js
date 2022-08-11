import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MyPageNewProfileEmail from './MyPageNewProfileEmail';

const MyPageSlide_Sub = () => {
    const [visible, setVisible] = useState(0);

    return (
        <div>
            <div className="user_slideMenu pl-[20px]">
                <ul className="m2_user2 link">

                <li className="m2_list1 flex justify-between w-full">
                    <div className="pl-[20%] pt-1 pb-7">프로필 이메일</div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">추가</div>
                        </button>
                </li>
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>
                    
                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-6 ">
                            시청제한
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">꺼짐</h3>
                        </div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">변경</div>
                        </button>
                    </li>

                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-6 ">
                            프로필 잠금
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">꺼짐</h3>
                        </div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">변경</div>
                        </button>
                    </li>
                    
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>
                    
                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-8 pb-7">시청기록</div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">보기</div>
                        </button>
                    </li>
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-8 pb-7">평가한 콘텐츠</div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">보기</div>
                        </button>
                    </li>
                    <div className="border-solid ml-[20%] mt-3 border-t-[1px] h-1 border-neutral-300"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[20%] pt-6 ">
                            재생 설정
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">다음 화 자동 재생, 미리보기 자동 재생, 자동 설정된 화질 및 음질.</h3>
                        </div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">변경</div>
                        </button>
                    </li>
                     <div className="border-solid ml-[50px] mt-6 border-t-[1px] h-9 border-neutral-300"></div>
                
                </ul>
            </div>
            {/* user_slideMenu */}
        </div>
    );
};

export default MyPageSlide_Sub;

