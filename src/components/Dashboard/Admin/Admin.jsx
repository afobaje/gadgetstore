import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { storeContext } from "../../../Router/Router";
import Layout from "../../Layout/Layout";
import "./../Admin/Admin.css";

const Admin = () => {
  let { store, setStore } = useContext(storeContext);
  let navigate = useNavigate();

  function remove(id) {
    axios
      .delete(`https://ecommerce-backend12.herokuapp.com/${id}`)
      .then((res) => console.log(res.data.id, ` has been deleted`))
      .catch((err) => console.log(err, "gave error"));
    setStore(store.filter((val) => val._id !== id));
  }

  return (
    <Layout>
      <div className="admin-panel">
        <div className="panel-body">
          <div className="overview">
            <div className="product-summary">
              <div className="totalProducts">
                {store.length} <br />
                Total Products
              </div>
              <div className="totalSales">Total Sales</div>
            </div>
            <div className="create">
              <button onClick={() => navigate("/form")}>ADD AN ITEM</button>
            </div>
          </div>
          <table className="admintable">
            <thead className="adminthead">
              <tr>
                <th>Index</th>
                <th>Data Id</th>
                <th>Product Name</th>
                <th>Product Id</th>
                <th>Product Desc</th>
                <th>Product Price</th>
                <th>Product Img</th>
                <th>Product Title</th>
                <th>Filter</th>
              </tr>
            </thead>
            <tbody>
              {store ? (
                store.map(
                  (
                    {
                      _id,
                      productName,
                      productId,
                      productDesc,
                      productPrice,
                      text,
                      productImg,
                    },
                    i
                  ) => {
                    return (
                      <tr key={_id} className='age'>
                        <td>{i + 1}</td>
                        <td>{_id}</td>
                        <td>{productName}</td>
                        <td>{productId}</td>
                        <td>{productDesc}</td>
                        <td>{productPrice}</td>
                        <td className="tdimg">
                          {productImg && <img src={productImg} alt="" />}
                        </td>
                        <td>{text}</td>
                        <td className="bum">
                          <button onClick={() => remove(_id)}>delete</button>
                        </td>
                      </tr>
                    );
                  }
                )
              ) : (
                <div>Loading...</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;