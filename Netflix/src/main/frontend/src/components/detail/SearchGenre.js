import React from 'react';
import 'css/detail/genre.css';
import { Link } from 'react-router-dom';

const SearchGenre = () => {
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
                <div className="css-1axxs14 text-white">일본 작품</div>
                <div className="aro-toggle css-1vgbxd3">
                  <button className="aro-row-toggle" aria-label="목록 뷰" tabIndex="0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-rows">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 6H0V4H24V6ZM24 18V20H0V18H24ZM0 13H12V11H0V13Z" fill="currentColor"></path>
                    </svg>
                  </button>
                  <div className="aro-grid">
                    <button aria-label="그리드 뷰" className="aro-grid-toggle" tabIndex="0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-grid">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1 3C0.447715 3 0 3.44772 0 4V10C0 10.5523 0.447715 11 1 11H10C10.5523 11 11 10.5523 11 10V4C11 3.44772 10.5523 3 10 3H1ZM1 13C0.447715 13 0 13.4477 0 14V20C0 20.5523 0.447715 21 1 21H10C10.5523 21 11 20.5523 11 20V14C11 13.4477 10.5523 13 10 13H1ZM13 4C13 3.44772 13.4477 3 14 3H23C23.5523 3 24 3.44772 24 4V10C24 10.5523 23.5523 11 23 11H14C13.4477 11 13 10.5523 13 10V4ZM14 13C13.4477 13 13 13.4477 13 14V20C13 20.5523 13.4477 21 14 21H23C23.5523 21 24 20.5523 24 20V14C24 13.4477 23.5523 13 23 13H14Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="lolomo">
                  <h1 className="visually-hidden">Netflix 홈</h1>
                  <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="genre">
                    <h2 className="rowHeader css-0">
                      <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/genre/83">
                        <div className="row-header-title">시리즈</div>
                        <div className="aro-row-header more-visible">
                          <div className="see-all-link">모두 보기</div>
                          <div className="aro-row-chevron icon-akiraCaretRight"></div>
                        </div>
                      </a>
                    </h2>
                    <div className="rowContainer rowContainer_title_card" id="row-1">
                      <div className="ptrack-container">
                        <div className="rowContent slider-hover-trigger-layer">
                          <div className="chunked-row-container">
                            <div className="chunked-row four">
                              <div className="title-card-container css-0">
                                <div id="title-card-1-0" className="title-card">
                                  <div
                                    className="ptrack-content"
                                    data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:0,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:81518991,%22image_key%22:%22sdp%7Cafff7651-e218-11ec-abb0-0a070623e8a7%7Cko%7Cozx%7C81518992%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                    data-tracking-uuid="765da5a4-24b5-47ec-9b72-1765a48d37f4"
                                  >
                                    <a href="/watch/81518991?tctx=1%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="이상한 변호사 우영우" tabIndex="0" aria-hidden="false" className="slider-refocus">
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
                              <div className="title-card-container css-0">
                                  <div id="title-card-1-1" className="title-card">
                                      <div
                                          className="ptrack-content"
                                          data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:1,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:70195800,%22image_key%22:%22sdp%7C08dcb1a0-f1f9-11e5-afe0-22000bfa2486%7Cko%7Cozx%7C81143872%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                          data-tracking-uuid="1c746cc9-76f8-43bd-ae6b-7ab9d0cc5849"
                                      >
                                          <a href="/watch/70195800?tctx=1%2C1%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="슈츠" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                  <img
                                                      className="boxart-image boxart-image-in-padded-container"
                                                      src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRZ5SMIGIIJxR8WH-IrWdmW3xderAOiO5RCveZuahxt3YbgQkXSYbL9bkejI-VEQLS972tXVQp2IDk2WoihWE08wBFO6WaAFYXk.webp?r=032"
                                                      alt=""
                                                  />
                                                  <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">슈츠</p></div>
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
                              <div className="title-card-container css-0">
                                  <div id="title-card-1-2" className="title-card">
                                      <div
                                          className="ptrack-content"
                                          data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:2,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:81589771,%22image_key%22:%22sdp%7C5a534001-a100-11ec-8f48-0ace50c00f47%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                          data-tracking-uuid="74bd0f2d-1a24-4603-a2fb-4e2ae256a280"
                                      >
                                          <a href="/watch/81589771?tctx=1%2C2%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="리갈하이" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                  <img
                                                      className="boxart-image boxart-image-in-padded-container"
                                                      src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbk014mGieLe4cenblYn8B_XC3MGlMfjOBlg154XsteAnZ-reL11HW_sUlfmch_ioALr4UOVnn4K1yYq9yjrqyI9yUSzM7P_yEs.webp?r=5c5"
                                                      alt=""
                                                  />
                                                  <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">리갈하이</p></div>
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
                              <div className="title-card-container css-0">
                                  <div id="title-card-1-3" className="title-card">
                                      <div
                                          className="ptrack-content"
                                          data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:3,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:81312802,%22image_key%22:%22sdp%7C30af6bd1-799a-11ec-938a-0af73f206445%7Cko%7Cozx%7C81312803%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                          data-tracking-uuid="d5fb1f89-8724-4ff6-898b-63eac9618cf4"
                                      >
                                          <a href="/watch/81312802?tctx=1%2C3%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="소년심판" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                  <img
                                                      className="boxart-image boxart-image-in-padded-container"
                                                      src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRpKplZ56oa5L4bJOznALvgp_Uw0tsBGJCJ2ahWnMrHyNaqB7BebGtFH2RtHQUm7bDDZST2VW_MCUncqLChelFtBHHhU3IUuWkNlerlEwhiNZbdCYPhFZsnjgWhlvnHqvu3l.jpg?r=a91"
                                                      alt=""
                                                  />
                                                  <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">소년심판</p></div>
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
                              <div className="title-card-container css-0">
                                  <div id="title-card-1-4" className="title-card">
                                      <div
                                          className="ptrack-content"
                                          data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:4,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:80024057,%22image_key%22:%22sdp%7C6e0bc290-6258-11ea-978d-0e58ee5eaa57%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                          data-tracking-uuid="0f5b8153-5391-4b22-98e1-21f84ebc09e8"
                                      >
                                          <a href="/watch/80024057?tctx=1%2C4%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="범죄의 재구성" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                  <img
                                                      className="boxart-image boxart-image-in-padded-container"
                                                      src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf_1vOSk4C1k01qxKRrDBlcHmiEnptAd4b6VzlhlpVpMy-uNrP_53dU4ViSnU4NdV7OD-EfePrJs6VR6tbjMdaE4sVxx7c4dgIA.webp?r=c54"
                                                      alt=""
                                                  />
                                                  <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">범죄의 재구성</p></div>
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
                              <div className="title-card-container css-0">
                                  <div id="title-card-1-5" className="title-card">
                                      <div
                                          className="ptrack-content"
                                          data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:5,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:81413647,%22image_key%22:%22sdp%7C26e140c0-96dc-11eb-aad2-0a2eeaf635fd%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                          data-tracking-uuid="03942421-ed30-44fa-9159-6ed6d8a211db"
                                      >
                                          <a href="/watch/81413647?tctx=1%2C5%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="로스쿨" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                  <img
                                                      className="boxart-image boxart-image-in-padded-container"
                                                      src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbRm0kZQ-QrVReuc3OFWIdmps4lF_Srzp-za0M69vWkbyXSqDX--BP9Sgl_ZZJfyKHP7UmFrVFmo8EBpOJ0QFpPvj_D7LkO8M9Q.webp?r=f16"
                                                      alt=""
                                                  />
                                                  <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">로스쿨</p></div>
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
                              <div className="title-card-container css-0">
                                <div id="title-card-1-6" className="title-card">
                                    <div
                                        className="ptrack-content"
                                        data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:6,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:81482512,%22image_key%22:%22sdp%7C81ef6111-d4b5-11eb-aabb-0ea1acf6fcbb%7Cko%7Cozx%7C81482513%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                        data-tracking-uuid="9e463440-81b9-438b-a1cc-7861b9fb62f9"
                                    >
                                        <a href="/watch/81482512?tctx=1%2C6%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="무법변호사" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                            <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                <img
                                                    className="boxart-image boxart-image-in-padded-container"
                                                    src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0WqFJpw6CTlYinjHhByuUCgpOgCvOZ8CTxAIv_x9OTGMDW-5U53_lS8uffH-WkIzpUb-6cFM2WXFu7UWyafmP8tNHvRMbzn3Q.webp?r=83e"
                                                    alt=""
                                                />
                                                <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">무법변호사</p></div>
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
                              <div className="title-card-container css-0">
                                  <div id="title-card-1-7" className="title-card">
                                      <div
                                          className="ptrack-content"
                                          data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-0645B18EE12FF5-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:7,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:1,%22track_id%22:253798064,%22video_id%22:81205775,%22image_key%22:%22sdp%7Cda166350-e995-11e9-9bf9-1203b2feb7c4%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                          data-tracking-uuid="8af1d29f-d33e-4f03-967c-b928b8b75be2"
                                      >
                                          <a href="/watch/81205775?tctx=1%2C7%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="진심이 닿다" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                              <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                  <img
                                                      className="boxart-image boxart-image-in-padded-container"
                                                      src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW2_SSwZjX_8m16G262YWQHlu-hFwLz2le5wT3Sc77yqAWlXUDIdPqqVJeOou5ONRXzbBbLDICaSf_gRa2g24BGf8FZfXuvVsHI.webp?r=ac2"
                                                      alt=""
                                                  />
                                                  <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">진심이 닿다</p></div>
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
                            <div className="divider"></div>
                            <div className="more-container">
                              <button className="show-more" type="button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-down-arrow-small">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                    fill="currentColor"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="trendingNow">
                      <h2 className="rowHeader css-0">
                          <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/trending-now">
                              <div className="row-header-title">지금 뜨는 콘텐츠</div>
                              <div className="aro-row-header more-visible">
                                  <div className="see-all-link">모두 보기</div>
                                  <div className="aro-row-chevron icon-akiraCaretRight"></div>
                              </div>
                          </a>
                      </h2>
                      <div className="rowContainer rowContainer_title_card" id="row-2">
                          <div className="ptrack-container">
                              <div className="rowContent slider-hover-trigger-layer">
                                  <div className="chunked-row-container">
                                      <div className="chunked-row four">
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-0" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:0,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81290894,%22image_key%22:%22sdp%7Cfa4c5d40-eb37-11ec-911c-0eda6da0d99b%7Cko%7Cozx%7C81290895%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="74a7dd33-1fea-459e-86bc-cb78f8de2c82"
                                                  >
                                                      <a href="/watch/81290894?tctx=2%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="나는 아버지를 죽였다" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbDU_G4sFn9XEv-bfEHCzZiqDMukExAPRyU6RMmseRaCe4f8rbUhFH_9q86nO_tJYByCp0aD44B0r7ZGsyloyeoePidmwLHtwbRM95rr9Iew5H1uYai8S5xXg8i4r0BshCCy.jpg?r=9f7"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">나는 아버지를 죽였다</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-1" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:1,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81205775,%22image_key%22:%22sdp%7Cda166350-e995-11e9-9bf9-1203b2feb7c4%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="b10b4f69-0c29-4d9a-98c2-5bf22acaef01"
                                                  >
                                                      <a href="/watch/81205775?tctx=2%2C1%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="진심이 닿다" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW2_SSwZjX_8m16G262YWQHlu-hFwLz2le5wT3Sc77yqAWlXUDIdPqqVJeOou5ONRXzbBbLDICaSf_gRa2g24BGf8FZfXuvVsHI.webp?r=ac2"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">진심이 닿다</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-2" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:2,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81303831,%22image_key%22:%22sdp%7C4f0d5691-ca63-11ec-abba-0ef5ac7aba6b%7Cko%7Cozx%7C81303833%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="1316c277-cc63-4bf0-8e0c-95217033e654"
                                                  >
                                                      <a href="/watch/81303831?tctx=2%2C2%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="링컨 차를 타는 변호사" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdY98pwvLLwKLijI9liuijrPQ7Rc-yCCrgs1CriyWVozm-phP_L9duAMYoqcTlNX5lxC7E54Zl9gWwnQPxJKjQJ5-DkhPdWz8Jw3oujM5UjalVwb8Jdmozn9bMMUdDkP2cbr.jpg?r=35b"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">링컨 차를 타는 변호사</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-3" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:3,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81482512,%22image_key%22:%22sdp%7C81ef6111-d4b5-11eb-aabb-0ea1acf6fcbb%7Cko%7Cozx%7C81482513%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="53daf17c-8e0a-4973-96ab-37486c1c2e28"
                                                  >
                                                      <a href="/watch/81482512?tctx=2%2C3%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="무법변호사" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf0WqFJpw6CTlYinjHhByuUCgpOgCvOZ8CTxAIv_x9OTGMDW-5U53_lS8uffH-WkIzpUb-6cFM2WXFu7UWyafmP8tNHvRMbzn3Q.webp?r=83e"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">무법변호사</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-4" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:4,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81152788,%22image_key%22:%22sdp%7C7e925190-a6e6-11ec-9d88-129db41d8629%7Cko%7Cozx%7C81200651%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="283dda54-4e3b-4245-92f3-fcc3dc6690b6"
                                                  >
                                                      <a href="/watch/81152788?tctx=2%2C4%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="아나토미 오브 스캔들" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaNszQTUPy25Z-1MFRn3_K4gq3LYXk0kR9Tw_66zB8AHZwQ_8Y1R9EK67yJPe4QEpsKN7dBBLR_ur9Ocd_hCE-NqU9L1L5qmVuid2eN7XrMDTWKuJFEcJggNQQ12p_kETzKz.jpg?r=73d"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">아나토미 오브 스캔들</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-5" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:5,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81177545,%22image_key%22:%22sdp%7Cf8c8c3e0-4c6b-11ea-ae40-0e7967023ffc%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="e7f1aeb0-8696-49bd-9195-16d184e7d999"
                                                  >
                                                      <a href="/watch/81177545?tctx=2%2C5%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="하이에나" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWiYKbtHxh2RQOjsOs7thW9tAlWUsOzOBrtRnOi4PCP9qAgtqWs8CrwCByx4IuJxFwwelWDLaZFckdPHQ8qUK7X2ci128JoEpbM.webp?r=cf6"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">하이에나</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-6" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:6,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81074012,%22image_key%22:%22sdp%7C5e15e521-1fce-11ec-86d8-0e71fcfb906d%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="0dc44963-59c0-4703-b0c3-8c1d1eea5d78"
                                                  >
                                                      <a href="/watch/81074012?tctx=2%2C6%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="빌리언 달러 코드" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABerzgFinR-RbfeW602vZz2WI-s3CiUUwmqhvz3KNv8p_4YSwvpDMV0C4Qe0JrwNzMiV5u4HtHsr62qNrdHDj9MRifiS007TZNZYrXAx2_Y0gBcpPM-JzIKMWDuAmvpdTrIYo.jpg?r=17b"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">빌리언 달러 코드</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-2-7" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-861A888CDE1C8E-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:7,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:2,%22track_id%22:253788158,%22video_id%22:81298614,%22image_key%22:%22sdp%7Ca4836ca0-b171-11ec-a4c6-0e783e315083%7Cko%7Cozx%7C81298615%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="983859df-c47d-4c7d-8817-8dcd1ebff71a"
                                                  >
                                                      <a href="/watch/81298614?tctx=2%2C7%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="살인을 말하다: 존 웨인 게이시 테이프" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWKOm26JlmtXXkVWlwpSgCiTC37X4-9IfcNxfdBeZ0bLeG5F5fGRT41lokP5fcePCRd-4iKn6VHqIGWn0_mxJ69ZSYZluu-jm9xitWifsqKNiCWMD5_XBUBp9KLhALedrVd.jpg?r=e77"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">살인을 말하다: 존 웨인 게이시 테이프</p></div>
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
                                      <div className="divider"></div>
                                      <div className="more-container">
                                          <button className="show-more" type="button">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-down-arrow-small">
                                                  <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                      fill="currentColor"
                                                  ></path>
                                              </svg>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="newThisWeek">
                    <h2 className="rowHeader css-0">
                      <span className="rowTitle css-0"><div className="row-header-title">새로 올라온 콘텐츠</div></span>
                    </h2>
                    <div className="rowContainer rowContainer_title_card" id="row-3">
                        <div className="ptrack-container">
                            <div className="rowContent slider-hover-trigger-layer">
                                <div className="chunked-row-container">
                                    <div className="chunked-row four">
                                        <div className="title-card-container css-0">
                                            <div id="title-card-3-0" className="title-card">
                                                <div
                                                    className="ptrack-content"
                                                    data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-9ED15DE2E9C4F4-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:0,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:3,%22track_id%22:260217074,%22video_id%22:81290894,%22image_key%22:%22sdp%7Cfa4c5d40-eb37-11ec-911c-0eda6da0d99b%7Cko%7Cozx%7C81290895%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                    data-tracking-uuid="af8ee2f9-29c2-43c8-bfdd-45db79afeeef"
                                                >
                                                    <a href="/watch/81290894?tctx=3%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="나는 아버지를 죽였다" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                        <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                            <img
                                                                className="boxart-image boxart-image-in-padded-container"
                                                                src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbDU_G4sFn9XEv-bfEHCzZiqDMukExAPRyU6RMmseRaCe4f8rbUhFH_9q86nO_tJYByCp0aD44B0r7ZGsyloyeoePidmwLHtwbRM95rr9Iew5H1uYai8S5xXg8i4r0BshCCy.jpg?r=9f7"
                                                                alt=""
                                                            />
                                                            <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">나는 아버지를 죽였다</p></div>
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
                                        <div className="title-card-container css-0">
                                            <div id="title-card-3-1" className="title-card">
                                                <div
                                                    className="ptrack-content"
                                                    data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-9ED15DE2E9C4F4-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:1,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:3,%22track_id%22:260217074,%22video_id%22:81518991,%22image_key%22:%22sdp%7Cafff7651-e218-11ec-abb0-0a070623e8a7%7Cko%7Cozx%7C81518992%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                    data-tracking-uuid="1c93b0ce-9c58-4441-947d-81678f78d719"
                                                >
                                                    <a href="/watch/81518991?tctx=3%2C1%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="이상한 변호사 우영우" tabIndex="0" aria-hidden="false" className="slider-refocus">
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
                                        <div className="title-card-container css-0">
                                            <div id="title-card-3-2" className="title-card">
                                                <div
                                                    className="ptrack-content"
                                                    data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-9ED15DE2E9C4F4-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:2,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:3,%22track_id%22:260217074,%22video_id%22:81349458,%22image_key%22:%22sdp%7Cf9da12d1-cbcf-11ec-a1af-0a40d6c02205%7Cko%7Cozx%7C81349459%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                    data-tracking-uuid="73a2b0d4-f612-42f1-8302-3c46a0efd024"
                                                >
                                                    <a href="/watch/81349458?tctx=3%2C2%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="유 돈 노우 미" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                        <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                            <img
                                                                className="boxart-image boxart-image-in-padded-container"
                                                                src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYEyI__hVzHVpN4bOAenbCnnmEE07jNgPwtueU9xkW6b6UAK7RZB4KeqAmqf6NDdCzUJzbkCACytadKryu50vf5JiJNfWbhFhNUlTYGY7OCDdeNB_cET2-h_ZUbgpHiWr5eG.jpg?r=a9e"
                                                                alt=""
                                                            />
                                                            <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">유 돈 노우 미</p></div>
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
                                        <div className="title-card-container css-0">
                                            <div id="title-card-3-3" className="title-card">
                                                <div
                                                    className="ptrack-content"
                                                    data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-9ED15DE2E9C4F4-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:3,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:3,%22track_id%22:260217074,%22video_id%22:81287440,%22image_key%22:%22sdp%7C5ca3dac0-fe4a-11ec-a338-0a1e9c45ee97%7Cko%7Cozx%7C81287441%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                    data-tracking-uuid="8f3b4b79-59ec-4fe8-a0b6-7c8b909b4e11"
                                                >
                                                    <a href="/watch/81287440?tctx=3%2C3%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="저스티스 서브드" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                        <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                            <img
                                                                className="boxart-image boxart-image-in-padded-container"
                                                                src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc0hHhotB-LgGsW6a8KaYSkyf1fVbBW3Q86q86h5fGQqkc4Kkj4VT-qma6R8i8ceAjqBP4gpwqb6kkrkufxpOka_D4onG6nQD_sqORILgyRvCu_a1TyHwfoAF-m5KZUumags.jpg?r=e92"
                                                                alt=""
                                                            />
                                                            <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">저스티스 서브드</p></div>
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
                                        <div className="title-card-container css-0">
                                            <div id="title-card-3-4" className="title-card">
                                                <div
                                                    className="ptrack-content"
                                                    data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-9ED15DE2E9C4F4-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:4,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382623270%22,%22row%22:3,%22track_id%22:260217074,%22video_id%22:81311768,%22image_key%22:%22sdp%7C9bbca961-c80f-11ec-bf15-0e9892cee199%7Cko%7Cozx%7C81311769%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                    data-tracking-uuid="f3300365-21a2-4f04-aeae-000369b7b2b3"
                                                >
                                                    <a href="/watch/81311768?tctx=3%2C4%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="미스터 굿: 경찰인가 악당인가" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                        <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                            <img
                                                                className="boxart-image boxart-image-in-padded-container"
                                                                src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSaa5z0eG_JFGQA-Q7KlBZgbZj_iuHYCcq48qK5zVqMN3CoVui868rdVL-C8rNDciBZ3uOdLs_M7w1s2HPrcaRgljyRq6kVt2Wi32_xG839CLoMqt47hBcaJ_q-B0-no9YIC.jpg?r=7fa"
                                                                alt=""
                                                            />
                                                            <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">미스터 굿: 경찰인가 악당인가</p></div>
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
                                    <div className="divider"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                  <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="topTen">
                      <h2 className="rowHeader css-0">
                          <span className="rowTitle css-0"><div className="row-header-title">SH 님의 취향저격 베스트 콘텐츠</div></span>
                      </h2>
                      <div className="rowContainer rowContainer_title_card" id="row-4">
                          <div className="ptrack-container">
                              <div className="rowContent slider-hover-trigger-layer">
                                  <div className="chunked-row-container">
                                      <div className="chunked-row four">
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-0" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:0,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:81244448,%22image_key%22:%22sdp%7C7bce71a0-14a1-11ec-a01c-0e0a468c8fcb%7Cko%7Cozx%7C81377507%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="323e96ee-d60f-4638-ac17-5d6ed6e71b32"
                                                  >
                                                      <a href="/watch/81244448?tctx=4%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="포 라이프" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUFBp8BeaIBZL7gLbbumeyTCNKOGfsRAEwhtLaB-eFTiwouaeqFRtQTpSCqLCqrugVZcPSIqYwKIAm3LkRbWr3vyzckLUYkb3cY.webp?r=e68"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">포 라이프</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-1" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:1,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:81074012,%22image_key%22:%22sdp%7C5e15e521-1fce-11ec-86d8-0e71fcfb906d%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="fd867b73-bcb3-4360-8913-b06231e35a04"
                                                  >
                                                      <a href="/watch/81074012?tctx=4%2C1%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="빌리언 달러 코드" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABerzgFinR-RbfeW602vZz2WI-s3CiUUwmqhvz3KNv8p_4YSwvpDMV0C4Qe0JrwNzMiV5u4HtHsr62qNrdHDj9MRifiS007TZNZYrXAx2_Y0gBcpPM-JzIKMWDuAmvpdTrIYo.jpg?r=17b"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">빌리언 달러 코드</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-2" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:2,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:80211703,%22image_key%22:%22sdp%7Ce5acc2c1-4749-11e9-b2e6-0e68d3d0653a%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="0367cda2-3112-4d52-87f6-b2b8dcb286a3"
                                                  >
                                                      <a href="/watch/80211703?tctx=4%2C2%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="퀵샌드: 나의 다정한 마야" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV8b62_kHy2TglHeumCb8C8ceQI1_UdKl_lB4bzelufn8jhoSqLGCAg362iBOayzqU1KlF-yBWh-6xUojh5esd46_BGyY_Ko68S7I8VE0BTYQIoeB3p7MLg9HiihrqFb8Ab0.jpg?r=ba7"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">퀵샌드: 나의 다정한 마야</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-3" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:3,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:80996810,%22image_key%22:%22sdp%7C317c0ae0-df2c-11eb-a419-0edf837c8143%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="0c33ad91-79fd-4347-9e09-058c6293bd42"
                                                  >
                                                      <a href="/watch/80996810?tctx=4%2C3%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="코카인 카우보이: 마이애미의 제왕들" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABadl0C9o0Uwpc5edHwg8_555-EjiJ6UbuXqZOkJxQoLW-JbdEf0JDJI1LQGWXz91LeEL5Hn8Om1xTHJOUodtNwYMH0EzG649yXf_3ap-cHMfcXVaeJom6SwkjspoOsAQot6Y.jpg?r=5cf"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">코카인 카우보이: 마이애미의 제왕들</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-4" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:4,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:81218903,%22image_key%22:%22sdp%7C29b0c831-78fa-11ea-b451-0a9e15a005bb%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="8270d20e-dd34-45e1-b225-fc815bf60382"
                                                  >
                                                      <a href="/watch/81218903?tctx=4%2C4%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="12인의 심판자" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcYCBUgTQq97Vf6V2sbsFhtbN3OymRb9u7KL_mzAWHtkRgKQfVp4ymUX0MjPcBq2CKBHZkCba4LpiUn1o4RBbYNDqmxLApI0WfpZTHVAtdYP52KzPHG-eKigpNueHDXUPRbk.jpg?r=c80"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">12인의 심판자</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-5" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:5,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:80091880,%22image_key%22:%22sdp%7C2802f310-ba2f-11e6-b374-0a9b267cf1aa%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="3097a9fc-5ca9-4c13-885a-6f440dacee86"
                                                  >
                                                      <a href="/watch/80091880?tctx=4%2C5%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="도쿄재판" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABb5gTOC0C5v5CkGwHVwVcnsa4EZt4T4OXMCX32mAx_ZtCngOJAZEcyNITsOvNQdj1rc2_qA4hPqBGql7Hug6eVCDroe71qqnCZY.webp?r=95e"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">도쿄재판</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-6" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:6,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:81311768,%22image_key%22:%22sdp%7C9bbca961-c80f-11ec-bf15-0e9892cee199%7Cko%7Cozx%7C81311769%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="1717e22b-ce8a-4dec-99b2-1912558b7fd4"
                                                  >
                                                      <a href="/watch/81311768?tctx=4%2C6%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="미스터 굿: 경찰인가 악당인가" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSaa5z0eG_JFGQA-Q7KlBZgbZj_iuHYCcq48qK5zVqMN3CoVui868rdVL-C8rNDciBZ3uOdLs_M7w1s2HPrcaRgljyRq6kVt2Wi32_xG839CLoMqt47hBcaJ_q-B0-no9YIC.jpg?r=7fa"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">미스터 굿: 경찰인가 악당인가</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-4-7" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-35BE0308490348-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:7,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:4,%22track_id%22:251135938,%22video_id%22:81298614,%22image_key%22:%22sdp%7Ca4836ca0-b171-11ec-a4c6-0e783e315083%7Cko%7Cozx%7C81298615%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="d06d7f6c-3762-424f-ad84-8c780bb3de4d"
                                                  >
                                                      <a href="/watch/81298614?tctx=4%2C7%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="살인을 말하다: 존 웨인 게이시 테이프" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWKOm26JlmtXXkVWlwpSgCiTC37X4-9IfcNxfdBeZ0bLeG5F5fGRT41lokP5fcePCRd-4iKn6VHqIGWn0_mxJ69ZSYZluu-jm9xitWifsqKNiCWMD5_XBUBp9KLhALedrVd.jpg?r=e77"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">살인을 말하다: 존 웨인 게이시 테이프</p></div>
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
                                      <div className="divider"></div>
                                      <div className="more-container">
                                          <button className="show-more" type="button">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-down-arrow-small">
                                                  <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                      fill="currentColor"
                                                  ></path>
                                              </svg>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="hiddenGems">
                      <h2 className="rowHeader css-0">
                          <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/hidden-gems">
                              <div className="row-header-title">오늘의 발견!</div>
                              <div className="aro-row-header more-visible">
                                  <div className="see-all-link">모두 보기</div>
                                  <div className="aro-row-chevron icon-akiraCaretRight"></div>
                              </div>
                          </a>
                      </h2>
                      <div className="rowContainer rowContainer_title_card" id="row-6">
                          <div className="ptrack-container">
                              <div className="rowContent slider-hover-trigger-layer">
                                  <div className="chunked-row-container">
                                      <div className="chunked-row four">
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-0" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:0,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:80198329,%22image_key%22:%22sdp%7Cf6ec0830-8a72-11ea-94dc-122e2f5110ad%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="cc2a21a2-c479-4a18-a356-91c2a2648f85"
                                                  >
                                                      <a href="/watch/80198329?tctx=6%2C0%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="미디어 재판" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSfXoUqXcR745EBG3m9p-HdJiulJZxQA3wRsfB612cP-QaTX0aiXfR4_Ud_qw9vdCQ4NJoPnDxb6i7BFd0K2UTF-5XZi_psmu1kaJa4hZ30UvSQmWeh3qxer4mWBJKzvmdlp.jpg?r=537"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">미디어 재판</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-1" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:1,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:81006619,%22image_key%22:%22sdp%7C2f36cd31-0207-11ec-8705-12171c35162d%7Cko%7Cozx%7C81094678%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="db487322-4088-4c29-acd4-6acbef092d9f"
                                                  >
                                                      <a href="/watch/81006619?tctx=6%2C1%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="빌리 밀리건, 24개의 인격을 가진 남자" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXajv_CQx4yl7gTiOp43C8yoHiouudSrMFpld64Lwq658EXd0NOGmzH56oglYuSb2i47Iwezbo8PKFwjdrGg9QRWe2fKhzfDN24mh-ckin4BoH_R42XeIGSxNgnlo_fpwkEO.jpg?r=d9f"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">빌리 밀리건, 24개의 인격을 가진 남자</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-2" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:2,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:81221302,%22image_key%22:%22sdp%7Cbdab7522-65c3-11ea-ae40-0e7967023ffc%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="8d1543d3-66d3-408f-9a37-ba9e864651b8"
                                                  >
                                                      <a href="/watch/81221302?tctx=6%2C2%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="재판" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe4bdi-6kTWhnaopWeOmoJRgu1kP5ZZI44AKjWb59POzOqE8H8H7CeWlmHOP4M9460XY5Y6dAO3PccPcXJXZr_ehczA-I-kPFkRdyg3VsCwssFVzWyuxol9lOjeG-fdfWDpi.jpg?r=f84"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">재판</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-3" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:3,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:81298614,%22image_key%22:%22sdp%7Ca4836ca0-b171-11ec-a4c6-0e783e315083%7Cko%7Cozx%7C81298615%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="21ca6a79-538d-4e39-a903-299e5c1afb98"
                                                  >
                                                      <a href="/watch/81298614?tctx=6%2C3%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="살인을 말하다: 존 웨인 게이시 테이프" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcWKOm26JlmtXXkVWlwpSgCiTC37X4-9IfcNxfdBeZ0bLeG5F5fGRT41lokP5fcePCRd-4iKn6VHqIGWn0_mxJ69ZSYZluu-jm9xitWifsqKNiCWMD5_XBUBp9KLhALedrVd.jpg?r=e77"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">살인을 말하다: 존 웨인 게이시 테이프</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-4" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:4,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:80201488,%22image_key%22:%22sdp%7C59661b00-f422-11e9-bac9-127957aa5a90%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="93d650bd-a30b-4703-92fd-eeb8c73d4f5a"
                                                  >
                                                      <a href="/watch/80201488?tctx=6%2C4%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="공포의 이반" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW_n2m4F_lC-TiAzqULmjDO0RNMV0SLlg5BtWKUohmXG8mt4ogowUf5bQWTXNwPsaXQjU82rBgeWFtKSDW7tpmIhpyFJS4UA08DUzf0EXRf2dWZXYqQBpyJDe_11FQ4nz32S.jpg?r=4d1"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">공포의 이반</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-5" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:5,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:81164084,%22image_key%22:%22sdp%7C3a94b161-0c6b-11ec-8bc0-0a5a08537541%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="a78db184-8c03-4967-a1d6-1f1bb251b5b1"
                                                  >
                                                      <a href="/watch/81164084?tctx=6%2C5%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="캐슬 대 캐슬" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYljljuIawfy_tliw_D66it7TdrxeDFNcD0Z7OcqXvYdsaP8QFC_5HghXDNMIELmc-Vl3ESiF64ApaBr0iYGex49y5yTTYP_Iag.webp?r=fef"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">캐슬 대 캐슬</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-6" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:6,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:80202347,%22image_key%22:%22sdp%7Cbbee5f80-1e15-11eb-814e-0e8153e79407%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="906a5ba0-35b7-4df4-9f2d-3d644b6bf31a"
                                                  >
                                                      <a href="/watch/80202347?tctx=6%2C6%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="네 번째 재판" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVTPWQ-wEMUX1MIXfjK9g809XN9fUMMMN6kvaXK7W7P_dkykNJ-YC2zqeAhuRwQzu4kkYN4eQSn0VeGWoRNTJxntCE2TjuNMfWfHodBjAN7zsD7PtmM-cr0SOXlC3jVk-pYN.jpg?r=e22"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">네 번째 재판</p></div>
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
                                          <div className="title-card-container css-0">
                                              <div id="title-card-6-7" className="title-card">
                                                  <div
                                                      className="ptrack-content"
                                                      data-ui-tracking-context="%7B%22list_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888-DB2FA33D33B32A-BCD2FF1E44_p_1660586650317%22,%22location%22:%22browseTitlesGalleryOverlay%22,%22rank%22:7,%22request_id%22:%22bc1faa4f-3091-4d3f-a8cc-3d37fac1e6d2-382624129%22,%22row%22:6,%22track_id%22:255002876,%22video_id%22:80161702,%22image_key%22:%22sdp%7Cf8815691-7683-11e9-b500-0a1f514436ec%7Cko%22,%22supp_video_id%22:1,%22lolomo_id%22:%22GPS_DB8E8808FB29F0C38565C01359E888_p_1660586650317%22,%22maturityMisMatchEdgy%22:false,%22maturityMisMatchNonEdgy%22:false,%22appView%22:%22boxArt%22,%22usePresentedEvent%22:true%7D"
                                                      data-tracking-uuid="b4c7c56c-f310-4548-bb93-1e8f41ef16db"
                                                  >
                                                      <a href="/watch/80161702?tctx=6%2C7%2C%2C%2C%2C%2C%2C%2C" role="link" aria-label="어떤 고백의 기록" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                          <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                              <img
                                                                  className="boxart-image boxart-image-in-padded-container"
                                                                  src="https://occ-0-3076-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABetSH4llmsWhdPKdBqoY6CoDvvTX4Ib1BNXfCuHuOF_uRj94Mkh0onRchYcBpCELosbc2n8R6T2De-W8Zmjl2ojQeKW1OXqneynOf_nZa3Yn8Xe8k68tYG3SDohR9SrM16QX.jpg?r=180"
                                                                  alt=""
                                                              />
                                                              <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">어떤 고백의 기록</p></div>
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
                                      <div className="divider"></div>
                                      <div className="more-container">
                                          <button className="show-more" type="button">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-down-arrow-small">
                                                  <path
                                                      fillRule="evenodd"
                                                      clipRule="evenodd"
                                                      d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z"
                                                      fill="currentColor"
                                                  ></path>
                                              </svg>
                                          </button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <Link to='/'>
                <button className="color-tertiary hasIcon round ltr-eze6o3" data-uia="modal-default-close-btn" type="button">
                  <div className="ltr-1ksxkn9">
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

export default SearchGenre;