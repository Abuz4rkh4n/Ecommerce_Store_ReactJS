import React, { useState, useEffect } from "react";
import Product from "./components/Product/Product";
import Navbar from "./components/Navbar/Navbar";
import { commerce } from "./lib/commerce";

const App = () => {
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    await commerce.cart
      .retrieve()
      .then((cart) => {
        setCart(cart);
      })
      .catch((error) => {
        console.log("There was an error fetching the cart", error);
      });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const response = await commerce.cart.add(productId, quantity);
      setCart(response.cart);
      window.location.reload();
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
    window.location.reload();
  };

  if (cart == undefined) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <Navbar
        cart={cart}
        handleAddToCart={handleAddToCart}
        handleUpdateCartQty={handleUpdateCartQty}
      />
    </>
  );
};

export default App;
