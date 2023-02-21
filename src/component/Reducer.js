export const initialState = {//초창기 처음상태
    basket: [],//빈내용물
}
//Reducer는 장바구니 담기같은 행동을 dispatch해준다. 컴포넌트가 데이터 레이어로 도달하는걸 디스패치라고 함 도달하면 해당 케이스에 맞는 state와 action을 추가시켜 줌
//state는 현재상태가 action에 따라 달라짐
const reducer = (state, action) => {

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
        
            default:
                return state;
    }
}

export default reducer;