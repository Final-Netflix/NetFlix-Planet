import React, { useState } from 'react';
import axios from 'axios';
import 'css/myPage/MypageContainer.css'
import { useNavigate } from 'react-router-dom';


const MypagePassword = () => {
    const navigate = useNavigate();
    const qs = require('qs');
    const [checked , setChecked] = useState(true)
    const [pwdInput, setPwdInput]=useState();
    
    // const pwdChangeInput=(e)=>{
    //     setPwdInput(e.target.value);
    //     if(setPwdInput(e.target.value) != checked)
    //     document.getElementById('id_currentPassword').innerHTML=''; 
    // }

    
    //파란색 체크
    const changeCheck = (e)=> {
       const {checked} = e.target
       console.log(e.target)
       setChecked(checked)
       const box = document.createElement('style')
       box.innerText=".ui-binary-input input[type=checkbox]:checked+label:after{ color: #0080ff; content: '\\e804'; font-family: nf-icon; font-size: 28px; left: -36px; top: -2px;}"
        checked &&  document.body.appendChild(box) 
    }
    //저장 버튼(유효성 검사 및 비밀번호 변경)
    const onSave = ()=> {
        document.getElementsByClassName('m1_inputError')[1].innerText = ''
        const id1 = document.getElementById('id_currentPassword')
        const id2 = document.getElementById('id_newPassword')
        const id3 = document.getElementById('id_confirmNewPassword')
        

        //비밀번호 대조는 나중에 추가해야함
        if(id1.value.length <6) {
            id1.focus()
        }else if(id1.value !== pwdInput ) {
            console.log(id1.value);
            document.getElementsByClassName('m1_inputError')[0].innerText ='비밀번호를 잘못 입력하셨습니다.'
            pwdInput(pwdInput);
        }else if(id2.value.length <6) {
            document.getElementsByClassName('m1_inputError')[1].innerText ='비밀번호는 6~60자 사이여야 합니다.'
        }else if(id2.value !==id3.value) {
            document.getElementsByClassName('m1_inputError')[2].innerText ='새 비밀번호와 일치해야 합니다.'
        }else {
            axios({
                method : 'post',
                url : 'http://localhost:8080/myPageUpdatePwd',
                data : qs.stringify({
                    'user_email' : localStorage.getItem('user_email'),
                    'user_pwd' : id1.value,
                    'change_pwd' : id2.value,
                })
                
            })
            .then(function(res) {
                console.log(res.data);
                if (res.data !== null && res.data != "") {
                    console.log("성공");
                } else {
                    // alert("실패 zz 현재 비밀번호를 확인하세요.");
                    
                    setPwdInput("");
                }
            })
            .catch(error => console.log(error));
            if(id1.value !== pwdInput ) {
                console.log(id1.value);
                document.getElementsByClassName('m1_inputError')[0].innerText ='비밀번호를 잘못 입력하셨습니다.'
                // pwdInput(pwdInput);

            navigate('/my')
            localStorage.removeItem();
            }
        }
    
    }
   
    //password input component
    const PwdInput = ({id, content})=> {
        const [pwd,setPwd] = useState('')
        const changePwd = (e)=> {
            setPwd(e.target.value)
            document.getElementById(e.target.id).classList.add('hasText');
            const classAll = document.getElementById(e.target.id)

            if(classAll.value.length >=6) {
                classAll.style.borderColor = 'green'
                
            }
            if(classAll.value.length <6) {
            classAll.style.borderColor = 'blue'
            }

            if(e.target.value.length ===0) {
                document.getElementById(e.target.id).classList.remove('hasText');
            }
         
        }
        //focus out css
        const onBlur = (e)=> {
            const classAll = document.getElementById(e.target.id)
            if(classAll.value.length <6) {
               classAll.style.borderColor= '#8c8c8c'
            }
        }
        return <li data-uia="field-currentPassword+wrapper" className="nfFormSpace">
        <div data-uia="field-currentPassword+container" className="nfInput">
            <div className="nfInputPlacement">
                <label className="input_id" placeholder="currentPassword">
                    <input type="password" onBlur={onBlur} onChange={changePwd} data-uia="field-currentPassword" value={pwd} name={id} className="nfTextField" id={`id_${id}`} tabIndex="0" autoComplete="off" maxLength="60" minLength="4" dir="" />
                    <label htmlFor={`id_${id}`} className="placeLabel">{content}</label>
                </label>
            </div>
            <div id="m1_inputError" className="m1_inputError"></div>
            {
                id === 'currentPassword' &&  <div id="" className="inputCaption" data-uia=""><a data-ui="action_forgot_password" href="/loginhelp">비밀번호를 잊으셨나요? </a></div>
            }
        </div>
    </li>
    }

    return (
        <div>
            <div className="m1_bd">
                <div className="responsive-account-container">
                    <form className="change-password-form" data-uia="change-password-form" method="post" noValidate="">
                        <h1>비밀번호 변경</h1>
                        <ul className="simpleForm structural ui-grid">
                            <PwdInput id='currentPassword' content='기존 비밀번호' onChange={pwdInput}/>
                            <PwdInput id='newPassword' content='새 비밀번호(6~60자)' />
                            <PwdInput id='confirmNewPassword' content='새 비밀번호 재입력' />
                          
                            <li data-uia="field-requireAllDevicesSignIn+wrapper" className="nfFormSpace">
                                <div className="ui-binary-input">
                                    <input type="checkbox" name="requireAllDevicesSignIn" id="cb_requireAllDevicesSignIn"  onChange={pwdInput} />
                                    <label className="realCheck" htmlFor="cb_requireAllDevicesSignIn" data-uia="field-requireAllDevicesSignIn+label">모든 디바이스에서 새로운 비밀번호로 다시 로그인하셔야 합니다.</label>
                                    
                                </div>
                            </li>
                        </ul>
                        <div className="nf-btn-bar change-password-buttons">
                            <button id="btn-save" type="button" onClick={onSave}  autoComplete="off" tabIndex="0" className="nf-btn nf-btn-primary nf-btn-retro nf-btn-small" data-uia="action_save-password" placeholder="">저장</button>
                            <button id="btn-cancel" type="button" autoComplete="off" tabIndex="0" className="nf-btn nf-btn-secondary nf-btn-retro nf-btn-small" data-uia="action_cancel-change-password" placeholder="">취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MypagePassword;