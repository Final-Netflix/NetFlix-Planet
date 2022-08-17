

const { Socket } = require("dgram");
const express = require("express")  
// require를 사용하면 자동적으로 node_modules를 보기 때문에 express 이름만 적어도 경로 없이 찾아서 가져온다.
const http = require("http")
const app = express();
// express를 실행한 내용을 app에 담는다.
const path = require("path")
const server = http.createServer(app);
const socketIO = require("socket.io")
const moment = require("moment")

const io = socketIO(server);


//보여줄 폴더 지정
app.use(express.static(path.join(__dirname, "src")))

const PORT = process.env.PORT || 5000;


io.on("connection", (socket)=>{
    socket.on("chatting",(data)=>{
        const { name, msg } = data;

        io.emit("chatting", {
            name,
            msg,
            time: moment(new Date()).format("hh:mm A")
        })
    })
    
})

server.listen(PORT, ()=> console.log(`server is runnung ${PORT}`))
