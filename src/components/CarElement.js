const CarElement = (props) => {
  return (
    <>
      <div className="container-car-element">
        <div className="Title">{props.title}</div>
        <img className="car-image" src={props.image}></img>
        <h6 className="price">{props.price}</h6>
        <div className="button-container">{props.button}</div>
      </div>
    </>
  );
};

export default CarElement;
