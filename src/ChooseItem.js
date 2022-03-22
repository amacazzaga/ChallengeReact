import PopItem from "./PopItem";

const ChooseItem = ({ title,image,calories,score ,click}) => {
  return (
    <h1>
      <div>{title}</div>
      <PopItem click={click}/>
      <img className="image-ChooseItem" src={image} />
      <p className="calories-text">Calories: {calories}</p>
      <p className="score-text">Score : {score}</p>
    </h1>
  );
};

export default ChooseItem;
