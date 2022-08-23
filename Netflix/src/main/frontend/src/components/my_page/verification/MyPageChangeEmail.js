import React, { useEffect, useState } from 'react';

const MyPageChangeEmail = () => {
    const [newEmail , setNewEmail] = useState('')
    const changeEmail =(e) => {
        setNewEmail(e.target.value)
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        if(regEmail.test(e.target.value)===true) {
            document.getElementsByClassName('m1_inputError')[0].style.visibility ='hidden'
            document.querySelector('#btn-save').disabled = false;
        }else {
            document.getElementsByClassName('m1_inputError')[0].style.visibility ='visible'
            document.querySelector('#btn-save').disabled = true;
        }
    }
    const onChangeEmail = ()=> {
        window.location.href = "/my";
    }
    const onReset = ()=> {
        setNewEmail('')
    }
    useEffect(()=> {
        document.querySelector('#btn-save').disabled = true;
        document.getElementsByClassName('m1_inputError')[0].style.visibility ='hidden'

    }, [])
    return (
        <div className="m1_bd">
            <div className="m1_responsive-account-container">
                <form className="m1_change-email-form" data-uia="change-email-form" method="post" noValidate="">
                    <h1>이메일 변경</h1>
                    <div></div>
                    <ul className="m1_simpleForm m1_structural m1_ui-grid">
                        <li data-uia="field-currentEmail+wrapper" className="m1_nfFormSpace">
                            <div data-uia="field-currentEmail+container" className="m1_nfInput">
                                <div className="m1_nfInputPlacement">
                                    <label className="m1_input_id" placeholder="currentEmail">
                                        <input type="text" data-uia="field-currentEmail" name="currentEmail" className="m1_nfTextField m1_hasText" id="id_currentEmail" value="wnscks20@naver.com" tabIndex="0" autoComplete="off" disabled dir="ltr" />
                                        <label htmlFor="id_currentEmail" className="m1_placeLabel">현재 이메일</label>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li data-uia="field-newEmail+wrapper" className="m1_nfFormSpace">
                            <div data-uia="field-newEmail+container" className="m1_nfInput">
                                <div className="m1_nfInputPlacement">
                                    <label className="m1_input_id" placeholder="newEmail">
                                        <input type="text" data-uia="field-newEmail" name="newEmail" className="m1_nfTextField m1_error m1_hasText" id="id_newEmail" value={newEmail} onChange={changeEmail} tabIndex="0" autoComplete="off" maxLength="50" minLength="5" dir="" />
                                        <label htmlFor="id_newEmail" className="m1_placeLabel">새 이메일</label>
                                    </label>
                                </div>
                                <div id="" className="m1_inputError" data-uia="field-newEmail+error">정확한 이메일 주소를 입력하세요. 예: name@example.com</div>
                            </div>
                        </li>
                    </ul>
                    <div className="m1_nf-btn-bar m1_change-email-buttons">
                        <button id="btn-save" type="button" autoComplete="off" tabIndex="0" onClick={onChangeEmail}  className="m1_nf-btn m1_nf-btn-primary m1_nf-btn-retro m1_nf-btn-small" data-uia="action_save-email" placeholder="" >저장</button>
                        <button id="btn-cancel" type="button" autoComplete="off" tabIndex="0" onClick={onReset} className="m1_nf-btn m1_nf-btn-secondary m1_nf-btn-solid m1_nf-btn-small" data-uia="action_cancel-change-email" placeholder="">취소</button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default MyPageChangeEmail;