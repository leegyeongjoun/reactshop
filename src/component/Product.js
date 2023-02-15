import React from 'react';
import '../css/Product.css'

// 상위컴포넌트에서 자식컴포넌트로 정보를 주는 것
function Product({id, title, image, price, rating}) {
    return (
        <div className='product'>
            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>가격</small>
                    <strong>{price}</strong>
                    <small>원</small>
                </p>
                
                <div className="product_rating">
                    {
                        // rating안의 크기만큼의 Array가 생성되는데, 이건 [] 이런배열이 생성됨 fill메소드에 의해 채워지는데{undefined,undefined,undefined,undefined,undefined} map함수는 새로운 배열을 반복해서 만들어준다.undefined를 안에 내용을 바꿔줌
                        
                        Array(rating)
                            .fill()
                            .map(() => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button>장바구니 담기</button>
            {/* https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjOse1WeE5_v3-mmrtniFgXWmkHoy6khvDDer_oN8tP7RH8wmg_-obLD_UsnEeRxdD-Kk&usqp=CAU */}
        </div>
    );
}

export default Product;