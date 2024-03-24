import React, { useState, useEffect } from "react";
import { commerce } from "../../../lib/commerce";
import useStyles from "./styles";

const Products = ({ cart, product, handleAddToCart, handleUpdateCartQty }) => {
  const classes = useStyles();
  const [showCart, setShowCart] = useState(true);

  let count = 1;

  if (cart.line_items === undefined) {
    return <div></div>;
  }

  const productNumbers = cart.line_items.length;

  return (
    <div>
      <div className={classes.card}>
        <img
          className={classes.cardImage}
          src={product.image.url}
          alt={product.name}
        />
        <div className={classes.info}>
          <h4 className={classes.name}>{product.name}</h4>
          <p className={classes.description}>
            {product.price.formatted_with_symbol}
          </p>
          {cart.line_items.map((item) => {
            if (item.product_id !== product.id && item.quantity > 0) {
              if (count === productNumbers) {
                return (
                  <a
                    key={item.id}
                    href="#"
                    onClick={() => {
                      handleAddToCart(product.id, 1);
                    }}
                    className={
                      showCart ? classes.quantityVisible : classes.quantityHide
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      class="bi bi-cart-fill"
                      viewBox="0 0 16 16"
                      className={classes.addToCart}
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                  </a>
                );
              } else {
                count++;
              }
            }
          })}

          <div>
            {cart.line_items.map((item) => {
              if (item.product_id === product.id) {
                return (
                  <div key={item.id} className={classes.quantityVisible}>
                    <a
                      className={classes.buttons}
                      href="#"
                      onClick={() =>
                        handleUpdateCartQty(item.id, item.quantity - 1)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-dash-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                        />
                      </svg>
                    </a>
                    <h4 className={classes.number}>{item.quantity}</h4>
                    <a
                      className={classes.buttons}
                      href="#"
                      onClick={() =>
                        handleUpdateCartQty(item.id, item.quantity + 1)
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        class="bi bi-plus-lg"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                        />
                      </svg>
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
