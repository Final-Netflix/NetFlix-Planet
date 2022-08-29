import axios from 'axios';
import React, {useState} from 'react';


const SignUpComponets = () => {
    let checked =false;
    let checkNumber =false;
    let checkEmail ;
    const qs = require('qs');
    let verify;
    
    //개인정보 수집 동의 함수
    const changeCheck = (e)=> {
        if(e.target.checked) {
            checked =e.target.checked
            document.getElementsByClassName('m1_helper')[0].innerText= '' 
            console.log(checked)
        }else {
            checked = e.target.checked;
            document.getElementsByClassName('m1_helper')[0].innerText= '먼저 이용 약관에 동의하셔야 합니다.'
            console.log(checked)
        }
    } 


    //회원가입 버튼
    const onSignUp= ()=> {
        const email = document.getElementById('id_email').value
        const pwd = document.getElementById('id_pwd').value
        const confirmPwd = document.getElementById('id_confirmPwd').value
        const phone = document.getElementById('id_phone').value
        const error = document.getElementsByClassName('m1_inputError');
        let checkPwd = false;
        console.log('gdg')
        if(pwd.length <6) {
            error[1].innerText='6자 이상을 입력해주세요.'
        }
        if(confirmPwd !== pwd) {
            error[2].innerText = '비밀번호가 일치하지 않습니다.'
        } if(confirmPwd === pwd && pwd>=6) {
            checkPwd = true;
        }
        if(!checkNumber) {
            error[4].innerText = '휴대폰 인증을 해주세요.'
        }
        if(!checked) {
            document.getElementsByClassName('m1_helper')[0].innerText= '먼저 이용 약관에 동의하셔야 합니다.'

        }
        if(checkEmail && checkPwd && checkNumber && checked) {
            axios({
                method: 'post',
                url : 'http://localhost:8080/signUp',
                data : qs.stringify({
                    'user_email' : email ,
                    'user_pwd' : pwd ,
                    'phone' : phone
                })
            }).then((res)=>{
                if(res.data===0) {
                    //자동으로 로그인 처리를 하게 값을 담는다.
                    localStorage.setItem("user_email", email)
                    localStorage.setItem("phone", phone)
                    window.location.href = "/signup/planform"
                }else {
                    alert('이미 가입한 회원입니다. 로그인해주세요.')
                }

            })
        }
    }
    
    
    const Input= ({name , type, place})=> {
        const [val, setVal] = useState('');
        const onChange = (e)=> {
            setVal(e.target.value)
            document.getElementById(e.target.id).classList.add('m1_hasText');

            if(e.target.value.length ===0) {
                document.getElementById(e.target.id).classList.remove('hasText');
            }
            if(e.target.id ==='id_email') {
                const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
                if(regEmail.test(e.target.value)===true) {
                    axios({
                        method: 'post',
                        url : 'http://localhost:8080/emailCheck',
                        data : qs.stringify({
                            'user_email' : e.target.value ,
                        })
                    }).then((res)=>{
                        if(res.data===1) {
                            document.getElementsByClassName('m1_inputError')[0].style.color = 'red';
                            document.getElementsByClassName('m1_inputError')[0].innerText='중복되는 이메일입니다.'
                            checkEmail = false;
                        }else {
                            document.getElementsByClassName('m1_inputError')[0].style.color = 'blue';
                            document.getElementsByClassName('m1_inputError')[0].innerText='사용가능한 이메일입니다.'
                            checkEmail = true;

                        }
                    
                    })
                }else {
                    document.getElementsByClassName('m1_inputError')[0].innerText='올바른 이메일 형식이 아닙니다.'

                }
            }
                        

        }
        const onFocus = (e)=> {
            const cla = e.target.parentElement.parentElement.id
            document.querySelector('#'+cla+'+.m1_inputError').innerText =''
        }

        const onNumber = (e)=> {
            const regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
            if(regPhone.test(document.getElementById('id_phone').value)=== true) {
                var verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;
                verify = verifyCode;
                console.log("1 | " + verify);
                 
                axios({
                    method : 'post',
                    url : 'http://localhost:8080/send-sms',
                    data : qs.stringify({
                        'recipientPhoneNumber' : document.getElementById('id_phone').value ,
                        'title' : 'test',
                        'content' : '[PLANET] \n 인증번호  ['+ verifyCode+']'
                    })
                }).then(function(){
                    document.getElementById('id_number').disabled = false;

                    document.getElementById('id_number').focus()
                });
            }
        }
        //인증번호 비교하기
        const onBlur=(e)=> {
            if(e.target.id ==='id_number') {
                console.log("2 | " + verify);
                if(verify === parseInt(e.target.value)) {
                    alert('인증완료')
                    checkNumber= true;
                    document.getElementById(e.target.id).disabled =true;
                }else{
                    console.log(verify)
                    console.log(e.target.value)
                    alert('인증번호가 일치하지 않습니다.')
                }
            }
        }

        return (
                <li data-uia="field-email+wrapper" className="m1_nfFormSpace">
                    <div data-uia="field-email+container" className="m1_nfInput m1_nfInputOversize">
                        <div id={`parent_${name}`} className="m1_nfInputPlacement">
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
                            {name ==='phone' && <div id='btn_controller'><div onClick={onNumber} id='number_btn'>전송</div></div>}
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
                                            <input type="checkbox" className="m1_error" name="pipcConsent" id="m1_cb_pipcConsent" tabIndex="0" data-uia="field-pipcConsent"  onChange={changeCheck}/>
                                            <label htmlFor="m1_cb_pipcConsent" data-uia="field-pipcConsent+label">
                                                <span id="" data-uia="">예, 저는 <a href="https://help.netflix.com/legal/privacy" target="_blank">개인정보 처리방침</a>에 따른 개인정보 수집 및 활용에 동의합니다.</span>
                                            </label>
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