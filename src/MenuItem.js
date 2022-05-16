import ButtonChoose from "./ButtonChoose";

const MenuItem = ({ title, resto, image, click }) => {
  //aca recien le paso como prop, pero a
  //menuitem, para q se la pase a buttonchoose
  return (
    <div className="item">
      <ButtonChoose click={click} /*aca esta pasado como prop*/ />
      <h1>{title}</h1>
      <img className="img-fluid" alt="Responsive image" src={image} />
      <p>{resto}</p>
    </div>
  );
};

export default MenuItem;
