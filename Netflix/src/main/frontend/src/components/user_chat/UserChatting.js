import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserChatting = ({chatRoomId,changeChattionView}) => {
    const qs = require('qs');
    const [data, setData]=useState([]);
    const [chatInput, setChatInput]=useState('');

    const sendChatDate = {
        'chat_room_id': chatRoomId,
        'profile_id' : 3,
        'content' : chatInput
    }
    const chatListDate = {
        'chat_room_id': chatRoomId,
        'profile_id' : 3
    }
    const sendChat=()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/sendChat',
            data : qs.stringify(sendChatDate)
          })
          .then()
          .catch(error => console.log(error));
    }
    useEffect(()=> {
        axios({
            method : 'post',
            url : 'http://localhost:8080/getUserChatList',
            data : qs.stringify(chatListDate)
          })
          .then(res => {
                setData(res.data);
            })
          .catch(error => console.log(error));
        
    },[data]);
    const chattingInput=(e)=>{
        setChatInput(e.target.value);
    }
    return (
        <div className='chatW_userChatting'>
            <div className='chatW_userChattingList overflow-scroll overflow-x-hidden'>
                {
                    data.map(item=>
                        <ul>
                           <li className='flex'>
                                <img className='rounded-[50%] w-[32px] h-[32px]' src={localStorage.getItem('img_path')}></img>
                                <span>{item.content}
                                </span>
                            </li> 
                        </ul>
                        )
                }
            </div>
            <div className='chatW_userChatInputForm'>
                <input type="text" onChange={chattingInput}></input>
                <button type="button" onClick={sendChat}>
                    보내기
                </button>
            </div>
            <div><button onClick={changeChattionView}>목록</button></div>
        </div>
    );
};

export default UserChatting;