import React, { useEffect, useState } from "react";

import MenuItem from "./MenuItem";

import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const numberUrl = "number=4";
  const baseUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=pasta&${numberUrl}`;
  const [menu, setMenu] = useState([]);
  const [input, SetInput] = useState("");
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    getMenus(baseUrl);
  }, []);

  const getMenus = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setMenu(data.menuItems);
    SetLoading(false);
  };
  return (
    <div className="main-container">
      <div className="container-left">
        <h1>MENU FROM HOTEL</h1>
        <div className="container-input-button">
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
                SetLoading(true);
                getMenus(url);
              }}
            >
              search
            </button>
          </div>
        </div>
        <div className="items-container">
        {menu.length > 0
          ? menu.map((menu) => (
              <MenuItem
                key={menu.title}
                title={menu.title}
                image={menu.image}
                resto={menu.restaurantChain}
              />
            ))
          : loading
          ? "loading"
          : "no hay"}
          </div>
      </div>
      <div className="container-right">derecha</div>
    </div>
  );
}

export default App;
