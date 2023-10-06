import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

  // keep track of selected category
  const [selectedCategory, setSelected] = useState("All")

  function selectCategory(event) {
    setSelected(event.target.value)
  }

  // filter based on selected category
  // new array for items in category
  const filteredOptions = items.filter(
    (item) => item.category === selectedCategory)
  
  // displaying items (all or filtered)
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
