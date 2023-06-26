import Button from '@mui/material/Button';
import '../style/colors.css';
import Tooltip from '@mui/material/Tooltip';

const Colors = (props) => {
  const carModels = props.carModels;
  const carButton = props.carButton;
  let carSwitch = carButton - 1;
  const setCarSelected = props.setCarSelected;
  let carSelected = props.carSelected;
  let colors = props.colors;
  const setColors = props.setColors;

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
      <div className="button-container">
        {carSwitch == 0 ? (
          <>
            <Tooltip title="White-$0" arrow placement="top">
              <Button
                id="white"
                onClick={() => {
                  setColors((colors = ''));
                }}
              ></Button>
            </Tooltip>
            <Tooltip title="Mineral Grey-$550" arrow placement="top">
              <Button
                id="mineral-grey"
                onClick={() => {
                  setColors((colors = 'nero'));
                }}
              ></Button>
            </Tooltip>
            <Tooltip title="Orange Metallic-$550" arrow placement="top">
              <Button
                id="orange-metallic"
                onClick={() => {
                  setColors((colors = 'arancione'));
                }}
              ></Button>
            </Tooltip>
          </>
        ) : (
          <>
            <Tooltip title="Grey Metallic-$0" arrow placement="top">
              <Button
                id="grey-metallic"
                onClick={() => {
                  setColors((colors = ''));
                }}
              ></Button>
            </Tooltip>
            <Tooltip title="White Pearl Metallic-$1800" arrow placement="top">
              <Button
                id="white"
                onClick={() => {
                  setColors((colors = 'bianca'));
                }}
              ></Button>
            </Tooltip>
          </>
        )}
      </div>
    </div>
  );
};

export default Colors;
