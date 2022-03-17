import React from "react";
import ButtonChoose from "./ButtonChoose";

const MenuItem = ({ title, resto, image, id }) => {
  return (
    <div className="item">
      <ButtonChoose id={id} />
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{resto}</p>
    </div>
  );
};

export default MenuItem;
