import axios from 'axios';
import React, { useEffect, useState } from 'react';
import imgSrc from '../../stores/profile';
import LoginHeader from './LoginHeader';
import '../../css/user/login.css';
/* 나중에 프로필 데이터 따로하면됨 */
const AddProfile = () => {
    
    const qs = require('qs');
    const [profileName , setProfileName] = useState();
    const [imgList, setImgList] = useState(true);
    const [selectImg , setSelectImg] = useState(imgSrc[0].imgSrc);
    const [isGetProfile,setIsGetProfile] = useState(localStorage.getItem('profile_id')===null);
    const nameInput=(e)=>{
        setProfileName(e.target.value);
    }
    const cancle=()=>{
        window.location.href='/'
    }
    const addProfileBtn= ()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/addProfile',
            data : qs.stringify({
                'img_path' : selectImg,
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
    const mainImgselect=(e)=>{
        setSelectImg(e.target.getAttribute('src'));
        setImgList(!imgList);
    }
    const changeImge=()=>{
        setImgList(!imgList);
    }
    return (
        <div className='bg-[#141414] h-[100%]'>
            <LoginHeader/>
            <div className="display: flex justify-center">
                <h1 className='text-white m-[0]'>프로필 추가</h1>
            </div>

            {
                imgList?
                <>
                <div className="display: flex justify-center">
                    <h2 className='text-white'>넷플렉스 하려면 프로필 추가하세요</h2>
                </div>
                <div className="wh_profileAddForm display: flex justify-center">

                    <div className='mt-[30px]'>
                        <input type="text" placeholder="이름" className='bg-[#666] h-[36px] w-[326px]' onChange={nameInput} value={profileName}></input>
                        <div className="display: flex justify-center">
                            <button className='w-[70px] h-[50px] border m-[20px] bg-white' onClick={addProfileBtn}>다음</button>
                            <button className='w-[70px] h-[50px] border m-[20px] bg-white' onClick={cancle}>취소</button>
                        </div>
                    </div>
                    <div className="display: flex justify-center mt-[30px]">
                        <img src={selectImg}
                        className="w-[200px] h-[200px]" onClick={changeImge}></img>
                    </div>
                </div>
                </>
                :
                <>
                <div>
                    <h2 className='text-white'>프로필에 사용할 이미지를 클릭하세요</h2>
                </div>
                    <ul className='className="display: flex justify-center"'>
                        {
                            imgSrc.map((item, index)=>
                                <li>
                                    <img src={item.imgSrc} key={index} className="w-[200px] h-[200px]" onClick={mainImgselect}></img>
                                </li>
                        )
                            
                        }   
                    </ul>
                    <div>
                        <button>이미지 저장</button><button onClick={()=>{setImgList(!imgList)}}>취소</button>
                    </div>
                </>
            }
        </div>
    );
};

export default AddProfile;