import React from 'react';
import '../css/Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
                <img className='home_img' src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1602,c_limit/79e8eb84-546e-4aec-83ad-f96c1e63f7a2/%EB%82%A8%EC%84%B1-%EC%8B%A0%EB%B0%9C-%EC%9D%98%EB%A5%98-%EB%B0%8F-%EC%95%A1%EC%84%B8%EC%84%9C%EB%A6%AC.jpg" alt="Home" />

                <div className="home_row">
                    <Product id="2323" title="나이키 에어 페니 2 x stussy" price={239000} image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUAiYzGggEfVJAEI__kmlYwLZPFqDYoO0hg&usqp=CAU" rating={5}/>
                    <Product id="2323" title="조던 1 X 트래비스스캇 레트로 로우
                     " price={1300000} image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROHytAFZxvtpKrFUaGaruX0I2NBY09Txq3XL_JiBjdAm-Iu29Oh6cvLiUr6gYM-8rmPzU&usqp=CAU" rating={5}/>
                </div>
                <div className="home_row">
                    <Product id="2323" title="나이키 에어 포스 1'07 LV8 EMB" price={149000} image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXehilJ6iyMnTl5bliO_5ohseUb3fheJOPvA&usqp=CAU" rating={5}/>
                    <Product id="2323" title="에어 포스 1 07 된장 포스 운동화" price={299999} image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqnVx6ugJmY7RTBBjvaSOGO6hmRbUCduMang&usqp=CAU" rating={5}/>
                </div>
                <div className="home_row">
                <Product id="2323" title="에어 조던 11 OG 콩코드 (1995)" price={320000} image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQtbAP4cJmXcFsPAikQbvhAScQXqaKxORGww&usqp=CAU" rating={5}/>
                 </div>
            </div>
    );
}

export default Home;