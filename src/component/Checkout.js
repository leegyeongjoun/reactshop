import React from 'react';
import '../css/Checkout.css'
import SubTotal from './SubTotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="images/checkoutad.png" alt="광고" />
                <div>
                    <h2 className='checkout_title'>
                        장바구니입니다.
                    </h2>
                    {/* 장바구니아이템들 */}
                    {/* 장바구니아이템들 */}
                    {/* 장바구니아이템들 */}
                    {/* 장바구니아이템들 */}
                </div>
            </div>
            <div className='checkout_right'>
                <SubTotal />
            </div>
        </div>
    );
}

export default Checkout;