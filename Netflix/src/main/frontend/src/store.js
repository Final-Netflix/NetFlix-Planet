import create from "zustand";

const useStore = create((set)=> ({
//email change 
 val : '', 
 valEmail : ()=> set(({val : 'email'})),
 valPhone : ()=> set(({val : 'phone'})),
 onReSet :  ()=> set(({val : ''})),
}));

export default useStore;