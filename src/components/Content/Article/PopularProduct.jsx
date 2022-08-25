import React from "react";
import { Link } from "react-router-dom";
import YellowStar from "./Assets/Star 10.svg";
import WhiteStar from "./Assets/Star 14.svg";

const PopularProduct = ({
  productImg,
  id,
  productName,
  productDesc,
  productPrice,
  onAddCart,buy
}) => {
  let disc=productPrice*0.3
  let discval=productPrice+disc
  return (
    <Link className="popular-item"  to={`product/${id}`}>
      <div className="popular-img">
        <img src={productImg} alt="" />
      </div>
      <p>{productName}</p>
      <p>{productDesc}</p>
      <div className="rating">
        <img src={YellowStar} alt="" />
        <img src={YellowStar} alt="" />
        <img src={YellowStar} alt="" />
        <img src={YellowStar} alt="" />
        <img src={WhiteStar} alt="" />
      </div>
      <div className="popular-negotiation">
        <div className="popular-price">
          <p>${discval}</p>
          <p>${productPrice}</p>
        </div>
        <div className="popular-discount">
          <span>30% off</span>
        </div>
      </div>
      <div className="popular-cart">
        <button className="add" onClick={onAddCart}>Add to cart</button>
        <button className="buy" onClick={buy}>Buy</button>
      </div>
      </Link>
    
  );
};

export default PopularProduct;
