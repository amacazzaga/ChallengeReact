import PopItem from "./PopItem";

const ChoosedItem = ({ title, image, calories, score, click }) => {
 
  return (
    <div className="container-xs">
      <h1>{title}</h1>
      <PopItem click={click} />
      <div>
        <img className="image-ChooseItem" src={image} />
      </div>
      <div>
        <p className="calories-text">Calories: {calories}</p>
      </div>
      <div>
        <p className="score-text">Score : {score}</p>
      </div>
    </div>
  );
};

export default ChoosedItem;
