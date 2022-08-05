import React from 'react';
import ServiceCenterContainer from './ServiceCenterContainer'
import ServiceCenterFooter from './ServiceCenterFooter'
import ServiceCenterHeader from './ServiceCenterHeader';

const ServiceCenter = () => {
    return (
        <div className="bg-white text-[#141414]" >
            <ServiceCenterHeader />
            <ServiceCenterContainer />
            <ServiceCenterFooter />
        </div>
    );
};

export default ServiceCenter;



