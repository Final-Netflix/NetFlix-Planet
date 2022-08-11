import React from 'react';
import '../../css/serviceCenter/serviceCenter.css';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MemberShip from './serviceCenterDetail/MemberShip';
import MemberShipUpdate from './serviceCenterDetail/MemberShipUpdate';
import MemberNewLog from './serviceCenterDetail/MemberNewLog';
import PlanetPasswordUpdate from './serviceCenterDetail/PlanetPasswordUpdate';
import PlanetLoginMessage from './serviceCenterDetail/PlanetLoginMessage';
import PlanetPaymentWay from './serviceCenterDetail/PlanetPaymentWay';
import PlanetPaymentClaim from './serviceCenterDetail/PlanetPaymentClaim';
import ProfileProduceWay from './serviceCenterDetail/ProfileProduceWay';
import OfflineWatchWay from './serviceCenterDetail/OfflineWatchWay';
import PlanetOnTv from './serviceCenterDetail/PlanetOnTv';
import AccountSecurity from './serviceCenterHeader/AccountSecurity';
import ChildProtection from './serviceCenterHeader/ChildProtection';
import ChangeMembership from './serviceCenterHeader/ChangeMembership';
import logo from '../../image/main/logo.png';
import CreateChildProfile from './serviceCenterHeader/CreateChildProfile';
import BlockContents from './serviceCenterHeader/BlockContents';
import LockProfile from './serviceCenterHeader/LockProfile';
import AddProfilePIN from './AddProfilePIN';
import AbleAutoPlay from './serviceCenterHeader/AbleAutoPlay';
import AccessViewRecords from './serviceCenterHeader/AccessViewRecords';


const ServiceCenterDetail = () => {
    const {category} = useParams()
    console.log(category)
    return (
        <div className='k1-global-container'>
            <div className="k1-global-header pt-4">
                <div className="k1-container">
                    <div className="k1-inner-container">
                        <div className="k1-branding">
                            <img alt='로고' className="w-40" src={ logo }></img>
                            <Link to='/service'><span className='k1-helpcenter-logo last:'>  ㅣ  고객센터</span></Link>
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
                                <a className="text-[#e50914] flex">
                                <Link to='/service' >
                                    <svg className='-mb-2' fill='#e50914' width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="16.3515625 11.1015625 16.3515625 12.25 9.2421875 12.25 12.4960938 15.53125 11.6757812 16.3515625 7 11.6757812 11.6757812 7 12.4960938 7.8203125 9.2421875 11.1015625"></polygon>
                                    </svg>
                                </Link>
                                    고객 센터 홈으로 돌아가기
                                </a>
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
                            if (category === 'accountSecurity') return (<AccountSecurity />);
                            if (category === 'childProtection') return (<ChildProtection />);
                            if (category === 'changeMembership') return (<ChangeMembership />); 
                            if (category === 'createChildProfile') return (<CreateChildProfile />);
                            if (category === 'blockContents') return (<BlockContents />); 
                            if (category === 'lockProfile') return (<LockProfile />); 
                            if (category === 'addProfilePIN') return (<AddProfilePIN />); 
                            if (category === 'ableAutoPlay') return (<AbleAutoPlay />); 
                            if (category === 'accessViewRecords') return (<AccessViewRecords />);
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