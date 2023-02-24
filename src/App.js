import './App.css';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Header from './component/Header';
import Login from './component/Login';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './component/StateProvider';
import Pay from './component/Pay';
function App() {
  const [{}, dispatch] = useStateValue();
  // ㅁ,ㅅ ㅅ은 deps인데 없다가 변화할 때마다 랜더링을 해줌 []하나만 있으면 한번만 랜더링 해준다. [user]가 있다면 user의 변화에 따라 ㅁ이 실행됨 즉 동기화
  useEffect(()=>{
    // 로그인한 사람이 변화가 생겼을 때
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if(authUser) {
        //로그인상태
        dispatch({//쏜다 타임에 어떤 유저인지 reduce에
          type:'SET_USER',
          user: authUser,
        })
      }else{
        //로그아웃상태
        dispatch({//유저가 아니니까 null을 작성 layer전역에 쏴주는 것
          type:'SET_USER',
          user: null,
        })
      }
    })
  },[])
  return (
    //큰 원에서 작은 원들이 생기는 것, 큰 원이 Router 원안에 매게체를 Routes 하나하나를 Route
    <BrowserRouter>
      

        <Header/>
        <Routes>
            {/* <Route path="/Header" element={<Header/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            <Route path='/pay' element={<Pay/>}></Route>
            
            <Route path="/login" element={<Login/>}/>
        </Routes>

   
     
          
   
    </BrowserRouter>
    
  );
}

export default App;
