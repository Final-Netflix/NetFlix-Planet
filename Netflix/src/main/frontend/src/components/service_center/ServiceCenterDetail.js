import React from 'react';
import { useParams } from 'react-router-dom';
import MemberShip from './serviceCenterDetail/MemberShip';
import MemberShipUpdate from './serviceCenterDetail/MemberShipUpdate';
import '../../css/serviceCenter/serviceCenter.css';
import { Link } from 'react-router-dom';
import MemberNewLog from './serviceCenterDetail/MemberNewLog';
import PlanetPasswordUpdate from './serviceCenterDetail/PlanetPasswordUpdate';
import PlanetLoginMessage from './serviceCenterDetail/PlanetLoginMessage';
import PlanetPaymentWay from './serviceCenterDetail/PlanetPaymentWay';
import PlanetPaymentClaim from './serviceCenterDetail/PlanetPaymentClaim';
import ProfileProduceWay from './serviceCenterDetail/ProfileProduceWay';
import OfflineWatchWay from './serviceCenterDetail/OfflineWatchWay';
import PlanetOnTv from './serviceCenterDetail/PlanetOnTv';

const ServiceCenterDetail = () => {
    const {category} = useParams()
    console.log(category)
    return (
        <div className='k1-global-container'>
            <div className="k1-global-header">
                <div className="k1-container">
                    <div className="k1-inner-container">
                        <div className="k1-branding">
                            <Link to='/'><img alt='로고' src='../../image/main/logo.png'></img></Link>
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
                        (function(){
                            if (category === 'memberShip') return (<MemberShip/>);
                            if (category === 'memberNewLog') return (<MemberNewLog/>);
                            if (category === 'memberShipUpdate') return (<MemberShipUpdate/>);
                            if (category === 'planetPasswordUpdate') return (<PlanetPasswordUpdate/>);
                            if (category === 'planetLoginMessage') return (<PlanetLoginMessage/>);
                            if (category === 'planetPaymentWay') return (<PlanetPaymentWay/>);
                            if (category === 'planetPaymentClaim') return (<PlanetPaymentClaim/>);
                            if (category === 'profileProduceWay') return (<ProfileProduceWay/>);
                            if (category === 'planetOnTv') return (<PlanetOnTv/>);
                            if (category === 'offlineWatchWay') return (<OfflineWatchWay/>);
                        })()
                    }
                   
                </div>

            </div>
            <div className="k1-footer-push">


            </div>

        </div>
    );
};

export default ServiceCenterDetail;