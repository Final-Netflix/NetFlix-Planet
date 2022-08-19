import React, { useEffect, useState } from 'react';
import UserChatRoomList from './UserChatRoomList';
import '../../css/userChat/userChat.css';
import axios from 'axios';
import UserChatting from './UserChatting';

const UserChatRoom = () => {
    const[chattingView, setChattingView] = useState(true);
    const[createVisible,setCreateVisible] = useState(true);
    const[joinVisible,setJoinVisible] = useState(true);
    const changeChattionView=()=>{
        setChattingView(!chattingView)
    }
    const openCreate=()=>{
        setCreateVisible(!createVisible)
    }
    const openJoin=()=>{
        setJoinVisible(!joinVisible)
    }
    const [code, setCode] = useState('')
    const [subject, setSubject] = useState('')
    const [joinCode, setJoinCode] = useState('')
    const api=axios.create({
        baseURL:'http://localhost:8080'
    })
    const qs = require('qs');
    const createData = {
        'chat_code': code,
        'room_title': subject,
        'profile_id' : 3
    }
    const createChat=()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/createChatRoom',
            data : qs.stringify(createData),
          }).then(function(response){
            console.log(response);
          });
    }
        
    const createCodeInput=(e)=>{
        console.log(e.target.value);
        setCode(e.target.value);
    }
    const createSubjectInput=(e)=>{
        setSubject(e.target.value);
    }
    const joinCodeInput=(e)=>{
        setJoinCode(e.target.value);
    }
    const joinData = {
        'profile_id': 3,
        'chat_code' : joinCode
    }
    const joinChatRoom=()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/joinChatRoom',
            data : qs.stringify(joinData),
          })
          .then()
          .catch(error => console.log(error));
    }

    const [chatRoomId, setChatRoomId] = useState('');

    console.log(chatRoomId);
    
    return (
        <div className="chatW_userChatRoom">
            <div className="chatW_userChatRoom_title">
                <span>채 팅</span>
            </div>
            <div>
                <div className='chatW_userChatInfo'>
                    {
                        createVisible?  
                    
                        <>
                            <button type="button" onClick={openCreate} className='chatW_topButton'>생성</button>
                        </>
                        :
                        <>
                            <div className='chatW_inputForm'>
                                <span>코드입력</span>
                                <input type="text" onChange={createCodeInput}/>
                            </div>
                            <div className='chatW_inputForm'>
                                <span>제목입력</span>
                                <input type="text" onChange={createSubjectInput}/>
                            </div>
                            <button className="chatW_miniBtn" type="button" onClick={createChat}>생성하기</button><button className="chatW_miniBtn" onClick={openCreate}>취소</button>
                        </>
                    }
                </div>
                <div className='chatW_userChatInfo'>
                    {
                        joinVisible?  
                    
                        <>
                            <button type="button" onClick={openJoin} className='chatW_topButton'>참여</button>
                        </>
                        :
                        <>
                            <div className='chatW_inputForm'>
                                <span>코드입력</span>
                                <input type="text" onChange={joinCodeInput}></input>
                            </div>
                            <div className='chatW_inputForm'>
                                <button className="chatW_miniBtn" type="button" onClick={joinChatRoom}>참여</button>
                                <button className="chatW_miniBtn" type="button" onClick={openJoin}>취소</button>
                            </div>
                        </>
                    }
                </div>
                {
                    chattingView ? 
                        <UserChatRoomList setChatRoomId={ setChatRoomId } changeChattionView = {changeChattionView}/>
                    :
                        <UserChatting chatRoomId={chatRoomId} changeChattionView = {changeChattionView}/>
                }
            </div>
        </div>
    );
};

export default UserChatRoom;