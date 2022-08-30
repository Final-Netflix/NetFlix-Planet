import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserChatting = ({chatRoomId,changeChattionView,id}) => {
    const qs = require('qs');
    const [data, setData]=useState([]);
    const [chatInput, setChatInput]=useState('');
    const [chatCheck,setChatCheck] = useState(1);
    
    setTimeout(function() {
        setChatCheck(chatCheck+1);
    }, 1000);

    const scrollDown=()=>{
        const findScroll = document.getElementsByClassName('chatW_userChattingList');
        findScroll[0].scrollTo(0,findScroll[0].scrollHeight);
    }
    const sendChatDate = {
        'chat_room_id': chatRoomId,
        'profile_id' : localStorage.getItem('profile_id'),
        'content' : chatInput,
        'video_id' : id
    }
    const chatListDate = {
        'chat_room_id': chatRoomId,
        'profile_id' : localStorage.getItem('profile_id')
    }
    const sendChat=()=>{
        axios({
            method : 'post',
            url : '/sendChat',
            data : qs.stringify(sendChatDate)
        })
          .then()
          .catch(error => console.log(error));
        setChatInput('');
        scrollDown();
        
    }
    /* 무비 아이디를 넣을 준비 */
    useEffect(()=> {
        axios({
            method : 'post',
            url : '/creatorCheck',
            data : qs.stringify(sendChatDate)
        })
        .then(res => {
            
            if(res.data.profile_id==localStorage.getItem('profile_id')){
                axios({
                    method : 'post',
                    url : '/updateChatRoom',
                    data : qs.stringify(sendChatDate)
                })
                .then(res => {

                })
                .catch(error => console.log(error));
            }
        })
        .catch(error => console.log(error));
    },[]);

    useEffect(()=> {
        scrollDown();
        axios({
            method : 'post',
            url : '/getUserChatList',
            data : qs.stringify(chatListDate)
          })
          .then(res => {
                setData(res.data);
            })
          .catch(error => console.log(error));
    },[chatCheck]);

    const chattingInput=(e)=>{
        setChatInput(e.target.value);
    }
    const chatKeyDown=(e)=>{
        if(e.keyCode === 13 && chatInput !== ''){
            sendChat();
        }
    }
    return (
        <div className='chatW_userChatting h-[90%]'>
            <div className='chatW_userChattingList overflow-scroll overflow-x-hidden h-[80%]'>
                <ul className="wh-chatListUl">
                    
                    {
                        data.map(item=>
                           <li>
                                <div className='flex'>
                                    <img src={item.img_path} className='rounded-[50%] w-[32px] h-[32px]'></img>
                                    <span>{item.profile_name}</span>
                                </div>
                                <div>
                                    <span>
                                        {item.content}
                                    </span>
                                </div>


                      		</li>
                        )
                    }
                    <li className='h-[40px]'></li>

                </ul>
            </div>
            <div className='chatW_userChatInputForm ml-[20px]'>
                <input type="text" onChange={chattingInput} value={chatInput} onKeyDown={chatKeyDown}></input>
                <button className="text-[#141414] ml-[10px] bg-[#cccccc] w-[50px] h-[25px]"type="button" onClick={sendChat}>
                    보내기
                </button>
            </div>
            <div><button className="text-[#141414] m-[20px] bg-[#cccccc] w-[50px] h-[25px]" onClick={changeChattionView}>목록</button></div>
        </div>
    );
};

export default UserChatting;