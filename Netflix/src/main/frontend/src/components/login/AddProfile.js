import axios from 'axios';
import React, { useState } from 'react';

const AddProfile = () => {
    const qs = require('qs');
    const [profileName , setProfileName] = useState();
    const nameInput=(e)=>{
        setProfileName(e.target.value);
    }
    const addProfileBtn= ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/addProfile',
            data : qs.stringify({
                'img_path' : imgDataSrc.img1,
                'user_email' : localStorage.getItem('user_email'),
                'profile_name' : profileName
            })
          })
          .then(res=>{
            localStorage.setItem('profile_id',res.data.profile_id);
            localStorage.setItem('profile_name',res.data.profile_name);
            localStorage.setItem('img_path',res.data.img_path);
            window.location.href='/';
        })
          .catch(error => console.log(error));
    }
    /* 나중에 프로필 데이터 따로하면됨 */
    const imgDataSrc = {
        img1 : 'https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTEYr5GclkFvWr7UwFeZpOL1oyV7oD98NciCdYxbhh88KEKn5uB_EcZ6Q_dIG9zNfu-4RvoOWfrLxyPODLCeMAdgsKe1W5JLoXos.png?r=a4b'
    }
    return (
        <div>
            <div>
                <h1>프로필 추가</h1>
            </div>
            <div>
                <h2>넷플렉스 하려면 프로필 추가하세요</h2>
            </div>
            <div className='flex'>
                <div>
                    <img src={imgDataSrc.img1}
                    className="w-[200px] h-[200px]"></img>
                </div>
                <div>
                    <input type="text" placeholder="이름" className='bg-[#666] h-[36px] w-[326px]' onChange={nameInput} value={profileName}></input>
                </div>
            </div>
            <div>
                <button className='w-[70px] h-[50px] border' onClick={addProfileBtn}>다음</button>
                <button className='w-[70px] h-[50px] border m-[20px]'>취소</button>
            </div>
        </div>
    );
};

export default AddProfile;