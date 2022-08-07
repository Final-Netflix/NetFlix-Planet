import React from 'react';
import { Link } from 'react-router-dom';

const PlanetPaymentWay = () => {
    return (
        <div className='k1-page-article'>
            <h1 classNAme="k1-kb-title">넷플릭스 요금을 결제하는 방법</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div className='k1-c-wrapper'>
                                <div>
                                    <div>
                                        <span> 
                                            <div className="k1-page-block">
                                                <div className="k1-c-wrapper">
                                                    <div>
                                                        <p>회원의 필요 및 예산에 적합한 <Link to=''>멤버십을 선택</Link>합니다. Netflix 회원은 매월 <Link to=''>가입한 날짜</Link>에 요금이 청구됩니다.</p>
                                                        <p>Netflix 요금을 결제하는 방법에는 여러 가지가 있습니다.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>{/*  */}
                                <div>
                                    <p><strong>현지 신용카드, 체크카드 및 선불카드</strong></p>
                                    <p>넷플릭스 결제에 다음과 같은 현지에서 발행된 카드를 사용할 수 있으며, 해당 카드는 반복 전자상거래용으로 활성화되어 있어야 합니다. </p>
                                    <div className="k1-note">
                                        <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                        <div>신용카드 또는 체크카드를 해외 결제를 위해 활성화해야 할 수도 있습니다. </div>
                                    </div>
                                    <ul>
                                        <li><p>BC</p>
                                        </li>
                                        <li><p>하나</p>
                                        </li>
                                        <li><p>현대</p>
                                        </li>
                                        <li><p>KB국민</p>
                                        </li>
                                        <li><p>KEB</p>
                                        </li>
                                        <li><p>롯데</p>
                                        </li>
                                        <li><p>NH농협</p>
                                        </li>
                                        <li><p>삼성</p>
                                        </li>
                                        <li><p>신한</p>
                                        </li>
                                        <li><p>UnionPay</p>
                                        </li>
                                    </ul>
                                </div>{/*  */}
                                <div>
                                    <div>
                                        <span> 
                                            <div className="k1-page-block">
                                                <div className="k1-c-wrapper">
                                                    <div>
                                                        <p><strong>가상 카드</strong></p>
                                                        <p>일부 시장에서는 가상 카드로 결제할 수 있습니다. 가상 카드의 결제가 거부된 경우 다른 결제 수단을 선택합니다.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </span>
                                    </div>
                                </div>{/*  */}
                                <div>
                                    <p><strong>모바일 지갑</strong></p>
                                    <ul>
                                        <li><p>카카오페이</p>
                                        </li>
                                    </ul>
                                </div>{/*  */}
                                {/* 파트너 결제 결제 시스템에 따라 달라짐
                                <div>
                                    <p><strong>파트너 결제</strong></p>
                                    <p>다음은 해당 회사의 청구서에 넷플릭스를 추가할 수 있는 서비스 또는 넷플릭스가 포함된 패키지를 제공하는 파트너의 목록입니다. </p>
                                    <ul>
                                        <li><p><a target="_blank" href="https://help.netflix.com/ko/node/116553">KT</a></p>
                                        </li>
                                        <li><p><a target="_blank" href="https://help.netflix.com/ko/node/117817">KT 패키지</a></p>
                                        </li>
                                        <li><p><a target="_blank" href="https://help.netflix.com/ko/node/121351">KT Skylife</a></p>
                                        </li>
                                        <li><p><a href="https://help.netflix.com/ko/node/100622">LG U+</a></p>
                                        </li>
                                        <li><p><a href="https://help.netflix.com/ko/node/108296">LG U+ 패키지</a></p>
                                        </li>
                                    </ul>
                                </div>
                                */}
                            </div>{/* k1-c-wrapper */}
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

export default PlanetPaymentWay;