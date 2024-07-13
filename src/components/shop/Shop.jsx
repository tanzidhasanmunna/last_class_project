import { useState } from "react";
import { useEffect } from "react";
import Product from "../product/Product";
import "./Shop.css";
import Cart from "./Cart";

export default function Shop() {
  const [products, setproducts] = useState([]);

  const [cart, setCart] = useState([]);
  const handelToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  console.log("cart", cart);
  useEffect(() => {
    fetch("./product.JSON")
      .then((res) => res.json())
      .then((data) => setproducts(data));
  }, []);

  return (
    <>
      <div className="shop-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelToCart={handelToCart}
          ></Product>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </>
  );
}
