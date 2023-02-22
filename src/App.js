import './App.css';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Header from './component/Header';
import Login from './component/Login';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
function App() {
  return (
    //큰 원에서 작은 원들이 생기는 것, 큰 원이 Router 원안에 매게체를 Routes 하나하나를 Route
    <BrowserRouter>
      

        <Header/>
        <Routes>
            {/* <Route path="/Header" element={<Header/>}/> */}
            <Route path="/" element={<Home/>}/>
            <Route path="/Checkout" element={<Checkout/>}/>
            
            <Route path="/login" element={<Login/>}/>
        </Routes>
   
     
          
   
    </BrowserRouter>
    
  );
}

export default App;
