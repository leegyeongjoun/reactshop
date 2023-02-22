import React from 'react';
import '../css/Checkout.css'
import SubTotal from './SubTotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
function Checkout() {
    //CheckoutProudt에 이미지 가격 등등 을 넣어줘야하는데 REDUCE에서 가져오면 됨
   const [{basket}, dispatch] = useStateValue(); 
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="images/checkoutad.png" alt="광고" />
                <div>
                    <h2 className='checkout_title'>
                        장바구니입니다.
                    </h2>
                    {/* 맵핑 해야함 새로운 배열 생성 */}
                    {/* basket에 저장된 정보들 item */}
                    {basket.map(item => (
                        <CheckoutProduct id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>
                    ))}
                    <CheckoutProduct/>
                    <CheckoutProduct/>
                    <CheckoutProduct/>
                </div>
            </div>
            <div className='checkout_right'>
                <SubTotal />
            </div>
        </div>
    );
}

export default Checkout;