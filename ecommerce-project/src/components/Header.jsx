import { NavLink } from 'react-router';
import './header.css';
import logoWhite from '../assets/images/logo-white.png'
import mobileLogo from '../assets/images/mobile-logo-white.png'
import cartIcon from '../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'


export function Header() {
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-NavLink">
          <img className="logo" src={logoWhite}/>
          <img className="mobile-logo" src={mobileLogo} />
        </NavLink>
      </div>
      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-NavLink header-NavLink" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-NavLink header-NavLink" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
