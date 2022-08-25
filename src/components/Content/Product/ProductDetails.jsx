import React from "react";
import "./../Product/ProductDetails.css";
import Layout from "../../Layout/Layout";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { storeContext } from "../../../Router/Router";
import YellowStar from "./../../../assets/Star 10.svg";
import WhiteStar from "./../../../assets/Star 14.svg";


const ProductDetails = () => {
  let params = useParams();
 
  let { store,setCounter,counter } = useContext(storeContext);
  let details = store.filter((val) => val._id === params.id);
  let [value] = details;


  

  let disc=value.productPrice*0.3
  let discval=value.productPrice+disc
  
  
 
  
  return (
    <Layout>
      <div className="prodwrapper">
        <div className="detailsProd">
          <div
            className="prodImg"
            style={{
              border: value ? "" : "1px solid var(--primary-color)",
              backgroundColor: value ? "" : "gray",
            }}
          >
            <img src={value?.productImg} alt="" />
          </div>
          <div className="prodDesc">
            <div className="cavvy">
              <h2>{value?.productName}</h2>
              <div className="reviewblaze">
                <span>
                  <img src={YellowStar} alt="" />
                  <img src={YellowStar} alt="" />
                  <img src={YellowStar} alt="" />
                  <img src={YellowStar} alt="" />
                  <img src={WhiteStar} alt="" />
                </span>
                <span>(7) Customer Reviews</span>
              </div>
              <div className="detailsPrice">
                <span className="valPrice">
                  <span className='originalprice'>${new Intl.NumberFormat().format(value?.productPrice||0)}</span>
                  <span className="formerprice">${new Intl.NumberFormat().format(discval||0)}</span>
                </span>
                <span className="valbutton">
                  <button 
                  // onClick={()=>{
                  //   store.map((val)=>{
                  //     if (val._id===value._id) {
                  //       return setCounter((prev)=>[...prev,val])
                  //     }
                  //     return null;
                  //   })
                  // }}


                  onClick={() => {
                    let existInCart =
                      counter.find((item) => item._id === value._id) !== undefined;
                      let notInCart=value
                      // itemIndex
                    let newCart;
                    // couter[itemIndex].qty++
                    if (existInCart) {
                      newCart = counter.map((item) =>
                        item._id === value._id
                          ? { ...item, qty: item.qty + 1 }
                          : item
                      );
                    } else {
                      newCart = counter.concat({...notInCart,qty:1});
                      // newCart = counter.concat({...notInCart, _id, qty: 1, productName });
                    }
                    setCounter(newCart);
                  }}
                  >
                    <svg
                      className="times"
                      width="16"
                      height="17"
                      viewBox="0 0 16 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Group">
                        <path
                          id="Vector"
                          d="M1.98303 6.88C2.0132 6.5041 2.18385 6.15336 2.46099 5.89763C2.73813 5.64189 3.10143 5.49992 3.47853 5.5H12.522C12.8991 5.49992 13.2624 5.64189 13.5396 5.89763C13.8167 6.15336 13.9874 6.5041 14.0175 6.88L14.6198 14.38C14.6363 14.5864 14.61 14.794 14.5424 14.9897C14.4748 15.1854 14.3674 15.365 14.227 15.5172C14.0866 15.6694 13.9162 15.7908 13.7266 15.8739C13.5369 15.957 13.3321 15.9999 13.125 16H2.87553C2.66848 15.9999 2.46367 15.957 2.27402 15.8739C2.08436 15.7908 1.91397 15.6694 1.77356 15.5172C1.63314 15.365 1.52576 15.1854 1.45816 14.9897C1.39057 14.794 1.36422 14.5864 1.38078 14.38L1.98303 6.88V6.88Z"
                          stroke="#F7FAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          id="Vector_2"
                          d="M11 7.75V4C11 3.20435 10.6839 2.44129 10.1213 1.87868C9.55871 1.31607 8.79565 1 8 1C7.20435 1 6.44129 1.31607 5.87868 1.87868C5.31607 2.44129 5 3.20435 5 4V7.75"
                          stroke="#F7FAFA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                    </svg>
                    Add to Cart
                  </button>
                </span>
              </div>
              <div className="commondesc">{value?.productDesc}</div>
              <div className="wishlist">
                <button>Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className="downDesc">
            <ul className="deschead">
              <li className="long">Description</li>
              <li className="long">Additional Information</li>
              <li>Reviews</li>
            </ul>
          
          <div className="descbody">
            <div className="topic">
              <h2>Game Console Controller Cable</h2>
              <h4>NoiseStorm Font Duo</h4>
            </div>
            <div className="descContent">
              There are many variations passages of Lorem Ipsum available, but
              the majority have suffered alteration words some form by
              injectedor randomized which don’t even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure
              there isn’t anything embarrassing hidden in the middle of text.
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary, making this the first true
              generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to
              generate Lorem Ipsum which looks reasonable. The generated Lorem
              Ipsum is therefore always free from repetition, injected humour,
              or non-characteristic words etc.
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
