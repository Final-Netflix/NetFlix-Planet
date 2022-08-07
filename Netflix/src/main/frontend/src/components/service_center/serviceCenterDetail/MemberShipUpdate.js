import React from 'react';
import { Link } from 'react-router-dom';

const MemberShipUpdate = () => {
    return (
        <div className='k1-page-article'>
            <h1 className='k1-kb-title'>멤버십 변경 방법</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div>
                                <div>
                                    <p>
                                        넷플릭스 멤버십은 언제든지 다음 단계를 따라 변경할 수 있습니다.
                                    </p>
                                    <ol className='k1-page-article-ol'>
                                        <li>
                                            <p>
                                                <Link to=''>플래닛 계정</Link>
                                                에 로그인합니다.
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span className="k1-NF_UIREF">멤버십 상세 정보</span>
                                                에서
                                                <span className="k1-NF_UIREF">멤버십 변경</span>
                                                을 선택합니다. (
                                                <span className="k1-NF_UIREF">멤버십 변경</span>
                                                이 표시되지 않는 경우, 
                                                <Link to=''>넷플릭스에 문의</Link>
                                                하세요.)
                                            </p>
                                            <div className='k1-note'>
                                                <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                                <div>계정이 보류 상태인 경우 보류 상태가 해제되어야 멤버십을 변경할 수 있습니다. </div>
                                            </div>
                                        </li>
                                        <li>
                                            <p>원하는 멤버십을 선택하고 
                                                <span className="k1-NF_UIREF">다음</span> 또는 <span className="k1-NF_UIREF">업데이트</span>를 선택합니다. 
                                            </p>
                                        </li>
                                        <li>
                                            <p>
                                                <span className="k1-NF_UIREF">변경 사항 확인</span> 또는 <span className="k1-NF_UIREFF">확인</span>을 선택합니다.
                                            </p>
                                        </li>

                                    </ol>
                                    <p>
                                        멤버십 업그레이드는 즉시 적용되므로 모든 추가 서비스를 바로 이용할 수 있습니다.
                                         넷플릭스는 선불 서비스이므로 결제일이 마지막 결제 금액의 잔액에 기반해 변경됩니다.
                                          이전 결제일로 다시 변경하려면
                                           <Link to=''>결제일 변경 방법</Link>
                                        을 참조하세요. <br/><br/>
                                        인하된 요금으로 다운그레이드할 경우에는 다음 결제일부터 변경 내용이 적용됩니다. 다음 결제일까지는 상위 멤버십에서 제공되는 서비스를 계속 이용할 수 있습니다.
                                    </p>
                                    <p>예를 들어 베이식에서 스탠다드로 업그레이드한 다음, 같은 달에 스탠다드에서 프리미엄으로 업그레이드할 수 있습니다. 그러나 멤버십을 다운그레이드하는 경우에는 다음 결제일이 될 때까지 해당 다운그레이드가 적용되지 않습니다.
                                    </p>
                                    <p>언제든지 <Link to=''>넷플릭스를 해지</Link>할 수 있습니다. </p>
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

export default MemberShipUpdate;