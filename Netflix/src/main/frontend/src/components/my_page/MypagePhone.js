import React, { useEffect, useState } from 'react';
import 'css/myPage/MypageContainer.css'

const Mypagephone = () => {
    const [phone , setPhone] = useState('');
    const onInput = (e)=> {
        setPhone(e.target.value)
        const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
        if(regPhone.test(e.target.value) === true ) {
        document.querySelector('#btn-next').disabled = false;
        }else {
        document.querySelector('#btn-next').disabled = true;
        }
    }
    const changePhone = ()=> {
        window.location.href= '/my'
    }
    useEffect(()=> {
        document.querySelector('#btn-next').disabled = true;
    }, [])
   
    return (
        <div className="m1_bd">
            <div className="m1_responsive-account-container">
                <form className="m1_change-phone-form" data-uia="change-phone-form" method="post" noValidate="">
                    <h1 className="m1_headline" data-uia="headline-text">전화번호를 변경하세요</h1>
                    <p className="m1_secondary" data-uia="secondary-text">
                        등록하신 전화번호는 나중에 접속 문제를 해결하거나 계정을 복구하는 데 사용됩니다. 이제 전화번호 인증을 위한 코드를 문자로 보내드립니다. 문자 또는 데이터 요금이 부과될 수 있습니다.
                    </p>
                    <label htmlFor="id_phoneNumber">휴대폰 번호</label>
                    <ul className="m1_simpleForm m1_structural ui-grid">
                        <li data-uia="field-phoneNumber+wrapper" className="m1_nfFormSpace m1_phone-number">
                            <div data-uia="field-phoneNumber+container" className="m1_nfInput externalLabel">
                                <label htmlFor="id_phoneNumber" className="m1_"></label>
                                <div className="m1_nfInputPlacement">
                                    <label className="m1_input_id" placeholder="phoneNumber">
                                        <input
                                            type="text"
                                            data-uia="field-phoneNumber"
                                            name="phoneNumber"
                                            className="m1_nfTextField hasText"
                                            id="id_phoneNumber"
                                            value={phone}
                                            onChange={onInput}
                                            tabIndex="0"
                                            autoComplete="off"
                                            maxLength="15"
                                            minLength="5"
                                            dir="ltr"
                                        />
                                    </label>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="m1_nf-btn-bar change-phone-buttons">
                        <button id="btn-next" type="button" autoComplete="off" tabIndex="0" onClick={changePhone} className="m1_nf-btn m1_nf-btn-primary m1_nf-btn-retro m1_nf-btn-small" data-uia="action_next-phone" placeholder="">다음</button>
                        <button id="btn-delete" type="button" autoComplete="off" tabIndex="0" className="m1_nf-btn m1_nf-btn-secondary m1_nf-btn-retro m1_nf-btn-small" data-uia="action_delete-phone" placeholder="">전화번호 삭제</button>
                        <button id="btn-cancel" type="button" autoComplete="off" tabIndex="0" className="m1_nf-btn m1_nf-btn-secondary m1_nf-btn-solid m1_nf-btn-small" data-uia="action_cancel-change-phone" placeholder="">취소</button>
                    </div>
                </form>
            </div>
        </div>
                
    );
};

export default Mypagephone;