import React, { Fragment } from "react";
import { CgMouse } from "react-icons/all"; 
import "./Home.css";
import Product from "./Product.js";

const product = {
  name: "Blue Shirt",
  images: [{ url: "https://easyplusbh.com/ecommerce/admin_area/product_images/product-6.png" }],
  price: "₹3000",
  _id: "awsaf",
};


const Home = () => {
  return (
    <Fragment>
        <div className="banner">
        <p>Welcome To ECOMMERCE</p>
        <h1>Find Amazing Products Below</h1>
        <a href="#container">
          <button>
            Scroll<CgMouse/>
          </button>
        </a>
      </div>
      
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product}/>
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product}/>
      </div>
    </Fragment>
  );
};

export default Home;