import React, { useEffect, useState } from 'react';
import 'css/main/recommend.css';
import RecommendList from './RecommendList';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Recommend = ({ order, classification }) => {

    const {tab} = useParams();
    const [classificationArr, setClassificationArr] = useState([]);
    const [data, setData] = useState([
        {index: 1, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbjb31i4fAWwVXAPu6txU4VkZ1ogJJBEFx3eqps0P4i0PnJczUF189oqry1JPqWIIBH3XLu4_dF2p0h7y1agdNo4qEW-lqJxW7g.webp?r=393', title: '호텔 델루나'},
        {index: 2, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSNrPz-rc4Xg_CEpc0ztclD1N0TvXsGPzwBsj65CTtS9nJFyz3wLGuquk0tegP4v1ra-6Hb_SiBmMJSGVVyqqMdneGNnoVKHT3M.webp?r=537', title: '달의 연인 - 보보경심 려'},
        {index: 3, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTEzlWIbxt3h7pY0uASRg5VOxZsNdxUODumbo8GL7DqSk1uBQuSgsFaGcRKajoJX29Yvo3YjPJhqQO1h5QKV8zV8rwe-IgcpgUA.webp?r=fe1', title: '도깨비'},
        {index: 4, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfXwsbC4qrqr91-9X4yZs5xhIqTwKM24IXaJtyilzZEuBdvzD-EE7Ww1mI__TPYUSVnLDmVsh-ZLkGDpgCDrju-zWb_2JcXG8Lw.webp?r=9a9',  title: '또! 오해영'},
        {index: 5, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABapvsiVhC-7LHetIzt3D1TubDJtAf01wM70BMqucWgAlTzOhjiD7UBBC5UUxFUl24NyIDa3L4zI6xNNhF5JdxccYUVbV7ArnK41Ugel28pQCoY_2e5P5_bKMx7LNHYUflEW2.jpg?r=41c', title: '안나라수마나라'},
        {index: 6, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdtZOLE1k_sdjhmAL54l6sYdloEjZXf7XesmgDAmqkwu74SAkLVh4F8Vd0WtcVOT1D2LPgNo61mlN8gz51r2OF6xoqOQIjb5x3E.webp?r=64a', title: '멜로가 체질'},
        {index: 7, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWZyGHcddTcliWKU0ewGrPpUinxNl3UBULVwAYhBy-NT7d8YDDuVIh4PzZBWKkqAQqibxLqOhnJDwtBe0eV69vDEuCXGakex2ig.webp?r=af6', title: '나의 아저씨'},
        {index: 8, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABQucOgsd40vEzoz_mN-PkuOv0SJ0qdoBuMgGdniRSR-NTXCtmZ_THl1K5ERDFfVBkSR972m-FIDXpBjjPgPyBebMQyTa0BRxUro.webp?r=a0c', title: '검색어를 입력하세요 WWW'},
        {index: 9, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbg-b8qBz8AF2RNhjkJ3fR_xOeLaqu8C5Um3wVKR9IXpIcD88PHfLE5i2sTeH52khUzKNK6pXOS9Y0tdhvbg3x1JeM_y3XrYYEc.webp?r=f17', title: '슬기로운 의사생활'},
        {index: 10, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeecENCeq53KcDyrs272CH2bpNAq_GIoChKKkIW4R3klP-5YzED-65f54R1khCoIkr3ihFj1dq7r1AYuQfQdOHIIRQOF8r_V_mc.webp?r=2f9', title: '슬기로운 감빵생활'},
        {index: 11, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTteKZUQDeuXHG1ZLIKjXjmA1d6Acl6RxjKpbKEa7zf15tK-HFDJ-GfRuHjTO97XkIOAQS17EOxDPaTD0WUj3Ri_AA7P7mKS4JhdmeR5n5g3b-pR7ej1vtFOlP-HmlM_3gHE.jpg?r=f2e', title: '오징어 게임'},
        {index: 12, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABchnRC00CKJA4pvS7pUkNooYYf_ULJUORyOzxnl5vi1rZGrvMztDFxcqPDAxZ-tYmltFOycArfnwFrJ2Yqx-MPDh3-1CXhWR-NKa7QrYk45jI_0WA-gQmtoeY7aVUuS6OLNY.jpg?r=6da', title: '소녀 심판'},
        {index: 13, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaWLU2gp3XJhQyp1bXxU2_gfvK6o3hXEa_j0ELtXCXJX4430aJdA34ci1c8gTnsR1t1AwcEIj1Ww98TgmYiQUEVdbLzUzjmrpGM.webp?r=d96', title: '경이로운 소문'},
        {index: 14, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXMq-PqTkCP5JXMkG5PbE3EXKxbOVLx9sOAF8UqgqvoQERcI0CAtSF-D_OZqBJtW0Fu2bAyw5B_-TOMjIoCuOBMp210nvg0XQZI.webp?r=0b6',  title: '사랑의 불시착'},
        {index: 15, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZyPaHlmTG9GKCrPt9_Vvuy9Wor7HdZLhKhP8uQrqiOzRRyjq4YX2LyD78jiE0iQgkl9WZsFZLEtl1-omfDQInSUYg_6F-QmRV5Q6njVpC9wlpnRd4VO_GN1BQQyS2-VMR3fOA-X6Q.webp?r=6d6', title: '아는 형님'},
        {index: 16, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABcp1v-0zI-YtEYlBh0uzhb-w3vJ64w3tgZbqhESrAlkvJXgfWWukfJ16mXI9MhSK9y0lHbxnOdHqKTlWp1EWAPZLGTMvI73MkoE.webp?r=0c4', title: '쿠로코의 농구'},
        {index: 17, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaR6Lr0iUxbdBelo-owW1ReHa2QZpLbtMUD09bvbHHeHgGZ_sPmmPQqEdtrWM53UEZpz0nu8TMDPTk1ktFuGypI0LLVkWRuI9m7diPkruFwszH87uB8lKiyLwb6sgCaSKLbT.jpg?r=81c', title: '마이네임'},
        {index: 18, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdxnRc88v0v5FU95Lz7UJzZgzusQ2-wmX3mbR9GM6eyaNPuMkbIE8XvqP5TSGo9OWQII7vkCJGeSiq5gqtCTlE9rUG8vXnQIT8ToJ2Y8UOu8xK_tqlEIqV86ucHeDwtBnbzr.jpg?r=401', title: '지금 우리 학교는'},
        {index: 19, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWVUc950RnbJx-WCJvS3P9jeumKbbd4bhTBnnVAYW7LHLpHl8-KqB19jIpRswUutpyfVdRX3e3gYbwYBLKqLwNQDtdif_B28ACo.webp?r=e63', title: '비밀의 숲'},
        {index: 20, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeXIZFOD0m_haycmR7Yx_aFq7lTixzsH9d579ZFOcbcO6Es6_EAVMRvkKTP6bvF1OCA-YwR1bn-eZ28jHUuYcsg8gqXVJT1w_LY.webp?r=8e4', title: '미생'},
        {index: 21, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUGMWQlRQhulnvNhQ6w5pS648uzvDrUFSLx9hU2uo4NcBVbP1YFf9kmi58bJBBYY-Fk327tBkjk9f6JxdJHla_NxWWEK22fX_rQxbTbWPSXtBfN5g9z_WhuD3nGh6DQ55K_B.jpg?r=7e8', title: 'D.P.'},
        {index: 22, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABchfWQqsexPgVJ-y8mpPr0F4D2VOTB5SpTR3GCVJ4BYpMO6LePzAVEscPFTHRP7w8s1SYDf0JZRTF1q0GubIHIReHIWsAcC8QF0QKQut7PErhADsT_R_N1LWeYWsZFGVbe7Aj_O6cg.webp?r=d15', title: '금쪽같은 내 새끼'},
        {index: 23, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTWRRUVNdeUq7N7MR1Yy5tRYxzjUGFS9tUV6Y5FdyNTKqWh_psKOWNugvxp3dijnVmi4OSjkoCP0dWFc-id-AXOg1dpiV-B_AAI.webp?r=016', title: '시그널'},
        {index: 24, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABaXKUP5sRiyQMTIRLx1vr8Kl4VT6Q_Iq1iCpeomrIRxabrlJOiDPaW_YBYBIOSHEwrYjjV26UrAGCNc6LBwSXgNOQnDXbJ2vT4A.webp?r=37f',  title: '부부의 세계'},
        {index: 25, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbCHrz4U_xYQupQZaY4flpCUTJ5b15buODxpGQvAYl3lsKKz0ZR8zUl3VTUhiUlH_GVrhjhSTM9suSk_3ud4O3WQ5iHKfWdtCduozxNQ_9BDCRB4XwOffHtJ1y25hmnhQUFdAe3mV1Ii1POWcA2CvJZf4h-_yEzktanSCwzj6iJ7XcO-j65VWl-ZZ3VsRe36NKuR.webp?r=61d', title: '이상한 변호사 우영우'},
        {index: 26, src: 'https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXGpD22yF1SNnCrbxeswY66A5-LovItxuP7FCjt5C2r7tMaYGkJH8QhZCAlckuMWBGCyVPOIGcX8KFGghf5Y3j8a1WJ5mfik2wU.webp?r=dd4', title: '이태원 클라쓰'},
        {index: 27, src: 'https://occ-0-2219-993.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABddHGyjBVmHxil6KCBchRlaarCkf79FrveWhnYrXaAHC_-4dZG9WnltjY27sU4sHcJg4f2wXyLrYe4OF9DxKNQEmCnu2jyKY01k.webp?r=587', title: '미스터 션샤인'},
        {index: 28, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSCEw_utKNaXmEI9jFNaouI3IL1_Ru_gQ3NEd5e3vTFxxb7q55DmSosXXFxTIKO1EfTHa827_17DCU2c8TaGhOdSJFkgK3vltSxsObFAZiy84LtC0yc94ZSxrgdX_uaJ-y02.jpg?r=8e2', title: '크라임 씬'},
        {index: 29, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbvROc2FQNPyM3V_dkoR53QS-jspoAN8tbPRDGVog5D_a9qpRo_wZGfRgQzNL2N2QFYIHIlYJmJFCoGc69Fl3w85jBHxggfumrK-lqUAt1fbhVzR1A_VoBZ9jQoeoLh9bZqg.jpg?r=773', title: '혹시 내게 무슨 일이 생기면'},
        {index: 30, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUAY_cVKCDpIlmnfd9xB45mzXaZhTwCTDhOGy6D41YXDNSrSIMFqgb2ALLVOL3PXKOr1MEE94rm7d7ySpB6tQ2NwUmoGGF4ijYY.webp?r=831', title: '그 해 우리는'},
        {index: 31, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWTByGXWzdN1VguHgoe0Qi-WxS9epLbQV8W8nXGxvmRgddEfjGmiJvZhi4XOqi7nar4FJLoCac5qMEkZzoS18W9ccjc4IpjAdOE.webp?r=bd1', title: '리틀 포레스트'},
        {index: 32, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVO_CvkquQxuDr5QAkeDcVvNzNwGIjGnbC1LM37Eb1P8bCqpIVVLYQ8eCXdeXo-PjVkCzAwP9ooAZBqxJktmAAOfe68syXkXMB0.webp?r=8a6', title: '모가디슈'},
        {index: 33, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABf1lWPL8OVq0-Ps4BRaq3JZfNBNxnW0k750mkzvT226brxuuIII3zRDUBIS3Am98QAXhmNcfUIWBMl9Sskd3SR671k-mvvAnJ1g.webp?r=a9e', title: '힘쎈 여자 도봉순'},
        {index: 34, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeQjbd0ypkTTq6eupxXzhlaInQfTNc_OZd2WflFcajPk9FYZmvroNKoSQBiFaITmoKlDRnIMuS0JH5D2YXimLmIsFjdBZ2O8Q08.webp?r=340',  title: '스물다섯 스물하나'},
        {index: 35, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeHcfk-sF1u1fBv_zPcERIOs4eOMLdBpCNj_eTVftuqclDa8Pox_YA7jvyUYdmEZJj5u9T_S4yMJxKVH0UZS6E2AJJ1NwErlj3E.webp?r=eea', title: '뷰티 인사이드'},
        {index: 36, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUHUOF4tb2h3DCQz6ZA5rjKAcTgs8jIyDVu5yO9KyZiHegxuNpImb1jzwD-uJ8VY02G7rDsRIfZZCQUhH5ZuPkeNjCPZR00zlfQ.webp?r=a45', title: '별에서 온 그대'},
        {index: 37, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRbCX22dQ8-bPfmiUM5qhb9PG84gwc4T1tjrc6gCZk5ag9lx2ft_WPWXsoBidp9K7Q8InoTckdUR5yLUVOczd5zesHVJoJZ2wDE.webp?r=c58', title: '우리들의 블루스'},
        {index: 38, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYSXuurebkZC9YDhyi9eF5OFifigCYZWqbevhJ3weCWptUGS1IIRgcVXsmLVpt-jwoz9wG2lwPRQ9NHdU7N8wVZ09N_y3ZO-rxM.webp?r=e4c', title: 'SKY 캐슬'},
        {index: 39, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWtOXCugJ-96UQcdPTW46K_cZ5Zot7dKh79xscqUG_sshZXjUE-lRDJVApK5vfzt-41ARLMPsgn2ynMQdfmgmR-L2pdsUBg-QqzEpgTtv_rTf_FBZkA11c4FA3hTkVvxUdzbaSl6y6-cr6j2uLKhGqIJkXvcOTUEDTjMwAvCBprKil3dkSJWBhuvOLyIMgN7Cmor.webp?r=d99', title: '환혼'},
        {index: 40, src: 'https://occ-0-993-2218.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZn-8w0_tRX2HarOW3FtCNu1YdWxhVY0_p3QKNe5u7FLSnjCtN_lEQyJZn5ogTYwD7mjnGmiOYFod0AgfyQGRa0bA6vmAHOtX5A.webp?r=4c3', title: '마음의 소리'},
    ]);
    const [classificationName, setClassificationName] = useState('');
    const [videoType, setVideoType] = useState('movie');
    
    const KEY = "bc61587b22cd0e5226a33d30e467d867";
    
    let search_url;
    let videoData;

    const goNextSlide = () => {
        document.getElementsByClassName("slick-next")[order].click();
    }
    
    const goPrevSlide = () => {
        document.getElementsByClassName("slick-prev")[order].click();
    }

    const getData = async () => {
        const json1 = await(
            await fetch(`${search_url}&page=1`)
        ).json();
        const json2 = await(
            await fetch(`${search_url}&page=2`)
        ).json();
        setData(json1.results.concat(json2.results));
    }

    const getClassifications = () => {
        axios({
            url: '/getClassifications',
        }).then(res => {
            tab === undefined && setClassificationArr(res.data);
            tab === 'series'  && setClassificationArr(res.data.filter(data => data.classification_type === 'tv'));
            tab === 'new'     && setClassificationArr(res.data.filter(data => data.classification_type === 'new'));
            tab === 'movie'   && setClassificationArr(res.data.filter(data => data.classification_type === 'movie'));
            // tab === undefined && (classificationArr = res.data);
            // tab === 'series'  && (classificationArr = res.data.filter(data => data.classification_type === 'tv'));
            // tab === 'new'     && (classificationArr = res.data.filter(data => data.classification_type === 'new'));
            // tab === 'movie'   && (classificationArr = res.data.filter(data => data.classification_type === 'movie'));
        });
    };

    useEffect(() => {
        if(classificationArr.length != 0){
            setClassificationName(classificationArr[classification].classification_name);
            search_url = classificationArr[classification].search_url;
            if(search_url.includes('tv')) {  setVideoType('tv') }
            getData();
        }
    }, [classificationArr]);

    useEffect(() => {
        getClassifications();
    }, []);
    
    return (
        <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="genre">
            <h2 className="rowHeader css-0">
                <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/genre/81434743">
                    <div className="row-header-title">{ classificationName }</div>
                    <div className="aro-row-header more-visible">
                        <div className="see-all-link">모두 보기</div>
                        <div className="aro-row-chevron icon-akiraCaretRight"></div>
                    </div>
                </a>
            </h2>
            <div className="rowContainer rowContainer_title_card" id="row-2">
                <div className="ptrack-container">
                    <div className="rowContent slider-hover-trigger-layer">
                        <div className="slider" style={{ padding: '0 3.2%'}}>
                            <span className="handle handlePrev active" onClick={ goPrevSlide } tabIndex="0" role="button" aria-label="이전 콘텐츠 보기"><b className="indicator-icon icon-leftCaret"></b></span>
                            <RecommendList data={ data } setData={ setData } videoType={ videoType }/>
                            <span className="handle handleNext active" onClick={ goNextSlide } tabIndex="0" role="button" aria-label="콘텐츠 더 보기"><b className="indicator-icon icon-rightCaret"></b></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommend;