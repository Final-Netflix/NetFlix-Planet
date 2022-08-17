import React from 'react';

const RecommendItems = ({ item }) => {
    return (
        <div className="slider-item px-[0.2vw]" style={{width: '100%'}}>
            <div className="title-card-container css-0">
                <div id="title-card-2-0" className="title-card">
                    <div
                        className="ptrack-content"
                        data-ui-tracking-context="%7B%22list_id%22:%22GPS_90F9E094223E8D90D5C76CD4CFEC43-4E5206F4B5E7E3-586DC3E6C4_p_1659925287943%22,%22location%22:%22homeScreen%22,%22rank%22:0,%22request_id%22:%22aed62872-bf6e-41a6-9966-b6233cee2505-303244450%22,%22row%22:2,%22track_id%22:259700348,%22video_id%22:81193309,%22image_key%22:%22sdp%7Cac678091-3843-11ea-9475-0e1387033224%7Cko%7CnVi%7C81193314%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_90F9E094223E8D90D5C76CD4CFEC43_p_1659925287943%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                        data-tracking-uuid="ad0a79c6-30de-49bd-b98f-1f88b09ec9a2"
                    >
                        <a href="/watch/81193309?tctx=2%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="{ item.title }" tabIndex="0" aria-hidden="false" className="slider-refocus">
                            <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                <img
                                    className="boxart-image boxart-image-in-padded-container"
                                    src={ item.src }
                                    alt={ item.title }
                                />
                                <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">{ item.title }</p></div>
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
    );
};

export default RecommendItems;