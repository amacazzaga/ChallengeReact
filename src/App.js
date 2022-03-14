import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";

import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const numberUrl = "number=10";
  const baseUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=pasta&${numberUrl}`;
  const [menu, setMenu] = useState([]);
  const [input, SetInput] = useState("");

  useEffect(() => {
    getMenus(baseUrl);
  }, []);

  const getMenus = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMenu(data.menuItems);
    if(data.menuItems.length===0){
      alert("sorry, not in the menu!")
    }
   
  };
  return (
    <div className="container">
      <div className="input-div">
        <input
          onChange={(e) => {
            SetInput(e.target.value);
          }}
        ></input>
      </div>
      <div className="button-search-div">
        <button
          onClick={() => {
            const url = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=${input}&${numberUrl}`;
            getMenus(url);
           
          }}
        >
          search
        </button>
      </div>
      {menu.map((menu) => (
        <MenuItem
          key={menu.title}
          title={menu.title}
          image={menu.image}
          resto={menu.restaurantChain}
        />
      ))}
    </div>
  );
}

export default App;
