import React from "react";
import { useState } from "react";
import "./../AdminForm/Form.css";
import axios from "axios";
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";
import Layout from "../../Layout/Layout";
const Form = () => {
  let [productName, setProductName] = useState("");
  let [productDesc, setProductDesc] = useState("");
  let [productPrice, setProductPrice] = useState("");
  let [productImg, setProductImg] = useState("");
  let [productCategory, setProductCategory] = useState("");
  let [gallery, setGallery] = useState([]);
  console.log(env);

  const navigate = useNavigate();
   function handleSubmit(e) {
    e.preventDefault();
     axios
      .post("https://ecommerce-backend12.herokuapp.com/", {
        productName,
        productId: Math.ceil(Math.random() * 5000),
        productPrice,
        text: "this is a test",
        productDesc,
        productImg,
        // productCategory,
      })
      .then((res) => console.log(res, "posted"))
      .catch((err) => console.log(err, "this is the err"));
    setProductCategory("");
    setProductPrice("");
    setProductDesc("");
    setProductName("");
    setProductImg("");
    navigate("/Dashboard");
  }

  let key = "563492ad6f9170000100000181a60dc07af942e185d9c54850b2d2f9";
  function getPhoto(e) {
    axios
      .get(`https://api.pexels.com/v1/search?query=${e}/`, {
        headers: {
          Authorization: key,
        },
      })
      .then((res) => {
        console.log(res);
        setGallery(res.data.photos.slice(0, 6));
      })
      .catch((err) => console.log(err));
  }
  console.log(gallery);
  let debounceTimer;
  function debounce(fn, timer) {
    clearTimeout(debounceTimer);
    debounceTimer = timer;
    setTimeout(() => fn, debounceTimer);
  }

  return (
    <Layout>
    <div className="formwrapper">
      <div className="formbody">
        <form
          action=""
          className="formaction"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="formwrap">
            <div className="name">
              <label htmlFor="ProductName">Product Name</label>
              <input
                type="text"
                name="productName"
                tabIndex={1}
                placeholder="Product name..."
                required
                value={productName}
                
                onChange={(e) => {
                  console.log(e.target.value);
                  setProductName(e.target.value);
                  if (e.target.value.length > 2) {
                    setGallery([]);
                    debounce(getPhoto(e.target.value), 2000);
                  }
                  if (e.target.value === "") {
                    setGallery([]);
                  }
                }}
              />
            </div>
            <div className="description">
              <label htmlFor="ProductDesc">Product Description</label>
              <input
                type="text"
                name="ProductDesc"
                tabIndex={2}
                placeholder="product description..."
                required
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
              />
            </div>
            <div className="price">
              <label htmlFor="ProductPrice">Product Price</label>
              <input
                type="text"
                placeholder="product price.."
                name="ProductPrice"
                tabIndex={3}
                required
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
              />
            </div>
            <div className="category">
              <label htmlFor="ProductCategory">Product Category</label>
              <input
                type="text"
                placeholder="product category"
                name="ProductCategory"
                tabIndex={4}
                required
                value={productCategory}
                onChange={(e) => setProductCategory(e.target.value)}
              />
            </div>
            <button className="formsubmit">Submit</button>
          </div>
        </form>
        <div className="imgaction">
          <div className="imgbody">
            {gallery &&
              gallery.map(({ src, alt }, i) => {
                return (
                  <img
                    key={i}
                    src={src.original}
                    alt={alt}
                    onClick={() => {
                      alert(`you clicked ${alt}`)
                      setProductImg(src.original);
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Form;
