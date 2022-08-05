import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./reset.css"
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";
import MyPage from "./components/my_page/MyPage";
import ServiceCenter from "./components/service_center/ServiceCenter";
import ServiceCenterDetail from "./components/service_center/ServiceCenterDetail";


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
            <Route path="/service" element={ <ServiceCenter/> }>

            </Route>
            <Route path="/serviceCenterDetail" element={<ServiceCenterDetail/>}>
            </Route>
            <Route path="/serviceCenterDetail/:category" element={<ServiceCenterDetail/>}>
            </Route>
          </Routes>  
        </BrowserRouter>
        <br/>
        백엔드에서 가져온 데이터입니다 : { hello }
    </div>
  );
}

export default App;