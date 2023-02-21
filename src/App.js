import './App.css';
import Home from './component/Home';
import Checkout from './component/Checkout';
import Header from './component/Header';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
function App() {
  return (
    //큰 원에서 작은 원들이 생기는 것, 큰 원이 Router 원안에 매게체를 Routes 하나하나를 Route
    <BrowserRouter>
   
        <div className="App">
        <Header></Header>
        <div id="body">
          <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/Checkout" element={<Checkout/>}></Route>
          </Routes>
          </div>
          </div>
   
      </BrowserRouter>
  );
}

export default App;
