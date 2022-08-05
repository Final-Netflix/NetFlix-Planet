import React from 'react';
import { useParams } from 'react-router-dom';
import MemberShip from './serviceCenterDetail/MemberShip';
import MemberShipUpdate from './serviceCenterDetail/MemberShipUpdate';


const ServiceCenterDetail = () => {
    const {category} = useParams()
    console.log('카테고리는'+category);
    return (
        <div>
            디테일 메인이구요
            {
                category === 'memberShip' && <MemberShip/>||
                'MemberShipUpdate' && <MemberShipUpdate/>
            }

        </div>
    );
};

export default ServiceCenterDetail;