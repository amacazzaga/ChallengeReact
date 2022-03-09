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
      <input></input>
      <button>search</button>
      {menu.map((menu) => (
        <MenuItem
          title={menu.title}
          resto={menu.restaurantChain}
          image={menu.image}
        />
      ))}
    </div>
  );
}

export default App;
