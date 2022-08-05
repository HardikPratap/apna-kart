import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {      //props are basically componets passed as parameters in functions and can't be changed
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products Exists in the Carts</h1>
  );
}