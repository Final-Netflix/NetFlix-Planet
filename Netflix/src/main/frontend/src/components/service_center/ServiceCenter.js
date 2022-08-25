import React from 'react';
import ServiceCenterContainer from './ServiceCenterContainer'
import ServiceCenterFooter from './ServiceCenterFooter'
import ServiceCenterHeader from './ServiceCenterHeader';
import '../../css/serviceCenter/serviceCenter.css';

import { useParams } from 'react-router-dom';
import ServiceCenterDetail from './ServiceCenterDetail';
import { useEffect, useState } from 'react';



const ServiceCenter = () => {
    const {detail} = useParams()

    const [openChat, setOpenChat] = useState(false)


    
    useEffect(() => {
        window.addEventListener(
            "message",
            (e) => message(e),
            false
        );
        return(() => {
            window.removeEventListener("message", (e) => message(e), false)
        })
    }, []);

    const message = (e) => {
        if (e.origin === "http://localhost:5000" && e.data.message) {
            setOpenChat(false)
        }
    }

    
   /*  console.log(detail); */
    return (
        <div className='k1-global-container bg-white text-[#141414]'>
            {
                detail === undefined ?
                [<ServiceCenterHeader key={1} />,
                <ServiceCenterContainer key={2} />]:
                <ServiceCenterDetail />
                
            }
            

            <ServiceCenterFooter
                setOpenChat={setOpenChat}
            />
            {
            
            openChat === true &&

            <div className='k1-box w-[320px] h-[500px] fixed right-0 bottom-0 '>
                <iframe
                    className='k1-iframe h-[100%] bg-white '
                    src={`http://localhost:5000?nickname=${localStorage.getItem('profile_name')}`}
                />
            </div>
            }
        </div>
    );
};

export default ServiceCenter;



