import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setIncart] = useState(false);
  function toggleCartStatus() {
    setIncart((prevStatus) => !prevStatus);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
