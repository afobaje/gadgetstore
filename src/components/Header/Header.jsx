import React, { useContext } from "react";
import "../Header/Header.css";
import Category from './../../assets/catigorise icon.svg'
import Email from './../../assets/email.svg'
import Phone from './../../assets/phone.svg'
import Logo from './../../assets/Logo.svg';
import Cart from './../../assets/cart.svg';
import Search from './../../assets/Union.svg';
import { Link } from "react-router-dom";
import { storeContext } from "../../Router/Router";

// import Logo from './assets/Logo.svg'

const Header = () => {
  let {counter}=useContext(storeContext)

  return (
    <header className="header">
      <nav>

      <div className="nav1">

        <div className="nav-comp">
          <div className="logo"><img src={Logo} alt="" /> Kantech</div>
          <ul className="navlist">
            <li>
              <Link to='/' className="home">Home</Link>
            </li>
            <li>
              <a href="/" className="other">About</a>
            </li>
            <li>
              <a href="/" className="other">Contact</a>
            </li>
            <li>
              <a href="/" className="other">Shop</a>
            </li>
            <li>
              <a href="/" className="other">Blog</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul className="contactless">
            <li className="border">
              <img src={Phone} alt="" />
              <a href="tel:+2349058695294">+2349058695294</a>
              {/* <a href=""></a> */}
            </li>
            
            <li className="in2">
              <img src={Email} alt="" />
              <a href="mailto:ikukoyidave@gmail.com">ikukoyidave@gmail.com</a>
              
            </li>
          </ul>
        </div>
      </div>
      
      <div className="nav2">
        <ul className="categories">
          <li className="cat"><img src={Category} alt="" /> Shop by Category</li>
        </ul>
        <div className="search-bar">
          <input type="search" placeholder="Search for an item..." name="" id="search" />
        
            <button className="searchBtn">Search <img src={Search} alt="" /></button>
          
        </div>
        <div className="signup-wrapper">
          <ul className="login">
            <li className="loginop">
              <a href="/">Login</a>
            </li>
            /
            <li>
              <a href="/" className="sign">signup</a>
            </li>
          </ul>
          
          <Link  to='/Cart' className="cart">
         <img src={Cart} alt=""  />
         <span className="asake" >{counter.length}</span>
          </Link>
          {/* <span>Cart</span> */}
        </div>
      </div>
      </nav>
    </header>
  );
};

export default Header;
