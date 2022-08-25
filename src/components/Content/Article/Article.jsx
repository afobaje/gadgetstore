import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../../../Router/Router";
import "../Article/Article.css";
import Line from "./Assets/Line 11.svg";
import PopularProduct from "./PopularProduct";

const Article = () => {
  let navigate = useNavigate();
  let { store, setCounter, counter } = useContext(storeContext);
  let Popular = store.slice(0, 3);
  return (
    <article className="popular-content">
      <div className="popular">
        <div className="popular-title">
          <h2>Most Popular</h2>
          <img src={Line} alt="" />
          <button>view all</button>
        </div>
        <div className="popular-desc">
          {Popular.length > 0 ? (
            Popular.map(
              (
                { productDesc, productName, productPrice, _id, productImg },
                i
              ) => {
                return (
                  <PopularProduct
                    key={i}
                    id={_id}
                    productDesc={productDesc}
                    productName={productName}
                    productPrice={productPrice}
                    buy={() => {
                      navigate(`product/${_id}`);
                    }}
                    productImg={productImg}
                    onAddCart={() => {
                      let existInCart =
                        counter.find((item) => item._id === _id) !== undefined;
                      let notInCart = Popular.find((idx) => idx._id === _id);
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
                        newCart = counter.concat({ ...notInCart, qty: 1 });
                        // newCart = counter.concat({...notInCart, _id, qty: 1, productName });
                      }
                      setCounter(newCart);
                    }}
                  />
                );
              }
            )
          ) : (
            <div className="loading" ><p>Loading...</p></div>
          )}
        </div>
      </div>
    </article>
  );
};

export default Article;
