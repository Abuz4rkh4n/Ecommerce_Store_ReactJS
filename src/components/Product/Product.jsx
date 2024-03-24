import React, { useState, useEffect } from "react";
import Products from "../Product/Products/Products";
import { commerce } from "../../lib/commerce";
import useStyles from "./styles";
import { colors } from "@material-ui/core";

const Product = ({
  cart,
  searchProduct,
  handleAddToCart,
  handleUpdateCartQty,
}) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (cart.line_items === undefined) {
    return <div></div>;
  }

  return (
    <main className={classes.main}>
      <div className={classes.container}>
        {products
          .filter((val) => {
            if (searchProduct == "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchProduct.toLowerCase())
            ) {
              return val;
            }
          })
          .map((product) => (
            <div key={product.id}>
              <Products
                cart={cart}
                product={product}
                handleAddToCart={handleAddToCart}
                handleUpdateCartQty={handleUpdateCartQty}
              />
            </div>
          ))}
      </div>
      <div className={classes.totalPrice}>
        <button className={classes.button}>
          <div className={classes.priceContainer}>
            <div className={classes.badge}>
              <div className={classes.totalItems}>{cart.total_items}</div>
              <h4 className={classes.heading}>In your cart</h4>
            </div>
            <div className={classes.subtotal}>
              <h4 className={classes.amount}>
                {cart.subtotal.formatted_with_symbol}
              </h4>
              <svg
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                />
              </svg>
            </div>
          </div>
        </button>
      </div>
    </main>
  );
};

export default Product;
