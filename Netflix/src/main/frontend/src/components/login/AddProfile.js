import axios from 'axios';
import React, { useEffect, useState } from 'react';

/* 나중에 프로필 데이터 따로하면됨 */
const AddProfile = () => {
    const imgDataSrc = [
        {
            img : 'https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTEYr5GclkFvWr7UwFeZpOL1oyV7oD98NciCdYxbhh88KEKn5uB_EcZ6Q_dIG9zNfu-4RvoOWfrLxyPODLCeMAdgsKe1W5JLoXos.png?r=a4b',
        },
        {
            img : 'https://blog.kakaocdn.net/dn/ysA4t/btrc8hIfQ4T/GWoni2RRLFjXHy5Yk0i6Pk/img.jpg',
    
        },
        {
            img : 'https://mblogthumb-phinf.pstatic.net/MjAxOTA1MjNfODMg/MDAxNTU4NTc0NzQzMTI4.YrKo9ZSND_xMZmtLIlZP8MT0gr2KmyhGOrFIBSyug9gg.-9HqEbVEXdmcRXHv3dHqc3IRaBHn9SpE1d8BzwRV8Lgg.JPEG.photinazzang/EE54334A-52E1-473C-96EA-6E03DEFB4153.jpeg?type=w800',
        },
        {
            img : 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229'
        }
    ]
    const qs = require('qs');
    const [profileName , setProfileName] = useState();
    const [imgList, setImgList] = useState(true);
    const [selectImg , setSelectImg] = useState(imgDataSrc[0].img);
    const nameInput=(e)=>{
        setProfileName(e.target.value);
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
        console.log(imgDataSrc[0].img);
        setImgList(!imgList);
    }
    return (
        <div>
            <div>
                <h1>프로필 추가</h1>
            </div>

            {
                imgList?
                <>
                <div>
                    <h2>넷플렉스 하려면 프로필 추가하세요</h2>
                </div>
                    <div className='flex'>
                        <div>
                            <img src={selectImg}
                            className="w-[200px] h-[200px]" onClick={changeImge}></img>
                        </div>
                        <div>
                            <input type="text" placeholder="이름" className='bg-[#666] h-[36px] w-[326px]' onChange={nameInput} value={profileName}></input>
                        </div>
                    </div>
                    <div>
                        <button className='w-[70px] h-[50px] border' onClick={addProfileBtn}>다음</button>
                        <button className='w-[70px] h-[50px] border m-[20px]'>취소</button>
                    </div>
                </>
                :
                <>
                <div>
                    <h2>프로필에 사용할 이미지를 클릭하세요</h2>
                </div>
                    <ul className='flex'>
                        {
                            imgDataSrc.map((item, index)=>
                                <li>
                                    <img src={item.img} key={index} className="w-[200px] h-[200px]" onClick={mainImgselect}></img>
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