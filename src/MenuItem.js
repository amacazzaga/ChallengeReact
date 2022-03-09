import React from "react";

const MenuItem = ({title,resto,image}) => {
  return (
    <div className="container-item">
      <h1>{title}</h1>
      <p>{resto}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default MenuItem;
