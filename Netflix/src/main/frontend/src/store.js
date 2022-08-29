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

    //회원정보 수정 인증번호
    verify : '',
    setVerify : (num)=> set(({verify : num})),
    isVerify : '',
    setIsVerify : (hmm)=> set(({isVerify : hmm})),

    
    user_email : '' ,
    user_phone: '' ,
    user_membership : '',
    setUserEmail : (email) => set(({user_email : email})), 
    setUserPhone : (phone) => set(({user_phone : phone})),
    setUsermembership : (membership) => set(({user_membership : membership}))
    }));
export default useStore;

