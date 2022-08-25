import React from "react";
import { Link } from "react-router-dom";
import YellowStar from "./Assets/Star 10.svg";
import WhiteStar from "./Assets/Star 14.svg";

const FeatureProduct = ({
  id,
  productImg,
  productName,
  onAddToCart,
  buy,
  productDesc,
  productPrice,
}) => {
  let disc=productPrice*0.3
  let discval=productPrice+disc
  return (
    <Link to={`product/${id}`} className="feature-item">
      <div className="feature-image">
        <span>sale</span>
        <img src={productImg} alt="" />
      </div>
      <div className="feature-feat">
        <div className="feature-text">
          <p>{productName}</p>
          <p>{productDesc}</p>
        </div>
        <div className="feature-rating">
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
          <img src={WhiteStar} alt="" />
        </div>
        <div className="feature-neg">
          <div className="feature-price">
            <p>${discval}</p>
            <p>${productPrice}</p>
          </div>
          <div className="feature-discount">
            <span>30% off</span>
          </div>
        </div>
        <div className="feature-cart">
          <button className="add" onClick={onAddToCart}>
            Add to cart
          </button>
          <button className="buy" onClick={buy}>
            Buy
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FeatureProduct;
