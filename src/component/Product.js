import React from 'react';
import '../css/Product.css'
import { useStateValue } from './StateProvider';
// 상위컴포넌트에서 자식컴포넌트로 정보를 주는 것
function Product({id, title, image, price, rating}) {
    // {basket} 정보를 받음, dispatch 정보를 쏨
    const[{ basket }, dispatch] = useStateValue();
const addToBasket = () => {
    // 우리가 할 행동을 쏴줌
    // action과 같음
    // Reducer에 쏴 줌 switch로 ADD_TO_BASKET 확인을 함 return 시작
    dispatch({
        type:"ADD_TO_BASKET",
        item:{//명목들 : 데이터들
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        },
    })
};

console.log("장바구니 확인", basket);
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
                        
                        Array(rating)//rating의 값이 정수여야함
                            .fill()
                            .map((_,i) => (
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>장바구니 담기</button>
          
        </div>
    );
}

export default Product;