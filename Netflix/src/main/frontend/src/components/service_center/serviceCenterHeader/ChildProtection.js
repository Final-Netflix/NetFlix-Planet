import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ChildProtection = () => {
    return (
        <div>

            <div className="k1-global-content">
                <div className="k1-container">
                    <div className="k1-breadcrumb-container">
                        <ul className="k1-breadcrumb">
                            <li>
                                <a href="/ko">
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="16.3515625 11.1015625 16.3515625 12.25 9.2421875 12.25 12.4960938 15.53125 11.6757812 16.3515625 7 11.6757812 11.6757812 7 12.4960938 7.8203125 9.2421875 11.1015625"></polygon>
                                    </svg>
                                    고객 센터 홈으로 돌아가기
                                </a>
                            </li>
                        </ul>
                    </div>

                    <h1 className="k1-kb-title">플래닛 자녀 보호 기능</h1>

                    <div className="k1-pane-wrapper">
                        <div className="k1-left-pane">
                            <section
                                dir="LTR"
                                className="k1-kb-article k2-kb-article-variant k2-gradient"
                                data-countries=",PR,PS,PT,PW,PY,QA,AD,AE,AF,AG,AI,AL,AM,AN,AO,AQ,AR,AS,AT,RE,AU,AW,AX,AZ,RO,BA,BB,RS,BD,BE,RU,BF,BG,RW,BH,BI,BJ,BL,BM,BN,BO,SA,BQ,SB,BR,SC,BS,SD,SE,BT,SG,BV,SH,BW,SI,SJ,BY,BZ,SK,SL,SM,SN,SO,CA,SR,CC,SS,ST,CD,SV,CF,CG,SX,CH,SY,CI,SZ,CK,CL,CM,CN,CO,TC,CR,TD,CU,TF,TG,CV,CW,TH,CX,CY,TJ,CZ,TK,TL,TM,TN,TO,TR,TT,DE,TV,TW,TZ,DJ,DK,DM,DO,UA,UG,DZ,UM,EC,US,EE,EG,EH,UY,UZ,VA,VC,ER,ES,VE,ET,VG,VI,VN,VU,FI,FJ,FK,FM,FO,FR,WF,GA,GB,WS,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,YE,HU,ID,YT,IE,IL,IM,IN,IO,ZA,IQ,IR,IS,IT,ZM,JE,ZW,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,"
                            >
                                <div className="k1-page-block">
                                    <div className="k1-c-wrapper">
                                        <div>
                                            <p className="k1-p text-[16px] mb-[16px]">
                                                자녀가 시청할 수 있는 TV 프로그램과 영화 또는 플레이할 수 있는 게임의 유형을 선택하려면, 자녀의 프로필을 개별적으로 관리하거나 
                                                <span className="NF_UIREF font-bold"> 넷플릭스 키즈 </span> 
                                                환경으로 프로필을 생성할 수 있습니다.
                                            </p>
                                            <div className="k1-note relative">
                                                <div className="k1-icon-wrap absolute "><span className="hcicon-uma-info icon font-bold"></span>참고</div>
                                                <div><span className="k1-NF_UIREF font-bold pl-[40px]">플래닛 키즈</span> 환경을 사용하는 프로필에는 <span className="NF_UIREF font-bold">넷플릭스 게임</span>이 표시되지 않습니다.</div>
                                            </div>
                                            <h3 className="mt-[40px] text-[18px] font-bold mb-[30px]">자녀 보호 기능 사용 시작하기</h3>
                                            <ol className="k1-ol">
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] font-bold">
                                                         <a class="k1-aa" href="https://help.netflix.com/ko/node/114275">어린이 전용 프로필 생성</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] font-bold">
                                                         <a class="k1-aa" href="https://help.netflix.com/ko/node/114276">프로필 관람등급 설정 또는 콘텐츠 차단 방법</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] font-bold">
                                                         <a class="k1-aa" href="https://help.netflix.com/ko/node/114277">내 프로필 또는 계정의 다른 프로필 잠금</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] font-bold">
                                                         <a class="k1-aa" href="https://help.netflix.com/ko/node/122551">새로운 프로필 추가 시 PIN 요구</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] font-bold">
                                                         <a class="k1-aa" href="https://help.netflix.com/ko/node/2102">자동 재생 활성화 또는 비활성화</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] font-bold">
                                                         <a class="k1-aa" target="_blank" href="https://help.netflix.com/ko/node/101917">개별 프로필의 시청 기록 액세스</a>
                                                    </p>
                                                </li>
                                            </ol>
                                            <p></p>
                                            <h3 className="mt-[40px] text-[18px] font-bold mb-[30px]">관련 문서</h3>
                                            <ul>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px] ">
                                                        <a  href="https://help.netflix.com/ko/node/114280">최신 자녀 보호 기능 이용 방법</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px]">
                                                        <a href="https://help.netflix.com/ko/node/2064">넷플릭스의 TV 프로그램 및 영화 관람등급</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px]">
                                                        <a href="https://help.netflix.com/ko/node/121877">넷플릭스 게임 이용등급</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px]">
                                                        <a target="_blank" href="https://help.netflix.com/ko/node/24805">계정 수준 PIN 관리</a><br />
                                                    </p>
                                                </li>
                                            </ul>
                                            <h3 className="mt-[40px] text-[18px] font-bold mb-[30px]">문제 해결</h3>
                                            <ul>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px]">
                                                        <a href="https://help.netflix.com/ko/node/114833">넷플릭스 키즈 환경을 사용할 수 없는 이유는 무엇인가요? </a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px]">
                                                        <a href="https://help.netflix.com/ko/node/108211">넷플릭스 키즈 환경에서 관람등급 제한을 변경할 수 없음</a>
                                                    </p>
                                                </li>
                                                <li>
                                                    <p className="k1-p text-[16px] mb-[16px]">
                                                        <a href="https://help.netflix.com/ko/node/114781">프로필 잠금 PIN을 입력하라는 메시지가 표시되지 않음</a>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <div id="k1-article-feedback-container"></div>
                        </div>

                        <div className="k1-right-pane">
                            <div className="k1-wrapper">
                                <div className="k1-page-block">
                                    <h3>추천 문서</h3>
                                    <ul className="k1-related-articles" data-tracking-id="5fb09f44-dafe-4a56-8023-ba523a04d375">
                                        <li className="k1-related-article">
                                            <a href="/ko/node/24805" data-id="24805" data-index="1">계정 수준 PIN을 관리하는 방법</a>
                                        </li>
                                        <li className="k1-related-article">
                                            <a href="/ko/node/10421" data-id="10421" data-index="2">프로필 생성 및 수정 방법</a>
                                        </li>
                                        <li className="k1-related-article">
                                            <a href="/ko/node/102377" data-id="102377" data-index="3">넷플릭스 시작하기</a>
                                        </li>
                                        <li className="k1-related-article">
                                            <a href="/ko/node/412" data-id="412" data-index="4">넷플릭스 소개</a>
                                        </li>
                                        <li className="k1-related-article">
                                            <a href="/ko/node/22205" data-id="22205" data-index="5">시청 기록에서 콘텐츠를 숨기는 방법</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
    );
};

export default ChildProtection;