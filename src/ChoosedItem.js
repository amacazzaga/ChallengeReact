import PopItem from "./PopItem";

const ChoosedItem = ({ title, image, calories,  click }) => {
  return (
    <div className="container-md">
      <h1>{title}</h1>
      <PopItem click={click} />
      <div className="image-ChoosedItem">
        <img className="img-fluid" alt="Responsive image" src={image} />
      </div>
      <div>
        <p className="calories-text">Calories: {calories}</p>
      </div>
    </div>
  );
};

export default ChoosedItem;
