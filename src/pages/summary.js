import React from 'react';
import '../style/summary.css';

const Summary = (props) => {
  const carModels = props.carModels;
  const carButton = props.carButton;
  let carSwitch = carButton - 1;
  const setCarSelected = props.setCarSelected;
  let carSelected = props.carSelected;
  let colors = props.colors;
  const selectedAccessoryItems = props.selectedAccessoryItems;

  const ChangeColor = () => {
    if (colors == '' && carSwitch == 1) {
      setCarSelected((carSelected = 1));
      return carModels[carSwitch].image1;
    } else if (colors == '' && carSwitch == 0) {
      setCarSelected((carSelected = 2));
      return carModels[carSwitch].image1;
    } else if (colors == 'nero') {
      setCarSelected((carSelected = 3));
      return carModels[carSwitch].image2;
    } else if (colors == 'arancione') {
      setCarSelected((carSelected = 4));
      return carModels[carSwitch].image3;
    } else if (colors == 'bianca') {
      setCarSelected((carSelected = 5));
      return carModels[carSwitch].image2;
    }
  };

  return (
    <div>
      <div data-aos="fade-left">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img className="car-image" src={ChangeColor()}></img>
        </div>
        <div className="button-container">{carModels[carSwitch].name}</div>
        <div className="button-container" style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit saepe facilis hic, unde, numquam vel. Blanditiis sed
          laboriosam ratione nulla atque molestias at explicabo aperiam
          reprehenderit culpa nihil, quis totam cupiditate dolores in quisquam
          magnam inventore nobis, rem adipisci eveniet illum.
        </div>
        <div className="button-container">COLOR</div>
        <div className="container-color">
          {carSelected === 1 ? (
            <div className="color" style={{ backgroundColor: '#303539' }}></div>
          ) : carSelected === 2 ? (
            <div className="color" style={{ backgroundColor: '#FFFFFF' }}></div>
          ) : carSelected === 3 ? (
            <div className="color" style={{ backgroundColor: '#303539' }}></div>
          ) : carSelected === 4 ? (
            <div className="color" style={{ backgroundColor: '#CF5A16' }}></div>
          ) : carSelected === 5 ? (
            <div className="color" style={{ backgroundColor: '#FFFFFF' }}></div>
          ) : null}
        </div>
        <div className="button-container" style={{ marginTop: '20px' }}>
          ACCESSORIES
        </div>
        <div
          className="button-container"
          style={{ textAlign: 'center', marginBottom: '150px' }}
        >
          {selectedAccessoryItems != '' ? (
            <ul style={{ textAlign: 'left' }}>
              {selectedAccessoryItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          ) : (
            'No Accessories selected'
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;
