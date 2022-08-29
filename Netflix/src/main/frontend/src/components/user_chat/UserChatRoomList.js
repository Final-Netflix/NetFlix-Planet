import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserChatRoomList = ({ setChatRoomId,changeChattionView }) => {
    const [data, setData]=useState([])
    const [makerList, setMakerList]=useState([])
    const qs = require('qs');
    const [chatCheck,setChatCheck] = useState(1);
    setTimeout(function() {
        setChatCheck(chatCheck+1);
    }, 1000);
    const userData = {
        'profile_id': localStorage.getItem('profile_id')
    }
    useEffect(()=> {
        axios({
            method : 'post',
            url : 'http://localhost:8080/getListChatRoom',
            data : qs.stringify(userData)
        })
        .then(res => {
            setData(res.data);
            
        })
        .catch(error => console.log(error));
    
       
    },[chatCheck]);

    

    const test = (e) => {
        let findId = e.target.closest('.chatW_listLi').childNodes[0].value;
       
        setChatRoomId(findId);
    }

    return (
        
        <div className="chatW_hatRoomListForm">
            <div className='mb-[30px]'>
                <span className='text-[30px] text-[#cccccc]'>채팅방 목록</span>

            </div>
            {/* <span>채팅방 수  : {data.length} 개</span> */}
            <ul className='chatW_listUl'>
                <li className='flex justify-between'>
                    <div>
                        <span className='ml-[10px]'>채팅방 이름</span>

                    </div>
                    <div>
                        <span>방장</span>
                    </div>
                </li>
            </ul>
            <ul className='chatW_listUl 'onClick={changeChattionView}>
                <li className='flex justify-between'>
                    
                </li>
                {
                    data.map(item=>
                        <>
                            <li className='chatW_listLi mt-[20px] cursor-pointer flex justify-between' onClick={ test }>
                                <input type='hidden' className='chatW_nameInput' value={item.chat_room_id}></input>
                                <div>
                                    <span className='chatW_span text-[20px] text-[#cccccc] ml-[10px]' >{item.room_title}</span>
                                </div>
                                <div className='flex'>
                                    <div>
                                        <img src={item.img_path} className="w-[20px] h-[20px] ml-[30px]"></img>

                                    </div>
                                    <div>
                                    <span className='ml-[5px] leading-[20px]'>{item.profile_name}</span>

                                    </div>
                                </div>
                            </li>
                        </>
                    )
                    
                }
            </ul>
        </div>
    );
};

export default UserChatRoomList;
