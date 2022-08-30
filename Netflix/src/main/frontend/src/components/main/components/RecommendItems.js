import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecommendItems = ({ item, videoType, genres }) => {

    const navigate = useNavigate();
    const [backdrop, setBackdrop] = useState('');
    const [logo, setLogo] = useState('');
    const [loading, setLoading] = useState(true);

    const KEY = "bc61587b22cd0e5226a33d30e467d867";

    let imageURL;
    if(videoType === 'tv') { imageURL = `https://api.themoviedb.org/3/tv/${ item.id }/`     }
    else                   { imageURL = `https://api.themoviedb.org/3/movie/${ item.id }/`  }

    const getImage = async() => {
        if(item.id != undefined && backdrop === ''){
            const json = await(
                await fetch(
                    `${ imageURL }images?api_key=${ KEY }`
            )).json();
            if(json.backdrops[0] != undefined){
                setBackdrop(json.backdrops[0].file_path);
            }
            let temp = json.logos.find((logo) => logo.iso_639_1 === "ko");
            if(temp === undefined){
                temp = json.logos.find((logo) => logo.iso_639_1 === "en" || logo.iso_639_1 === null)
            }
            if(temp != undefined){
                setLogo(temp.file_path);
            }
        }
    }

    // const getKorGenre = () => {
        // let genreTemp = [];
        // if(item.genres_ids != undefined){
        //     item.genre_ids.map((genre_id) => genreTemp = genreTemp.concat(genres.find((genre) =>  genre.id === genre_id )));
        //     setKorGenre(genreTemp);
        // }
    // }

    const goDetailPage = () => {
        if(videoType === 'movie'){
            navigate('/detailMain', {state : { movieId: item.id }});
        }
        else{
            navigate('/detailMain', {state : { tvId: item.id }});
        }
    }

    useEffect(() => {
        getImage();
        // getKorGenre();
        setLoading(false);
    }, []);

    return (
        <div className="slider-item px-[0.2vw]" style={{width: '100%'}}>
            {
                loading || 
                <>
                <input type='hidden' className='video_id' value={ item.id || '' }></input>
                <input type='hidden' className='video_type' value={ videoType || '' }></input>
                <div className="title-card-container css-0 hover:shadow-md hover:drop-shadow-lg hover:shadow-black">
                    <div id="title-card-2-0" className="title-card">
                        <div className="ptrack-content" >
                            <a href="#" role="link" aria-label="{ item.title }" tabIndex="0" aria-hidden="false" className="slider-refocus rounded">
                                <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                    {
                                        (backdrop === '' || backdrop === undefined) ?
                                        <img className="boxart-image boxart-image-in-padded-container" src={ "https://image.tmdb.org/t/p/w500" + item.poster_path } alt={ '' } /> :
                                        <img className="boxart-image boxart-image-in-padded-container" src={ "https://image.tmdb.org/t/p/w500" + backdrop } alt={ item.title || item.name }/>
                                    }
                                    { 
                                        (logo === undefined || logo === '') ?
                                        <div className='top-logo-image px-[40px] absolute bottom-[10%] w-full text-center font-extrabold text-2xl overflow-hidden'>{ item.name }</div> : 
                                        <img className="top-logo-image px-[40px] max-h-32 overflow-hidden absolute bottom-[10%]" src={ "https://image.tmdb.org/t/p/w500" + logo } alt=''/>
                                    }
                                    <div className="fallback-text-container" aria-hidden="true"><p className="fallback-text">{ item.title || item.name }</p></div>
                                </div>
                                <div className='c1-preview-modal relative w-full rounded pb-[5px] bg-[#141414] z-[20]' style={{ position: 'absolute'}}>
                                    <div className="buttonControls_container items-center flex mb-[1em] mx-2 min-h-[2em] mt-[1em] justify-between">
                                        <div className='flex'>
                                            <div className="ltr_toolTipWrapper m-[0.25em] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]">
                                                <div className="ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]">
                                                    <button className="color_supplementary_play max-h-[36px] max-w-[36px] min-h-[20px] min-w-[20px] hover:bg-[#e5e7eb] bg-white text-black border-white border-[1px] border-solid pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible" aria-label="재생">
                                                        <div className="ltr_iconWrap_iconWrapOverride_Button leading-0 block text-black cursor-pointer select-none break-words whitespace-nowrap">
                                                            <div className="small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-black cursor-pointer select-none break-words whitespace-nowrap">
                                                                <svg viewBox="0 0 24 24" fill="none" width="24" height="24" xmlns="http://www.w3.org/2000/svg" className="overflow-hidden h-[100%] w-[100%]">
                                                                    <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="ltr_toolTipWrapper m-[0.25em] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]">
                                                <div className="ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]">
                                                    <button className="color_supplementary max-h-[36px] max-w-[36px] min-h-[20px] min-w-[20px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[1px] border-solid text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible" aria-label="내가 찜한 콘텐츠에 추가">
                                                        <div className="ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                            <div className="small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                    className="Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M11 2V11H2V13H11V22H13V13H22V11H13V2H11Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="ltr_componentStyles m-[0.25em] relative z-[1] cursor-pointer text-[#fff] text-[16px] leading-[1.4]">
                                                    <button className="color_supplementary max-h-[36px] max-w-[36px] min-h-[20px] min-w-[20px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[1px] text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible">
                                                        <div className="ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                            <div className="small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                    className="Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                                    <path fillRule="evenodd" clipRule="evenodd" fill="currentColor" d="M10.696 8.7732C10.8947 8.45534 11 8.08804 11 7.7132V4H11.8377C12.7152 4 13.4285 4.55292 13.6073 5.31126C13.8233 6.22758 14 7.22716 14 8C14 8.58478 13.8976 9.1919 13.7536 9.75039L13.4315 11H14.7219H17.5C18.3284 11 19 11.6716 19 12.5C19 12.5929 18.9917 12.6831 18.976 12.7699L18.8955 13.2149L19.1764 13.5692C19.3794 13.8252 19.5 14.1471 19.5 14.5C19.5 14.8529 19.3794 15.1748 19.1764 15.4308L18.8955 15.7851L18.976 16.2301C18.9917 16.317 19 16.4071 19 16.5C19 16.9901 18.766 17.4253 18.3994 17.7006L18 18.0006L18 18.5001C17.9999 19.3285 17.3284 20 16.5 20H14H13H12.6228C11.6554 20 10.6944 19.844 9.77673 19.5382L8.28366 19.0405C7.22457 18.6874 6.11617 18.5051 5 18.5001V13.7543L7.03558 13.1727C7.74927 12.9688 8.36203 12.5076 8.75542 11.8781L10.696 8.7732ZM10.5 2C9.67157 2 9 2.67157 9 3.5V7.7132L7.05942 10.8181C6.92829 11.0279 6.72404 11.1817 6.48614 11.2497L4.45056 11.8313C3.59195 12.0766 3 12.8613 3 13.7543V18.5468C3 19.6255 3.87447 20.5 4.95319 20.5C5.87021 20.5 6.78124 20.6478 7.65121 20.9378L9.14427 21.4355C10.2659 21.8094 11.4405 22 12.6228 22H13H14H16.5C18.2692 22 19.7319 20.6873 19.967 18.9827C20.6039 18.3496 21 17.4709 21 16.5C21 16.4369 20.9983 16.3742 20.995 16.3118C21.3153 15.783 21.5 15.1622 21.5 14.5C21.5 13.8378 21.3153 13.217 20.995 12.6883C20.9983 12.6258 21 12.5631 21 12.5C21 10.567 19.433 9 17.5 9H15.9338C15.9752 8.6755 16 8.33974 16 8C16 6.98865 15.7788 5.80611 15.5539 4.85235C15.1401 3.09702 13.5428 2 11.8377 2H10.5Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="ltr_toolTipWrapper m-[0.25em] relative block cursor-pointer text-[#fff] text-[16px] leading-[1.4]" onClick={ goDetailPage }>
                                                <div className="ptrack_content block cursor-pointer text-[#fff] text-[16px] leading-[1.4]">
                                                    <button className="color_supplementary max-h-[36px] max-w-[36px] min-h-[20px] min-w-[20px] bg-[rgba(42,42,42,.6)] border-[hsla(0,0%,100%,.5)] border-[1px] border-solid text-white pl-[0.8rem] pr-[0.8rem] items-center appearance-none cursor-pointer flex justify-center opacity-[1] p-[0.8rem] relative select-none will-change-[background-color,_color] break-words whitespace-nowrap rounded-[50%] overflow-visible" aria-label="내가 찜한 콘텐츠에 추가">
                                                        <div className="ltr_iconWrap_iconWrapOverride_Button leading-0 block text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                            <div className="small_ltr_baseCss h-[1.8rem] w-[1.8rem] flex items-center justify-center leading-0 text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                                    className="Hawkins_Icon_Standard w-auto h-[100%] overflow-hidden text-white cursor-pointer select-none break-words whitespace-nowrap">
                                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="detailMetadata_info my-[0.8em] mx-4 block text-[#fff] text-[6px] leading-[1.4]">
                                        <div className="block text-[#fff] text-[6px] leading-[1.4]">
                                            <div className="videoMetadata_container items-center text-[#fff] flex flex-wrap justify-start text-[6px] leading-[1.4]">
                                                <div className="videoMetadata_first_line mt-[0.25em] mr-[1em] mb-[0.25em] ml-0 max-w-[100%] block text-[#fff] text-[6px] leading-[1.4]">
                                                    <span className="match_score_wrapper text-[#fff] text-[6px] leading-[1.4]">
                                                        <div className="show_match_score flex text-[#fff] text-[6px] leading-[1.4]">
                                                            <span className="match_score text-[#46d369] whitespace-[unset] max-w-[300px] opacity-[1] inline-block font-bold text-[6px] leading-[1.4]">평점: { item.vote_average }</span>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div className="videoMetadata_second_line items-center flex flex-wrap text-[#fff] text-[6px] leading-[1.4]">
                                                    <span className="maturity_rating inline-block text-[#fff] text-[6px] leading-[1.4] cursor-pointer">
                                                        <span className="maturity_number border-[1px] border-solid border-[hsla(0,0%,100%,.4)] font-sans overflow-hidden py-0 px-[0.4em] text-ellipsis uppercase whitespace-nowrap text-[#fff] text-[6px] leading-[1.4] cursor-pointer">KO</span>
                                                    </span>
                                                    <span className="duration whitespace-nowrap mr-[0.5em] text-[#fff] ml-2 text-[6px] leading-[1.4]">추천수: { item.vote_count }</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='c1-preview-keyword mx-4 mt-[0.8em] mb-[0.5vw]'>
                                        
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="bob-container"></div>
                    </div>
                </div></>
            }
        </div>
    );
};

export default RecommendItems;