import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlockContents = () => {
    
    const[visible,setVisible] = useState(false)
    const[visible1,setVisible1] = useState(false)

    const openTab = () =>  {
        setVisible(!visible)
    }
    const openTab1 = () =>  {
        setVisible1(!visible1)
    }

    return (
        <div>
            <div class="k1-global-content">
                <div class="k1-container">
                    <h1 class="k1-kb-title">프로필 관람등급 설정 또는 콘텐츠 차단 방법</h1>
                    <div class="k1-pane-wrapper">
                        <div class="k1-left-pane">
                            <section dir="LTR" class="k1-kb-article kb-article-variant gradient" data-countries=",PR,PS,PT,PW,PY,QA,AD,AE,AF,AG,AI,AL,AM,AN,AO,AQ,AR,AS,AT,RE,AU,AW,AX,AZ,RO,BA,BB,RS,BD,BE,RU,BF,BG,RW,BH,BI,BJ,BL,BM,BN,BO,SA,BQ,SB,BR,SC,BS,SD,SE,BT,SG,BV,SH,BW,SI,SJ,BY,BZ,SK,SL,SM,SN,SO,CA,SR,CC,SS,ST,CD,SV,CF,CG,SX,CH,SY,CI,SZ,CK,CL,CM,CN,CO,TC,CR,TD,CU,TF,TG,CV,CW,TH,CX,CY,TJ,CZ,TK,TL,TM,TN,TO,TR,TT,DE,TV,TW,TZ,DJ,DK,DM,DO,UA,UG,DZ,UM,EC,US,EE,EG,EH,UY,UZ,VA,VC,ER,ES,VE,ET,VG,VI,VN,VU,FI,FJ,FK,FM,FO,FR,WF,GA,GB,WS,GD,GE,GF,GG,GH,GI,GL,GM,GN,GP,GQ,GR,GS,GT,GU,GW,GY,HK,HM,HN,HR,HT,YE,HU,ID,YT,IE,IL,IM,IN,IO,ZA,IQ,IR,IS,IT,ZM,JE,ZW,JM,JO,JP,KE,KG,KH,KI,KM,KN,KP,KR,KW,KY,KZ,LA,LB,LC,LI,LK,LR,LS,LT,LU,LV,LY,MA,MC,MD,ME,MF,MG,MH,MK,ML,MM,MN,MO,MP,MQ,MR,MS,MT,MU,MV,MW,MX,MY,MZ,NA,NC,NE,NF,NG,NI,NL,NO,NP,NR,NU,NZ,OM,PA,PE,PF,PG,PH,PK,PL,PM,PN,">
                                <div class="k1-page-block">
                                    <div class="k1-c-wrapper">
                                        <div>
                                            <p>프로필에 관람등급을 설정하는 경우, 해당 프로필에는 설정된 등급 이하에 해당하는 시리즈, 영화 및 게임만 표시됩니다. 또한 개별 프로필에서 특정 시리즈 또는 영화를 차단할 수도 있습니다. </p>
                                        </div>
                                        <div class="k1-accordion">
                                            <div class="k1-c-wrapper">
                                                <div class="k1-tab" data-id="HkgxxTUSrI" data-parent-id="page">
                                                    <div class="k1-tab-title">
                                                        <h2>
                                                            <span class="k1-c-caret"></span>
                                                            <Link to='' onClick={()=>openTab()}>
                                                            프로필에 관람등급 설정
                                                            </Link>
                                                        </h2>
                                                    </div>
                                                    { visible &&
                                                    <div class="k1-tab-content">
                                                        <div class="k1-c-wrapper">
                                                            <div>
                                                                <ol>         
                                                                    <li><p>웹 브라우저에서 <a target="_blank" href="https://www.netflix.com/YourAccount">계정</a> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li><p>관리하고자 하는 프로필의 <span class="NF_UIREF">프로필 & 자녀 보호 설정</span>을 엽니다. </p>
                                                                    </li>
                                                                    <li><p><span class="k1-NF_UIREF">시청 제한</span> 설정을 변경합니다. </p>
                                                                    </li>
                                                                    <li><p>넷플릭스 비밀번호를 입력합니다. </p>
                                                                    </li>
                                                                    <li><p>해당 프로필에서 허용하고자 하는 시리즈 및 영화의 <a href="https://help.netflix.com/node/2064">관람등급</a>을 설정합니다. </p>
                                                                        <div class="k1-note">
                                                                            <div class="k1-icon-wrap"><span class="k1-hcicon-uma-info icon"></span>참고</div>
                                                                            <div>게임 이용등급은 해당 프로필에 설정된 시리즈 또는 영화 관람등급에 맞추어 조정됩니다. <a href="https://help.netflix.com/ko/node/121877">넷플릭스의 게임 이용등급</a>에서 더 자세히 알아보세요. </div>
                                                                        </div>
                                                                    </li>
                                                                    <li><p><span class="k1-NF_UIREF">저장</span>을 선택합니다. 선택된 관람등급 이상의 시리즈, 영화 및 게임은 해당 프로필에서 삭제됩니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <p>키즈 프로필에서 관람등급을 변경하는 데 문제가 있는 경우 <a href="https://help.netflix.com/node/108211">넷플릭스 키즈 환경에서 관람등급 제한을 변경할 수 없음</a>을 참조하세요. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    }
                                                    
                                                </div>
                                                <div class="k1-tab" data-id="rJP39ALnL" data-parent-id="page">
                                                    <div class="k1-tab-title">
                                                        <h2>
                                                            <span class="k1-c-caret"></span>
                                                            <Link to='' onClick={()=>openTab1()}>
                                                            시리즈 또는 영화 차단 또는 차단 해제
                                                            </Link>
                                                        </h2>
                                                    </div>

                                                    { visible1 &&
                                                    <div class="k1-tab-content">
                                                        <div class="k1-c-wrapper">
                                                            <div>
                                                                <ol>
                                                                    <li><p>웹 브라우저에서 <a target="_blank" href="https://www.netflix.com/YourAccount">계정</a> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li><p>관리하고자 하는 프로필의 <span class="k1-NF_UIREF">프로필 & 자녀 보호 설정</span>을 엽니다. </p>
                                                                    </li>
                                                                    <li><p><span class="k1-NF_UIREF">시청 제한</span> 설정을 변경합니다. </p>
                                                                    </li>
                                                                    <li><p>넷플릭스 비밀번호를 입력합니다. </p>
                                                                    </li>
                                                                    <li><p><span class="k1-NF_UIREF">콘텐츠 제한 설정</span>에서 시리즈 또는 영화의 제목을 입력하고 해당 콘텐츠가 표시되면 클릭합니다. </p>
                                                                        <ul>
                                                                            <li><p>제한 목록에서 해당 콘텐츠를 삭제하려면 콘텐츠 제목 옆의 <span class="k1-NF_UIREF">X</span>를 선택합니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p><span class="k1-NF_UIREF">저장</span>을 선택합니다. <span class="k1-NF_UIREF">콘텐츠 제한 설정</span>에서 빨간색으로 표시된 목록의 시리즈 및 영화가 해당 프로필에서 삭제됩니다. </p>
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="k1-note">
                                                <div class="k1-icon-wrap"><span class="k1-hcicon-uma-info icon"></span>참고</div>
                                                <div>디바이스에서 업데이트된 설정이 작동하도록 하려면 디바이스를 새로 고침해야 할 수도 있습니다. 새로 고침: <br />– 다른 프로필로 전환했다가 다시 돌아옵니다. <br />– 또는 디바이스에서 로그아웃한 다음 다시 로그인합니다. </div>
                                            </div>
                                            <h3><a href="https://help.netflix.com/node/264">넷플릭스 자녀 보호 기능</a>을 최대한 활용하려면 반드시 <a href="https://help.netflix.com/node/114280">최신 자녀 보호 기능</a>을 사용해야 합니다. </h3>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div id="article-feedback-container"></div>
                        </div>
                        <div class="k1-right-pane">
                            <div class="k1-wrapper">
                                <div class="k1-page-block">
                                    <h3>추천 문서</h3>
                                    <ul class="k1-related-articles" data-tracking-id="f189f6ef-df51-441c-aed8-b85372518b14">
                                        <li class="k1-related-article">
                                            <a href="/ko/node/264" data-id="264" data-index="1">넷플릭스 자녀 보호 기능</a>
                                        </li>
                                        <li class="k1-related-article">
                                            <a href="/ko/node/114277" data-id="114277" data-index="2">프로필 PIN을 추가 또는 제거하는 방법</a>
                                        </li>
                                        <li class="k1-related-article">
                                            <a href="/ko/node/24805" data-id="24805" data-index="3">계정 수준 PIN을 관리하는 방법</a>
                                        </li>
                                        <li class="k1-related-article">
                                            <a href="/ko/node/114275" data-id="114275" data-index="4">특정 관람등급이 설정된 프로필 생성 방법</a>
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

export default BlockContents;