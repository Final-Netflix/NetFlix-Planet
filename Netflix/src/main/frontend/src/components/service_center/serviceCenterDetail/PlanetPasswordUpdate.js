import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanetPasswordUpdate = () => {
    const[visible1,setVisible1] = useState(false)
    const[visible2,setVisible2] = useState(false)
    const[visible3,setVisible3] = useState(false)
    const openTab1=()=>{
        setVisible1(!visible1)
    }
    const openTab2=()=>{
        setVisible2(!visible2)
    }
    const openTab3=()=>{
        setVisible3(!visible3)
    }

    return (
        <div className='k1-page-article'>
            <h1 className='k1-kb-title'>넷플릭스 비밀번호를 변경하는 방법</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div className='k1-c-wrapper'>
                                <div>
                                    <p>
                                        넷플릭스에 로그인할 수 없는 경우 이메일 또는 문자 메시지(
                                        <Link to=''>
                                            계정에 전화번호를 추가
                                        </Link>
                                        한 경우)로 비밀번호를 재설정할 수 있습니다. 넷플릭스에 등록한 이메일 주소 또는 전화번호가 기억나지 않는 경우, 온라인으로 추가 정보를 제공하여 계정을 복구할 수 있습니다.
                                    </p>
                                </div>
                                <div className='k1-accordion'>
                                    <div className='k1-c-wrapper'>
                                        <div className='k1-tab'>
                                            <div className='k1-tab-title'>
                                                <h2>
                                                    <Link to='' role="button" onClick={()=>openTab1()}>
                                                        <span className="k1-c-caret"></span>이메일을 수신하여 비밀번호를 재설정하기
                                                    </Link>
                                                </h2>
                                            </div>
                                            {
                                                visible1 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <ol>
                                                                    <li><p><Link to=''>netflix.com/loginhelp</Link> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li><p><span classNAme="k1-NF_UIREF">이메일</span>을 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>이메일 주소를 입력하고 <span className="k1-NF_UIREF">이메일로 받기</span>를 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>수신된 비밀번호 재설정 이메일에 안내된 단계를 따릅니다. 일반적으로 이메일은 몇 분 내에 도착하고, 넷플릭스에 자동으로 로그인하는 링크가 포함되어 있습니다. 링크에 접속하면 새 비밀번호를 생성하라는 메시지가 표시됩니다. 새 비밀번호는 이전 비밀번호와 동일하게 설정할 수 없습니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <p><strong>링크가 만료된 경우</strong></p>
                                                                <ul>
                                                                    <li><p>이메일에 포함된 링크는 24시간 후에 만료됩니다. <Link to=''>netflix.com/loginhelp</Link>에서 본인에게 다시 이메일을 전송할 수 있습니다. </p>
                                                                    </li>
                                                                </ul>
                                                                <p><strong>이메일을 받지 못한 경우</strong></p>
                                                                <ol>
                                                                    <li><p>다른 폴더(스팸, 정크, 프로모션) 및 설정한 모든 이메일 필터를 확인합니다. </p>
                                                                    </li>
                                                                    <li><p>스팸 폴더를 점검한 뒤에도 비밀번호 재설정 이메일을 찾을 수 없는 경우 <Link to=''>info@mailer.netflix.com</Link>을 주소록에 추가해 봅니다. 그런 다음 다시 <Link to='' >본인에게 비밀번호 재설정 이메일을 전송</Link>합니다. </p>
                                                                    </li>
                                                                    <li><p>그래도 비밀번호 재설정 이메일을 받지 못한 경우, 이메일 제공업체에서 지연되었을 수 있습니다. 5시간을 기다려 보고 받은 편지함을 다시 확인하세요. </p>
                                                                    </li>
                                                                </ol>
                                                                <p><strong>링크가 작동하지 않는 경우</strong></p>
                                                                <ol>
                                                                    <li><p>본인에게 보냈을 수도 있는 모든 넷플릭스 비밀번호 재설정 이메일을 삭제합니다. </p>
                                                                    </li>
                                                                    <li><p>이메일을 삭제했으면 <Link to=''>netflix.com/clearcookies</Link>로 이동합니다. 그러면 로그아웃되어 홈페이지로 돌아오게 됩니다. </p>
                                                                    </li>
                                                                    <li><p><Link to=''>netflix.com/loginhelp</Link> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li><p><span classNAme="k1-NF_UIREF">이메일</span>을 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>이메일 주소를 입력하고 <span className="k1-NF_UIREF">이메일로 받기</span>를 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>이메일로 돌아와서 새 넷플릭스 비밀번호 재설정 이메일에 있는 단계를 따라 진행합니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <p>여전히 문제가 있는 경우 다른 컴퓨터, 휴대폰 또는 태블릿을 사용하여 이메일에 액세스한 다음 비밀번호 재설정 링크를 클릭합니다. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={()=>openTab2()}>
                                                        <span className="k1-c-caret"></span>문자 메시지(SMS)로 비밀번호 재설정하기
                                                    </Link>
                                                </h2>
                                            </div>
                                            {
                                                visible2 &&
                                                    <div className="k1-tab-content">
                                                        <div className="c-wrapper">
                                                            <div>
                                                                <ol>
                                                                    <li><p><Link to=''>netflix.com/loginhelp</Link> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="NF_UIREF">문자 메시지(SMS)</span>를 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>계정에 등록된 전화번호를 입력합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="NF_UIREF">문자로 받기</span>를 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>비밀번호를 재설정하기 위해 입력할 인증 코드를 받게 됩니다. 인증 코드는 20분 후에 만료됩니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <p><strong>전화번호가 계정에 링크되어 있지 않은 경우</strong></p>
                                                                <p>계정에 전화번호를 추가하지 않은 경우, 위의 지침에 따라 이메일로 비밀번호를 재설정해야 합니다. 계정에 액세스했으면 언제든지 
                                                                    <Link to=''>계정</Link> 페이지로 이동해서 
                                                                    <span className="k1-NF_UIREF">전화번호 추가</span>
                                                                    를 선택하여 전화번호를 추가할 수 있습니다. 계정에 연결된 전화번호를 이제 사용하지 않는 경우 
                                                                    <Link to=''>계정</Link> 페이지로 이동해서 
                                                                    <span className="k1-NF_UIREF">휴대폰 번호 변경</span>을 선택합니다.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={()=>openTab3()}><span className="c-caret"></span>결제 정보로 계정 정보 복구</Link></h2>
                                            </div>
                                            {
                                                visible3 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p><strong>넷플릭스를 통해 결제하는 고객이 이메일 주소 또는 전화번호를 잊은 경우</strong></p>
                                                                <ol>
                                                                    <li><p><Link to=''>netflix.com/loginhelp</Link> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="k1-NF_UIREF">이메일 주소나 전화번호를 기억할 수 없습니다</span>를 선택합니다. </p>
                                                                        <ul>
                                                                            <li><p>이 옵션이 표시되지 않는 경우 해당 지역에서는 결제 정보로 계정 로그인 정보를 복구할 수 없습니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>계정의 성과 이름을 입력하고 계정에 등록한 신용카드 또는 체크카드 번호를 입력합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="k1-NF_UIREF">계정 찾기</span>를 선택합니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <div className="k1-note">
                                                                    <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                                                    <div>넷플릭스를 통해 결제하지만 신용카드나 체크카드를 사용하지 않는 경우 로그인 정보를 복구하려면 <Link to=''>고객 센터에 문의</Link>하세요. </div>
                                                                </div>
                                                                <p><strong>넷플릭스가 아닌 타사를 통해 결제하는 고객이 로그인할 수 없는 경우</strong></p>
                                                                <p>타사를 통해 넷플릭스를 결제하는 경우, 고객 센터에서 타사 이름을 검색하여 관련 결제 문서를 찾으세요. 그런 다음 '넷플릭스에 로그인하는 데 문제가 있습니다' 섹션을 참조하세요. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>

                            
                        </div>
                        
                    </section>
                </div>
                <div className="k1-right-pane">
                    <div className="k1-wrapper">
                        <div className="k1-page-block">
                            <h3>추천 문서 </h3>
                            <ul className='k1-related-articles'>
                                <li className='k1-related-article'>
                                    <Link to=''>멤버십 변경 방법</Link>
                                </li>
                                <li className='k1-related-article'>
                                    <Link to=''>청구 및 결제</Link>
                                </li>
                                <li className='k1-related-article'>
                                    <Link to=''>플래닛 시작하기</Link>
                                </li>
                                <li className='k1-related-article'>
                                    <Link to=''>플래닛 소개</Link>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanetPasswordUpdate;