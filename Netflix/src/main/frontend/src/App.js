import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./reset.css"
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";
import MyPage from "./components/my_page/MyPage";
import ServiceCenter from "./components/service_center/ServiceCenter";
import MypagePassword from "components/my_page/MypagePassword";
import ScrollTop from "components/main/ScrollTop";
import Linked from "components/detail/Linked";
import SignUp from "components/user/SignUp"
import useStore from "store";

import AdminChat from "components/service_center/adminChat/AdminChat";
import DetailForMovie from "components/detail/DetailForMovie";

import Payment from "components/my_page/payment/Payment";
import Login from "components/login/Login";
import AddProfile from "components/login/AddProfile";

function App() {
  const [hello, setHello] = useState('')
  const {val , valEmail , valPhone} = useStore();

  useEffect(() => {
    axios.get('/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error));
  }, [])

  return (
    <BrowserRouter>
      <ScrollTop/>
      <Routes>
        {
          localStorage.getItem('profile_id')===null? 
          <>
          <Route path="/">
          <Route index element={<Login/> }/>
          </Route>
          <Route path="/addProfile" element={<AddProfile/>}>
          </Route>
          </>
        :

        <>
        {/* smile */}
        <Route path="/">
          <Route index element={<Main/> }/>
          <Route path=":tab" element={ <Main/> }/>
        </Route>
        <Route path="/container" element={ <MypagePassword/> }></Route>
        {/* smile */}

        {/* hong */}
        <Route path="/my">
          <Route index element={<MyPage/>}/>
          <Route path=":detail" element={<MyPage/>}/>
        </Route>
        <Route path="/payment">
          <Route index element={<Payment/>}/>
          <Route path=":detail" element={<Payment/>}/>
        </Route>
        {/* login */}
        <Route path='/signUp'>
          <Route index element={<SignUp/>}/>
          <Route path=":detail" element={<SignUp/>}/>
        </Route>
        
        {/* hong */}

        {/* hee */}
        <Route path="/detail" element={ <Detail /> }></Route>
        <Route path="/detailM" element={ <DetailForMovie /> }></Route>
        <Route path="/detail/:detail" element={ <Linked /> }></Route>
        <Route path="/detailM/:detail" element={ <Linked /> }></Route>
        {/* hee */}
        
        
        <Route path="/service" element={ <ServiceCenter/> }></Route>
        <Route path="/service/:detail" element={<ServiceCenter/>}></Route>
        <Route path="/service/:detail/:category" element={<ServiceCenter/>}></Route>


        <Route path="/admin_chat" element={<AdminChat />}></Route>


        <Route path="/login" element={<Login/>}/>
        <Route path="/addProfile" element={<AddProfile/>}/>
        </>
        }
      </Routes>
       	{/* <br/> */}
        {/*  백엔드에서 가져온 데이터입니다 : { helloo }  */}
    </BrowserRouter>
  );
}

export default App;