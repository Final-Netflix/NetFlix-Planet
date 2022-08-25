import React from 'react';

import '../../css/serviceCenter/serviceCenter.css';

import { Link } from 'react-router-dom';
import UserChatRoom from 'components/user_chat/UserChatRoom';



const ConsumerCenterContainer = () => {
    return (
        <div className="k1-container">
            <section className='k1-top-articles'>
                <div className='k1-categories'>
                    <div className="k1-category">
                        <div className="k1-category-wrapper">
                            <h2 className="k1-category-title">내 계정 관리</h2>
                            <ol className="k1-articles">
                                <li className="k1-top-article">
                                    <Link to='/service/detail/memberShip'>멤버십 및 요금</Link>
                                </li>
                                <li className="k1-top-article">
                                    <Link to='/service/detail/memberNewLog'>내 계정에 새로운 로그인이 발생했다는 이메일을 수신했습니다.</Link>
                                </li>
                                <li className="k1-top-article">
                                    <Link to='/service/detail/memberShipUpdate'>멤버십 변경 방법</Link> 
                                </li>
                            </ol>
                        </div>

                    </div>
                    <div className="k1-category">
                        <div className="k1-category-wrapper">
                            <h2 className="k1-category-title">시청불가</h2>
                            <ol className="k1-articles">
                                <li className="k1-top-article">
                                    <Link to='/service/detail/planetPasswordUpdate'>넷플릭스 비밀번호를 변경하는 방법</Link>
                                </li>
                                <li className="k1-top-article">
                                    <Link to='/service/detail/planetLoginMessage'>넷플릭스에 로그인하려는데 가입하라는 메세지가 표시됨</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="k1-category">
                        <div className="k1-category-wrapper">
                            <h2 className="k1-category-title">결제문의</h2>
                            <ol className="k1-articles">
                                <li className="k1-top-article">
                                    <Link to='/service/detail/planetPaymentWay'>넷플릭스 요금을 결제하는 방법</Link>
                                </li>
                                <li className="k1-top-article">
                                    <Link to='/service/detail/planetPaymentClaim'>청구 및 결제</Link>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="k1-category">
                        <div className="k1-category-wrapper">
                            <h2 className="k1-category-title">넷플릭스 시청</h2>
                            <ol className="k1-articles">
                                <li className="k1-top-article">
                                    <Link to='/service/detail/profileProduceWay'>프로필 생성 및 수정 방법</Link>
                                </li>
                                <li className="k1-top-article">
                                    <Link to='/service/detail/planetOnTv'>TV에서 넷플릭스를 시청하는 방법</Link>
                                </li>
                                <li className="k1-top-article">
                                    <Link to='/service/detail/offlineWatchWay'>콘텐츠를 저장하여 오프라인에서 시청하는 방법</Link>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
                <div className="k1-category">
                    <div className="k1-category-wrapper">
                        <h2 className="k1-category-title">빠른링크</h2>
                        <ul className="k1-quick-links">
                            <li className="k1-top-article">
                                <Link to=''>TV 프로그램 및 영화 요청하기</Link>
                            </li>
                            <li className="k1-top-article">
                                <Link to=''>이메일 업데이트</Link>
                            </li>
                            <li className="k1-top-article">
                                <Link to=''>비밀번호 업데이트</Link>
                            </li>
                            <li className="k1-top-article">
                                <Link to=''>결제 수단 업데이트</Link>
                            </li>
                            <li className="k1-top-article">
                                <Link to=''>멤버십 해지</Link>
                            </li>
                            <li className="k1-top-article">
                                <Link to=''>결제 내역 검토</Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ConsumerCenterContainer;
