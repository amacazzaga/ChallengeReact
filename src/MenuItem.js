import React from "react";

const MenuItem = ({ title, resto, image }) => {
  return (
    <li>
      <div className="container-item">
        <h1>{title}</h1>
        <img src={image} alt="" />
        <p>{resto}</p>
      </div>
    </li>
  );
};

export default MenuItem;
