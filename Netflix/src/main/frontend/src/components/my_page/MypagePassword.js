import React from 'react';
import 'css/myPage/MypageContainer.css'
const MypagePassword = () => {
    return (
        <div>
            <div className="m1_bd">
                <div className="responsive-account-container">
                    <form className="change-password-form" data-uia="change-password-form" method="post" noValidate="">
                        <h1>비밀번호 변경</h1>
                        <ul className="simpleForm structural ui-grid">
                            <li data-uia="field-currentPassword+wrapper" className="nfFormSpace">
                                <div data-uia="field-currentPassword+container" className="nfInput">
                                    <div className="nfInputPlacement">
                                        <label className="input_id" placeholder="currentPassword">
                                            <input type="password" data-uia="field-currentPassword" name="currentPassword" className="nfTextField" id="id_currentPassword" value="" tabIndex="0" autoComplete="off" maxLength="60" minLength="4" dir="" />
                                            <label htmlFor="id_currentPassword" className="placeLabel">기존 비밀번호</label>
                                        </label>
                                    </div>
                                    <div id="" className="inputCaption" data-uia=""><a data-ui="action_forgot_password" href="/loginhelp">비밀번호를 잊으셨나요? </a></div>
                                </div>
                            </li>
                            <li data-uia="field-newPassword+wrapper" className="nfFormSpace">
                                <div data-uia="field-newPassword+container" className="nfInput">
                                    <div className="nfInputPlacement">
                                        <label className="input_id" placeholder="newPassword">
                                            <input type="password" data-uia="field-newPassword" name="newPassword" className="nfTextField" id="id_newPassword" value="" tabIndex="0" autoComplete="off" maxLength="60" minLength="6" dir="" />
                                            <label htmlFor="id_newPassword" className="placeLabel">새 비밀번호(6~60자)</label>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li data-uia="field-confirmNewPassword+wrapper" className="nfFormSpace">
                                <div data-uia="field-confirmNewPassword+container" className="nfInput">
                                    <div className="nfInputPlacement">
                                        <label className="input_id" placeholder="confirmNewPassword">
                                            <input
                                                type="password"
                                                data-uia="field-confirmNewPassword"
                                                name="confirmNewPassword"
                                                className="nfTextField"
                                                id="id_confirmNewPassword"
                                                value=""
                                                tabIndex="0"
                                                autoComplete="off"
                                                maxLength="60"
                                                minLength="6"
                                                dir=""
                                            />
                                            <label htmlFor="id_confirmNewPassword" className="placeLabel">새 비밀번호 재입력</label>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li data-uia="field-requireAllDevicesSignIn+wrapper" className="nfFormSpace">
                                <div className="ui-binary-input">
                                    <input type="checkbox" className="" name="requireAllDevicesSignIn" id="cb_requireAllDevicesSignIn" value="true" tabIndex="0" checked="" data-uia="field-requireAllDevicesSignIn" />
                                    <label htmlFor="cb_requireAllDevicesSignIn" data-uia="field-requireAllDevicesSignIn+label">모든 디바이스에서 새로운 비밀번호로 다시 로그인하셔야 합니다.</label>
                                    <div className="helper"></div>
                                </div>
                            </li>
                        </ul>
                        <div className="nf-btn-bar change-password-buttons">
                            <button id="btn-save" type="submit" autoComplete="off" tabIndex="0" className="nf-btn nf-btn-primary nf-btn-retro nf-btn-small" data-uia="action_save-password" placeholder="">저장</button>
                            <button id="btn-cancel" type="button" autoComplete="off" tabIndex="0" className="nf-btn nf-btn-secondary nf-btn-retro nf-btn-small" data-uia="action_cancel-change-password" placeholder="">취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MypagePassword;