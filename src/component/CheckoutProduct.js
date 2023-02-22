import React from 'react';
import '../css/CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{basket}, dispatch]=useStateValue();
    const removeFromBasket = ()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return (
        <div className='checkoutProduct'>
           <img className='checkoutProduct_image' src={image} alt="" />

           <div className='checkoutProduct_info'>
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    <small>₩</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                <div className="checkoutProduct_rating">
                    {
                        // rating안의 크기만큼의 Array가 생성되는데, 이건 [] 이런배열이 생성됨 fill메소드에 의해 채워지는데{undefined,undefined,undefined,undefined,undefined} map함수는 새로운 배열을 반복해서 만들어준다.undefined를 안에 내용을 바꿔줌
                        
                        Array(rating)//rating의 값이 정수여야함
                            .fill()
                            .map((_,i) => (
                                <p>⭐</p>
                            ))
                    }
                    
                </div>
                <button onClick={removeFromBasket}>장바구니에서 제거하기</button>
           </div>
        </div>
    );
}

export default CheckoutProduct;