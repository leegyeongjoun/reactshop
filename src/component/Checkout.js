import React from 'react';
import '../css/Checkout.css'

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_ad' src="images/justdoit5.png" alt="광고1" />
                <img className='checkout_ad' src="images/justdoit3.png" alt="광고2" />
                <img className='checkout_ad' src="images/nike.png" alt="광고" />
                <img className='checkout_ad' src="images/justdoit2.png" alt="광고" />
                <img className='checkout_ad' src="images/justdoit4.png" alt="광고" />
            </div>
        </div>
    );
}

export default Checkout;