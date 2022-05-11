
const SelectedItem = ({ title, image, calories, score, }) => {
 
  return (
    <div className="container-sm">
      <h1>{title}</h1>
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

export default SelectedItem;