import React, { useState } from 'react';
import UserChatRoomList from './UserChatRoomList';
import '../../css/userChat/userChat.css';
import axios from 'axios';
import UserChatting from './UserChatting';

const UserChatRoom = () => {
    const[chattingView, setChattingView] = useState(true);
    const[createVisible,setCreateVisible] = useState(true);
    const[joinVisible,setJoinVisible] = useState(true);
    const[menuVisible,setMenuVisible] = useState(true);
    const changeChattionView=()=>{
        setChattingView(!chattingView)
    }
    const openCreate=()=>{
        setCreateVisible(!createVisible);
        setMenuVisible(!menuVisible);
    }
    const openJoin=()=>{
        setJoinVisible(!joinVisible);
        setMenuVisible(!menuVisible);
    }
    const [code, setCode] = useState('')
    const [subject, setSubject] = useState('')
    const [joinCode, setJoinCode] = useState('')
    const qs = require('qs');
    const createData = {
        'chat_code': code,
        'room_title': subject,
        'profile_id' : localStorage.getItem('profile_id')
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
        'profile_id': localStorage.getItem('profile_id'),
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
    const isLogin = localStorage.getItem('isLogin');
    console.log("isLogin | " + isLogin);
    
    return (
        <div className="chatW_userChatRoom" >
            <div className="chatW_userChatRoom_title" >
                <span>PLANET Party</span>
            </div>
            {

            chattingView ? 
            <div>
                <div className='chatW_infoForm'>
                    <div className='chatW_userChatInfo' id="first_info">

                        {
                            createVisible?  
                        
                            <>  
                                {menuVisible?
                                <button type="button" onClick={openCreate} className='chatW_topButton'>
                                    <span>
                                        생성
                                    </span>
                                </button>
                                :
                                <></>
                                }
                            </>
                            :
                            <>
                                <div className='chatW_inputFormSide'>
                                    <div className='chatW_inputForm'>
                                        <span>코드입력</span>
                                        <input type="text" onChange={createCodeInput}/>
                                    </div>
                                    <div className='chatW_inputForm'>
                                        <span>제목입력</span>
                                        <input type="text" onChange={createSubjectInput}/>
                                    </div>
                                </div>
                                <div className='chatW_miniBtnForm'>
                                    <button className="chatW_miniBtn" type="button" onClick={createChat}>
                                        <span>
                                            생성
                                        </span>
                                    </button>
                                    <button className="chatW_miniBtn" onClick={openCreate}>
                                        <span>
                                            취소
                                        </span>
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                    
                    <div className='chatW_userChatInfo' id="2_info"> 
                        {
                            joinVisible?  
                        
                            <>
                                {menuVisible?
                                <button type="button" onClick={openJoin} className='chatW_topButton'>
                                    <span>
                                        참여
                                    </span>
                                </button>
                                :
                                <></>}
                            </>
                            :
                            <>
                                <div className='chatW_inputForm'>
                                    <span>코드입력</span>
                                    <input type="text" onChange={joinCodeInput}></input>
                                </div>
                                <div className='chatW_miniBtnForm'>
                                
                                    <button className="chatW_miniBtn" type="button" onClick={joinChatRoom}>
                                        <span>
                                            참여
                                        </span>
                                    </button>
                                    <button className="chatW_miniBtn" type="button" onClick={openJoin}>
                                        <span>
                                            취소
                                        </span>
                                    </button>
                                </div>
                            </>
                        }
                    </div>
                </div>
                
                <div className='chatW_userChattingForm'>
                    
                            <UserChatRoomList setChatRoomId={ setChatRoomId } changeChattionView = {changeChattionView}/>
                            
                    
                </div>
            </div>
            :
            <UserChatting chatRoomId={chatRoomId} changeChattionView = {changeChattionView}/>
            }
        </div>
    );
};

export default UserChatRoom;