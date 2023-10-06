import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false)

  function addCart() {
    setCart(inCart => inCart = !inCart)
  }

  const cartClass = inCart ? "in-cart" : "";
  const cartBtn = inCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addCart} className="add">{cartBtn}</button>
    </li>
  );
}

export default Item;
