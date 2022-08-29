import axios from 'axios';
import React, { useState } from 'react';
import LoginHeader from './LoginHeader';

const FindUser = () => {
    let verify;
    const [sendCode, setSendCode]=useState('');
    const qs = require('qs');
    const [phoneInputVal,setPhoneInputVal]=useState('');
    const [emailInputVal,setEmailInputVal]=useState('');
    const [inputCode,setInputCode]=useState('');
    const [isCheckNum,setIsCheckNum]=useState(true);
    const [isFindMenu,setIsFindMenu]=useState(true);
    const [emailCode,setEmailCode] = useState('');
    const [userEmail,setUserEmail]=useState();
    const [phoneCode,setPhoneCode]=useState();
    const [findUserList,setFindUserList] =useState([]);
    const findMenuBtn=()=>{
        setIsFindMenu(!isFindMenu);
    }
    const phoneChangeInput=(e)=>{
        setPhoneInputVal(e.target.value);
    }
    const changeCode=(e)=>{
        setInputCode(e.target.value);
        document.getElementById('codeResultDiv').innerHTML='';
    }
    const inputCodeBtn=()=>{
        if(emailCode == inputCode){
            localStorage.setItem("up_user_email",userEmail);
            localStorage.setItem("zzzzzzzzzz",'zzzzzzzzzz');
            window.location.href='/changePwd'
        }else{
            document.getElementById('codeResultDiv').innerHTML='인증번호가 틀렸습니다.';
        }
    }
    const phoneChangeCode=(e)=>{
        setPhoneCode(e.target.value);
        document.getElementById('PhoneCodeResultDiv').innerHTML=''
    }
    const emailInput=(e)=>{
        setEmailInputVal(e.target.value);
        
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        
        if(regEmail.test(emailInputVal)===false){
            document.getElementsByClassName('inputError')[0].innerText='올바른 이메일 형식이 아닙니다.'
        }else{
            document.getElementsByClassName('inputError')[0].innerText=''
        }
    }
    const sendCodeBtn=()=>{
        var verifyCode = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        verify = verifyCode;
        setSendCode(verify);
            
        axios({
            method : 'post',
            url : '/send-sms',
            data : qs.stringify({
                'recipientPhoneNumber' : phoneInputVal ,
                'title' : 'test',
                'content' : '[PLANET] \n 인증번호  ['+ verifyCode+']'
            })
        }).then(

        );
    }
    const findIdBtn=()=>{
        
        if(phoneCode==sendCode){
            axios({
                method : 'post',
                url : '/findEmail',
                data : qs.stringify({
                    'phone' : phoneInputVal
                })
            }).then(res=>{
                    console.log(res.data[0]);
                    setFindUserList(res.data);
                    console.log(findUserList);
                
            }).catch(error => console.log(error));
            
        }else{
            document.getElementById('PhoneCodeResultDiv').innerHTML='인증번호가 틀립니다'
        }
    }
    const findPwd=()=>{
        const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        
        if(regEmail.test(emailInputVal)===true){
            axios({
                method : 'post',
                url : '/findPwd',
                data : qs.stringify({
                    'user_email' : emailInputVal
                })
            })
            .then(res=>{
                setUserEmail(res.data.userDTO.user_email);
                setEmailCode(res.data.email_code);    
            })
            .catch(error => console.log(error));
            setEmailInputVal('');
            setIsCheckNum(!isCheckNum);
        }else{
        document.getElementsByClassName('inputError')[0].innerText='올바른 이메일 형식이 아닙니다'
    }
    }
    return (
        <div className='bg-[#141414] h-[100%]'>
            <LoginHeader/>
            <div className="wh1-login-content max-w-[450px] mx-auto">
            {
                emailCode!=='' ?
                <>

                    <div className="wh-idpwd-inputForm bg-[#333] mb-[30px]">
                    <label placeholder>
                        <label for="wh-id-box" className="wh-placeLabel">인증번호 입력</label>
                        <input id="wh-id-box" type="text" onChange={changeCode} className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]'/>
                    </label>
                    <div className='text-red-500' id="codeResultDiv"></div>
                    </div>
                    <div>
                    <button type="button" className='text-[#cccccc] m-[20px]' onClick={inputCodeBtn}>인증하기</button>
                    </div>
                </>
                :
                <>
                
                <h1 className='text-white' onClick={findMenuBtn} style={isFindMenu ? {color : 'white'}:{color : '#333333'}}>아이디 찾기</h1>
                <h1 className='text-white' onClick={findMenuBtn} style={!isFindMenu ? {color : 'white'}:{color : '#333333'}}>비밀번호 찾기</h1>
                {
                    isFindMenu?
                    <>
                    <div className="wh-idpwd-inputForm bg-[#333] mb-[30px]">
                        <label placeholder>
                            <label for="wh-id-box" className="wh-placeLabel">휴대폰 입력</label>
                            <input id="wh-id-box"className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="text" onChange={phoneChangeInput} value={phoneInputVal}/>
                            <button type="button" className='text-[#cccccc] m-[20px]' onClick={sendCodeBtn}style={isFindMenu ? {visibility:'visible'}:{visibility : 'hidden'}}>문자 발송</button>
                        </label>
                    </div>
                    <div className="wh-idpwd-inputForm bg-[#333] mb-[30px]">
                        <label placeholder>
                            <label for="wh-id-box" className="wh-placeLabel">인증번호 입력</label>
                            <input id="wh-id-box" onChange={phoneChangeCode} value ={phoneCode} className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="text"/>
                        </label>
                        <div className='text-red-500' id="PhoneCodeResultDiv"></div>
                    </div>
                    </>
                    :
                    <>
                
                        <div className='wh-idpwd-inputForm bg-[#333] mb-[30px]' >
                            <label placeholder>
                                <label for="wh-pwd-box" className="wh-placeLabel">이메일 입력</label>

                            <input  id="wh-pwd-box" className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="text" onChange={emailInput} value={emailInputVal}/>
                            </label>
                            <div className='inputError text-red-500'></div>
                        </div>
                       
                    </>
                }
                <div>
                    <button type="button" className='text-[#cccccc] m-[20px]' onClick={findIdBtn}style={isFindMenu ? {visibility:'visible'}:{visibility : 'hidden'}}>아이디 찾기</button>
                    <button type="button" className='text-[#cccccc] m-[20px]' onClick={findPwd} style={!isFindMenu ? {visibility:'visible'}:{visibility : 'hidden'}}>이메일 발송</button>
                </div>
            </>
            }
                <ul>
                    <li>
                    <span>왜안화</span>
                    </li>
                    {
                        findUserList.map(item=>{

                            <li>
                                
                                {item.user_email}
                                <h1 className='text-white'>{item.user_email}</h1>
                                <h1 className='text-white'>{item.phone}</h1>

                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

export default FindUser;