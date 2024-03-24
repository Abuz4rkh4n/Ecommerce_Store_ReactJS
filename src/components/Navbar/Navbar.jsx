import React, { useState } from "react";
import Product from "../Product/Product";
import useStyles from "./styles";

const Navbar = ({ cart, handleAddToCart, handleUpdateCartQty }) => {
  const [searchProduct, setSearchProduct] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const classes = useStyles();

  const handleInputBar = () => {
    setShowSearch((prevState) => !prevState);
    setSearchProduct("");
  };

  return (
    <>
      <div className={classes.header}>
        <div className={classes.container}>
          <div className={classes.headingDiv}>
            <a
              href="#"
              onClick={handleInputBar}
              className={showSearch ? classes.backVisible : classes.backHide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-x"
                viewBox="0 0 16 16"
                className={classes.back}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </a>
            <h2
              className={
                showSearch ? classes.headingHide : classes.headingVisible
              }
            >
              Real Food Store
            </h2>
            <input
              placeholder="Search"
              className={
                showSearch ? classes.searchVisible : classes.searchHide
              }
              type="text"
              onChange={(event) => {
                setSearchProduct(event.target.value);
              }}
            />
          </div>

          <div>
            <a href="#" onClick={handleInputBar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
                className={classes.search}
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                class="bi bi-share"
                viewBox="0 0 16 16"
                className={classes.share}
              >
                <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Product
        cart={cart}
        searchProduct={searchProduct}
        handleAddToCart={handleAddToCart}
        handleUpdateCartQty={handleUpdateCartQty}
      />
    </>
  );
};

export default Navbar;
