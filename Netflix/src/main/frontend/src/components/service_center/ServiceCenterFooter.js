import React from 'react';
import { Link } from 'react-router-dom';

import '../../css/serviceCenter/serviceCenter.css';
const ServiceCenterFooter = (props) => {
    return (
        <div id="k1-footer" class="k1-global-footer">
            <div id="k1-contact-bar" class="k1-global-contactbar">
                <div class="k1-container">
                    <h3 class="k1-bar-title">고객 센터에 문의하시겠어요?</h3>

                    <div class="k1-contact-channels">
                        <div id="k1-phone-contact" class="k1-channel k1-popover-wrapper">
                            <a href="#callus" id="k1-phoneContactTrigger" class="k1-btn k1-btn-lightgrey k1-popover-trigger">문의 전화</a>

                            <div class="k1-phonePopover k1-phone-popover k1-popover k1-top k1-lang-ko">
                                <div class="k1-popover-content"></div>

                                <button class="k1-close k1-popover-close">
                                    종료
                                </button>
                            </div>
                        </div>

                        <div class="k1-channel">
                            <div id="k1-chat-contact" class="k1-popover-wrapper k1-chat-btn-wrapper k1-channel" data-enablemobilechat="true">
                                <div onClick={() => {

                                    props.setOpenChat(true)
                                // window.open(`http://localhost:5000?nickname=${'옥지'}`, "_blank", "width=350px, height=550px", "false");


                                }} id="k1-startChatTrigger" class="k1-btn k1-btn-lightgrey k1-start-chat-button k1-beacon-event" data-beacon="action=ChatButton" data-locale="ko" data-country="KR">실시간 채팅 시작하기</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="k1-dark-area container">
                <ul class="k1-footer-links">
                    <li class="k1-legalese-item">
                        <a href="/ko/legal/termsofuse">이용 약관</a>
                    </li>
                    <li class="k1-legalese-item">
                        <a href="/ko/legal/privacy">개인정보</a>
                    </li>
                    <li class="k1-legalese-item">
                        <a href="/ko/legal/privacy#cookies" class="k1-evidon-trigger k1-toggle-cookie-info">쿠키 설정</a>
                    </li>

                    <li class="k1-legalese-item">
                        <a href="/ko/legal/corpinfo">회사 정보</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ServiceCenterFooter