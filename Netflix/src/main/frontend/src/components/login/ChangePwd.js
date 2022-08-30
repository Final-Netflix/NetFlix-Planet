import axios from 'axios';
import React, { useState } from 'react';
import LoginHeader from './LoginHeader';

const ChangePwd = () => {
    const qs = require('qs');
    const [pwdInput,setPwdInput]=useState();
    const [rePwdInput,setRePwdInput]=useState();
    const pwdChangeInput=(e)=>{
        setPwdInput(e.target.value);
        document.getElementById('pwdDiv').innerHTML='';
    }
    const rePwdChangeInput=(e)=>{
        setRePwdInput(e.target.value);
        document.getElementById('pwdDiv').innerHTML='';
    }
    const changePwd=()=>{
        if(pwdInput.length < 6){
            document.getElementById('pwdDiv').innerHTML='6자 이상 입력해주세요'
        }else if( pwdInput != rePwdInput){
            document.getElementById('pwdDiv').innerHTML='재확인과 일치하지 않습니다.'
        }
        else{

        
            axios({
                method : 'post',
                url : '/updatePwd',
                data : qs.stringify({
                    'user_email' : localStorage.getItem('up_user_email'),
                    'user_pwd' : pwdInput
                })
            })
            .then()
            .catch(error => console.log(error));
            window.location.href='/'
            localStorage.removeItem();
        }
    }
    return (
        <div className='bg-[#141414] h-[100%]'>
            <LoginHeader/>
            {
            localStorage.getItem('zzzzzzzzzz')===null? 
                <h1>잘못된 경로입니다.</h1>
            :
            <>
            <div className="wh1-login-content max-w-[450px] mx-auto">
                <div className="wh-idpwd-inputForm bg-[#333] mb-[30px]">
                    <label placeholder>
                        <label for="wh-id-box" className="wh-placeLabel">변경할 비밀번호 입력</label>
                        <input id="wh-id-box"className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="password" onChange={pwdChangeInput}/>
                    </label>
                </div>
                <div className="wh-idpwd-inputForm bg-[#333] mb-[30px]">
                    <label placeholder>
                        <label for="wh-id-box" className="wh-placeLabel">재확인</label>
                        <input id="wh-id-box"className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="password" onChange={rePwdChangeInput}/>
                    </label>
                </div>
                <div id="pwdDiv" className='text-red-500'></div>
            </div>
            <button type="button" className='text-[#cccccc] m-[20px]' onClick={changePwd}>변경하기</button>
            </>
            }
        </div>
    );
};

export default ChangePwd;