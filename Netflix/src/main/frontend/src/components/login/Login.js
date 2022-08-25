import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useStores from 'hooks/useStores'
import '../../css/user/login.css'
import LoginHeader from './LoginHeader';


const Login = () => {
    const { authStore } = useStores();
    const qs = require('qs');
    const [idInputVal,setIdInputVal]=useState('');
    const [pwdInputVal,setPwdInputVal]=useState('');
    const [isLogin, setIsLogin]=useState(localStorage.getItem('user_email')==='undefined'|| localStorage.getItem('user_email')===null? false : true);
    const [profileList, setProfileList]=useState([])
    const [refresh,setRefresh]=useState(0);
    const idInput=(e)=>{
        setIdInputVal(e.target.value);
    }
    const pwdInput=(e)=>{
        setPwdInputVal(e.target.value);
    }
    const logoutBtn=()=>{
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
            localStorage.setItem('phone',res.data.phone);
            if(localStorage.getItem('user_email')==='undefined'){
                alert('아이디 비번확인');
                setIsLogin(false);
            }else{
                setIsLogin(true);
                window.location.href='/';
            }
        })
          
        .catch(error => console.log(error));
        setIdInputVal('');
        setPwdInputVal('');
        setRefresh(refresh+1);
    }
    useEffect(()=> {
        // console.log(authStore.logged)
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

    useEffect(()=>{
        console.log(refresh);
    },[refresh])
    
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
            // 폰을 추가해주세요
            //localStorage.setItem('phone',res.data.phone);
            window.location.href='/';
        })
        .catch(error => console.log(error));
    }
    return (
        <div className='bg-[#141414] h-[100%]'>
            <LoginHeader/>
            {
                isLogin? 
                <div>
                    <div><h1 className='text-[#cccccc] m-0'>프로필 선택</h1></div>
                    
                    <ul className="display: flex">
                        {
                            profileList.map(item=>
                                <Link to='/' className='text-[#cccccc]'>
                                    <li className='profileForm m-[30px]'>
                                        <input type="hidden" value={item.profile_id}></input>
                                        <div onClick={selectProfile} className="text-center">
                                            <img src={item.img_path} className="w-[200px] h-auto"></img>
                                            <div className="m-[20px]">
                                                <span >{item.profile_name}</span>

                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )
                        }
                        {
                            profileList.length <= 4
                            && 
                            <Link to='addProfile'>
                                <li className='profileForm m-[30px]'>
                                    <div className='text-white text-center'>
                                        <img className="w-[200px] h-[200px]"/>
                                        <div className="m-[20px]">
                                            <span>프로필 추가</span>

                                        </div>
                                    </div>
                                </li>
                            </Link>
                        }
                    </ul>
                    <button onClick={logoutBtn} className="m-[30px] text-[#cccccc]">로그아웃</button>
                </div>
                :
                <div className="wh1-login-content max-w-[450px] mx-auto">
                    <h1 className='text-white'>로그인</h1>
                    <div className="wh-idpwd-inputForm bg-[#333] mb-[24px]">
                        <label placeholder>
                            <label for="wh-id-box" className="wh-placeLabel">이메일 주소</label>
                            <input id="wh-id-box"className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="text" onChange={idInput} value={idInputVal}/>
                        </label>
                    </div>
                    <div className='wh-idpwd-inputForm bg-[#333]'>
                        <label placeholder>
                            <label for="wh-pwd-box" className="wh-placeLabel">비밀번호</label>
    
                        <input  id="wh-pwd-box" className='wh-nfTextField h-[50px] bg-[transparent] w-[100%] boarder-[0]' type="password" onChange={pwdInput} value={pwdInputVal}/>
                        </label>
                    </div>

                    
                    <div>

                        <button type="button" onClick={login} className='text-[#cccccc] m-[20px]'>로그인</button>
                        <Link to ='/signup' className='text-[#cccccc]'><span>회원가입</span></Link>

                    </div>
                </div>
            }
        </div>
    );
};

export default Login;