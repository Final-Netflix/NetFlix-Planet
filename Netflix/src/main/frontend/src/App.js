import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import "./reset.css"
import Main from "./components/main/Main";
import Detail from "./components/detail/Detail";

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    axios.get('/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error));

  }, [])

  return (
    <div className="bg-slate-400">
        백엔드에서 가져온 데이터입니다 : { hello }
        <br></br> 

        <BrowserRouter>
          
          <button className="border-[1px] p-5 m-4 bg-white">
            <Link to="/detail">Detail</Link>
          </button>
          <button className="border-[1px] p-5 m-4 bg-white">
            <Link to="">마이페이지</Link>
          </button>
          <button className="border-[1px] p-5 m-4 bg-white">
            <Link to="">go객센터</Link>
          </button>
          <Routes>
            <Route path="/main" element={ <Main/> }></Route>
            <Route path="/detail" element={ <Detail/> }></Route>
          </Routes>  
        </BrowserRouter>
    </div>
  );
}

export default App;
