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

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
   
    axios.get('/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error));
  }, [])

  return (
    <BrowserRouter>
      <ScrollTop/>
      <Routes>
        {/* smile */}
        <Route path="/">
          <Route index element={ <Main/> }/>
          <Route path=":tab" element={ <Main/> }/>
        </Route>
        <Route path="/container" element={ <MypagePassword/> }></Route>
        {/* smile */}

        {/* hong */}
        <Route path="/my">
          <Route index element={<MyPage/>}/>
          <Route path=":detail" element={<MyPage/>}/>
        </Route>
        {/* hong */}

        {/* hee */}
        <Route path="/detail" element={ <Detail /> }></Route>
        <Route path="/detail/:detail" element={ <Detail /> }></Route>
        {/* hee */}
        
        <Route path="/service" element={ <ServiceCenter/> }></Route>
        <Route path="/service/:detail" element={<ServiceCenter/>}></Route>
        <Route path="/service/:detail/:category" element={<ServiceCenter/>}></Route>

      </Routes>
       	{/* <br/> */}
        {/*  백엔드에서 가져온 데이터입니다 : { helloo }  */}
    </BrowserRouter>
  );
}

export default App;