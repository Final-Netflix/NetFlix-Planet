import React from 'react';
import '../css/serviceCenter.css';


const ConsumerCenterContainer = () => {
    return (
        <div className="container">
            <section className='top-articles'>
                <div className='categories'>
                    <div className="category">
                        <div className="category-wrapper">
                            <h2 className="category-title">내 계정 관리</h2>
                            <ol className="articles">
                                <li className="top-article">
                                    <a>멤버십 및 요금</a>
                                </li>
                                <li className="top-article">
                                    <a>내 계정에 새로운 로그인이 발생했다는 이메일을 수신했습니다.</a>
                                </li>
                                <li className="top-article">
                                    <a>멤버십 변경 방법</a> 
                                </li>
                            </ol>
                        </div>

                    </div>
                    <div className="category">
                        <div className="category-wrapper">
                            <h2 className="category-title">시청불가</h2>
                            <ol className="articles">
                                <li className="top-article">
                                    <a>넷플릭스 비밀번호를 변경하는 방법</a>
                                </li>
                                <li className="top-article">
                                    <a>넷플릭스에 로그인하려는데 가입하라는 메세지가 표시됨</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="category">
                        <div className="category-wrapper">
                            <h2 className="category-title">결제문의</h2>
                            <ol className="articles">
                                <li className="top-article">
                                    <a>넷플릭스 요금을 결제하는 방법</a>
                                </li>
                                <li className="top-article">
                                    <a>청구 및 결제</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="category">
                        <div className="category-wrapper">
                            <h2 className="category-title">넷플릭스 시청</h2>
                            <ol className="articles">
                                <li className="top-article">
                                    <a>프로필 생성 및 수정 방법</a>
                                </li>
                                <li className="top-article">
                                    <a>TV에서 넷플릭스를 시청하는 방법</a>
                                </li>
                                <li className="top-article">
                                    <a>콘텐츠를 저장하여 오프라인에서 시청하는 방법</a>
                                </li>
                            </ol>
                        </div>
                    </div>

                </div>
                <div className="category">
                    <div className="category-wrapper">
                        <h2 className="category-title">빠른링크</h2>
                        <ul className="quick-links">
                            <li className="top-article">
                                <a>TV 프로그램 및 영화 요청하기</a>
                            </li>
                            <li className="top-article">
                                <a>이메일 업데이트</a>
                            </li>
                            <li className="top-article">
                                <a>비밀번호 업데이트</a>
                            </li>
                            <li className="top-article">
                                <a>결제 수단 업데이트</a>
                            </li>
                            <li className="top-article">
                                <a>멤버십 해지</a>
                            </li>
                            <li className="top-article">
                                <a>결제 내역 검토</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default ConsumerCenterContainer;
