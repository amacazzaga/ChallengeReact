import ButtonChoose from "./ButtonChoose";

const MenuItem = ({ title, resto, image, id, click }) => { //aca recien le paso como prop, pero a 
  //menuitem, para q se la pase a buttonchoose
  return (
    <div className="item">
      <ButtonChoose id={id} click={click}/*aca esta pasado como prop*/ />
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{resto}</p>
    </div>
  );
};

export default MenuItem;
