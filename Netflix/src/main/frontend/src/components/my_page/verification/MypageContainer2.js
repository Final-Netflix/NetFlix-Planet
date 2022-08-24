import React, {useEffect} from 'react';
import axios from 'axios';


const MypageContainer2 = ({onAdd}) => {

    const axios = require('axios');
    
    
    const getProfile=()=>{
        // let findProfileId;
        // // const target = e.target;
        // // findProfileId = target.closest('.profileForm').childNodes[0].value;
        // axios('http://localhost:8080/getProfile', {
        //     method : 'post',
        //     data : { 'profile_id' : findProfileId }
        // })
        // .then(res=>{
        //     console.log(res);
        //     localStorage.setItem('profile_id',res.data.profile_id);
        //     localStorage.setItem('profile_name',res.data.profile_name);
        //     localStorage.setItem('img_path',res.data.img_path);
            
        //   })
        //   .catch(error => console.log(error));
    }

    useEffect(()=> {
        getProfile();
        
    },[]);
    


    const Button = ({name , method}) => {
        return <button onClick={onAdd} type='button' className='m1_select-factor-button algin-center h-[95px] bg-[#fff] box-border border-0 border-b-2 border-soild border-[#e6e6e6] flex my-auto w-[100%] cursor-pointer normal-case overflow-visible m-0 '>
                    <div className='m1_button-icon-wrapper p-[15px] my-auto'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon icon-chat  text-[#e50914] w-[38px]">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M18 3C21.3137 3 24 5.68629 24 9V11C24 14.3137 21.3137 17 18 17V20C18 20.3688 17.797 20.7077 17.4719 20.8817C17.1467 21.0557 16.7522 21.0366 16.4453 20.8321L11.7049 17.6718C11.0479 17.2338 10.2758 17 9.48612 17H6C2.68629 17 0 14.3137 0 11V9C0 5.68629 2.68629 3 6 3H18ZM22 9C22 6.79086 20.2091 5 18 5H6C3.79086 5 2 6.79086 2 9V11C2 13.2091 3.79086 15 6 15H9.48612C10.6707 15 11.8287 15.3506 12.8143 16.0077L16 18.1315V16V15H17H18C20.2091 15 22 13.2091 22 11V9ZM6 12C7.10457 12 8 11.1046 8 10C8 8.89543 7.10457 8 6 8C4.89543 8 4 8.89543 4 10C4 11.1046 4.89543 12 6 12ZM12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12ZM20 10C20 11.1046 19.1046 12 18 12C16.8954 12 16 11.1046 16 10C16 8.89543 16.8954 8 18 8C19.1046 8 20 8.89543 20 10Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                    <div className='m1_factor-button-text-wrapper text-center grow-[2] pt-[30px] px-[10px] h-[85px]'>
                        <span className='m1_factor-button-primary-text small:text-[20px] block text-[18px] font-extrabold text-left box-border mb-[4px] '>
                            <span>{name}</span>
                        </span>
                        <span className='m1_factor-button-secondary-text text-[14px] block text-left '>{method}</span>
                    </div>
                    <div className='m1_button-icon-wrapper p-[15px] my-auto'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="button-icon icon-chevron-next text-[#b3b3b3] w-[32px] ">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.29297 19.2928L14.5859 12L7.29297 4.70706L8.70718 3.29285L16.7072 11.2928C16.8947 11.4804 17.0001 11.7347 17.0001 12C17.0001 12.2652 16.8947 12.5195 16.7072 12.7071L8.70718 20.7071L7.29297 19.2928Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </div>
                </button>
    }
    return (
        <div className='m1_bd small:mt-5 small:mx-[30px] bg-[#f3f3f3] small:mb-0 mt-3 mx-0 mb-0 p-0 tracking-normal font-sans text-[#333] text-[16px] cursor-default  break-[keep-all]' style={{wordBreak : 'keep-all' , direction : 'ltr'}}>
            <div className='m1_responsive-account-container mid:text-[1em] mid:max-w-[1024px] mid:w-[95%] block my-0 mx-auto min-h-[400px] min-w-[300px] relative' style={{overflowWrap:'anywhere'}}>
                <div className='m1_mfa-challenge-container mt-[50px] mx-auto mb-0 max-w-[684px] box-border text-center'>
                    <div>
                        <svg viewBox="0 0 64 76" className="m1_icon-shield h-[100px] mx-auto mb-[10px]">
                            <g fill="none" fillRule="nonzero">
                                <path
                                    fill="#B3B3B3"
                                    d="M63.807 19.543c-.077-2.016-.077-3.955-.077-5.816a2.612 2.612 0 00-2.631-2.637C49.722 11.012 41.055 7.755 33.857.776c-1.006-1.009-2.708-1.009-3.714 0-7.198 6.98-15.865 10.236-27.164 10.236A2.612 2.612 0 00.347 13.65c0 1.861 0 3.8-.077 5.894-.387 19.155-.929 45.29 30.879 56.302.31.077.541.155.851.155.31 0 .62-.078.851-.155C64.66 64.833 64.117 38.698 63.807 19.543zM32 70.493C4.759 60.568 5.146 38.854 5.533 19.699c0-1.163.077-2.249.077-3.335C16.212 15.82 24.725 12.641 32 6.282c7.275 6.359 15.788 9.616 26.39 10.004 0 1.085 0 2.171.077 3.334.387 19.233.774 40.947-26.467 50.874z"
                                ></path>
                                <path
                                    fill="#E50914"
                                    d="M41.132 28.771l-12.77 12.796-5.494-5.506c-1.006-1.008-2.709-1.008-3.792 0-1.006 1.008-1.006 2.715 0 3.8l7.352 7.368c.542.542 1.16.775 1.857.775.697 0 1.393-.233 1.858-.775l14.704-14.735c1.006-1.008 1.006-2.714 0-3.8a2.59 2.59 0 00-3.715.077z"
                                ></path>
                            </g>
                        </svg>
                        <h1 className="m1_action_headline text-[#000] text-[36px] font-extrabold  mb-[20px]">
                            <span>먼저 본인 확인을 해볼까요?</span>
                        </h1>
                        <p className='m1_explanation-text text-[#4d4d4d] text-[20px] mb-[20px]'>
                            <span>정보를 변경하기 전에 본인 확인 절차가 필요합니다.</span>
                        </p>
                        <form className='m1_select-factor-form border-2 border-solid border-[#e6e6e6] rounded-[10px] shadow-[0_0_5px_2px_#e6e6e6] my-5 mx-auto max-w-[600px] overflow-hidden' method='post'>
                            <Button name='문자로 코드 받기' method='010-3618-4453'/>
                            <Button name='이메일로 코드 받기' method='wnscks19@naver.com'/>
                        </form>
                    </div>
                    <div className='m1_customer-service-text-container text-[14px] mt-[40px] box-border'>
                        <span>
                            "도움이 필요하신가요? "
                            <a>고객센터로 문의하세요.</a>
                        </span>
                    </div>
                    <span className='none'></span>
                </div>  
            </div>
        </div>
    );
};

export default MypageContainer2;