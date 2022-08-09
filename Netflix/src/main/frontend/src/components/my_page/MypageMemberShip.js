import React from 'react';

const MypageMemberShip = () => {
    return (
        <div className="m1_bd">
            <div className="m1_responsive-account-container">
                <div className="m1_change-plan-component" data-uia="change-plan-component">
                    <h1 className="m1_account-header">스트리밍 멤버십 변경</h1>
                    <div id="changePlanPage" className="m1_change-plan-container"></div>
                    <ul className="m1_stacked-large-selection-list m1_structural" role="radiogroup" data-uia="plan-selector">
                        <li data-uia="plan-option" data-uia-id="plan-option-4001" data-uia-selected="false" data-uia-current="false" className="m1_pointer clearfix stacked-large-selection-list-item" data-uia-is-disabled="false">
                            <div className="m1_stacked-selection-header">
                                <h2 className="m1_item-header">
                                    <div>
                                        <div><span data-uia="plan-name" className="m1_plan-name">베이식</span></div>
                                    </div>
                                </h2>
                            </div>
                            <div className="m1_stacked-selection-header m1_stacked-selection-header-right">
                                <h2 className="m1_item-header">
                                    <div><span id="" className="m1_plan-price" data-uia=""></span></div>
                                </h2>
                            </div>
                            <div className="m1_header-divider"></div>
                            <div className="m1_stacked-selection-item-body" data-uia="stacked-selection-item-body">
                                <div className="m1_stacked-selection-item-body-content" data-uia="stacked-selection-item-body-content">
                                    <div>
                                        <span id="" className="m1_plan-description-markup" data-uia="">SD(480p)로 좋은 화질 제공. 스마트폰, 태블릿, 컴퓨터 또는 TV로 시청. KT사의 청구서에 통합되었습니다.</span>
                                        <span id="" className="m1_plan-price" data-uia=""></span>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </li>
                        <li data-uia="plan-option" data-uia-id="plan-option-3088" data-uia-selected="false" data-uia-current="false" className="m1_pointer m1_clearfix m1_stacked-large-selection-list-item" data-uia-is-disabled="false">
                            <div className="m1_stacked-selection-header">
                                <h2 className="m1_item-header">
                                    <div>
                                        <div><span data-uia="plan-name" className="m1_plan-name">스탠다드</span></div>
                                    </div>
                                </h2>
                            </div>
                            <div className="m1_stacked-selection-header m1_stacked-selection-header-right">
                                <h2 className="m1_item-header">
                                    <div><span id="" className="m1_plan-price" data-uia=""></span></div>
                                </h2>
                            </div>
                            <div className="m1_header-divider"></div>
                            <div className="m1_stacked-selection-item-body" data-uia="stacked-selection-item-body">
                                <div className="m1_stacked-selection-item-body-content" data-uia="stacked-selection-item-body-content">
                                    <div>
                                        <span id="" className="m1_plan-description-markup" data-uia="">풀 HD(1080p)로 뛰어난 화질 제공. 스마트폰, 태블릿, 컴퓨터 또는 TV로 시청. *월 4,000원의 요금이 KT 서비스에 통합되어 청구됩니다.</span>
                                        <span id="" className="m1_plan-price" data-uia=""></span>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </li>
                        <li data-uia="plan-option" data-uia-id="plan-option-3108" data-uia-selected="true" data-uia-current="true" className="m1_pointer m1_clearfix m1_stacked-large-selection-list-item selected" data-uia-is-disabled="false">
                            <div className="m1_stacked-selection-header">
                                <h2 className="m1_item-header">
                                    <div>
                                        <div>
                                            <div className="m1_current-plan" data-uia="current-plan">현재 멤버십:</div>
                                            <span data-uia="plan-name" className="m1_plan-name">프리미엄</span>
                                        </div>
                                    </div>
                                </h2>
                            </div>
                            <div className="m1_stacked-selection-header m1_stacked-selection-header-right">
                                <h2 className="m1_item-header">
                                    <div><span id="" className="m1_plan-price" data-uia=""></span></div>
                                </h2>
                            </div>
                            <div className="m1_header-divider"></div>
                            <div className="m1_stacked-selection-item-body" data-uia="stacked-selection-item-body">
                                <div className="m1_stacked-selection-item-body-content" data-uia="stacked-selection-item-body-content">
                                    <div>
                                        <span id="" className="m1_plan-description-markup" data-uia="">UHD(4K) 및 HDR로 넷플릭스 최고 화질 제공. 스마트폰, 태블릿, 컴퓨터 또는 TV로 시청. *월 7,500원의 요금이 KT 서비스에 통합되어 청구됩니다.</span>
                                        <span id="" className="m1_plan-price" data-uia=""></span>
                                    </div>
                                </div>
                            </div>
                            <div data-uia="selected-indicator" className="m1_selected-indicator">현재 멤버십</div>
                            <div></div>
                        </li>
                    </ul>
                    <p id="" className="m1_terms-of-use" data-uia="change-plan-tou-disclaimer">
                        HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은
                        <a href="https://help.netflix.com/legal/termsofuse" target="_blank">이용 약관</a>을 확인하세요.
                    </p>
                    <p id="" className="m1_terms-of-use" data-uia="change-plan-tou-stremaDisclaimer">한집에 사는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄 멤버십은 동시접속 4명, 스탠다드 멤버십은 2명, 베이식 멤버십은 1명까지 가능합니다.</p>
                    <div id="" className="m1_disclaimerPartner" data-uia="disclaimerPartner">* 실제 금액은 KT 약관에 따라 더 적을 수 있으며, KT 청구서에 표시됩니다.</div>
                    <div className="m1_btn-bar btn-bar-center" data-uia="btn-submit">
                        <button className="m1_btn disabled m1_save-plan-button m1_btn-blue m1_btn-small" type="button" autocomplete="off" tabindex="0" data-uia="action-save-plan" disabled="">다음</button>
                        <button className="m1_btn m1_cancel-save-button m1_btn-gray m1_btn-small" type="button" autocomplete="off" tabindex="0" data-uia="action-go-back">뒤로가기</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MypageMemberShip;