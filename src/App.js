import './App.css';
import Home from './component/Home';
import Checkout from './component/Checkout';
import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import  ShoppingBasketIcon  from '@mui/icons-material/ShoppingBasket';
function App() {
  return (
    //큰 원에서 작은 원들이 생기는 것, 큰 원이 Router 원안에 매게체를 Routes 하나하나를 Route
    <BrowserRouter>
      <div className="App">
        <div id="header">
        <div className='header'>
            <img className='header_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />

            <div className='header_search'>
                <input className='header_searchInput' type="text" />
                <SearchIcon className='header_searchIcon'/>
            </div>
            <div className='header_nav'>
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <span className="header_optionLineTwo">로그인하기</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">돌아가기</span>
                    <span className="header_optionLineTwo">주문내역</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">안녕하세요!</span>
                    <span className="header_optionLineTwo">로그인하기</span>
                </div>
                {/* 쇼핑카트 */}
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span className="header_optionlineTwoheader_basketCount">0</span>
                </div>
            </div>
        </div>
        </div>
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
