import React from 'react';
import '../css/Home.css'
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='container'>
                <img className='home_img' src="https://images.idgesg.net/images/article/2017/09/firetvad2-100736366-orig.jpg" alt="Home" />

                <div className="home_row">
                    <Product id="2323" title="제품1입니다" price={3000} image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOse1WeE5_v3-mmrtniFgXWmkHoy6khvDDer_oN8tP7RH8wmg_-obLD_UsnEeRxdD-Kk&usqp=CAU" rating={5}/>
                </div>
                <div className="home_row">
                    <Product />
                    <Product />
                    <Product />
                </div>
                <div className="home_row">
                    <Product />
                 </div>
            </div>
        </div>
    );
}

export default Home;