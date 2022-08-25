import React from "react";
import '../Footer/Footer.css';
import Twitter from './Assets/Twitter.svg'
import Fb from './Assets/Fb.svg'
import Reddit from './Assets/Reddit.svg'
import Logo from './../../assets/Logo.svg';
import insta from './Assets/Vector.svg'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">

      <div className="footer-text foot">
        <div className="logo footer-logo"><img src={Logo} alt="" /> Kantech</div>
        <div>
          <p>

          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam harum
          magni saepe provident rerum illum! Ipsam laboriosam architecto, quis
          amet accusantium sequi dolor cupiditate fugit quam neque sit ullam
          ipsum consectetur quas non odit pariatur. Aspernatur aliquid saepe
          distinctio. Repudiandae atque nihil adipisci fugiat? Quia delectus
          porro quas dolorum tempora.
          </p>
        </div>
      </div>
      <div className="customer-support foot">
        <h2>Customer Support</h2>
        <li>Contact Us</li>
        <li>Help Center</li>
        <li>Features</li>
        <li>Return & Exchange</li>
        <li>How to return a product on Kantech</li>
        <li>Ship your package anywhere in the world</li>
      </div>
      <div className="about-text foot">
        <h2>About Kantech</h2>
        <li>About Us</li>
        <li>Kantech Express</li>
        <li>Terms & Conditions</li>
        <li>Kantech Global</li>
      </div>
      <div className="follow-up foot">
        <div className="media">
          <span className="cta | h2 flo">Follow Us</span>
          <ul className="kenkele">

          <li><img src={Twitter} alt="" /></li>
          <li><img src={Fb} alt="" /></li>
          <li><img src={insta} alt="" /></li>
          <li><img src={Reddit} alt="" /></li>
          </ul>
        </div>
      <hr />
      <form action="" method="post">
        <div className="bot">
          <label htmlFor="name">Full Name</label>
          <input type="text" />
        </div>
        <div className="bot">
          <label htmlFor="email">Email address</label>
          <input type="email" name="" id="" />
        </div>
        <div className="bot">
          <label htmlFor="Message">Message</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        
          <button className="send">Send</button>
        
      </form>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
