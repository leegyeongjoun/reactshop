import React from 'react';
import '../css/SubTotal.css'
import { useStateValue } from './StateProvider';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';
import { useNavigate } from 'react-router-dom';
import Pay from './Pay';
function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value )=> (
                <>
                <p>

                    총액 ({basket.length} items) : <strong> {value} 원</strong>
                </p>

                    <small className='subtotal_gift'>
                        <input type="checkbox" /> 체크박스입니다.
                    </small>
                </>
            )}
            decimalScale={2}//소숫점자리수
            value={getBasketTotal(basket)}//얼마를 나타낼지
            displayType={"text"}//형식
            thousandSeparator={true}
            prefix={"₩"}
            />
            <button onClick={e => navigate('/pay')}>결제하기</button>

        </div>
    );
}

export default SubTotal;