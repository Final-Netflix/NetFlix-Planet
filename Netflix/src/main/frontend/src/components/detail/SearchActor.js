import React from 'react';
import PropTypes from "prop-types";

import 'css/detail/actor.css';
import { Link, useLocation } from 'react-router-dom';

const SearchActor = () => {
  const location = useLocation();
  const name = location.state.name;

  return (
    <div>
      <div className="focus-trap-wrapper" tabIndex="-1">
        <div className="gallery-modal">
          <div className="css-1c1fp6l">
            <div className='opacity-100 z-[2] transform-none'>
              <div data-uia="modal-content-wrapper" className="ltr-iuxblq">
                <Link to='/detail'>
                <button className="color-tertiary css-z7fdox hasIcon round ltr-12udmky" data-uia="modal-back-btn" type="button">
                  <div className="ltr-1ksxkn9 leading-0">
                    <div className="small ltr-18dhnor" role="presentation">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-back-arrow" aria-label="back">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24 11.0001L3.41421 11.0001L8.70711 5.70718L7.29289 4.29297L0.292892 11.293C0.105356 11.4805 0 11.7349 0 12.0001C0 12.2653 0.105356 12.5196 0.292892 12.7072L7.29289 19.7072L8.70711 18.293L3.41421 13.0001H24V11.0001Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
                </Link>
                <div className="c2-css-1axxs14 text-white">{ name }</div>
                <div className="gallery row-with-x-columns css-m64ku3">
                  <div></div>
                  <div className="galleryContent">
                    <div>
                      <div className="galleryLockups">
                        <div className="rowContainer rowContainer_title_card" id="row-0">
                          <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                              <div className="slider">
                                <div className="sliderMask showPeek">
                                  <div className="sliderContent row-with-x-columns">
                                    <div className="slider-item slider-item-0">
                                      <div className="title-card-container css-0">
                                        <div id="title-card-0-0" className="title-card animate-in delay-[0.45s]">
                                          <div
                                            className="ptrack-content"
                                            data-ui-tracking-context="%7B%22list_id%22:%22unknown%22,%22location%22:%22rolesModalDisplay%22,%22rank%22:0,%22request_id%22:%229ba8aa1d-5675-4f9c-b29b-2e5368e6dd3e-53244716%22,%22row%22:0,%22track_id%22:200256542,%22video_id%22:80128686,%22image_key%22:%22sdp%7C17ddabd0-c98b-11e7-bd4d-12e5ed47ac84%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                            data-tracking-uuid="2da8bd5c-8e86-4264-b7bc-6b517483d993"
                                          >
                                            <a href="/watch/80128686?tctx=0%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="청춘시대" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                <img
                                                    className="boxart-image boxart-image-in-padded-container"
                                                    src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQOuuhE2M3GzSogPV-cR1_h6ECW3ZqtvV0URmFfU3aiQeODkQbacWIiJlCaAKTAjdM9Yy-zWHz8QvZ3tRke6jHQoZk9TEa0osLo.webp?r=350"
                                                    alt=""
                                                />
                                                <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">청춘시대</p></div>
                                              </div>
                                              <div className="click-to-change-JAW-indicator">
                                                <div className="bob-jawbone-chevron">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                    <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                      fill="currentColor"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="bob-container"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slider-item slider-item-1">
                                      <div className="title-card-container css-0">
                                        <div id="title-card-0-1" className="title-card animate-in delay-[0.35s]">
                                          <div
                                            className="ptrack-content"
                                            data-ui-tracking-context="%7B%22list_id%22:%22unknown%22,%22location%22:%22rolesModalDisplay%22,%22rank%22:1,%22request_id%22:%229ba8aa1d-5675-4f9c-b29b-2e5368e6dd3e-53244716%22,%22row%22:0,%22track_id%22:200256542,%22video_id%22:81430282,%22image_key%22:%22sdp%7C834a0680-204d-11ec-ba5a-0ef204274675%7Cko%7Cozx%7C81430283%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                            data-tracking-uuid="2f36320a-586d-4e6c-a69d-2195fa4d7080"
                                          >
                                            <a href="/watch/81430282?tctx=0%2C1%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="연모" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                <img
                                                  className="boxart-image boxart-image-in-padded-container"
                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSdztJ3TFbOoWeW9zuI6dVoW9YlDN4s_cQZXIW4hBoeg5f4-MA4wK9mVwYSi24zMCevumRhwziUgIQcbL629sKqvKA-MbN1u3Po.webp?r=185"
                                                  alt=""
                                                />
                                                <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">연모</p></div>
                                              </div>
                                              <div className="click-to-change-JAW-indicator">
                                                <div className="bob-jawbone-chevron">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                    <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                      fill="currentColor"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="bob-container"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="slider-item slider-item-2">
                                      <div className="title-card-container css-0">
                                        <div id="title-card-0-2" className="title-card animate-in delay-[0.575s]">
                                          <div
                                            className="ptrack-content"
                                            data-ui-tracking-context="%7B%22list_id%22:%22unknown%22,%22location%22:%22rolesModalDisplay%22,%22rank%22:2,%22request_id%22:%229ba8aa1d-5675-4f9c-b29b-2e5368e6dd3e-53244716%22,%22row%22:0,%22track_id%22:200256542,%22video_id%22:81518991,%22image_key%22:%22sdp%7Cafff7651-e218-11ec-abb0-0a070623e8a7%7Cko%7Cozx%7C81518992%22,%22supp_video_id%22:1,%22lolomo_id%22:%22unknown%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22titleInformationDensity%22:%22%22,%22titleInformationDensityExplored%22:%22%22,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                            data-tracking-uuid="35e70640-952e-45aa-a129-721b66e29636"
                                          >
                                            <a href="/watch/81518991?tctx=0%2C2%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="이상한 변호사 우영우" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                <img
                                                  className="boxart-image boxart-image-in-padded-container"
                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ_tyduiUVoS7VnAkRRyikI1dvfVmbBhW4Q9VR8lEMUdcQoFfbNRjLSqmYQSg_AKSedCVkHuAOisjJw213J4lUQg9STJPFv2u81lk3cE5ujD6mmcVIkJ1kTwagg7u17ZRmjSMvkS9tKRaWSaJ2ZoU_M5mWl6UowsbtUksI9l0WpR-0VW5Dt1vckrVWKadRJFdUFg2QtOrkYRWy0MVHhhDrZRq1VFAMK3zsl6zkqCQcSM4a50Qs3_AaCF26SnvWqpf4UmMsRA-bYfNP1cK1R4K8ll__vW0ZPQxqx2bidKPziiBAZup2fR5WM8U_JiqIkOGNAQzB69cLov0D7ZO7FjVUItHOGeNhh9sQfGU3fU1Cey5rKowGHXU7lwk03sPSZONNqen0-Cgp500bj5N6fYk7_-AHbLnc_FjgWPUTXX510la_femZnnuW0yPGQkvn74XISvcv8YBj7XWEGRJTjBkQ43euem07OATKTHpiOB.webp?r=3cd"
                                                  alt=""
                                                />
                                                <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">이상한 변호사 우영우</p></div>
                                              </div>
                                              <div className="click-to-change-JAW-indicator">
                                                <div className="bob-jawbone-chevron">
                                                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                    <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                      fill="currentColor"
                                                    ></path>
                                                  </svg>
                                                </div>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="bob-container"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to='/'>
                <button className="color-tertiary hasIcon round ltr-eze6o3" data-uia="modal-default-close-btn" type="button">
                  <div className="ltr-1ksxkn9 leading-0">
                    <div className="small ltr-18dhnor" role="presentation">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard" aria-label="close">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2.29297 3.70706L10.5859 12L2.29297 20.2928L3.70718 21.7071L12.0001 13.4142L20.293 21.7071L21.7072 20.2928L13.4143 12L21.7072 3.70706L20.293 2.29285L12.0001 10.5857L3.70718 2.29285L2.29297 3.70706Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div tabIndex="-1" className='opacity-[0.7]'>
      <div className="previewModal--backDrop" tabIndex="-1" data-uia="previewModal--backDrop"></div>
    </div>
    </div>
  );
};

SearchActor.propTypes = {
  name : PropTypes.string.isRequired
}

export default SearchActor;