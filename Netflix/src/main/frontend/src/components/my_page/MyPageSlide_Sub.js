import React from 'react';

const MyPageSlide_Sub = () => {
    return (
        <div>
            <div className="user_slideMenu pl-[20px] pt-[-30%]">
                <ul className="m2_user2 link">
                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[45%] pt-6 ">
                            시청제한
                            <h3 className="pt-3 pb-2 text-xs text-gray-600">제한없음.</h3>
                        </div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">변경</div>
                        </button>
                    </li>

                    <div className="border-solid ml-[45%] mt-3 border-t-[1px] h-1 border-neutral-400"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[45%] pt-6 ">
                            프로필 잠금
                            <h3 className="pt-3 text-xs pb-2 text-gray-600">꺼짐</h3>
                        </div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">변경</div>
                        </button>
                    </li>
                    <div className="border-solid ml-[45%] mt-3 border-t-[1px] h-1 border-neutral-400"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[45%] pt-7 pb-7">시청기록</div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">보기</div>
                        </button>
                    </li>
                    <div className="border-solid ml-[45%] mt-3 border-t-[1px] h-1 border-neutral-400"></div>

                    <li className="m2_list1 flex justify-between w-full">
                        <div className="pl-[45%] pt-7 pb-7 ">평가한 콘텐츠</div>
                        <button>
                            <div className="flex justify-end w-full text-blue-500">보기</div>
                        </button>
                    </li>
                    <div className="border-solid ml-[45%] mt-3 border-t-[1px] h-1 border-neutral-400"></div>

                    <li className="m2_list1 flex justify-between w-full pb-6">
                        <div className="pl-[45%] pt-6 ">
                            재생 설정
                            <h3 className="pt-3 text-xs text-gray-600">다음 화 자동 재생, 미리보기 자동 재생, 자동 설정된 화질 및 음질.</h3>
                        </div>
                        <button>
                            <div className=" flex justify-end w-full text-blue-500">변경</div>
                        </button>
                    </li>
                </ul>
            </div>
            {/* user_slideMenu */}
        </div>

    );
};

export default MyPageSlide_Sub;

