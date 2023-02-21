import React, {createContext, useContext, useReducer} from "react";
    // context를 만들어서 statecontext에 넣을것
    // 데이터 레이어를 만든다.
    export const StateContext = createContext();



// 앱을 래핑하고, 데이터 레이어를 제공한다
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//데이터 레이어로부터 정보룰 가져오는 메소드 설정
// 매개체역할
// 임포트 해줘야지만 reudcer를 포함한 모든것들의 정보 전달 가능
export const useStateValue = () => useContext(StateContext);

// Context란 컴포넌트 단계마다 일일히 props 넘겨주지 않아도 데이터 레이어를 컴포넌트 트리 자체에 제공 할 수있음 전역적 데이터를 공유할 때 효율적