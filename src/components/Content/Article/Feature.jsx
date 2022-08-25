import React, { useContext } from "react";
import "./Feature.css";
import "./Article.css";
import Arrow from "./Assets/Arrow 2.svg";
import { storeContext } from "../../../Router/Router";
import FeatureProduct from "./FeatureProduct";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  let navigate = useNavigate();

  let { store, setCounter, counter } = useContext(storeContext);
  let feature = store.slice(4, 8);

  return (
    <article className="feature-content">
      <div className="feature">
        <div className="feature-title">
          <h3>Our Feature Offers</h3>
          <div className="feature-nav">
            <button>
              <img src={Arrow} alt="" />
            </button>
            <button>
              <img src={Arrow} alt="" />
            </button>
          </div>
        </div>
        <div className="feature-desc">
          {feature.length>0 ? (
            feature.map(
              (
                { productDesc, _id, productName, productPrice, productImg },
                i
              ) => {
                return (
                  <FeatureProduct
                    onAddToCart={() => {
                      let existInCart =
                        counter.find((item) => item._id === _id) !== undefined;
                        let notInCart=feature.find(idx=>idx._id===_id)
                        // itemIndex
                      let newCart;
                      // couter[itemIndex].qty++
                      if (existInCart) {
                        newCart = counter.map((item) =>
                          item._id === _id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                        );
                      } else {
                        newCart = counter.concat({...notInCart,qty:1});
                      }
                      setCounter(newCart);
                    }}
                    key={i}
                    productDesc={productDesc}
                    productImg={productImg}
                    productPrice={productPrice}
                    id={_id}
                    productName={productName}
                    buy={() => {
                      navigate(`product/${_id}`);
                    }}
                  />
                );
              }
            )
          ) : (
            <div className="loading"><p>Loading...</p></div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Feature;
