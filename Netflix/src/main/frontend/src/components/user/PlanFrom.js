import axios from 'axios';
import React, { useState } from 'react';
import useStore from 'store';
const PlanFrom = () => {
    const qs = require('qs');
    const {price , setPrice ,membership , setMembership , membershipName , setMembershipName} = useStore()
    //멤버십 선택
    const onClick=(e)=> {
        const id = e.target.id
        const id0 = 'planGrid_planChoice_0' ;
        const id1 = 'planGrid_planChoice_1' ; 
        const id2 = 'planGrid_planChoice_2' ;
        const td = document.getElementsByClassName('m1_planGrid__cell');
        if(id ===id0) {
            td[1].classList.add('m1_planGrid__cell--isSelected')
            td[5].classList.add('m1_planGrid__cell--isSelected')
            td[9].classList.add('m1_planGrid__cell--isSelected')
            td[13].classList.add('m1_planGrid__cell--isSelected')
            

            td[2].classList.remove('m1_planGrid__cell--isSelected')
            td[6].classList.remove('m1_planGrid__cell--isSelected')
            td[10].classList.remove('m1_planGrid__cell--isSelected')
            td[14].classList.remove('m1_planGrid__cell--isSelected')
            
            td[3].classList.remove('m1_planGrid__cell--isSelected')
            td[7].classList.remove('m1_planGrid__cell--isSelected')
            td[11].classList.remove('m1_planGrid__cell--isSelected')
            td[15].classList.remove('m1_planGrid__cell--isSelected')

            setPrice(9500);
            setMembership(1);
            setMembershipName('플래닛 베이식 테스트');
          
        }else if (id ===id1) {
            td[2].classList.add('m1_planGrid__cell--isSelected')
            td[6].classList.add('m1_planGrid__cell--isSelected')
            td[10].classList.add('m1_planGrid__cell--isSelected')
            td[14].classList.add('m1_planGrid__cell--isSelected')
            

            td[1].classList.remove('m1_planGrid__cell--isSelected')
            td[5].classList.remove('m1_planGrid__cell--isSelected')
            td[9].classList.remove('m1_planGrid__cell--isSelected')
            td[13].classList.remove('m1_planGrid__cell--isSelected')
            
            td[3].classList.remove('m1_planGrid__cell--isSelected')
            td[7].classList.remove('m1_planGrid__cell--isSelected')
            td[11].classList.remove('m1_planGrid__cell--isSelected')
            td[15].classList.remove('m1_planGrid__cell--isSelected')

            setPrice(13500);
            setMembership(2);
            setMembershipName('플래닛 스탠다드 테스트');
          
        }else if (id ===id2) {
            td[3].classList.add('m1_planGrid__cell--isSelected')
            td[7].classList.add('m1_planGrid__cell--isSelected')
            td[11].classList.add('m1_planGrid__cell--isSelected')
            td[15].classList.add('m1_planGrid__cell--isSelected')
            

            td[1].classList.remove('m1_planGrid__cell--isSelected')
            td[5].classList.remove('m1_planGrid__cell--isSelected')
            td[9].classList.remove('m1_planGrid__cell--isSelected')
            td[13].classList.remove('m1_planGrid__cell--isSelected')
            
            td[2].classList.remove('m1_planGrid__cell--isSelected')
            td[6].classList.remove('m1_planGrid__cell--isSelected')
            td[10].classList.remove('m1_planGrid__cell--isSelected')
            td[14].classList.remove('m1_planGrid__cell--isSelected')

            setPrice(17000);
            setMembership(3);
            setMembershipName('플래닛 프리미엄 테스트');
    
        }
    }
    //다음버튼 누르면 결제창   
    const onPay = ()=> {
        const {IMP} =window;
        IMP.init('imp68158508');
        
        
        const data = {
            pg: 'kakaopay',                           // PG사
            pay_method: 'card',                           // 결제수단
            merchant_uid: `mid_${new Date().getTime()}` ,  // 주문번호
            amount: price,                                 // 결제금액 9500 13500 17000
            name: membershipName,                     //주문명
            customer_uid: `billing_${sessionStorage.getItem('phone')}`,                  
            buyer_tel: sessionStorage.getItem('phone'),
            buyer_name : '',                     // 구매자 전화번호
            buyer_email: sessionStorage.getItem('user_email'),               // 구매자 이메일
           };

        IMP.request_pay(data , callback);
        
    }
    
    const callback = (response)=> {
        const { success,
                error_msg,
                imp_uid,
                merchant_uid,
                pay_method,
                paid_amount,
                status
        } = response;
        if(success) {
            console.log('성공!!!' )
            axios({
                url : '/insertSubscribe',
                method : 'post',
                data : qs.stringify({
                    'membership_id' : membership,
                    'customer_uid' : `billing_${sessionStorage.getItem('phone')}`,
                    'user_email' : sessionStorage.getItem('user_email')
                })
            }).then(()=>{
                window.location.href ="/";
            })
        }else {
            alert(`ㅂ2ㅂ2 : ${error_msg}`);
        }
    }
    
   

    return (
        <div id='m1_planform' className="m1_simpleContainer" data-transitioned-child="true">
            <div className="m1_centerContainer m1_narrowCenterContainer" style={{display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms'}}>
                <div className="m1_planFormContainer" data-uia="form-plan-selection">
                    <div className="">
                        <div className="m1_stepHeader-container" data-uia="header">
                            <div className="m1_stepHeader" data-a11y-focus="true" tabIndex="0">
                                <span  className="m1_stepIndicator" data-uia=""><b>2</b>/<b>3단계</b></span>
                                <h1 className="m1_stepTitle" data-uia="stepTitle">원하는 멤버십을 선택하세요.</h1>
                            </div>
                        </div>
                        <div className="m1_changeAnytime">
                            <ul className="m1_checkmark-group m1_-compact" data-uia="checkmark-group">
                                <li className="m1_checkmark-group--row m1_-compact" data-uia="checkmark-group+row-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m1_checkmark-group--icon" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span className="m1_checkmark-group--text" data-uia="checkmark-group+row-0+content">광고 없이 무제한으로 시청.</span>
                                </li>
                                <li className="m1_checkmark-group--row m1_-compact" data-uia="checkmark-group+row-1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m1_checkmark-group--icon" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span className="m1_checkmark-group--text" data-uia="checkmark-group+row-1+content">취향에 꼭 맞는 콘텐츠를 추천해 드립니다.</span>
                                </li>
                                <li className="m1_checkmark-group--row m1_-compact" data-uia="checkmark-group+row-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m1_checkmark-group--icon" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span className="m1_checkmark-group--text" data-uia="checkmark-group+row-2+content">멤버십은 언제든지 변경 또는 해지 가능.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="m1_planGrid m1_planGrid--has3Plans" data-uia="plan-grid">
                        <div className="m1_planGrid__header">
                            <div className="m1_planGrid__selector m1_planGrid__planSelector" role="radiogroup" aria-label="멤버십" aria-describedby="planGrid_planChoice_description" data-uia="plan-grid-plan-selector">
                                <span className="m1_planGrid__selectorDescription" id="planGrid_planChoice_description" data-uia="plan-grid-plan-selector+description" aria-hidden="true">원하는 멤버십을 선택하세요</span>
                                <label className="m1_planGrid__selectorChoice m1_planGrid__planChoice" htmlFor="planGrid_planChoice_0" data-uia="plan-grid-plan-selector+label-text_1_stream_name">
                                    <input type="radio" name="planChoice" className="m1_planGrid__selectorInput m1_planGrid__planInput" id="planGrid_planChoice_0" onClick={onClick} value="314001031" />
                                    <span className="m1_planGrid__selectorLabel m1_planGrid__planLabel">베이식</span>
                                </label>
                                <label className="m1_planGrid__selectorChoice m1_planGrid__planChoice" htmlFor="planGrid_planChoice_1" data-uia="plan-grid-plan-selector+label-text_2_stream_name">
                                    <input type="radio" name="planChoice" className="m1_planGrid__selectorInput m1_planGrid__planInput" id="planGrid_planChoice_1" onClick={onClick}  value="10322" />
                                    <span className="m1_planGrid__selectorLabel m1_planGrid__planLabel">스탠다드</span>
                                </label>
                                <label className="m1_planGrid__selectorChoice m1_planGrid__planChoice" htmlFor="planGrid_planChoice_2" data-uia="plan-grid-plan-selector+label-text_4_stream_name">
                                    <input type="radio" name="planChoice" className="m1_planGrid__selectorInput m1_planGrid__planInput" id="planGrid_planChoice_2" onClick={onClick}  value="10341" defaultChecked />
                                    <span className="m1_planGrid__selectorLabel m1_planGrid__planLabel">프리미엄</span>
                                </label>
                            </div>
                        </div>
                        <table className="m1_planGrid__featureTable" role="table" data-uia="plan-grid-feature-table">
                            <caption className="m1_planGrid__featureTableCaption">
                                넷플릭스 멤버십 유형별 혜택
                            </caption>
                            <tbody className="m1_planGrid__featureTableBody" data-uia="plan-grid-feature-table-body">
                                <tr role="row" className="m1_planGrid__featureTableRow m1_planGrid__featureTableRow--planPrice">
                                    <td className="m1_planGrid__cell m1_planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-feature">월 요금</td>
                                    <td className="m1_planGrid__cell m1_planGrid__stringCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name" aria-label="베이식">9,500원</td>
                                    <td className="m1_planGrid__cell m1_planGrid__stringCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_2_stream_name" aria-label="스탠다드">13,500원</td>
                                    <td className="m1_planGrid__cell m1_planGrid__cell--isSelected m1_planGrid__stringCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_4_stream_name" aria-label="프리미엄">17,000원</td>
                                </tr>
                                <tr role="row" className="m1_planGrid__featureTableRow m1_planGrid__featureTableRow--videoQuality">
                                    <td className="m1_planGrid__cell m1_planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-feature">영상 화질</td>
                                    <td className="m1_planGrid__cell m1_planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name" aria-label="베이식">
                                        <div className="m1_planGrid__videoQualityLabel">좋음</div>
                                    </td>
                                    <td className="m1_planGrid__cell m1_planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-text_2_stream_name" aria-label="스탠다드">
                                        <div className="m1_planGrid__videoQualityLabel">매우 좋음</div>
                                    </td>
                                    <td className="m1_planGrid__cell m1_planGrid__cell--isSelected m1_planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-text_4_stream_name" aria-label="프리미엄">
                                        <div className="m1_planGrid__videoQualityLabel">가장 좋음</div>
                                    </td>
                                </tr>
                                <tr role="row" className="m1_planGrid__featureTableRow m1_planGrid__featureTableRow--resolution">
                                    <td className="m1_planGrid__cell m1_planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-feature">해상도</td>
                                    <td className="m1_planGrid__cell m1_planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name" aria-label="베이식"><div className="m1_planGrid__videoQualityLabel">480p</div></td>
                                    <td className="m1_planGrid__cell m1_planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-text_2_stream_name" aria-label="스탠다드">
                                        <div className="m1_planGrid__videoQualityLabel">1080p</div>
                                    </td>
                                    <td className="m1_planGrid__cell m1_planGrid__cell--isSelected m1_planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-text_4_stream_name" aria-label="프리미엄">
                                        <div className="m1_planGrid__videoQualityLabel">4K+HDR</div>
                                    </td>
                                </tr>
                                <tr role="row" className="m1_planGrid__featureTableRow m1_planGrid__featureTableRow--noField">
                                    <td className="m1_planGrid__cell m1_planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+3-feature">TV, 컴퓨터, 스마트폰, 태블릿으로 시청</td>
                                    <td className="m1_planGrid__cell m1_planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+3-text_1_stream_name" aria-label="베이식">
                                        <span className="m1_planGrid__booleanLabel">예</span>
                                        <span className="m1_planGrid__booleanIcon" aria-hidden="true">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m1_planGrid__booleanGraphic planGrid__booleanGraphic--isCheck" focusable="false">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </span>
                                    </td>
                                    <td className="m1_planGrid__cell m1_planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+3-text_2_stream_name" aria-label="스탠다드">
                                        <span className="m1_planGrid__booleanLabel">예</span>
                                        <span className="m1_planGrid__booleanIcon" aria-hidden="true">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m1_planGrid__booleanGraphic m1_planGrid__booleanGraphic--isCheck" focusable="false">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </span>
                                    </td>
                                    <td className="m1_planGrid__cell m1_planGrid__cell--isSelected m1_planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+3-text_4_stream_name" aria-label="프리미엄">
                                        <span className="m1_planGrid__booleanLabel">예</span>
                                        <span className="m1_planGrid__booleanIcon" aria-hidden="true">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m1_planGrid__booleanGraphic m1_planGrid__booleanGraphic--isCheck" focusable="false">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M8.68239 19.7312L23.6824 5.73115L22.3178 4.26904L8.02404 17.6098L2.70718 12.293L1.29297 13.7072L7.29297 19.7072C7.67401 20.0882 8.28845 20.0988 8.68239 19.7312Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <small className="m1_planGrid__disclaimer m1_planGrid__standardDisclaimer">
                            <span id="" data-uia="plan-grid-legal">
                                HD(720p), 풀 HD(1080p), UHD(4K), HDR 화질 제공 여부는 사용하는 인터넷 서비스와 디바이스의 성능에 따라 달라질 수 있습니다. 모든 콘텐츠가 모든 화질로 제공되지는 않습니다. 자세한 내용은
                                <a href="https://help.netflix.com/legal/termsofuse" target="_blank">이용 약관</a>을 확인하세요.
                            </span>
                        </small>
                        <small className="m1_planGrid__disclaimer m1_planGrid__standardDisclaimer">
                            <span id="" data-uia="plan-grid-legal">한집에 사는 사람들만 계정을 함께 이용할 수 있습니다. 프리미엄 멤버십은 동시접속 4명, 스탠다드 멤버십은 2명, 베이식 멤버십은 1명까지 가능합니다.</span>
                        </small>
                    </div>
                </div>
                <div className="m1_submitBtnContainer">
                    <button type="button" autoComplete="off"  tabIndex="0" className="m1_nf-btn m1_nf-btn-primary m1_nf-btn-solid m1_nf-btn-oversize" data-uia="cta-plan-selection" placeholder="planSelection_button_continue" onClick={onPay}>다음</button>
                </div>
            </div>
        </div>

    );
};

export default PlanFrom;