import { NavLink, useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';
import './header.css';
import logoWhite from '../assets/images/logo-white.png'
import mobileLogo from '../assets/images/mobile-logo-white.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'

type HeaderProps = {
  cart : {
    productId : string
    quantity: number
    deliveryOptionId : string
  }[]
}

export function Header({ cart }: HeaderProps) {

  
  let totalQuantity =0;
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search1 = searchParams.get('search')
  const[search, setSearch] = useState(search1 ? search1 : '' );
  cart.forEach((cartItem)=>{
    totalQuantity += cartItem.quantity;
  })
  
  function searchFunction(){
    console.log(search)
    navigate(`/?search=${search}`)
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-NavLink">
          <img className="logo" src={logoWhite}/>
          <img className="mobile-logo" src={mobileLogo} />
        </NavLink>
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search"
         onChange={(event)=>{
          setSearch(event.target.value);
         }}/>

        <button className="search-button" onClick={searchFunction}>
          <img className='search-icon' src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-NavLink header-NavLink" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-NavLink header-NavLink" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
