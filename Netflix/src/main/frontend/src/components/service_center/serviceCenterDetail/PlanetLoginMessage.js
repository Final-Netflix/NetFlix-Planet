import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanetLoginMessage = () => {
    const[visible1,setVisible1] = useState(false)
    const[visible2,setVisible2] = useState(false)
    const[visible21,setVisible21] = useState(false)
    const[visible22,setVisible22] = useState(false)
    
    const openTab1=()=>{
        setVisible1(!visible1)
    }
    const openTab2=()=>{
        setVisible2(!visible2)
    }
    const openTab21=()=>{
        setVisible21(!visible21)
    }
    const openTab22=()=>{
        setVisible22(!visible22)
    }
    
    return (
        <div className='k1-page-article'>
            <h1 className="k1-kb-title">넷플릭스에 로그인하려는데 가입하라는 메시지가 표시됨</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div className='k1-c-wrapper'>
                                <div>
                                    <p>넷플릭스에 로그인하려는데 새 계정을 등록하기 위한 단계가 표시되는 경우, 다음 단계에 따라
                                        <span className="NF_UIREF">로그인</span>
                                        페이지로 돌아가세요.
                                    </p>
                                </div>
                                <div className='k1-accordion'>
                                    <div className="k1-c-wrapper">
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={openTab1}><span className="k1-c-caret"></span>컴퓨터, 스마트폰 또는 태블릿</Link></h2>
                                            </div>
                                            {
                                                visible1&&
                                                        <div className="k1-tab-content">
                                                            <div className="k1-c-wrapper">
                                                                <div>
                                                                    <ol>
                                                                        <li><p><Link to=''>netflix.com/logout</Link>으로 이동하여 <span className="k1-NF_UIREF">로그아웃</span>을 클릭합니다. </p>
                                                                        </li>
                                                                        <li><p>로그아웃한 다음, <span className="k1-NF_UIREF">로그인</span>을 클릭하고 넷플릭스 이메일 주소와 비밀번호를 입력합니다. </p>
                                                                        </li>
                                                                    </ol>
                                                                </div>
                                                            </div>
                                                        </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={openTab2}><span className="k1-c-caret"></span>스마트 TV 또는 셋톱박스</Link></h2>
                                            </div>
                                            {
                                                visible2&&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div className="k1-accordion">
                                                                <div className="k1-c-wrapper">
                                                                    <div className="k1-tab">
                                                                        <div className="k1-tab-title">
                                                                            <h2><Link to='' role="button" onClick={openTab21}><span className="k1-c-caret"></span>[뒤로] 버튼이 표시되는 경우</Link></h2>
                                                                        </div>
                                                                        {
                                                                            visible21 &&
                                                                                <div className="k1-tab-content">
                                                                                    <div className="k1-c-wrapper">
                                                                                        <div>
                                                                                            <ol>
                                                                                                <li><p>로그인할 수 있는 옵션이 표시될 때까지 <span className="k1-NF_UIREF">뒤로</span>를 선택합니다. </p>
                                                                                                </li>
                                                                                                <li><p><span className="k1-NF_UIREF">로그인</span>을 선택합니다. </p>
                                                                                                </li>
                                                                                                <li><p>넷플릭스 이메일 주소와 비밀번호를 입력합니다. </p>
                                                                                                </li>
                                                                                            </ol>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                    <div className="k1-tab">
                                                                        <div className="k1-tab-title">
                                                                            <h2><Link to='' role="button" onClick={openTab22}><span className="k1-c-caret"></span>[뒤로] 버튼이 표시되지 않는 경우</Link></h2>
                                                                        </div>
                                                                        {
                                                                            visible22 &&
                                                                                <div className="k1-tab-content">
                                                                                    <div className="k1-c-wrapper">
                                                                                        <div>
                                                                                            <ol>
                                                                                                <li><p>넷플릭스 앱 내에서 리모컨을 사용하여 다음 버튼을 순서대로 누릅니다. </p>
                                                                                                    <ul>
                                                                                                        <li><p>위쪽, 위쪽, 아래쪽, 아래쪽, 왼쪽, 오른쪽, 왼쪽, 오른쪽, 위쪽, 위쪽, 위쪽, 위쪽</p>
                                                                                                        </li>
                                                                                                    </ul>
                                                                                                </li>
                                                                                                <li><p><span className="k1-NF_UIREF">로그아웃</span>,&nbsp;<span className="k1-NF_UIREF">재설정</span> 또는 <span className="k1-NF_UIREF">비활성화</span>를 선택합니다. </p>
                                                                                                </li>
                                                                                                <li><p>로그아웃한 다음, <span className="k1-NF_UIREF">로그인</span>을 선택하고 넷플릭스 이메일 주소와 비밀번호를 입력합니다. </p>
                                                                                                </li>
                                                                                            </ol>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p>이러한 단계가 제대로 작동되지 않는 경우, 계정에서 다른 이메일 주소를 사용하고 있거나 계정이 비활성화된 것입니다. 최근에 넷플릭스로부터 요금이 청구되고 있는지 확인하세요. </p>
                                <p>다음 중 해당되는 절차를 수행합니다. </p>
                                <ul>
                                    <li><p><strong>지난 달에 넷플릭스로부터 요금이 청구된 경우</strong>: 계정이 아직 활성화 상태지만, 다른 이메일 주소로 설정된 것일 수 있습니다. 다른 이메일 주소로 로그인해 보세요. </p>
                                    </li>
                                    <li><p><strong>지난 달에 넷플릭스로부터 요금이 청구되지 않은 경우</strong>: 계정이 비활성화된 것일 수 있습니다. <Link to=''>계정 재시작</Link> 단계를 따르세요. </p>
                                        <div className="k1-note">
                                            <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                            <div>계정에 활성화된 기프트카드 또는 프로모션이 있는 경우, 넷플릭스의 최근 청구가 표시되지 않을 수 있습니다. </div>
                                        </div>
                                    </li>
                                </ul>
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

export default PlanetLoginMessage;