import React from 'react';
import { Link } from 'react-router-dom';

const MemberShip = () => {
    return (
        <div className='k1-page-article'>
            <h1>멤버십 및 요금</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="page-block">
                            <p>
                                넷플릭스는 고객의 요구에 맞는 다양한 멤버십을 제공합니다. 선택하는 멤버십에 따라 영상 화질 및 넷플릭스 시청을 위해 
                                <strong>동시접속</strong>
                                가능한 명수가 달라집니다. 
                            </p>
                            <p>
                            어떤 멤버십을 선택하든지 영화와 TV 프로그램을 무제한으로 시청하고 모바일 게임을 플레이할 수 있습니다. 

                            </p>
                        </div>
                        <div>
                            
                            <div className="k1-warning">
                                <div>
                                이 요금은 신규 회원에게 적용되며, 점진적으로 모든 현재 회원에게도 적용됩니다. 현재 회원은 멤버십을 변경하지 않는 한 요금 변경 30일 전에 이메일 알림을 받게 됩니다. 
                                </div>
                            </div>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div className='k1-c-wrapper'>
                                            <div></div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='k1-c-wrapper'>
                                            <div>베이식</div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='k1-c-wrapper'>
                                            <div>스탠다드</div>
                                        </div>
                                    </th>
                                    <th>
                                        <div className='k1-c-wrapper'>
                                            <div>프리미엄</div>
                                        </div>
                                    </th>
                                    
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>월간 요금</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>9,500원</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>13,500원</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>17,000원</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>동시접속 가능한 명수</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>1</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>2</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>4</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p><Link to=''>콘텐츠를 저장</Link> 할 수 있는 스마트폰 또는 태블릿의 수</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>1</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>2</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>4</p>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>영화, TV 프로그램 및 게임 무제한 이용</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>노트북, TV, 스마트폰 또는 태블릿으로 시청</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>HD 화질 이용 가능</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p></p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>UHD 화질 이용 가능</p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p></p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p></p>

                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='k1-c-wrapper'>
                                            <div>
                                                <p>✓</p>

                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <div>
                            <span>
                                <div className='k1-note'>
                                    <div className="k1-icon-wrap">
                                        <span>참고</span>
                                    </div>
                                    <div>
                                        <span>*거주 지역에 따라 멤버십 요금에 추가로 
                                            <Link to=''>세금이 부과될 수 있습니다. </Link>
                                        </span>
                                    </div>
                                </div>
                            </span>
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

export default MemberShip;