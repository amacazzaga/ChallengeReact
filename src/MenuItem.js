import ButtonChoose from "./ButtonChoose";

const MenuItem = ({ title, resto, image, id, click }) => {
  return (
    <div className="item">
      <ButtonChoose id={id} click={click} />
      <h1>{title}</h1>
      <img src={image} alt="" />
      <p>{resto}</p>
    </div>
  );
};

export default MenuItem;
