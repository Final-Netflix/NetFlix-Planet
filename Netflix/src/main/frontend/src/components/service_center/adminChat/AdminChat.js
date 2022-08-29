import React from 'react';

const AdminChat = () => {
    return (
        <div className='k1-box w-[1000px] h-[500px] '>
            <iframe
                className='k1-iframe h-[100%] bg-white '
                src={`http://192.168.104.236:5000/admin?nickname=${'관리자'}`}
            />
        </div>
    );
};

export default AdminChat;