import React, {useState }from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDarkMode, setMode] = useState(false)

  function handleMode() {
    setMode((mode) => mode = !mode)
  }

  const appClass = isDarkMode ? "App dark" : "App light"
  const modeText = isDarkMode ? "Dark Mode" : "Light Mode"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{modeText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
