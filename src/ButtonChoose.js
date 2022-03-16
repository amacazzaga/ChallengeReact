import React, { useState } from "react";

const ButtonChoose = ({ id }) => {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const url = `https://api.spoonacular.com/food/menuItems/${id}?apiKey=${ApiKey}`;
  const [dish, Setdish] = useState([]);
  const getDish = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  return (
    <button
      onClick={() => {
       getDish()
      }}
    >
      ✅
    </button>
  );
};

export default ButtonChoose;
