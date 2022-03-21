import React, { useEffect, useState } from "react";
import ButtonChoose from "./ButtonChoose";
import MenuItem from "./MenuItem";
import ChooseItem from "./ChooseItem";

import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const numberUrl = "number=4";
  const baseUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=pizza&${numberUrl}`;

  const [menu, setMenu] = useState([]);
  const [input, SetInput] = useState("");
  const [loading, SetLoading] = useState(true);
  const [dishes, setDishes] = useState([]);

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

  const getDish = async (id) => {
    const url = `https://api.spoonacular.com/food/menuItems/${id}?apiKey=${ApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setDishes(dishes.concat(data));
    console.log(data);
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
              className="button-search"
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
                  click={() => {
                    getDish(menu.id);//llamo a getdish con otros params
                  }}
                  key={menu.id}
                  id={menu.id}
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
      <div className="container-right">
        {dishes.map((dish) => (
          <ChooseItem 
          key = {dish.id}
          title ={dish.title}/>
        ))}
      </div>
    </div>
  );
}

export default App;
