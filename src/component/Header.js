import React from 'react';
import SearchIcon from '@mui/icons-material/Search'
import  ShoppingBasketIcon  from '@mui/icons-material/ShoppingBasket';
import {Link, useLocation} from 'react-router-dom';
import '../css/Header.css'
import { useStateValue } from './StateProvider';
import Login from './Login';
import { auth } from '../firebase';
function Header() {
    const [{basket, user}, dispatch] = useStateValue();
    const handleAuthentication =() =>{
        if(user){
            auth.signOut();
        }
    }
    const locationNow = useLocation();

    if (locationNow.pathname === "/login") return null;
    return (
        <div className='header'>
        <Link to="/">
        <img className='header_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2DSVwiheMiImQLjUKJc96JHzzeKbw_cWPxQ&usqp=CAU" alt="logo" />
        </Link>
        <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <div className="header_option">
                <span className="header_optionLineOne">{!user ?  "게스트":user.email}</span>
                <Link to={!user && '/login'} className="homelogin">
                <span onClick={handleAuthentication} className="header_optionLineTwo">{user ? '로그아웃' : '로그인'}</span>
                </Link>
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">돌아가기</span>
                <span className="header_optionLineTwo">주문내역</span>
            </div>
            {/* 쇼핑카트 */}
            <Link to="/checkout">
                <div className='header_optionBasket'>
                    <ShoppingBasketIcon/>
                    <span   className="header_optionlineTwoheader_basketCount ">{basket?.length}</span>
                    {/* 옵셔널 체이닝 bakset값이 null undefined일 때 한 번더 검증을하여 에러 말고 undefind를 반환 */}
                </div>
            </Link>
        </div>
    </div>
    );
  }


export default Header