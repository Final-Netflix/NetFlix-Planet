import React, { useEffect, useState } from 'react';
import logo from 'image/main/logo.png';
import edit from 'image/main/edit.png';
import service from 'image/main/service.png';
import user from 'image/main/user.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const MyPageHeader = () => {

    const qs = require('qs');
    const [profileList, setProfileList]=useState([])
    const [profile, setProfile] = useState(false);
    
    let profileTimer;

    const profileOut = () => {
        profileTimer = setTimeout(() => {
            setProfile(false);
        }, 1000);
        return () => {
            clearTimeout(profileTimer);
        };
    };

    const profileIn = () => {
        setProfile(true);
        clearTimeout(profileTimer);
    }
    
    const logoutBtn=()=>{
        localStorage.clear();
        window.location.href='/';
    }
    const chageProfile=(e)=>{
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
            localStorage.setItem('profile_id',res.data.profile_id);
            localStorage.setItem('profile_name',res.data.profile_name);
            localStorage.setItem('img_path',res.data.img_path);
            window.location.href='/';
        })
        .catch(error => console.log(error));
    }
    



    useEffect(()=>{
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
    },[])


   
    return (
        <div style={{backgroundColor: 'black'}}>
            <div className='c1-header-container h-full flex pl-[37px] pr-[37px] justify-between items-center z-[10]'>
                <div>
                    <div className='flex'>
                        <Link to='/'><div><img className='w-40' src={ logo }/></div></Link>
                    </div>
                </div>
                <div className="flex h-full py-[20px]">
                    <div className="c1-nav-element mr-[10px]">
                        <div className="c1-account-menu-item">
                            <div className="c1-account-dropdown-button flex" onMouseEnter={ profileIn } onMouseLeave={ profileOut }>
                                <span className="c1-profile-link" role="presentation">
                                    <img className="c1-profile-icon rounded-[4px] w-[32px] h-[32px]" alt=""
                                        src={localStorage.getItem('img_path')}/>
                                </span>
                                <span className="c1-caret relative translate-y-[10px] h-0 w-0 border-[5px] border-solid border-r-transparent border-l-transparent border-b-transparent border-t-white ml-[10px]" role="presentation"></span>
                            </div>
                            {
                                profile &&
                                <div className='absolute right-[40px] m-[14px] z-10' onMouseEnter={ profileIn } onMouseLeave={() => setProfile(false)}>
                                    <div className="topbar translate-x-[160px] h-0 w-0 border-[8px] border-solid border-r-transparent border-l-transparent border-t-transparent border-b-[#141414]"></div>
                                    <ul className='c1-sub-menu-list pt-[10px] py-[5px] border-[#333333] border-[1px] border-solid w-[180px] bg-[#000000]/90'>
                                        { profileList.map( (item, index) =>
                                            <li key={ index } className='profileForm c1-sub-menu-item py-[5px] px-[10px]' >
                                                <input type="hidden" value={item.profile_id}></input>
                                                <div className='flex' onClick={chageProfile}>
                                                    <div className='c1-profile-link flex hover:underline cursor-pointer'>
                                                        <div className='c1-avatar-wrapper mr-[10px]'>
                                                            <img className='c1-profile-icon rounded-[4px] w-[32px] h-[32px]' src={item.img_path}></img>
                                                        </div>
                                                        <span className='c1-profile-name my-[10px] text-white'>{item.profile_name}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            )
                                        }
                                        <li className='c1-sub-menu-item py-[5px] px-[10px]'>
                                            <div className='flex'>
                                                <Link to='/updateProfile'>
                                                    <div className='c1-profile-link flex hover:underline cursor-pointer'>
                                                        <div className='c1-avatar-wrapper mr-[10px]'>
                                                            <img className='c1-profile-icon rounded-[4px] w-[32px] h-[32px] p-[5px]' src={ edit }></img>
                                                        </div>
                                                        <span className='c1-profile-name my-[10px]'>프로필 관리</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='c1-sub-menu-list pt-[10px] py-[5px] border-[#333333] border-[1px] border-t-0 border-solid w-[180px] bg-[#000000]/90'>
                                        <li className='c1-sub-menu-item py-[5px] px-[10px]'>
                                            <div className='flex'>
                                                <Link to="/my">
                                                    <div className='c1-profile-link flex hover:underline cursor-pointer'>
                                                        <div className='c1-avatar-wrapper mr-[10px]'>
                                                            <img className='c1-profile-icon rounded-[4px] w-[32px] h-[32px] p-[5px]' src={ user }></img>
                                                        </div>
                                                        <span className='c1-profile-name my-[10px]'>계정</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className='c1-sub-menu-item py-[5px] px-[10px]'>
                                            <div className='flex'>
                                                <Link to="/service">
                                                    <div className='c1-profile-link flex hover:underline cursor-pointer'>
                                                        <div className='c1-avatar-wrapper mr-[10px]'>
                                                            <img className='c1-profile-icon rounded-[4px] w-[32px] h-[32px] p-[5px]' src={ service }></img>
                                                        </div>
                                                        <span className='c1-profile-name my-[10px]'>고객센터</span>
                                                    </div>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                    <ul className='c1-sub-menu-list py-[10px] border-[#333333] border-[1px] border-t-0 border-solid w-[180px] bg-[#000000]/90'>
                                        <li className='c1-sub-menu-item py-[5px] px-[10px]'>
                                            <div className='text-center hover:underline cursor-pointer' onClick={ logoutBtn }>
                                                <span className='c1-profile-name my-[10px] text-[13px] text-white'>넷플릭스에서 로그아웃</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPageHeader;
