import React from "react";
import "./../Intro/Intro.css";
import Arrow from "./../../../assets/Arrow 1.svg";
import Mouse from "./../../../assets/bi_mouse.svg";
import Camera from "./../../../assets/arcticons_vector-camera.svg";
import Iphone from "./../../../assets/Iphone.svg";
import Laptop from "./../../../assets/Laptop.svg";
import Television from "./../../../assets/Television.svg";
import Home from "./../../../assets/Home.svg";
import Watch from "./../../../assets/Watch.svg";
import Headphone from "./../../../assets/bx_headphone.svg";
import Truck from "./../../../assets/Truck.svg";
import LaptopImg from "./../../../assets/unsplash_mP7aPSUm7aE.png";
import Shipping from "./../../../assets/order-details.svg";
import Iconphone from "./../../../assets/icons_phone.svg";
import Bookmark from "./../../../assets/bookmark.svg";
import gadgets from "./../../../assets/image 3.png";
import coffee from "./../../../assets/image 2.png";
import cleaner from "./../../../assets/image 1.png";
import drone from "./../../../assets/img0.png";
import { storeContext } from "../../../Router/Router";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  let { store, counter, setCounter } = useContext(storeContext);
  let item = store.slice(7, 8);
  let [items] = item;

  return (
    <div className="intro">
      <div className="bigScreen">
        <div className="secthree shopping-list">
          <ul>
            <li>
              <a href="/">
                <img src={Mouse} alt="" />
                <span className="joy"> Computer & Accessories</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Camera} alt="" />
                <span className="joy">Cameras,audio & Video</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Iphone} alt="" />
                <span className="joy">Smartphone & phones</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Laptop} alt="" />
                <span className="joy">Laptops & Tablets</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Television} alt="" />
                <span className="joy">Tv & Display</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Home} alt="" />
                <span className="joy">Smart Home</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Watch} alt="" />
                <span className="joy">Watches & eyewears</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Headphone} alt="" />
                <span className="joy"> Headphones & Speakers</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
            <li>
              <a href="/">
                <img src={Truck} alt="" />
                <span className="joy">Car,Motorbike & Industries</span>
              </a>
              <img src={Arrow} alt="" />
            </li>
            <hr />
          </ul>
        </div>
        <div className="secthree beauty">
          <div className="lappy">
            <img src={LaptopImg} alt="" />
            <div className="laptop-text">
              <p>Laptop Shop</p>
              <a href="http://">Shop by categories</a>
              {/* <button>Shop by categories</button> */}
            </div>
          </div>
          <div className="support">
            <div className="shipping">
              <div>
                <img src={Shipping} alt="" />
              </div>
              <ul>
                <li className="first">Free Shipping</li>
                <li className="second">On all order</li>
              </ul>
            </div>
            <div className="shipping">
              <div>
                <img src={Iconphone} alt="" />
              </div>
              <ul>
                <li className="first">Online Support</li>
                <li className="second">Technical 24/7</li>
              </ul>
            </div>
            <div className="shipping">
              <div>
                <img src={Bookmark} alt="" />
              </div>
              <ul>
                <li className="first">Big Saving</li>
                <li className="second">Weekend Sales</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="secthree promo">
          {item ? (
            item.map(({ productImg, productName, productPrice, _id }, i) => {
              let disc = productPrice * 0.3;
              let discval = productPrice + disc;
              return (
                <div className="promo-wrapper" key={i}>
                  <span className="sale">Sale!</span>
                  <div className="slash">
                    <div className="slashimage">
                      <img src={productImg} alt="" />
                    </div>
                    <div className="desc">
                      <span className="hdphone">{productName}</span>
                      <div className="day">
                        <span className="priceone">${discval}</span>
                        <span className="pricetwo">${productPrice}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    className="cartslash"
                    onClick={() => {
                      let existInCart =
                        counter.find((val) => val._id === items._id) !==
                        undefined;
                      let notInCart = items;
                      // itemIndex
                      let newCart;
                      // couter[itemIndex].qty++
                      if (existInCart) {
                        newCart = counter.map((val) =>
                          val._id === items._id
                            ? { ...val, qty: val.qty + 1 }
                            : val
                        );
                      } else {
                        newCart = counter.concat({ ...notInCart, qty: 1 });
                        // newCart = counter.concat({...notInCart, _id, qty: 1, productName });
                      }
                      setCounter(newCart);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              );
            })
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
      <div className="cards">
        <div className="card-item">
          <div className="textcards">
            <p>Apple</p>
            <h3>New Product</h3>
            <a href="http://">Shop</a>
          </div>
          <div className="imgcards">
            <img src={gadgets} alt="" />
          </div>
        </div>
        <div className="card-item">
          <div className="textcards">
            <p>Drink</p>
            <h3>Coffee</h3>
            <a href="http://">Shop</a>
          </div>
          <div className="imgcards">
            <img src={coffee} alt="" />
          </div>
        </div>
        <div className="card-item">
          <div className="textcards">
            <p>Clean</p>
            <h3>Your HOME</h3>
            <a href="http://">Shop</a>
          </div>
          <div className="imgcards">
            <img src={cleaner} alt="" />
          </div>
        </div>
        <div className="card-item">
          <div className="textcards">
            <p>Flying</p>
            <h3>Quadcopter</h3>
            <a href="http://">Shop</a>
          </div>
          <div className="imgcards">
            <img src={drone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
