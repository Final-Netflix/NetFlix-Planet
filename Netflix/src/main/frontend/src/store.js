import create from "zustand";

const useStore = create((set)=> ({
//email change 
    vall : '',
    valEmail : ()=> set(({vall : 'email'})),
    valPhone : ()=> set(({vall : 'phone'})),
    onReSet :  ()=> set(({vall : ''})),
    valNum : (num)=> set(({vall: num})),

    //memberShip
    price : '',
    setPrice : (num)=> set(({price : num})),
    membership : '',
    setMembership : (member)=> set(({membership: member})),
    membershipName : '',
    setMembershipName : (membershipNam) =>set(({membershipName : membershipNam})),
}));
export default useStore;

