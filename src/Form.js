import React from "react";

const Form = () => {
  return (
    <div>
      <div class="mb-3 row">
        <label for="staticEmail" class="col-sm-2 col-form-label">
          Email
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            class="form-control"
            name="staticEmail"
            value=""
          ></input>
        </div>
      </div>
      <div class="mb-3 row">
        <label for="inputPassword" class="col-sm-2 col-form-label">
          Password
        </label>
        <div class="col-sm-10">
          <input
            type="password"
            class="form-control"
            name="inputPassword"
          ></input>
        </div>
        <button>SEND!</button>
      </div>
    </div>
  );
};

export default Form;
