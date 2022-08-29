import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import useStore from 'store';

const MypageSelf_phone = ({onAddd, count}) => {
    const {verify, isVerify,user_email , user_phone} =useStore();

    const phone = (num)=>{
        return num.replace(/(^02.{0}|^01.{1}|[0-9]{3})([0-9]*)([0-9]{4})/,"$1-$2-$3");
    }
    useEffect(()=> {
        if(isVerify==='email') {
            document.getElementsByClassName('m1_explanation-bold')[0].innerText= user_email;
            document.getElementById('m1_sendMethod').innerText= '등록된 이메일로 메일을 보내드렸습니다.'
        }else if(isVerify='phone'){
            document.getElementsByClassName('m1_explanation-bold')[0].innerText= phone(user_phone);
            document.getElementById('m1_sendMethod').innerText= '등록된 전화번호로 문자를 보내드렸습니다.'

        }
    },[])


    
    const Tel = ({ Ref }) => {
        const [tel, setTel] = useState('');
        const change = (e)=> {
            const {value} = e.target
            //숫자만 입력되게 하는 정규식
            const input = document.getElementsByClassName('m1_pin-number-input')
            const nodes = [...e.target.parentElement.children];
            const index = nodes.indexOf(e.target)
            setTel(value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'))
            if(index<5) {
                if(input[index].value===value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1') && input[index].value.length ===1) {
                    input[index+1].focus()
                    input[index+1].select()
                }

                
            }
           
            if(index>0) {
                if(input[index].value.length===0) {
                    input[index-1].focus()
                    input[index-1].select()
                }
            }
            //6개 다 입력시 버튼 활성화  
            if((input[0].value.length ===1) && (input[1].value.length ===1) && (input[2].value.length ===1) && (input[3].value.length ===1) && (input[4].value.length ===1) && (input[5].value.length ===1))  {
                const val = input[0].value + input[1].value + input[2].value + input[3].value + input[4].value + input[5].value
                if(verify==val) {
                    const con = document.querySelector('#btn-continue');
                    con.style.backgroundColor = 'red';
                    con.style.cursor = 'pointer';
                    con.innerText = '다음';
                    con.disabled = false;
                }
            }else {
                const con = document.querySelector('#btn-continue');
                con.style.backgroundColor = '#737373';
                con.style.cursor = 'default';
                con.innerText = '코드를 입력해 계속 진행';
                con.disabled = true;
            }
            
        }
      
        
        return <input type="tel" maxLength="1" ref={ Ref }  pattern="[0-9]+"
        className="m1_pin-number-input bg-inherit border-[none] border-b-soild border-b-[4px] border-[#b3b3b3] text-[72px] text-[#4d4d4d] my-0 mx-[10px] p-0 min-h-[38px] min-w-[38px] text-center  w-[1.2em] leading-normal" 
        tabIndex="0" aria-label="PIN&nbsp;입력 인풋&nbsp;1." value={ tel } onChange={change }/>
    }
 
    
    const Ref = useRef();
    
    useEffect(() => {
        Ref.current.focus();
        document.querySelector('#btn-continue').disabled =true;
    }, []);
    
   


    return (
        <div>
            <div className="m1_bd small:mt-5 small:mx-[30px] bg-[#f3f3f3] small:mb-0 mt-3 mx-0 mb-0 p-0 tracking-normal font-sans text-[#333] text-[16px] cursor-default  break-[keep-all]" style={{wordBreak : 'keep-all' , direction : 'ltr'}}>
                <div className='m1_responsive-account-container mid:text-[1em] mid:max-w-[1024px] mid:w-[95%] block my-0 mx-auto min-h-[400px] min-w-[300px] relative' style={{overflowWrap:'anywhere'}}>
                    <div className='m1_mfa-challenge-container mt-[50px] mx-auto mb-0 max-w-[684px] box-border text-center' >
                        <h5 className="m1_security-check-header text-[red] text-[14px] font-black my-[.75em] mx-[.25em] box-border tracking-normal"><span id="" >보안 확인</span></h5>
                        <h1 className="m1_action-headline text-[#000] text-[36px] font-extrabold mt-[5px] mx-auto mb-[10px] mid:text-[2.15em] mid:mt-0 mid:mx-0 mid:mb-[.55em] " ><span id="m1_sendMethod">등록된 전화번호로 문자를 보내드렸습니다</span></h1>
                        <p className="m1_explanation-text text-[#4d4d4d] text-[20px] mb-[8px] mt-[10px]" >
                            <span id="" ><span className="m1_explanation-bold font-extrabold"></span>으로 보내드린 코드를 입력해 주세요. 계정 보호를 위해 협조해 주셔서 감사합니다.</span>
                        </p>
                        <form className="m1_mfa-challenge-otp-form"  method="POST">
                            <div className="m1_pin-input-container border-[none] mt-0 mx-0 mb-[40px] align-middle inline-block whitespace-nowrap  ">
                                <Tel Ref={ Ref }/>
                                <Tel/>
                                <Tel/>
                                <Tel/>
                                <Tel/>
                                <Tel/>
                            </div>
                            <button id="btn-continue" type="button" autoComplete="off" onClick={() => onAddd('email')}  tabIndex="0" className="m1_nf-btn nf-btn-secondary nf-btn-solid nf-btn-oversize  bg-[#737373] text-[15px] max-w-[500px] min-w-[110px] min-h-[60px] py-[0.75rem] px-[25.333333px] text-[#fff] w-[80%] rounded-[4px]" style={{color : 'white' , cursor : 'default'}} placeholder="">
                                코드를 입력해 계속 진행
                            </button>
                        </form>
                        <div className="m1_secondary-button-container flex overflow-hidden my-[20px] mx-auto" ><button className='border-left text-right bg-inherit border-0  grow-[0.5] text-[#0080ff] outline-0 text-[14px] mb-[12px] mx-[-2px] py-0 px-[17px] normal-case overflow-visible '>코드 다시 받기</button>
                                                                                                               <button className='bg-inherit border-0 border-l-solid border-l-2 border-[#999] text-left text-[#0080ff] grow- text-[14px] mb-[12px] ml-[-2px] outline-0 py-0 px-[17px] overflow-visible m-0 '>다른 방법 시도</button></div>
                        <div className="m1_customer-service-text-container text-[14px] mt-[40px] " >
                            <span id="">도움이 필요하신가요? <a className='underline' target="_blank">고객 센터로 문의하세요. </a></span>
                        </div>
                        <span style={{display : 'none'}}></span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MypageSelf_phone;