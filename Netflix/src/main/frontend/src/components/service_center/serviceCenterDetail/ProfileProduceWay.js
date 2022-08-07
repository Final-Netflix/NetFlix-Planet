import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileProduceWay = () => {
    const[visible1,setVisible1] = useState(false)
    const[visible2,setVisible2] = useState(false)
    const[visible3,setVisible3] = useState(false)
    const[visible4,setVisible4] = useState(false)
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
    return (
        <div className='k1-page-article'>
            <h1 className="k1-kb-title">프로필 생성 및 수정 방법</h1>
            <div className="k1-pane-wrapper">
                <div className="k1-left-pane">
                    <section className="k1-kb-article">
                        <div className="k1-page-block">
                            <div className='k1-c-wrapper'>
                                <div>
                                    <p>프로필을 사용하면, 함께 사는 가구 구성원 모두가 개인화된 넷플릭스 환경을 개별적으로 관리하고 이용할 수 있습니다. 하나의 넷플릭스 계정 내에 프로필을 5개까지 만들 수 있습니다. </p>
                                    <div className="k1-note">
                                        <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                        <div>2013년 이전에 제조된 디바이스에서는 프로필 기능을 사용할 수 없습니다. </div>
                                    </div>
                                    <p>각 프로필에 제각기 수록되는 내용</p>
                                    <ul>
                                        <li><p>언어 설정</p>
                                        </li>
                                        <li><p>관람등급</p>
                                        </li>
                                        <li><p>특정 시청 제한</p>
                                        </li>
                                        <li><p>프로필 잠금</p>
                                        </li>
                                        <li><p>시청 기록 로그</p>
                                        </li>
                                        <li><p>게임에 대해 저장된 내용</p>
                                        </li>
                                        <li><p>자막 표시 설정</p>
                                        </li>
                                        <li><p>재생 설정</p>
                                        </li>
                                        <li><p>개인화된 시리즈 및 영화 추천</p>
                                        </li>
                                        <li><p>내가 찜한 콘텐츠*</p>
                                        </li>
                                        <li><p>평가*</p>
                                        </li>
                                        <li><p>이메일(알림 이메일/모든 관람등급의 프로필만 해당)</p>
                                        </li>
                                    </ul>
                                    <p>*컴퓨터의 <span className="k1-NF_UIREF">키즈 프로필</span>에서는 이용할 수 없습니다. </p>
                                    <p></p>
                                </div>
                                <div className="k1-accordion">
                                    <div className="k1-c-wrapper">
                                        <div className="k1-tab level-1" data-id="SyxQttWn2b" data-parent-id="page">
                                            <div className="k1-tab-title">
                                                <h2>
                                                    <Link to="" role="button" onClick={openTab1}>
                                                        <span className="k1-c-caret">
                                                        </span>
                                                        프로필 생성 방법
                                                    </Link>
                                                </h2>
                                            </div>
                                            {
                                                visible1 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>2013년 이후에 출시된 디바이스에서 프로필을 추가할 수 있습니다. </p>
                                                                <ol>
                                                                    <li>
                                                                        <p>
                                                                            <Link to=''>
                                                                                프로필 관리
                                                                            </Link>
                                                                            페이지로 이동합니다.
                                                                            <span className="k1-NF_UIREF">
                                                                                프로필 추가
                                                                            </span>를 선택합니다.
                                                                        </p>
                                                                        <ul>
                                                                            <li>
                                                                                <p>Android 또는 iOS용 넷플릭스 모바일 앱에서 프로필 아이콘
                                                                                    <img src="https://help.nflxext.com/e565d473-f945-41e2-9c5d-3c8ef216169b_icon-profile_en.png" className="k1-image_inline" alt=""/>
                                                                                        또는
                                                                                        <span className="k1-NF_UIREF">
                                                                                        더 보기
                                                                                        </span>
                                                                                        <img src="https://help.nflxext.com/389060d5-a380-4a84-b38f-cd12e17d853b_icon_android_Netflix_menu_en.png" className="k1-image_inline" alt=""/>
                                                                                        를 탭한 다음
                                                                                        <span className="k1-NF_UIREF">
                                                                                            프로필 관리
                                                                                        </span>
                                                                                        를 선택합니다.
                                                                                        <span className="k1-NF_UIREF">
                                                                                            프로필 추가
                                                                                        </span>를 선택합니다.
                                                                                    </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>프로필 이름을 지정합니다. </p>
                                                                    </li>
                                                                    <li><p>넷플릭스 키즈 환경을 이용하려면 <span className="k1-NF_UIREF">키즈</span>를 선택합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="k1-NF_UIREF">다음</span> 또는 <span className="k1-NF_UIREF">저장</span>을 선택합니다. 새 프로필이 계정의 프로필 목록에 표시됩니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <p>디바이스에서 프로필을 만들 수 없는 경우, 웹 브라우저에서 <a target="_blank" href="https://www.netflix.com/">Netflix.com</a>을 방문하여 위의 단계를 따르세요. </p>
                                                                <p><br/><strong>넷플릭스 키즈 환경</strong>에 대한 자세한 내용은 <a target="_blank" href="https://help.netflix.com/ko/node/114275">특정 관람등급이 설정된 프로필 생성 방법</a>을 참조하세요. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab level-1" data-id="SJfAY-3hW" data-parent-id="page">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab2}><span className="k1-c-caret"></span>프로필 삭제 또는 맞춤화 방법</Link></h2>
                                            </div>
                                            {
                                                visible2 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>대부분의 디바이스에서 프로필을 맞춤 설정하거나 삭제할 수 있습니다. </p>
                                                                <ol>
                                                                    <li><p>웹 브라우저에서 <Link to=''>프로필 관리</Link> 페이지로 이동합니다. </p>
                                                                        <ul>
                                                                            <li><p>Android 또는 iOS용 넷플릭스 모바일 앱에서 프로필 아이콘 <img src="https://help.nflxext.com/e565d473-f945-41e2-9c5d-3c8ef216169b_icon-profile_en.png" className="k1-image_inline" alt=""/> 또는 <span className="k1-NF_UIREF">더 보기</span> <img src="https://help.nflxext.com/389060d5-a380-4a84-b38f-cd12e17d853b_icon_android_Netflix_menu_en.png" className="k1-image_inline" alt=""/>를 탭한 다음 <span className="k1-NF_UIREF">프로필 관리</span>를 선택합니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>변경하려는 프로필을 선택합니다. </p>
                                                                    </li>
                                                                    <li><p>프로필 이름, 이미지 또는 언어를 변경합니다. </p>
                                                                        <ul>
                                                                            <li><p>관람등급은 <Link to="">계정</Link> 페이지에서 변경해야 합니다. </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>변경 사항을 <span className="k1-NF_UIREF">저장</span>하거나 <span className="k1-NF_UIREF">프로필 삭제</span>를 선택하여 프로필을 완전히 삭제합니다. </p>
                                                                    </li>
                                                                </ol>
                                                                <div className="k1-note">
                                                                    <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                                                    <div>넷플릭스 계정에 있는 기본 프로필은 삭제할 수 없습니다. 프로필을 삭제하면 해당 프로필의 시청 기록 및 게임에 대해 저장된 내용을 더는 이용할 수 없습니다. </div>
                                                                </div>
                                                                <p><br/>디바이스에서 프로필을 수정할 수 없는 경우, 웹 브라우저에서 <Link to="">Netflix.com</Link>을 방문하여 위의 단계를 따르세요. </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab3}><span className="k1-c-caret"></span>프로필 및 자녀 보호 기능 사용 방법</Link></h2>
                                            </div>
                                            {
                                                visible3 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>
                                                                    <span className="k1-NF_UIREF">넷플릭스 키즈 환경</span>
                                                                    사용자 이외의 모든 프로필 사용자는 개인 프로필에서
                                                                    <span className="k1-NF_UIREF">프로필 &amp; 자녀 보호 설정</span>
                                                                    에 액세스하여 수정할 수 있습니다. <span className="k1-MFR_UIREF"></span>
                                                                    <span className="k1-NF_UIREF">시청 제한</span> 또는
                                                                    <span className="k1-NF_UIREF">프로필 잠금</span>
                                                                    을 수정하려면 계정 비밀번호가 필요합니다.
                                                                </p>
                                                                <p>개인 프로필 설정을 변경하려면 다음의 단계를 따르세요. </p>
                                                                <ol>
                                                                    <li><p>웹 브라우저에서 <Link to="">계정</Link> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            <span className="k1-NF_UIREF">프로필 &amp; 자녀 보호 설정</span>
                                                                            에서 프로필 이름을 선택합니다. 
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>해당 프로필의 설정을 수정하려면 
                                                                            <span className="k1-NF_UIREF">변경</span>
                                                                            을 선택합니다. 
                                                                        </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>변경 사항을 <span className="k1-NF_UIREF">저장</span>
                                                                            /<span className="k1-NF_UIREF">등록</span>합니다. 
                                                                        </p>
                                                                    </li>
                                                                </ol>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                        <div className="k1-tab level-1" data-id="HJrLbhsZr" data-parent-id="page">
                                            <div className="k1-tab-title">
                                                <h2><Link to="" role="button" onClick={openTab4}><span className="k1-c-caret"></span>각 프로필에서 다른 이메일 주소 사용</Link></h2>
                                            </div>
                                            {
                                                visible4 &&
                                                    <div className="k1-tab-content">
                                                        <div className="k1-c-wrapper">
                                                            <div>
                                                                <p>넷플릭스 계정 생성 시, 고객이 제공하는 이메일 주소는 해당 고객이 생성하는 첫 번째 프로필과 연결됩니다. </p>
                                                                <p>보조 
                                                                    <span className="k1-MFR_UIREF">성인</span> 
                                                                    프로필에 이메일을 추가하여 넷플릭스에서 발송하는 개인화된 추천 콘텐츠 및 기타 이메일을 수신할 수 있습니다. 보조 프로필과 연결된 이메일 주소는 넷플릭스 계정에 로그인하는 데 사용할 수 없습니다.
                                                                    <br/><br/>보조 프로필에 연결된 이메일을 추가하거나 변경하려면 다음 단계를 따르세요. 
                                                                </p>
                                                                <ol>
                                                                    <li><p>웹 브라우저에서 이메일을 추가하려는 프로필에 로그인합니다. </p>
                                                                    </li>
                                                                    <li><p><Link to="">계정</Link> 페이지로 이동합니다. </p>
                                                                    </li>
                                                                    <li>
                                                                        <p>
                                                                            <span className="k1-MFR_UIREF">프로필 &amp; 자녀 보호 설정</span>
                                                                            메뉴에서 이메일을 추가하려는 프로필 이름을 선택합니다. </p>
                                                                        <ul>
                                                                            <li>
                                                                                <p>이미 이메일을 추가한 경우 
                                                                                    <span className="k1-MFR_UIREF">프로필 이메일</span> 
                                                                                    옆의 <span className="k1-MFR_UIREF">추가</span> 또는 
                                                                                    <span className="k1-MFR_UIREF">변경</span>을 선택합니다. 
                                                                                </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                    <li><p>프로필에서 원하는 이메일을 입력합니다. </p>
                                                                    </li>
                                                                    <li><p><span className="k1-MFR_UIREF">이메일 추가</span>를 선택합니다. </p>
                                                                        <ul>
                                                                            <li>
                                                                                <p>기존 이메일을 업데이트하는 경우 
                                                                                    <span className="k1-MFR_UIREF">이메일 변경</span> 
                                                                                    또는 <span className="k1-MFR_UIREF">이메일 삭제</span>를 선택할 수 있습니다.
                                                                                </p>
                                                                            </li>
                                                                        </ul>
                                                                    </li>
                                                                </ol>
                                                                <div className="k1-note">
                                                                    <div className="k1-icon-wrap"><span className="k1-hcicon-uma-info icon"></span>참고</div>
                                                                    <div>독일에 거주하는 회원은 이메일을 추가하거나 변경하기 위해 두 번의 확인 절차를 거쳐야 합니다. </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>{/* cwrapper */}
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

export default ProfileProduceWay;