import React, { useEffect, useState } from "react";
import axios from "axios";
import "./reset.css"

function App() {
  const [hello, setHello] = useState('')

  useEffect(() => {
    // fetch("/hello")
    // .then(response => console.log("response", response))
    // .catch(error => console.log("error: ", error))
    axios.get('/hello')
    .then(response => setHello(response.data))
    .catch(error => console.log(error));

  }, [])

  return (
    <div className="bg-slate-400">
        백엔드에서 가져온 데이터입니다 : { hello }
    </div>
  );
}

export default App;
