import React from 'react';
import { Link } from 'react-router-dom';

const PlanetOnTv = () => {
    return (
        <div className='k1-page-article'>
            <h1 className="k1-kb-title">TV에서 넷플릭스를 시청하는 방법</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div className="k1-c-wrapper">
                                <div>
                                    <p>TV에서 넷플릭스를 시청하려면 <Link to=''>넷플릭스 앱이 포함된 디바이스</Link>가 필요합니다. 넷플릭스 앱은 다양한 스마트 TV, 게임 콘솔, 셋톱박스 및 블루레이 플레이어에서 이용할 수 있습니다. </p>
                                    <p><strong>넷플릭스 지원 TV에는</strong> 기본 메뉴 또는 홈 화면에 넷플릭스 앱이 있습니다. </p>
                                    <ul>
                                        <li><p>TV에 새 앱을 다운로드할 수 있는 앱스토어가 있는 경우 넷플릭스를 검색하여 앱을 사용할 수 있는지 알아보세요. </p>
                                        </li>
                                        <li><p>앱 찾기에 도움이 필요한 경우 <Link to=''>넷플릭스 고객 센터</Link>에서 사용 중인 TV 브랜드에 해당하는 '넷플릭스 이용 방법' 문서를 검색하세요. </p>
                                        </li>
                                    </ul>
                                    <div className="k1-note">
                                        <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                        <div>넷플릭스 앱을 찾아 설치하려면 디바이스 업데이트가 필요한 경우도 있습니다. TV에서 시스템 소프트웨어를 업데이트하는 방법을 잘 모르겠다면 사용자 설명서를 참조하거나 제조업체에 문의하세요. </div>
                                    </div>
                                    <p><strong>넷플릭스 앱을 지원하지 않는 TV에서는</strong> <Link to=''>스트리밍 미디어 플레이어</Link> 또는 <Link to=''>모바일 디바이스</Link>를 사용하여 TV에서 넷플릭스를 시청할 수 있습니다. </p>
                                    <p></p>
                                </div>
                            </div>{/* cwapper */}
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

export default PlanetOnTv;