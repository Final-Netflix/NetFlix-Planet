import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {

    const qs = require('qs');
    const [idInputVal,setIdInputVal]=useState('');
    const [pwdInputVal,setPwdInputVal]=useState('');
    const [loginCheck, setLoginCheck]=useState(false);

    const idInput=(e)=>{
        setIdInputVal(e.target.value);
    }
    const pwdInput=(e)=>{
        setPwdInputVal(e.target.value);
    }
    const login =()=>{
        
        axios({
            method : 'post',
            url : 'http://localhost:8080/login',
            data : qs.stringify({
                'user_id' : idInputVal,
                'user_pwd' : pwdInputVal
            })
          })
          .then(res => {
            setLoginCheck(res.data);
            console.log(sessionStorage.getItem('user_email'));
        })
          .catch(error => console.log(error));
        setIdInputVal('');
        setPwdInputVal('');
    }
    return (
        <div>
            <div>
                <span>아이디 : </span>
                <input type="text" onChange={idInput} value={idInputVal}/>
            </div>
            <div>
                <span>비밀번호 : </span>
                <input type="password" onChange={pwdInput} value={pwdInputVal}/>
            </div>


            <div>
                <button type="button" onClick={login}>로그인</button>
                <Link to='/'>뒤로가기</Link>
            </div>
        </div>
    );
};

export default Login;