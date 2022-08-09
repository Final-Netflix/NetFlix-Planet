import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountSecurity = () => {

    const[visible1,setVisible1] = useState(false)
    const[visible2,setVisible2] = useState(false)
    const[visible3,setVisible3] = useState(false)
    const[visible4,setVisible4] = useState(false)
    const[visible5,setVisible5] = useState(false)
    const[visible6,setVisible6] = useState(false)

    const openTab1=()=>{
        setVisible1(!visible1)
    }
    const openTab2=()=>{
        setVisible2(!visible2)
    }
    const openTab3=()=>{
        setVisible3(!visible3)
    }
    const openTab4=()=>{
        setVisible4(!visible4)
    }
    const openTab5=()=>{
        setVisible5(!visible5)
    }
    const openTab6=()=>{
        setVisible6(!visible6)
    }



    return (
        <>
        <h1>계정 보안을 유지하는 방법</h1>
        <div className="k1-pane-wrapper">
            <div className="k1-left-pane">
                <div>
                    <div className="k1-page-block">
                        <div className="k1-c-wrapper">
                            <div>
                                <p>플래닛에서는 계정과 개인정보를 안전하게 보호하기 위해 몇 가지 사항을 권장하고 있습니다.</p>
                            </div>
                            <div>
                                <h2 className="font-bold mt-[40px] text-[24px] mb-[8px]">
                                    <strong>플래닛에 한정된 비밀번호 사용</strong>
                                </h2>
                                <p>
                                    다른 웹사이트 또는 앱에서 사용중인 비밀번호를 플레닛에서 사용하지 마세요.
                                    <br/>
                                </p>
                            </div>
                            <div>
                                <div className="k1-strong text-[16px] font-bold mb-[16px]">
                                    <strong>비밀번호는 다음과 같은 규칙을 따라야 합니다.</strong>
                                </div>
                                <div>
                                    <span datatype="RC" datatnid="112292">
                                        <div className="k1-page-block">
                                            <div className="k1-c-wrapper">
                                                <div>
                                                    <ul className="k2-ul">
                                                        <li className="k2-li">
                                                            <p>다른 웹사이트나 앱에서는 사용하지 않는 넷플릭스에 한정된 비밀번호</p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>8자 이상의 비밀번호</p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>문자(대문자 및 소문자), 숫자 및 기호가 조합된 비밀번호</p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>'password', '12345678' 또는 개인 정보(이름, 생일, 주소)와 같이 쉽게 추측 가능한 비밀번호는 사용하지 않음</p>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                        비밀번호 관리자를 이용하면 간편하게 고유한 비밀번호를 추적할 수 있습니다.
                                                        <br />
                                                        &nbsp;
                                                        <br />
                                                        고객은 
                                                        <a target="_black"> 계정 </a>
                                                        페이지에서 비밀번호를 업데이트하거나, 
                                                        <a target="_black"> 본인에게 비밀번호 재설정 이메일 또는 문자 메시지를 전송</a>
                                                        할 수 잇습니다.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h2 className="k2-gita mt-[40px] text-[24px] font-bold mb-[8px] line-through-[30px]">
                                    <strong>기타 취해야 할 조치</strong>
                                </h2>
                            </div>
                            <div className="k1-accordion mt-[20px]">
                                <div className="k1-c-wrapper">
                                    <div className="k1-tab level-1 open" >
                                        <div className="k1-tab-title open">
                                            <h2>
                                                <a role="button" className="k1-button">
                                                    <Link to='' role="k1-button" onClick={()=>openTab1()}>
                                                    <span className="k1-c-caret"></span>
                                                    신원 도용 또는 의심스러운 활동 신고
                                                    </Link>
                                                </a>
                                            </h2>
                                        </div>
                                        {

                                        visible1 &&

                                        <div className="k1-tab-content">
                                            <div className="k1-c-wrapper">
                                                <div>
                                                    <p>
                                                        넷플릭스에서는 사기 행위를 심각하게 생각합니다. 의심스럽거나 알 수 없는 청구 내역 또는 무단 계정 활동을 발견하는 경우
                                                        <a>고객센터에 문의</a>
                                                        하세요. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        }

                                    </div>
                                    
                                    <div className="k1-tab level-1 open" >
                                        <div className="k1-tab-title open">
                                            <h2>
                                                <a role="k1-button">
                                                <Link to='' role="button" onClick={()=>openTab2()}>
                                                    <span className="k1-c-caret"></span>
                                                    비밀번호 복구용 전화번호 등록
                                                </Link>    
                                                </a>
                                            </h2>
                                        </div>
                                        
                                        {

                                        visible2 &&

                                        <div className="k1-tab-content">
                                            <div className="k1-c-wrapper">
                                                <div>
                                                    <p>
                                                        계정에 전화번호를 등록하여, 비밀번호를 잊은 경우 비밀번호를 복구할 수 있도록 하세요. 전화번호를 추가하거나 업데이트하려면
                                                        <a>비밀번호 복구를 위한 전화번호 설정 방법</a>
                                                        을 참조하세요. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        }

                                    </div>
                                    <div className="k1-tab level-1 open" >
                                        <div className="k1-tab-title open">
                                            <h2>
                                                <a role="k1-button">
                                                    <Link to='' role="button" onClick={()=>openTab3()}>
                                                    <span className="k1-c-caret"></span>
                                                    사용하지 않는 디바이스에서 로그아웃
                                                    </Link>
                                                </a>
                                            </h2>
                                        </div>

                                        {

                                        visible3 &&

                                        <div className="k1-tab-content">
                                            <div className="k1-c-wrapper">
                                                <div>
                                                    <p>
                                                        넷플릭스를 시청하는 데 사용하던 디바이스를 처분했나요? 넷플릭스를 포함하여 해당 디바이스에서 사용했던 모든 계정 또는 서비스에서 반드시 로그아웃해야 합니다.
                                                        <br />
                                                        디바이스를 더 이상 가지고 있지 않은 경우, 계정 페이지에서 
                                                        <a>모든 디바이스에서 로그아웃</a>
                                                        할 수 있습니다. 사용하고자 하는 디바이스에서 다시 로그인해야 합니다. 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        }

                                    </div>
                                    <div className="k1-tab level-1 open" >
                                        <div className="k1-tab-title open">
                                            <h2>
                                                <a role="k1-button">
                                                    <Link to='' role="k1-button" onClick={()=>openTab4()}>
                                                    <span className="k1-c-caret"></span>
                                                    가짜 메시지 및 웹사이트(피싱)에 유의
                                                    </Link>
                                                </a>
                                            </h2>
                                        </div>

                                        {

                                        visible4 && 

                                        <div className="k1-tab-content">
                                            <div className="k1-c-wrapper">
                                                <div>
                                                    <p>
                                                    피싱이란 온라인에서 신뢰할 수 있는 웹사이트나 회사로 가장하여 사용자의 개인정보를 훔치려는 시도를 가리킵니다.
                                                    <br />
                                                    <br />
                                                    피싱 조직들은 사용자의 계정을 도용하거나 개인정보를 훔치기 위해 수단과 방법을 가리지 않습니다. 넷플릭스와 비슷하게 위조된 웹사이트를 만들거나 넷플릭스를 사칭하는 이메일 또는 문자 메시지를 보내서 개인정보를 요구하기도 합니다.
                                                    <br />
                                                    <br />
                                                    피싱 메시지를 수신했거나 피싱 웹사이트를 방문했나요?
                                                        <a>플래닛이라고 주장하는 발신자로부터 피싱 또는 의심스러운 이메일이나 문자 메시지를 받았습니다</a>
                                                        를 참조하세요.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        }

                                    </div>
                                    <div className="k1-tab level-1 open" >
                                        <div className="k1-tab-title open">
                                            <h2>
                                                <a role="button">
                                                    <Link to='' role="button" onClick={()=>openTab5()}>
                                                    <span className="k1-c-caret"></span>
                                                    컴퓨터를 안전하게 보호
                                                    </Link>
                                                </a>
                                            </h2>
                                        </div>
                                        {

                                        visible5 &&

                                        <div className="k1-tab-content">
                                            <div className="k1-k2-c-wrapper">
                                                <div>
                                                    <p>
                                                    악성 코드 및 바이러스로부터 컴퓨터를 안전하게 보호하세요. 컴퓨터가 악성 코드 또는 바이러스에 감염되면 다음과 같은 증상이 나타납니다.
                                                    <ul>
                                                        <li className="k2-li">
                                                            <p>비정상적으로 느려진 컴퓨터 성능</p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>스트르밍 중 팝업 창 또는 광고 표시</p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>예기치 않은 재부팅, 충돌 또는 멈춤</p>
                                                        </li>
                                                    </ul>    
                                                    <p>컴퓨터가 감염되었다고 생각되면, 컴퓨터 제조업체 또는 신뢰할 수 있는 IT 전문가가 권장하는 악성 코드 백신, 애드웨어 백신 또는 바이러스 백신 소프트웨어를 사용하세요.</p>
                                                    <br/>
                                                    <br/>
                                                    <p>넷플릭스에서 특정 소프트웨어를 추천하지는 않지만, 넷플릭스 지원팀 엔지니어들이 바이러스 및 악성코드를 삭제할 때 사용한 프로그램을 몇 가지 소개하고자 합니다.</p>
                                                    <ul>
                                                        <li className="k2-li">
                                                            <p>
                                                                <a className="k2-a text-[red]" target="_blank" href="http://secure.lavasoft.com/products/ad_aware_free.php">
                                                                    Ad-Aware
                                                                </a>
                                                                (Windows)
                                                            </p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>
                                                                <a className="k2-a text-[red]" target="_blank" href="http://sophos.com/products/free-tools/virus-removal-tool.aspx">
                                                                    Sophos
                                                                </a>
                                                                (Windows, Mac)
                                                            </p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>
                                                                <a className="k2-a text-[red]" target="_blank" href="https://trendmicro.com">
                                                                    Trend Micro
                                                                </a>
                                                                (Windows, Mac)
                                                            </p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>
                                                                <a className="k2-a text-[red]" target="_blank" href="https://www.f-secure.com/">
                                                                    F-Secure
                                                                </a>
                                                                (Windows, Mac)
                                                            </p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>
                                                                <a className="k2-a text-[red]" target="_blank" href="https://www.norton.com">
                                                                    Norton
                                                                </a>
                                                                (Windows, Mac)
                                                            </p>
                                                        </li>
                                                        <li className="k2-li">
                                                            <p>
                                                                <a className="k2-a text-[red]" target="_blank" href="http://www.malwarebytes.org/">
                                                                    Malwarebytes
                                                                </a>
                                                                (Windows)
                                                            </p>
                                                        </li>
                                                    </ul>
                                                    <p>
                                                    새로운 바이러스 및 악성코드가 계속해서 만들어지고 있다는 점에 유의하세요. 어떤 프로그램을 선택하여 사용하든 항상 최신 버전으로 업데이트합니다.
                                                    </p>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        }

                                    </div>
                                    <div className="k1-tab level-1 open" >
                                        <div className="k1-tab-title open">
                                            <h2>
                                                <a role="k1-button">
                                                    <Link to='' role="button" onClick={()=>openTab6()}>
                                                    <span className="k1-c-caret"></span>
                                                    보함 결함 발견 시 플래닛에 신고
                                                    </Link>
                                                </a>
                                            </h2>
                                        </div>
                                        
                                        {

                                        visible6 && 

                                        <div className="k1-tab-content">
                                            <div className="k1-c-wrapper">
                                                <div>
                                                    <p>
                                                        넷플릭스 콘텐츠 또는 앱에서 보안 취약성을 발견한 경우, 가능한 빠른 시일 내에 넷플릭스의 
                                                        <a>버그 신고 보상제</a>
                                                        를 통해 신고하세요. 해당 취약성이 해결될 때까지 이 문제를 타인에게 알리지는 말아주세요. 도움을 주셔서 감사합니다. 넷플릭스에서는 모든 문제 신고를 검토하여 적절한 시간 내에 문제를 해결하기 위해 최선을 다할 것입니다.
                                                        <br/>
                                                        <br/>
                                                        자세한 내용은 
                                                        <a>전체 책임 공개 정책</a>
                                                        을 참조하세요.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        }

                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>
                                    개인정보 보호에 대한 내용은 넷플릭스의 
                                    <a target="_blank">
                                        개인정보 처리방침
                                    </a>
                                    을 참조하세요.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="k1-article-feedback-container">
                        <div className="k1-article-feedback">
                            <div className="k1-feedback-prompt">
                                <div className="k1-feedback-header">
                                    <strong>이 문서가 도움이 되었나요?</strong>
                                </div>
                                <div className="k1-prompt-buttons">
                                    <button className="k1-h-btn k1-btn-link">예</button>
                                    <button className="k1-h-btn k1-btn-link">아니요</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="k1-right-pane">
                    <div className="K1-wrapper">
                        <div className="K1-page-block">
                            <h3>추천 문서</h3>
                            <ul className="K1-related-articles mb-4">
                                <li className="K1-related-article list-disc ml-5">
                                    <a className="text-[18px] underline">프로필 생성 및 수정 방법</a>
                                </li>
                            </ul>
                            <ul className="K1-related-articles mb-4">
                                <li className="K1-related-article list-disc ml-5">
                                    <a className="text-[18px] underline">비밀번호 복구를 위한 전화번호 설정 방법</a>
                                </li>
                            </ul>
                            <ul className="K1-related-articles mb-4">
                                <li className="K1-related-article list-disc ml-5">
                                    <a className="text-[18px] underline">시청 기록에서 컨텐츠를 숨기는 방법</a>
                                </li>
                            </ul>
                            <ul className="K1-related-articles mb-4">
                                <li className="K1-related-article list-disc ml-5">
                                    <a className="text-[18px] underline">플래닛에서 언어를 변경하는 방법</a>
                                </li>
                            </ul>
                            <ul className="K1-related-articles mb-4">
                                <li className="K1-related-article list-disc ml-5">
                                    <a className="text-[18px] underline">PayPal 청구 ID 또는 결제 ID 찾기</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default AccountSecurity;