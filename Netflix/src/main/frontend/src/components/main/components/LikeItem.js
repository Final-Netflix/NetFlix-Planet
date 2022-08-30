import React, { useState } from 'react';

const LikeItem = ({item , type}) => {
    const key = "bc61587b22cd0e5226a33d30e467d867";
    const [img, setImg]= useState('');
    const [logo, setLogo] = useState('');

    const getImage = async()=> {
        const json = await(
            await fetch(
                `https://api.themoviedb.org/3/${type}/${item}/images?api_key=${key}`
            )).json();
            setImg(json.backdrops[0].file_path);

            let temp = json.logos.find(logo => logo.iso_639_1 == 'ko' || logo.iso_639_1 == 'en' || logo.iso_639_1 == 'null');
            console.log(temp);
            if(temp != undefined){
                setLogo(temp.file_path)
            }
    }
    useState(()=>{
        getImage();
    },[])

    return (
        <div className="c1-slider-item" >
            <div className="c1-title-card-container css-0">
                <div id="title-card-0-1" className="c1-title-card">
                    <div className="c1-ptrack-content">
                        <a role="link" aria-label="{state.title}" tabIndex="0" aria-hidden="false" className="c1-slider-refocus">
                            <div className="c1-boxart-size-16x9 c1-boxart-container c1-boxart-rounded">
                                <img className='w-full rounded relative' src = {"https://image.tmdb.org/t/p/w500" + img} />
                                <img className='w-full rounded absolute max-h-[100px] bottom-[10%] w-[70%] mx-[18%]' src = {"https://image.tmdb.org/t/p/w500" + logo} /> 
                            </div>
                            <div className="c1-ptrack-content"></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LikeItem;