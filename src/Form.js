import React from "react";
import ButtonForm from "./ButtonForm";
import { useState } from "react";
import axios from "axios";

const Form = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [error, setError] = useState();

  const clickButtonForm = () => {
    axios
      .post(`http://challenge-react.alkemy.org/`, {
        email: email,
        password: pass,
      })

      .then(function (response) {
        if (response.status == 200) {
          console.log(response);
          onAuthSuccess(response.data.token);
          setError("");
        }
      })
      .catch((e) => {
        console.log(e);
        switch (e.response.status) {
          case 401:
            setError(<p>No such user!</p>);

            break;

          default:
            console.log("error default");
            break;
        }
      });
  };
  return (
    <div class="container-md">
      <div>
        {" "}
        <h2>
          <p>Welcome to the Hotel!</p>
        </h2>
      </div>
      <p>Please, Logg in to get a menu :</p>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          <p>Email</p>
        </label>
        <div class="col-sm-10">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            class="form-control"
            name="email"
          ></input>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          <p>Pass</p>
        </label>
        <div class="col-sm-10">
          <input
            onChange={(e) => setPass(e.target.value)}
            type="password"
            class="form-control"
            name="password"
          ></input>
        </div>
      </div>
      <div>{error}</div>
      <ButtonForm onClick={clickButtonForm} />
    </div>
  );
};

export default Form;
