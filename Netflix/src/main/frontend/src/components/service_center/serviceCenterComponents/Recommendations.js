import React from 'react';
import ServiceCenter from '../ServiceCenter';

const Recommendations = (props) => {
    return (
        <>
            {
                props.data.map((item, i) => {  //props의 data의 (map)반복문을 돌릴꺼야!
                    return (
                        <div key={i} className="k2-recommendations relative flex mb-[16px]">
                            <div className="k2-help-card p-0 rounded border-2 w-[250px] shadow-md  h-[56px] mr-4 bg-[#fff] justify-center">
                                <a rel="k2-noreferrer" className="k2-noreferrer cursor-pointer items-center p-[16px] flex flex-row justify-center font-[#e50914]">
                                    <img className="k2-icon mr-[16px]" alt={item.alt} src={item.url}></img>
                                    <h3 className="k2-title hover:text-[#e50914] font-bold flex flex-row  text-[#221f1f]">{item.title}</h3>   
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