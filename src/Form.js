import React from "react";
import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState(); 
  const [pass, setPass]= useState()
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
  };
  const handlePassChange = (e) => {
    setPass(e.target.value);
    console.log(pass)
  };
  return (
    <div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            onChange={handleEmailChange}
            type="text"
            class="form-control"
            name="email"
          ></input>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            onChange={handlePassChange}
            type="password"
            class="form-control"
            name="password"
          ></input>
        </div>
        <button>SEND!</button>
      </div>
    </div>
  );
};

export default Form;
