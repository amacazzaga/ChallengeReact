import ButtonChoose from "./ButtonChoose";

const MenuItem = ({ title, resto, image, click }) => {
  //aca recien le paso como prop, pero a
  //menuitem, para q se la pase a buttonchoose
  return (
    <div className="container-item">
      <ButtonChoose click={click} /*aca esta pasado como prop*/ />
      <div>
      <h1>{title}</h1>
      </div>
      <div>
      <img className="img-fluid" alt="Responsive image" src={image} />
      </div>
      <div>
      <p>{resto}</p>
      </div>
    </div>
  );
};

export default MenuItem;
