import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../../../Router/Router";
import { usePaystackPayment } from "react-paystack";
import Layout from "../../Layout/Layout";
import "./../Cart/Cart.css";
const Cart = () => {
  let navigate = useNavigate();
  let { counter, setCounter } = useContext(storeContext);
  let totalVal = [],
    total;
    counter.map(({productPrice,qty})=>{
      let qtyPrice=productPrice*qty;
      totalVal.push(qtyPrice)
      return (total=totalVal.reduce((a,b)=>a+b))
    })
  // counter.map((val) => {
  //   totalVal.push(val.productPrice);
  //   return (total = totalVal.reduce((a, b) => a + b));
  // });

  const PaystackKey = `pk_test_a3644451a29f162a0a8935c07dbe376382a99be1`;
  let psvalue = total * 100;
  const config = {
    reference: new Date().getTime().toString(),
    email: "ikukoyidave@gmail.com",
    amount: psvalue,
    publicKey: PaystackKey,
  };
  const initializePayment = usePaystackPayment(config);

  const onSuccess = (reference) => {
    console.log(reference);
    if (reference.status === "success") {
      setCounter([]);
    }
  };

  const onErr = (reference) => {
    console.log(reference, "ERR REF");
  };

  console.log(counter);
  return (
    <Layout>
      {counter.length === 0 ? (
        <div className="waitcard">
          <h1>There is no item in your cart</h1>
          <button onClick={() => navigate("/")}>START SHOPPING</button>
        </div>
      ) : (
        <div className="cartwrapper">
          <div className="cartItems">
            <h2 className="len">Cart Total({counter.length})</h2>
            <table className="buju">
              <thead className="zank">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody className="phen">
                {counter.map(({ productImg,qty, productName, productPrice }, i) => {
                  let tots=productPrice*qty
                  return (
                    <tr key={i} className="mood">
                      <td className="ckay">
                        <span className="cartImg">
                          <img src={productImg} alt="" />
                        </span>
                        <span className="cartName">{productName}</span>
                      </td>
                      <td>
                        {new Intl.NumberFormat().format(productPrice || 0)}
                      </td>
                      <td>{qty}</td>
                      <td>{new Intl.NumberFormat().format(tots||0)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="cartTotal">
            <div className="cartTotalbody">
              <h2>CART SUMMARY</h2>
              <div className="iuz">
                <h3>Total</h3>
                <h3>{new Intl.NumberFormat().format(total || 0)}</h3>
              </div>
              <div className="checkout">
                <button
                  className="away"
                  onClick={() => {
                    initializePayment(onSuccess, onErr);
                  }}
                >
                  CHECKOUT PRICE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
