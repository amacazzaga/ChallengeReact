import PopItem from "./PopItem";

const ChoosedItem = ({ title,image,calories,score ,click}) => {
  return (
    <div className="container-xs">
      <h1>{title}</h1>
      <PopItem click={click}/>
      <img className="image-ChooseItem" src={image} />
      <p className="calories-text">Calories: {calories}</p>
      <p className="score-text">Score : {score}</p>
      </div>
  );
};

export default ChoosedItem;
