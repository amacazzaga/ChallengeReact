import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import ChoosedItem from "./ChoosedItem";
import "./App.css";
import ButtonSearch from "./ButtonSearch";
import Form from "./Form";
import ButtonLoggedOut from "./ButtonLoggedOut";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const numberUrl = "number=10";
  const baseUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=pizza&${numberUrl}`;

  const [menu, setMenu] = useState([]);
  const [input, SetInput] = useState("");
  const [loading, SetLoading] = useState(true);
  const [choosedDishes, setChoosedDishes] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  ///////////////////////////
  useEffect(() => {
    getMenus(baseUrl);
  }, []); // lo primero que aparece en la web
  ////////////////////////////////////////
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);
  ///////////////////////////////////
  const getMenus = async (url) => {
    //getMenus tiene un endpoint q depende del parametro dado
    const response = await fetch(url);
    const data = await response.json();
    setMenu(data.menuItems);
    SetLoading(false);
  };
  //////////////////////////////
  const onAuthSuccess = (token) => {
    localStorage.setItem("token", token);
    setLoggedIn(true);
  };
  ////////////////////////////////////////
  /*use effect con el item del token
  if() 
  */
  /////////////////////////////////////////
  const addChoosedDish = async (id) => {
    //tomo como param id, que dp se carga de valor al hacer click en MenuItem
    const url = `https://api.spoonacular.com/food/menuItems/${id}?apiKey=${ApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setChoosedDishes(choosedDishes.concat(data));
  };
  ////////////////////////////////////////////
  return (
    <div>
      <div className="container-xl">
        <div>
          {!isLoggedIn ? ( //conditional rendering!
            <Form onAuthSuccess={onAuthSuccess} />
          ) : (
            <main className="container">
              <div className="modal-login">
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
                    <ButtonSearch
                      onClick={() => {
                        const url = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=${input}&${numberUrl}`;
                        SetLoading(true);
                        getMenus(url);
                      }}
                    />
                     <ButtonLoggedOut
                  onClick={() => {
                    localStorage.removeItem("token");
                    setLoggedIn(false);
                  }}
                />
                  </div>
                </div>
                <div className="container-md">
                  {menu.length > 0 //se menu es mayor a cero, renderiza cada item
                    ? menu.map((m) => (
                        <MenuItem
                          click={() => {
                            addChoosedDish(m.id); //llamo a getdish con otros params:
                            //aca le doy el id q va a url (el id, es el id de m, en este caso)
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
              
              <div className="container-lg">
                <h2>Your Selection:</h2>
                {choosedDishes.map((d) => (
                  <ChoosedItem
                    click={() => {
                      setChoosedDishes(
                        choosedDishes.filter((dish) => {
                          return dish.id != d.id;
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
              <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"
              ></script>
            </main>
          )}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
