import React from 'react';
import ServiceCenterContainer from './ServiceCenterContainer'
import ServiceCenterFooter from './ServiceCenterFooter'
import ServiceCenterHeader from './ServiceCenterHeader';
import '../../css/serviceCenter/serviceCenter.css';

import { useParams } from 'react-router-dom';
import ServiceCenterDetail from './ServiceCenterDetail';


const ServiceCenter = () => {

    const{serviceCenterDetail} = useParams()

    console.log(serviceCenterDetail);
    return (

        <div className='k1-global-container bg-white text-[#141414]'>
            {
                serviceCenterDetail === undefined &&
                [<ServiceCenterHeader />,
                <ServiceCenterContainer />]||
                <ServiceCenterDetail/>

            }

            <ServiceCenterFooter />
        </div>
    );
};

export default ServiceCenter;



