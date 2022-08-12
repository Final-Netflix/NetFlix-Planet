import React, { useState } from 'react';
import MypageContainer2 from './MypageContainer2';
import MypageSelf_phone from './MypageSelf_phone';

const Verification = () => {
    const[count , setCount] = useState(0)
    return (
        <div>
            {count === 0 && <MypageContainer2/>}
            {count === 1 && <MypageSelf_phone/>}
        </div>
    );
};

export default Verification;