import React from 'react';

const MypageMailChange = () => {
    return (
        <div>
            <div className='m1_bd small:mt-5 small:mx-[30px] bg-[#f3f3f3] small:mb-0 mt-3 mx-0 mb-0 p-0 tracking-normal font-sans text-[#333] text-[16px] cursor-default  break-[keep-all]' style={{wordBreak : 'keep-all' , direction : 'ltr'}}>
                <div className='m1_responsive-account-container mid:text-[1em] mid:max-w-[1024px] mid:w-[95%] block my-0 mx-auto min-h-[400px] min-w-[300px] relative' style={{overflowWrap:'anywhere'}}>
                    <form className="m1_change-email-form box-border tracking-normal " data-uia="change-email-form" method="post" noValidate="">
                        <h1 className='mid:text-[2.15em] mid:mt-0 mid:mx-0 mid:mb-[.55em] text-[#333] font-normal text-[1.5em] mt-0 mx-0 mb-[.4em]'>이메일 변경</h1>
                        <div></div>
                        <ul className="m1_simpleForm structural ui-grid m-0 p-0 ">
                            <li data-uia="field-currentEmail+wrapper" className="m1_nfFormSpace block  list-none ml-0 mb-[2em] mt-[1.5em]  ">
                                <div data-uia="field-currentEmail+container" className="m1_nfInput relative max-w-[500px] ">
                                    <div className="m1_nfInputPlacement relative">
                                        <label className="m1_input_id" placeholder="currentEmail">
                                            <input type="text" data-uia="field-currentEmail" name="currentEmail" className="m1_nfTextField hasText bg-inherit h-[48px] pt-[10px] px-[10px] pb-0 w-full border-[#ccc] text-[#a6a6a6] font-semibold rounded-[4px] border-solid border-[1px] box-border block text-[16px] appearance-none" id="id_currentEmail" value="wnscks19@naver.com" tabIndex="0" autoComplete="off" disabled="" dir="ltr" />
                                            <label htmlFor="id_currentEmail" className="m1_placeLabel text-[11px] translate-y-0 text-[#8c8c8c] top-[5px] left-[10px]  absolute">현재 이메일</label>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li data-uia="field-newEmail+wrapper" className="m1_nfFormSpace list-none ml-0 mb-[2em] mt-[1.5em] ">
                                <div data-uia="field-newEmail+container" className="m1_nfInput  relative max-w-[500px]">
                                    <div className="m1_nfInputPlacement relative">
                                        <label className="m1_input_id" placeholder="newEmail">
                                            <input type="text" data-uia="field-newEmail" name="newEmail" className="m1_nfTextField h-[48px] pt-[10px] px-[10px] pb-0 w-full border-[#ccc] text-[#a6a6a6] font-semibold rounded-[4px] border-solid border-[1px] box-border block text-[16px] appearance-none" id="id_newEmail" value="" tabIndex="0" autoComplete="off" maxLength="50" minLength="5" dir="" />
                                            <label htmlFor="id_newEmail" className="m1_placeLabel mid:text-[16px] text-[#8c8c8c] left-[10px] top-[50%] absolute translate-y-[-50%]">새 이메일</label>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="m1_nf-btn-bar change-email-buttons mt-[2.25em] box-border tracking-normal">
                            <button id="btn-save" type="submit" autoComplete="off" tabIndex="0" disabled="" className="m1_nf-btn nf-btn-primary nf-btn-retro nf-btn-small small:my-0 small:mr-[10px] small:ml-0 my-[10px] mx-0 block leading-[50px] p-0 bg-[#0f84fa] text-[#fff] cursor-pointer py-[13px] px-[2rem] opacity-50 small:inline-block small:text-[13px] small:leading-[1rem] small:min-h-[37px] small:min-w-[98px] small:py-[.75rem] small:px-[1rem] font-extrabold  " data-uia="action_save-email" placeholder="">저장</button>
                            <button id="btn-cancel" type="button" autoComplete="off" tabIndex="0" className="m1_nf-btn nf-btn-secondary nf-btn-solid nf-btn-small small:my-0 small:mr-[10px] small:ml-0 my-[10px]  mx-0 small:inline-block small:text-[13px] small:leading-[1rem] small:min-h-[37px] small:min-w-[98px] small:py-[.75rem] small:px-[1rem] block leading-[50px] p-0 bg-[#ccc] text-[#000]" data-uia="action_cancel-change-email" placeholder="">취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default MypageMailChange;