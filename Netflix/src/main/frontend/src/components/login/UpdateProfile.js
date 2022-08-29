import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginHeader from './LoginHeader';
import '../../css/user/login.css';

const UpdateProfile = () => {
    const qs = require('qs');
    const [img_path,setImg_path] = useState(localStorage.getItem('img_path'));
    const [profileList, setProfileList]=useState([]);
    const [profileName,setprofileName]=useState(localStorage.getItem('profile_name'));
    const [profileId,setprofileId]=useState(localStorage.getItem('profile_id'));
    useEffect(()=> {
        axios({
            method : 'post',
            url : '/getProfileList',
            data : qs.stringify({
                'user_email' : localStorage.getItem('user_email')
            })
        })
        .then(res=>{
            setProfileList(res.data);
            
        })
        .catch(error => console.log(error));
        
    },[]);
    const imgMenuOpen=()=>{

    }
    const selectProfile=(e)=>{
        let findProfileId;
        const target = e.target;
        findProfileId = target.closest('.profileForm').childNodes[0].value;
        axios({
            method : 'post',
            url : '/getProfile',
            data : qs.stringify({
                'profile_id' : findProfileId
            })
        })
        .then(res=>{
            setprofileId(res.data.profile_id);
            setprofileName(res.data.profile_name);
            setImg_path(res.data.img_path);
            console.log(profileId);
        })
        .catch(error => console.log(error));
    }
    const profileNameOnChage = (e)=>{
        setprofileName(e.target.value);
    }
    const delectProfileBtn =() =>{
        axios({
            method : 'post',
            url : '/deleteProfile',
            data : qs.stringify({
                'profile_id' : profileId
            })
        })
        .then(res=>{
            alert('삭제 되었습니다.');
            window.location.href ='/updateProfile';

        })
        .catch(error => console.log(error));
    }
    const updateProfilBtn = ()=>{
        axios({
            method : 'post',
            url : '/updateProfile',
            data : qs.stringify({
                'profile_id' : profileId,
                'profile_name' : profileName
            })
        })
        .then(res=>{
            alert('수정 되었습니다.');
            window.location.href ='/updateProfile';
        })
        .catch(error => console.log(error));
    }
    return (
        <div className='bg-[#141414] h-[100%]'>
            <LoginHeader/>
            <ul className="display: flex justify-center">
            {
                profileList.map(item=>
            
                    <li className='profileForm m-[30px]'>
                        <input type="hidden" value={item.profile_id}></input>
                        <div className="text-center" onClick={selectProfile}>
                            <img src={item.img_path} className="w-[150px] h-[150px]"></img>
                            <div className="m-[20px]">
                                <span >{item.profile_name}</span>

                            </div>
                        </div>
                    </li>
                   
                )

            }
            {
            profileList.length <= 4
                && 
                <Link to='/addProfile'>
                    <li className='profileForm m-[30px]'>
                        <div className='text-white text-center'>
                            <img className="w-[150px] h-[150px]"/>
                            <div className="m-[20px]">
                                <span>프로필 추가</span>

                            </div>
                        </div>
                    </li>
                </Link>
            }
            </ul>
            <div className='mt-[100px]'>
                <div className='wh-profileUpdateForm flex justify-center'>
                    <div>
                        <img 
                        className="w-[200px] h-[200px]" src={img_path}
                        onClick={imgMenuOpen}></img>
                    </div>

                    <div className='ml-[50px]'>
                        <div>
                            <input type="text" onChange={profileNameOnChage} value={profileName} placeholder="이름" className='bg-[#666] h-[36px] w-[326px]'></input>

                        </div>
                        <div className='ml-[30px]'>
                            <button className='wh-saveBtn w-[55px] h-[30px]'onClick={updateProfilBtn} >저장</button>
                            <Link to='/'>
                                <button className='w-[55px] h-[30px] '>취소</button>
                            </Link>
                            {
                                localStorage.getItem('profile_id') != profileId
                                &&
                                <button className='w-[80px] h-[30px]' onClick={delectProfileBtn}>프로필 삭제</button>
                              
                            }
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default UpdateProfile;