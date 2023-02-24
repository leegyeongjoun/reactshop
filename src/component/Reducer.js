export const initialState = {//초창기 처음상태
    basket: [],//빈내용물
    user:null
};
//장바구니 총합
//reduce가 하는일에대한 결론 basket에 있는 item의 price를 0부터 시작해서 다 더하고 하나의 값을 반환하는 것
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0)
    // reduce 배열의 모든 요소에 대하여 지정된 콜백함수 호출
    // ex 배달을 시켰을 때 바로 음식을 만드는게 아니라 우리가 전화하는 순간에 다른 주문자 꺼를 만들 고있기 때문에 전에 주문된걸 먼저 처리하기 때문에 언제까지 기다릴 수없기 때문에 출발하기전에 연락주세요 콜백
    //0은 처음값, amount는 초기값이자 앞으로 축적될 값들이 저장 될 인수 item 현재의 아이템의 속성이 들어가는데 item.price 즉 장바구니 아이템의 가격 reudce 배열의 모든 값을 합산할 때 사용 basket 배열에서 item의 price를 합산하기 위해 reduce 사용 0은 처음값이 얼마인지 bakset[2323, 33, 22]이 있었다면 첫번째 콜백 0(amount) + 2323 두번째 콜백 2323(amount) + 33 세번째 콜백 2356(amount) + 22 하고 최종 마지막 숫자를 콜백 해줌 2378

//Reducer는 장바구니 담기같은 행동을 dispatch해준다. 컴포넌트가 데이터 레이어로 도달하는걸 디스패치라고 함 도달하면 해당 케이스에 맞는 state와 action을 추가시켜 줌
//state는 현재상태가 action에 따라 달라짐
const reducer = (state, action) => {
    // console.log(action) ADD_TO_BASKET이라는 action
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,//빈 내용물
                //...은 어떤 배열을 가져올 때 배열 전체를 가져올 수 있지만 괄호를 없애고 내용물만 가져오고 싶다면 ...
                //let state = [a,b,c]
                //const A = state;
                //const B = ...state;
                //A = [a,b,c]
                //B = a,b,c

                //리턴을 해줄건데 그대로의 내용물만 반환 
                basket: [...state.basket, action.item],
                //basket에는 기존에 있던 basket과 action에 item에 있던거를 추가해준다.
            };
            case "REMOVE_FROM_BASKET":
                // console.log(state) 선택한 제품에 id title image 등등
                // console.log(action) 행동 했을 때의 이름과 CheckoutProduct에 들어있는 id값
                // 액션을 실행 했을 때 CheckProduct에서 가져온게 action.id 완전히 일치하는 basketItem.id의 index위치를 찾아서 index에 넣어줄 것
                // index에는 완전히 일 치한 위치정보 가 있음
                //findindex는 array = [5, 12, 8, 130 ,44] 9보다 큰 곳의 위치를 알고 싶을 때 3개가 있는데 맨 처음 조건을 만족하는 곳의 index를 반환한다. 
                //const OverNine = (e) => e > 9;
                //array.findIndex(OverNine); 1 을반환
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );

                let newBasket = [...state.basket];

                if(index >= 0){
                    // splice는 (제거를 시작 할 인덱스, 몇개를 제거할것인가) newBasket로 정의 한거에 원본 배열을 지워준다. 그 후 그대로 반환하고 변경된 정보를 return값에 넣어줘야한다.
                    newBasket.splice(index, 1)
                }else{
                    console.warn(
                        '(id :' + action.id +')이 장바구니에 존재하지 않습니다'
                    )
                }

                return {
                    ...state,
                    basket: newBasket
                }
                // SET_USER 타입과authUser를 쏴준것이 action
                //  SET_USER 까지오고 반환하는 것은 맨위에 user:null을 authUser정보를 넣어줄 것이다.
                case "SET_USER":
                    return {
                        ...state,
                        user: action.user
                    }


            default:
                return state;
    }
}

export default reducer;