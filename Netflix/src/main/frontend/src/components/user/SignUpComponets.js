import axios from 'axios';
import React, {useEffect,  useRef,  useState} from 'react';

const SignUpComponets = () => {

    const onSignUp= ()=> {

    }

    const Input= ({name , type, place})=> {
        const [val, setVal] = useState('');
        const onChange = (e)=> {
            setVal(e.target.value)
            document.getElementById(e.target.id).classList.add('m1_hasText');

            if(e.target.value.length ===0) {
                document.getElementById(e.target.id).classList.remove('hasText');
            }

        }
        const onFocus = (e)=> {
            const cla = e.target.parentElement.parentElement.className
           document.querySelector('.'+cla+'+.m1_inputError').innerText =''
        }
        const qs = require('qs');
        const onBlur= (e)=> {
            const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if(regPhone.test(document.getElementById('id_phone').value)=== true) {
                var verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;
                 if(window.confirm('인증번호 전송하시겠어요?')) {
                    console.log('gdgd')
                 }
                 axios({
                    method : 'post',
                    url : 'http://localhost:8080/kingkong',
                    data : qs.stringify({
                        'recipientPhoneNumber' : document.getElementById(e.target.id).value ,
						'title' : 'test',
						'content' : '[Planet] \n 인증번호  ['+ verifyCode+']'
                    })
                 }).then(function(response){
                    console.log(response);
                  });
            }
        }
       
      
               
            return (
                    <li data-uia="field-email+wrapper" className="m1_nfFormSpace">
                        <div data-uia="field-email+container" className="m1_nfInput m1_nfInputOversize">
                            <div className="m1_nfInputPlacement">
                                <label className="m1_input_id" placeholder="email">
                                    <input
                                        name={name}
                                        className="m1_nfTextField"
                                        id={`id_${name}`}
                                        type={type}
                                        tabIndex="0"
                                        autoComplete="off"
                                        maxLength="50"
                                        minLength="5"
                                        value={val}
                                        onChange={onChange}
                                        onFocus={onFocus}
                                        onBlur={onBlur}
                                        
                                        />
                                    <label htmlFor={`id_${name}`} className="m1_placeLabel">{place}</label>
                                </label>
                            </div>
                            <div className='m1_inputError'></div>
                        </div>
                    </li> )
                    
                }
    
                

    return (
        <div id="m1_SignUpComponets" className="m1_simpleContainer" data-transitioned-child="true">
            <div className="m1_centerContainer" style={{display: 'block', transform: 'none' , opacity: 1, transitionDuration: '250ms'}}>
                <form method="POST">
                    <div className="m1_regFormContainer" data-uia="form-registration">
                        <div className="">
                            <div className="m1_stepHeader-container" data-uia="header">
                                <div className="m1_stepHeader" data-a11y-focus="true" tabIndex="0">
                                    <span id="" className="m1_stepIndicator" data-uia=""><b>1</b>/<b>3단계</b></span>
                                    <h1 className="m1_stepTitle" data-uia="stepTitle">비밀번호를 설정해 멤버십을 시작하세요.</h1>
                                </div>
                            </div>
                            <div>
                                <div className="m1_contextRow" data-uia="contextRowDone">몇 단계만 더 거치면 넷플릭스 가입 완료!</div>
                                <div className="m1_contextRow" data-uia="contextRowPaperWork">복잡한 단계는 모두 없앴습니다.</div>
                                <ul className="m1_simpleForm m1_structural m1_ui-grid">
                                    <Input name="email" type="email" place="이메일 주소"/>
                                    <Input name="pwd" type="password" place="비밀번호를 추가하세요."/>
                                    <Input name="confirmPwd" type="password" place="다시 한번 입력하세요."/>
                                    <Input name="phone" type="tel" place="휴대전화 번호"/>
                                    <Input name="number" type="text" place="인증번호"/>
                                    <li data-uia="field-pipcConsent+wrapper" className="m1_nfFormSpace">
                                        <div className="m1_ui-binary-input error">
                                            <input type="checkbox" className="m1_error" name="pipcConsent" id="m1_cb_pipcConsent" tabIndex="0" data-uia="field-pipcConsent" value="true" />
                                            <label htmlFor="cb_pipcConsent" data-uia="field-pipcConsent+label">
                                                <span id="" data-uia="">예, 저는 <a href="https://help.netflix.com/legal/privacy" target="_blank">개인정보 처리방침</a>에 따른 개인정보 수집 및 활용에 동의합니다.</span>
                                            </label>
                                            <div className="m1_helper">먼저 이용 약관에 동의하셔야 합니다.</div>
                                        </div>
                                    </li>
                                    <li data-uia="field-emailPreference+wrapper" className="m1_nfFormSpace">
                                        <div className="m1_ui-binary-input">
                                            <input type="checkbox" className="m1_" name="emailPreference" id="m1_cb_emailPreference" tabIndex="0" data-uia="field-emailPreference" value="true" />
                                            <label htmlFor="cb_emailPreference" data-uia="field-emailPreference+label">예, 넷플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)</label>
                                            <div className="m1_helper"></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="m1_submitBtnContainer">
                            <button type="button" autoComplete="off" tabIndex="0" className="m1_nf-btn m1_nf-btn-primary m1_nf-btn-solid m1_nf-btn-oversize" onClick={onSignUp}>
                                동의하고 계속
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
   
};

export default SignUpComponets;