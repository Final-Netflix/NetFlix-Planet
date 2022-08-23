"use strict"


const socket = io();

const nickname = document.querySelector("#nickname")
const chatList = document.querySelector(".chatting-list")
const chatInput = document.querySelector(".chatting-input")
const sendButton = document.querySelector(".send-button")
const displayContainer = document.querySelector(".display-container")


chatInput.addEventListener("keypress", (event)=> {
    console.log(event)
    if(event.keyCode === 13){ 
            send();
        
    }

})

function send() {
    if(chatInput.value.length != 0) { 
    
        const param = {
            name: nickname.value,
            msg: chatInput.value
        }
        socket.emit("chatting", param)
        chatInput.value = "";
        
    }
}

sendButton.addEventListener("click", send)


//socket.emit("chatting", "from front");

socket.on("chatting", (data)=> {
    console.log(data)
    const {name, msg, time} = data;
    const item = new LiModel(name, msg, time);
    item.makeLi();
    displayContainer.scrollTo(0, displayContainer.scrollHeight);
})

function LiModel(name, msg, time) {
    this.name = name;
    this.msg = msg;
    this.time = time;

    // this.makeLi = () => {
    //     const li = document.createElement("li");
    //     li.classList.add(nickname.value === this.name ? "sent" : "received")
    //     const dom = `
    //     <span class="profile">
    //     <img class="image" src="https://placeimg.com/50/50/any" alt="any">
    //     </span>
    //     <span class="user">${this.name}</span>
    //     <span class="message">${this.msg}</span>
    //     <span class="time">${this.time}</span>`;

        
    //     li.innerHTML = dom;
    //     chatList.appendChild(li)
    // }

    this.makeLi = () => {
        const li = document.createElement("li");
        li.classList.add(nickname.value === this.name ? "sent" : "received")
        const dom = `
        
        <div class="ad_m">
            <span class="profile">
                ${this.name === '관리자' ? '<img class="image" src="image/p.png" alt="any">' : ''}
            </span>
            <div class="ad_b">
                <span class="message">${this.msg}</span>
                <div class="ad_c">
                    <span class="user">${this.name === '관리자' ? '관리자' : ''}</span>
                    <span class="time">${this.time}</span>
                </div>
            </div>
            
        </div>`;
        
        
        li.innerHTML = dom;
        chatList.appendChild(li)
    }
}



