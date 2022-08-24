import create from "zustand";

const useStore = create((set)=> ({
//email change 
 vall : '',
    valEmail : ()=> set(({vall : 'email'})),
    valPhone : ()=> set(({vall : 'phone'})),
    onReSet :  ()=> set(({vall : ''})),
    valNum : (num)=> set(({vall: num}))
}));
export default useStore;

