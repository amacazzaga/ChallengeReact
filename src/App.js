import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import ChoosedItem from "./ChoosedItem";
import ButtonSearch from "./ButtonSearch";
//import Form from "./Form";
import ButtonLoggedOut from "./ButtonLoggedOut";
import ButtonMakeReady from "./ButtonMakeReady";
import SelectedItem from "./SelectedItem";
import "./App.css";

function App() {
  const ApiKey = "0cdc104e20294b5e9931a1c0eaa2f126";
  const numberUrl = "number=5";
  const baseUrl = `https://api.spoonacular.com/food/menuItems/search?apiKey=${ApiKey}&query=pizza&${numberUrl}`;

  const [menu, setMenu] = useState([]);
  const [input, SetInput] = useState("");
  const [loading, SetLoading] = useState(true);
  const [choosedDishes, setChoosedDishes] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  ///////////////////////////
  useEffect(() => {
    getMenus(baseUrl);
  }, []); // first, in homepage
  ////////////////////////////////////////
  /* useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
    }
  }, []);*/
  ///////////////////////////////////
  /* const onAuthSuccess = (token) => {
    localStorage.setItem("token", token);
    setLoggedIn(true);
  };*/ // declare on app, in form does not take value from token
  ////////////////////////////////////////
  const getMenus = async (url) => {
    //getMenus tiene un endpoint q depende del parametro dado
    const response = await fetch(url);
    const data = await response.json();
    setMenu(data.menuItems); //menuItems es un arr dentro del JSON
    // console.log(data)
    SetLoading(false);
  };
  /////////////////////////////////////////
  const addChoosedDish = async (id) => {
    if (choosedDishes.length >= 5) {
      return;
    } //limita cantidad de platos
    //tomo como param id, que dp se carga de valor al hacer click en MenuItem
    const url = `https://api.spoonacular.com/food/menuItems/${id}?apiKey=${ApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setChoosedDishes(choosedDishes.concat(data));
  };
  ////////////////////////////////////////////
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="row ">
              <div className="col">
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
                  {menu.length > 0 ? ( //se menu es mayor a cero, renderiza cada item
                    menu.map((m) => (
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
                  ) : loading ? (
                    "loading"
                  ) : (
                    <p>"no menus for : {input}, we sorry"</p>
                  )}
                </div>
              </div>

              <div className="col">
                <h2>Your Selection:</h2>
                {choosedDishes.map((d) => (
                  <ChoosedItem
                    click={() => {
                      setChoosedDishes(
                        //el estado q tiene la info de lo q esta
                        //en ese array; lo filtro , y queda en el estado sin ese item
                        choosedDishes.filter((dish) => {
                          return dish.id != d.id;
                        })
                      );
                    }}
                    key={d.id}
                    title={d.title}
                    image={d.image}
                    calories={d.nutrition.calories}
                  />
                ))}

                {choosedDishes.length > 0 ? (
                  <div>
                    <Link to="/selection">
                      <ButtonMakeReady />
                    </Link>
                    <p className="p-selection">
                      you can order {Math.abs(choosedDishes.length - 5)} more
                      dishes!
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
                crossorigin="anonymous"
              ></script>
            </div>
          </div>
        </Route>
        <Route path="/selection">
          <h1 className="h1-preparing">Preparing!!! :</h1>
          <div className="container-preparing">
            {choosedDishes.map((d) => (
              <SelectedItem
                key={d.id}
                title={d.title}
                image={d.image}
                calories={d.nutrition.calories}
              />
            ))}
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
