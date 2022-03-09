import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const exampleReq =
  "https://api.spoonacular.com/food/menuItems/search?apiKey=0cdc104e20294b5e9931a1c0eaa2f126&query=vegan&number=4"
  useEffect(() => {
    getMenus();
  }, []);
  const getMenus = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <input></input>
      <button>search</button>
    </div>
  );
}

export default App;
