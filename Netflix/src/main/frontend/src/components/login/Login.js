import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const qs = require('qs');
    const [idInputVal,setIdInputVal]=useState('');
    const [pwdInputVal,setPwdInputVal]=useState('');
    const [isLogin, setIsLogin]=useState(localStorage.getItem('user_email') !== null ? true : false);
    const [profileList, setProfileList]=useState([])

    const idInput=(e)=>{
        setIdInputVal(e.target.value);
    }
    const pwdInput=(e)=>{
        setPwdInputVal(e.target.value);
    }
    const logoutBtn=()=>{
        localStorage.setItem('storageIsLogin', false);
        setIsLogin(false);
        localStorage.clear();
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
            localStorage.setItem('user_email', res.data.user_email);
            localStorage.setItem('storageIsLogin', true);
            setIsLogin(true);
            
        })
          .catch(error => console.log(error));
        setIdInputVal('');
        setPwdInputVal('');
    }
    useEffect(()=> {
        axios({
            method : 'post',
            url : 'http://localhost:8080/getProfileList',
            data : qs.stringify({
                'user_email' : localStorage.getItem('user_email')
            })
        })
        .then(res=>{
            setProfileList(res.data);
            
          })
          .catch(error => console.log(error));
        
    },[]);
    
    const selectProfile=(e)=>{
        let findProfileId;
        const target = e.target;
        findProfileId = target.closest('.profileForm').childNodes[0].value;
        axios({
            method : 'post',
            url : 'http://localhost:8080/getProfile',
            data : qs.stringify({
                'profile_id' : findProfileId
            })
        })
        .then(res=>{
            localStorage.setItem('profile_id',res.data.profile_id);
            localStorage.setItem('profile_name',res.data.profile_name);
            localStorage.setItem('img_path',res.data.img_path);
            
          })
          .catch(error => console.log(error));
    }
    return (
        <div>
            {
                isLogin? 
                <div>

                    <div><h1>프로필 선택</h1></div>
                    <ul>
                        {
                            profileList.map(item=>
                                <>
                                    <li className='profileForm'>
                                        <input type="hidden" value={item.profile_id}></input>
                                        <div onClick={selectProfile} >
                                            {item.profile_name}
                                            <img src={item.img_path}></img>
                                        </div>
                                    </li>
                                </>
                            )
                        }
                        <button onClick={logoutBtn}>로그아웃</button>
                        <Link to ='/' className='text-black'><span>메인으로</span></Link>
                    </ul>
                </div>
                :
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
                        <Link to ='/' className='text-black'><span>메인으로</span></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Login;