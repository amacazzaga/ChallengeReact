import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const exampleReq =
    "https://api.spoonacular.com/food/menuItems/search?apiKey=0cdc104e20294b5e9931a1c0eaa2f126&query=burger&number=10";
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenus();
  }, []);
  const getMenus = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data);
    setMenu(data.menuItems);
  };
  return (
    <div className="container">
      <div className="input-div">
      <input></input>
      </div>
      <div className="button-search-div">
      <button>search</button>
      </div>
      {menu.map((menu) => (
        <MenuItem
          title={menu.title}
          image={menu.image}
          resto={menu.restaurantChain}
        />
      ))}
    </div>
  );
}

export default App;
