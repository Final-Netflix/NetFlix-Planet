import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./reset.css"
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";
import MyPage from "./components/my_page/MyPage";
import ServiceCenter from "./components/service_center/ServiceCenter";
import MypageContainer from "./components/my_page/MypageContainer";
import ServiceCenterDetail from "./components/service_center/ServiceCenterDetail";
import MypageSelf_phone from "components/my_page/MypageSelf_phone";
import MypageMailChange from "components/my_page/MypageMailChange";
import MypagePassword from "components/my_page/MypagePassword";
import MypagePhone from "components/my_page/MypagePhone";
import MypageMemberShip from "components/my_page/MypageMemberShip";


function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error));

  }, [])

  return (

    <div>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <Main/> }></Route>

            <Route path="/detail" element={ <Detail/> }></Route>
            <Route path="/my" element={ <MyPage/> }></Route>
            <Route path="/container" element={ <MypageMemberShip/> }></Route>
            <Route path="/service" element={ <ServiceCenter/> }></Route>

            <Route path="/service/:detail" element={<ServiceCenter/>}></Route>
            <Route path="/service/:detail/:category" element={<ServiceCenter/>}></Route>

          </Routes>  
        </BrowserRouter>
       {/* <br/> */}
        {/*  백엔드에서 가져온 데이터입니다 : { helloo }  */}


    </div>
  );
}

export default App;