import React, { useEffect, useState } from 'react';
import UserChatRoomList from './UserChatRoomList';
import '../../css/userChat/userChat.css';
import axios from 'axios';

const UserChatRoom = () => {
    const[createVisible,setCreateVisible] = useState(true)
    const[joinVisible,setJoinVisible] = useState(true)
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
        'code': code,
        'subject': subject
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
        'joinCode': joinCode
    }
    const joinChatRoom=()=>{
        axios({
            method : 'post',
            url : 'http://localhost:8080/joinChatRoom',
            data : qs.stringify(joinData),
          }).then(function(response){
            console.log(response);
          });
    }
    
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
                <UserChatRoomList/>
            </div>
        </div>
    );
};

export default UserChatRoom;