import React from "react";

const ButtonLoggedOut = ({ onClick }) => {
  return (
    <button className="button-logg-out" onClick={onClick}>
      Log Out
    </button>
  );
};

export default ButtonLoggedOut;
