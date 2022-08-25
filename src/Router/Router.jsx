import React, { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Admin from "../components/Dashboard/Admin/Admin";
import Form from "../components/Dashboard/AdminForm/Form"; 
import ProductDetails from "../components/Content/Product/ProductDetails";
import Cart from "../components/Content/Cart/Cart";
export const storeContext = createContext();
const Router = () => {
  let [store, setStore] = useState([]);
  let [counter,setCounter]=useState([]);
  // let [valid,setValid]=useState()
 
console.log('new state',counter)
  function getData() {
    fetch("https://ecommerce-backend12.herokuapp.com/")
      .then((res) => res.json())
      .then((res) => setStore(res))
      .catch((err) => console.log(err, "this is the error"));
  }

  useEffect(() => {
    getData();
  }, []);
  
  
  return (
    <storeContext.Provider value={{ store, setStore,counter,setCounter}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="dashboard" element={<Admin />} />
          <Route path="form" element={<Form />} />
          <Route path='Cart' element={<Cart/>} />
          <Route path="Product/:id" element={<ProductDetails />} />
          <Route path='*' element={<div>Not found</div>}/>
        </Routes>
      </BrowserRouter>
    </storeContext.Provider>
  );
};

export default Router;