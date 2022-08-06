import React from 'react';

const Recommendations = (props) => {
    return (
        <>
            {
                props.data.map((item, i) => {  //props의 data의 (map)반복문을 돌릴꺼야!
                    return (
                        <div className="recommendations">
                            <div className="help-card">
                                <a rel="noreferrer">
                                    <img className="icon" alt={item.alt} src={item.url}></img>
                                    <h3 className="title">{item.title}</h3>   
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