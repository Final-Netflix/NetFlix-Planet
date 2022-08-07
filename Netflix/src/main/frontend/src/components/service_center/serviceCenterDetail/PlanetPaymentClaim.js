import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PlanetPaymentClaim = () => {
    const[visible1,setVisible1] = useState(false)
    const[visible2,setVisible2] = useState(false)
    const[visible3,setVisible3] = useState(false)
    const[visible4,setVisible4] = useState(false)
    const[visible5,setVisible5] = useState(false)
    const[visible6,setVisible6] = useState(false)
    const[visible7,setVisible7] = useState(false)
    const[visible8,setVisible8] = useState(false)
    const[visible9,setVisible9] = useState(false)
    const[visible10,setVisible10] = useState(false)
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
    const openTab7=()=>{
        setVisible7(!visible7)
    }
    const openTab8=()=>{
        setVisible8(!visible8)
    }
    const openTab9=()=>{
        setVisible9(!visible9)
    }
    const openTab10=()=>{
        setVisible10(!visible10)
    }
    return (
        <div className='k1-page-article'>
            <h1 className="k1-kb-title">청구 및 결제</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div className='k1-c-wrapper'>
                                <div>
                                    <h2>넷플릭스 서비스 요금</h2>
                                </div>
                                <div className="k1-accordion">
                                    <div className="k1-c-wrapper">
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={openTab1}><span className="k1-c-caret"></span>멤버십 및 월간 요금 확인</Link></h2>
                                            </div>
                                            {
                                                visible1 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p><Link to=''>계정</Link>에 로그인하고 <Link to="">결제 상세 정보</Link>를 선택하여 넷플릭스 멤버십 및 결제 내역을 확인하세요. </p>
                                                                <p>언제든지 <Link to=''>멤버십 및 요금을 비교</Link>해&nbsp;<Link to=''>멤버십을 변경</Link>할 수 있습니다. </p>
                                                            </div>
                                                        </div>
                                                    </div>                                       
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={openTab2}><span className="k1-c-caret"></span>결제일 이해하기</Link></h2>
                                            </div>
                                            {
                                                visible2 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>회원은 매월 가입한 날짜에 자동으로 요금이 청구됩니다. 넷플릭스 멤버십에 대한 요금의 청구는 결제 주기 초에 이루어지며, 계정에 표시될 때까지 며칠이 걸릴 수 있습니다. </p>
                                                                <ul>
                                                                    <li><p>지역에 따라 시간대가 다르기 때문에, 고객의 결제일이 하루 빨라지거나 늦어질 수도 있습니다. </p>
                                                                    </li>
                                                                    <li><p>결제일에 해당하는 날이 없는 달의 경우(예: 31일), 그달의 말일에 결제가 이루어집니다. </p>
                                                                    </li>
                                                                    <li><p>타사를 통해 넷플릭스를 결제하는 경우 넷플릭스 결제일은 해당 업체의 결제일에 따라 달라집니다. </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button"  onClick={openTab3}><span className="k1-c-caret"></span>결제 정보 업데이트</Link></h2>
                                            </div>
                                            {
                                                visible3 && 
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p><Link to=''>계정</Link>에 로그인하고 <span className="k1-NF_UIREF">결제 정보 관리</span>를 선택합니다. 일부 결제 옵션의 경우 해당 웹사이트로 이동하여 업데이트 프로세스를 완료해야 합니다. </p>
                                                                <p>넷플릭스 결제 방법을 변경하고자 하는 경우, 넷플릭스에서는 여러 가지 <Link to=''>결제 옵션</Link>을 제공합니다. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to=''role="button" onClick={openTab4}><span className="k1-c-caret"></span>넷플릭스 청구서 인쇄</Link></h2>
                                            </div>
                                            {
                                                visible4 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <ol>
                                                                    <li><p><Link to=''>계정</Link>에 로그인합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="k1-NF_UIREF">멤버십 &amp; 결제 정보</span>에서 <Link to=''>결제 상세 정보</Link>를 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>조회하고자 하는 청구 날짜를 클릭합니다. 링크를 클릭하면 해당 청구서를 인쇄할 수 있는 페이지가 열립니다. 지난해에 해당하는 청구 내역 전체를 인쇄하고자 하는 경우 <Link to="https://www.netflix.com/BillingActivity">결제 상세 정보</Link> 페이지를 인쇄하면 됩니다. </p>
                                                                    </li>
                                                                    <li><p>세금과 관련된 질문은 넷플릭스 청구서에 기재된 <Link to=''>세금 관련 질문</Link>을 참조하세요. </p>
                                                                    </li>
                                                                </ol>
                                                                <p>1년 전 내역까지 넷플릭스 결제 정보를 조회할 수 있습니다. 1년이 지난 요금에 대한 정보가 필요한 경우 해당 금융 기관에 문의하세요. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>결제 문제 해결</h2>
                                    <p>결제 수단과 관련된 문제가 발생한 경우, 다음에서 일반적인 원인 및 문제 해결을 위한 제안을 참조하세요. </p>
                                </div>
                                <div className="k1-accordion">
                                    <div className="k1-wrapper">
                                        
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to='' role="button" onClick={openTab5}><span className="k1-c-caret"></span>결제 수단이 거부된 경우</Link></h2>
                                            </div>
                                            {
                                                visible5 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>은행 또는 금융 기관이 청구를 거부한 경우</p>
                                                                <ul>
                                                                    <li><p>우편번호, 보안 코드, 만료일과 같은 결제 정보가 올바른지 확인합니다. </p>
                                                                        <ul>
                                                                            <li><p>해당 정보가 올바르지 않은 경우, <Link to="">계정</Link>에 로그인하고 <span className="k1-NF_UIREF">결제 정보 관리</span>를 선택합니다. <Link to="">다른 결제 수단</Link>을 시도해 볼 수도 있습니다. </p>
                                                                            </li>
                                                                            <li><p>모든 정보가 올바르다면 결제를 다시 시도해 볼 수 있습니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>문제가 계속되는 경우, 해당 결제 수단에서 전자상거래를 지원하는지 확인합니다. </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab6}><span className="k1-c-caret"></span>결제 수단 사용이 불가한 경우</Link></h2>
                                            </div>
                                            {
                                                visible6 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>신용카드 또는 체크카드, 기프트카드 및 타사 결제 등 넷플릭스 요금을 <Link to="">결제할 수 있는 여러 옵션</Link>이 있습니다. 넷플릭스에서 이용 가능한 결제 수단이 제대로 작동하지 않는 경우, <Link to="https://help.netflix.com/contactus">넷플릭스에 문의</Link>하여 지원을 요청합니다. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab7}><span className="k1-c-caret"></span>예상치 못한 계정 해지</Link></h2>
                                            </div>
                                            {
                                                visible7 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>타사 또는 넷플릭스 포함 패키지를 통해 요금이 청구되는 경우, 여러 가지 이유로 계정이 해지될 수 있습니다. </p>
                                                                <ul>
                                                                    <li><p>결제에 문제가 있는 경우</p>
                                                                        <ul>
                                                                            <li><p>타사: 타사 계정에 로그인하여 결제 문제를 해결한 다음 넷플릭스에 재가입합니다. </p>
                                                                                <ul>
                                                                                    <li><p>타사를 통한 재가입이 불가능한 경우, Netflix.com에서 재가입하고 <Link to="">다른 결제 수단</Link>을 추가할 수 있습니다. </p>
                                                                                    </li>
                                                                                </ul>
                                                                            </li>
                                                                            <li><p>패키지: 패키지 계정에 로그인하여 결제 문제를 해결한 다음 넷플릭스 계정을 다시 연결합니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>넷플릭스가 포함된 패키지를 일시정지 또는 해지했으며, 해당 넷플릭스 계정에 등록된 다른 결제 수단이 없는 경우</p>
                                                                        <ul>
                                                                            <li><p>패키지가 아직 활성 상태인 경우 넷플릭스 계정을 다시 연결합니다. </p>
                                                                            </li>
                                                                            <li><p>패키지를 해지한 경우 넷플릭스 계정에 <Link to="">로그인</Link>하고 새로운 결제 수단을 추가합니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h2>예상하지 못한 청구 조사</h2>
                                </div>
                                <div className="k1-accordion">
                                    <div className="k1-c-wrapper">
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab8}><span className="k1-c-caret"></span>요금이 예상보다 높은 경우</Link></h2>
                                            </div>
                                            {
                                                visible8 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>다음과 같은 이유로 예상보다 많은 금액이 청구될 수 있습니다. </p>
                                                                <ul>
                                                                    <li><p><strong>세금</strong> - 거주 지역에 따라 멤버십 요금에 추가로 <Link to="">세금이 부과</Link>될 수 있습니다. </p>
                                                                    </li>
                                                                    <li><p><strong>수수료</strong> - 일부 국가에서는 카드 회사에서 해외 거래 수수료를 추가로 부과할 수 있습니다. 넷플릭스에서 현지 통화로 청구하더라도 일부 국가에서는 통화를 미국 달러(USD)로 변경하여 청구할 수도 있습니다. </p>
                                                                    </li>
                                                                    <li><p><strong>멤버십 변경</strong> - 회원님 또는 가구 구성원 중 누군가가 넷플릭스 멤버십을 업그레이드한 경우 청구서에 업그레이드된 멤버십 요금이 반영됩니다. </p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab9}><span className="k1-c-caret"></span>결제 예정일보다 빨리 청구된 경우</Link></h2>
                                            </div>
                                            {
                                                visible9&&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>결제일에 해당하는 날이 없는 달의 경우(예: 31일), 그달의 말일에 결제가 이루어집니다. </p>
                                                                <p>최근에 <Link to="">결제일을 변경</Link>했으며 동일한 월 이내에 요금의 변동이 발생했거나 멤버십을 업그레이드한 경우, 결제 예정일보다 일찍 요금이 청구될 수 있습니다. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab10}><span className="k1-c-caret"></span>반복 청구 또는 무단 청구</Link></h2>
                                            </div>
                                            {
                                                visible10 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>넷플릭스 회원에게는 한달에 한 번, 가입한 날짜에 요금이 청구됩니다. </p>
                                                                <p>최근에 넷플릭스 계정에 가입했거나, 결제 수단을 변경하거나 거부된 결제를 재시도한 회원의 경우 명세서에 인증 요청 금액이 보류 중인 거래로 표시될 수 있습니다. 인증 요청은 실제 청구가 아니지만, 은행에서 인증 금액을 반환할 때까지 사용 가능 잔액에 며칠간 영향을 미칠 수 있습니다. </p>
                                                                <ul>
                                                                    <li><p>인증 요청으로 인해 계좌의 사용 가능 잔액이 소진된 경우, 넷플릭스 결제를 처리할 수 없습니다. 이런 경우 계좌에 자금을 추가하거나 <Link to="">다른 결제 수단</Link>을 사용해야 합니다. <br/></p>
                                                                    </li>
                                                                </ul>
                                                                <p>넷플릭스 청구서에 반복 청구 또는 무단 청구로 여겨지는 항목이 표시되는 경우 <Link to="">다음 단계를 따르세요</Link>.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>{/* c wrapper */}
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
                </div>{/* right pane */}
            </div>
        </div>
    );
};

export default PlanetPaymentClaim;