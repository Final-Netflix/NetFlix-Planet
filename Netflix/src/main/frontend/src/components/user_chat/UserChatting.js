import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserChatting = ({chatRoomId,changeChattionView}) => {
    const qs = require('qs');
    const [data, setData]=useState([]);
    const [chatInput, setChatInput]=useState('');
    const [chatCheck,setChatCheck] = useState(1);
    setTimeout(function() {
        setChatCheck(chatCheck+1);
      }, 2000);
      
    const sendChatDate = {
        'chat_room_id': chatRoomId,
        'profile_id' : localStorage.getItem('profile_id'),
        'content' : chatInput
    }
    const chatListDate = {
        'chat_room_id': chatRoomId,
        'profile_id' : localStorage.getItem('profile_id')
    }
    const sendChat=()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/sendChat',
            data : qs.stringify(sendChatDate)
          })
          .then()
          .catch(error => console.log(error));
          setChatInput('');
    }
    useEffect(()=> {
        axios({
            method : 'post',
            url : 'http://localhost:8080/getUserChatList',
            data : qs.stringify(chatListDate)
          })
          .then(res => {
                setData(res.data);
                console.log(chatCheck);
            })
          .catch(error => console.log(error));
    },[chatCheck]);
    const chattingInput=(e)=>{
        setChatInput(e.target.value);
    }
    return (
        <div className='chatW_userChatting'>
            <div className='chatW_userChattingList'>
                {
                    data.map(item=>
                        <ul>
                           <li>
                                <div className='flex'>
                                    <img src={item.img_path} className='w-[30px] h-[30px]'></img>
                                    <span>{item.profile_name}</span>
                                </div>
                                <span>{item.profile_id}
                                </span>
                                <span>{item.content}
                                </span>
                            </li> 
                        </ul>
                        )
                }
            </div>
            <div className='chatW_userChatInputForm'>
                <input type="text" onChange={chattingInput} value={chatInput}></input>
                <button type="button" onClick={sendChat}>
                    보내기
                </button>
            </div>
            <div><button onClick={changeChattionView}>목록</button></div>
        </div>
    );
};

export default UserChatting;