import React from 'react';
import { Link } from 'react-router-dom';

const MemberNewLog = () => {
    return (
        <div className='k1-page-article'>
            <h1 className='k1-kb-title'>내 계정에 새로운 로그인이 발생했다는 이메일을 수신했습니다.</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div>
                                <div>
                                    <p>
                                        계정의 보안을 유지하기 위해 새로운 디바이스에서 Netflix 계정 로그인 이벤트가 새로 발생하면 회원에게 이메일이 전송됩니다. 로그인이 발생한 위치는 디바이스에서 현재 사용 중인 IP 주소를 기준으로 하기 때문에 실제 위치와 일치하지 않을 수도 있으며, 표시되는 시간은 새로 로그인한 사용자의 현지 시간입니다. 
                                    </p>
                                    <p>
                                        고객이 인지하지 못한 로그인인 경우 즉시 비밀번호를 변경하도록 안내하고 있습니다. 비밀번호를 변경하기 위해 &nbsp;
                                        <Link to =''>
                                            본인에게 비밀번호 재설정 이메일 또는 문자 메시지(SMS)를 전송
                                        </Link>
                                        할 수 있습니다.
                                    </p>
                                    <p>
                                        정보 보호를 위한 더 자세한 방법은&nbsp;
                                        <Link to=''>
                                            계정 보안을 유지하는 방법
                                        </Link>
                                        을 참조하세요.
                                    </p>
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

export default MemberNewLog;