import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // keep track of selected 
  const [selectedCategory, setSelected] = useState("All")

  function selectCategory(event) {
    setSelected(event.target.value)
  }

  const filteredOptions = items.filter(
    (item) => item.category === selectedCategory)
  
  const food = selectedCategory === "All" ?  
    items.map((item) => (<Item key={item.id} name={item.name} category={item.category} />))  
    : filteredOptions.map((item) => (<Item key={item.id} name={item.name} category={item.category} />
  ))

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select value={selectedCategory} onChange={selectCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {food}
      </ul>
    </div>
  );
}

export default ShoppingList;
