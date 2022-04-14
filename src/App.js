import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import ChoosedItem from "./ChoosedItem";

import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const numberUrl = "number=10";
  const baseUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=pizza&${numberUrl}`;

  const [menu, setMenu] = useState([]);
  const [input, SetInput] = useState("");
  const [loading, SetLoading] = useState(true);
  const [choosedDishes, setChoosedDishes] = useState([]);

  useEffect(() => {
    getMenus(baseUrl);
  }, []);

  const getMenus = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMenu(data.menuItems);
    SetLoading(false);
  };

  const addChoosedDish = async (id) => {
    //tomo como param id, que dp se carga de valor al hacer click en MenuItem
    const url = `https://api.spoonacular.com/food/menuItems/${id}?apiKey=${ApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setChoosedDishes(choosedDishes.concat(data));
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
            ? menu.map((m) => (
                <MenuItem
                  click={() => {
                    addChoosedDish(m.id); //llamo a getdish con otros params: aca le doy el id q va a url
                    //esta cargada en menuItem pero es lo q hace button choose
                    console.log(choosedDishes);
                  }}
                  key={m.id}
                  title={m.title}
                  image={m.image}
                  resto={m.restaurantChain}
                />
              ))
            : loading
            ? "loading"
            : "no hay"}
        </div>
      </div>
      <div className="container-right">
        {choosedDishes.map((d) => (
          <ChoosedItem
            click={() => {
              setChoosedDishes(
                choosedDishes.filter((dish) => { 
                return  dish.id != d.id;
                })
              );
            }}
            key={d.id}
            title={d.title}
            image={d.image}
            calories={d.nutrition.calories}
            score={d.spoonacularScore}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
