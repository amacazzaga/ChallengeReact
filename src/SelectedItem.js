
const SelectedItem = ({ title, image, calories, }) => {
 
  return (
    
    <div className="container-xs-selection">
      <div>
      <h1>{title}</h1>
      </div>
      <div>
        <img className="img-fluid" alt="Responsive image" src={image} />
      </div>
      <div>
        <p className="calories-text">Calories: {calories}</p>
      </div>
    </div>
   
  );
};

export default SelectedItem;