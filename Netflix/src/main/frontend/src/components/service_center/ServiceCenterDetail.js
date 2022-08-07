import React from 'react';
import { useParams } from 'react-router-dom';
import MemberShip from './serviceCenterDetail/MemberShip';
import MemberShipUpdate from './serviceCenterDetail/MemberShipUpdate';
import '../../css/serviceCenter/serviceCenter.css';
import { Link } from 'react-router-dom';
import AccountSecurity from './serviceCenterHeader/AccountSecurity';
import ServiceCenterFooter from './ServiceCenterFooter';

const ServiceCenterDetail = () => {
    const {category} = useParams()
    return (
        <div className='k1-global-container'>
            <div className="k1-global-header">
                <div className="k1-container">
                    <div className="k1-inner-container">
                        <div className="k1-branding">
                            <Link to='/'><img alt='로고' src=''></img></Link>
                            <Link to='/service'><span className='k1-helpcenter-logo'>고객센터</span></Link>
                        </div>
                        <div className="k1-action"></div>
                    </div>
                </div>

            </div>
            <div className='k1-global-content'>
                <div className="k1-container">
                    <div className="k1-breadcrumb-container">
                        <ul className='k1-breadcrumb'>
                            <li>
                                <Link to='/service' className="text-[red]">
                                    고객 센터 홈으로 돌아가기
                                </Link>
                            </li>
                        </ul>

                    </div>
                    {
                        // category === 'memberShip' && <MemberShip/> ||
                        //              'MemberShipUpdate' && <MemberShipUpdate/>

                        (function(){ 
                            if (category === 'memberShip') return (<MemberShip/>);
                            if (category === 'accountSecurity') return (<AccountSecurity />);
                        })()
                    }
                </div>

            </div>
            <ServiceCenterFooter />

        </div>
    );
};

export default ServiceCenterDetail;