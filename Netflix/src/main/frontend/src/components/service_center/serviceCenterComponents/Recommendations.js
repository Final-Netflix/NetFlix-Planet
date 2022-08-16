import React, { useState } from 'react';
import ServiceCenter from '../ServiceCenter';

const Recommendations = (props) => {
    const [ data ] = useState([
        {
            title: '계정 보안을 유지하는 방법',
            alt: '계정 보안을 유지하는 방법',
            imageUrl: 'https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg',
            href: '/service/detail/accountSecurity'
        },
        {
            title: '플레닛 자녀 보호 기능',
            alt: '플레닛 자녀 보호 기능',
            imageUrl: 'https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg',
            href: '/service/detail/childProtection'
        },
        {
            title: '멤버십 변경 방법',
            alt: '멤버십 변경 방법',
            imageUrl: 'https://help.nflxext.com/helpcenter/98f280f0cce17c23059f77fa33186294.svg',
            href: '/service/detail/changeMembership'
        },
    ]);
    return (
        <>
            {
                data.map((item, i) => {  //props의 data의 (map)반복문을 돌릴꺼야!
                    return (
                        <div key={i} className="k2-recommendations mb-[16px]">
                            <div className="k2-help-card p-0 rounded border-2 w-[270px] shadow-md  h-[56px] mr-4 bg-[#fff] justify-center">
                                <a href={item.href} className="k2-noreferrer">
                                    <img className="k2-icon mr-[16px]" alt={item.alt} src={item.imageUrl}></img>
                                    <h3 className="k2-title">{item.title}</h3>   
                                </a>    
                            </div>
                        </div> 
                    )
                })
            }
        </>
    )
}

export default Recommendations