import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserChatRoomList = ({ setChatRoomId,changeChattionView }) => {
    const [data, setData]=useState([])
    const qs = require('qs');
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
        
    },[data]);

    const test = (e) => {
        //const findId = document.querySelector('.'+e.target.className + '.chatW_nameInput').value;
        let findId;
        if(e.target.className !=='chatW_span'){
            findId = e.target.childNodes[0].value;
        }else{
            findId = e.target.previousSibling.value;
        }
        //const findId= e.target.querySelector('.chatW_nameInput').value;
        setChatRoomId(findId);
    }

    return (
        
        <div className="chatW_hatRoomListForm">
            <span>채팅방 수  : {data.length} 개</span>
            {
                data.map(item=>
                    <>
                        <ul className='chatW_listUl'onClick={changeChattionView}>
                            <li className='chatW_listLi' onClick={ test }>
                                <input type='hidden' className='chatW_nameInput' value={item.chat_room_id}></input>
                                <span className='chatW_span' >{item.room_title}</span>
                            </li>
                        </ul>
                    </>
                )
                
            }
        </div>
    );
};

export default UserChatRoomList;
