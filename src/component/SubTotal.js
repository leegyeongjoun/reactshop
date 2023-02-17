import React from 'react';
import '../css/SubTotal.css'
import CurrencyFormat from 'react-currency-format';
function SubTotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat 
            renderText={(value )=> (
                <>
                <p>

                    총액 (0 items) : <strong> 0원</strong>
                </p>

                    <small className='subtotal_gift'>
                        <input type="checkbox" /> 체크박스입니다.
                    </small>
                </>
            )}
            decimalScale={2}//소숫점자리수
            value={0}//얼마를 나타낼지
            displayType={"text"}//형식
            thousandSeparator={true}
            prefix={"₩"}
            />
            <button>결제하기</button>

        </div>
    );
}

export default SubTotal;