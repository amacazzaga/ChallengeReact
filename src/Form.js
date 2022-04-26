import React from "react";

const Form = ({handleChange}) => {
  return (
    <div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
           onChange={handleChange}
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
          onChange={handleChange}
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
