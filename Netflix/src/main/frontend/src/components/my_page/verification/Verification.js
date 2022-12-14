import React, { useState } from 'react';
import useStore from 'store';
import Mypagephone from '../MypagePhone';
import MyPageChangeEmail from './MyPageChangeEmail';
import MypageContainer2 from './MypageContainer2';
import MypageSelf_phone from './MypageSelf_phone';

const Verification = () => {
    const {vall} = useStore();
    const[count , setCount] = useState(0)
    const onAdd = ()=> {
        setCount(count+1)
    }
    const onAddd = ()=> {
        console.log(vall)
        if(vall === 'email') {
            setCount(count+1);
        }else if(vall === 'phone') {
            setCount(count+2);
        }
    }
    return (
        <div>
            {count === 0 && <MypageContainer2 setCount={setCount} count={count} onAdd={onAdd}/>}
            {count === 1 && <MypageSelf_phone count={count} onAddd={onAddd}/>}
            {count === 2 && <MyPageChangeEmail/>}
            {count === 3 && <Mypagephone/>}
        </div>
    );
};

export default Verification;