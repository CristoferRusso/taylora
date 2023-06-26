import React from 'react';
import '../style/footer.css';
import { Button } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { useState } from 'react';

const Footer = (props) => {
  let step = props.step;
  const setStep = props.setStep;
  let carButton = props.carButton;
  const carModels = props.carModels;
  let price = 0;
  let carSwitch = carButton - 1;
  let carSelected = props.carSelected;
  const selectedAccessory = props.selectedAccessory;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const setButtonText = props.setButtonText;
  let buttonText = props.buttonText;
  const [buttonTextBack, setButtonTextBack] = useState('');
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const StepFunction = () => {
    switch (step) {
      case 'models':
        if (carButton != 0) {
          setStep('colors');
          setButtonText('Accessories');
          setButtonTextBack('models');
        }
        break;
      case 'colors':
        setStep('accessories');
        setButtonText('Summary');
        setButtonTextBack('colors');

        break;
      case 'accessories':
        setStep('summary');
        setButtonText('Buy Now');
        setButtonTextBack('accessories');

        break;
    }
  };

  const StepBack = () => {
    switch (step) {
      case 'models':
        if (carButton != 0) {
          setStep('colors');
          setButtonText('Accessories');
          setButtonTextBack('models');
        }
        break;
      case 'colors':
        setStep('models');
        setButtonText('colors');
        break;
      case 'accessories':
        setStep('colors');
        setButtonText('accessories');
        setButtonTextBack('models');

        break;
      case 'summary':
        setStep('accessories');
        setButtonText('summary');
        setButtonTextBack('colors');
        break;
    }
  };


  const CarImage = () => {
    switch (carSelected) {
      case 1:
        return carModels[carSwitch].image1;
      case 2:
        return carModels[carSwitch].image1;
      case 3:
        return carModels[carSwitch].image2;
      case 4:
        return carModels[carSwitch].image3;
      case 5:
        return carModels[carSwitch].image2;
      default:
        break;
    }
  };

  if (price === 0) {
    switch (carSelected) {
      case 1:
        price = 0;
        price = carModels[carSwitch].price;
        break;
      case 2:
        price = 0;
        price = carModels[carSwitch].price;
        break;
      case 3:
        price = 0;
        price = carModels[carSwitch].price + carModels[carSwitch].color1;
        break;
      case 4:
        price = 0;
        price = carModels[carSwitch].price + carModels[carSwitch].color2;
        break;
      case 5:
        price = 0;
        price = carModels[carSwitch].price + carModels[carSwitch].color1;
        break;
      default:
        break;
    }
  }

  const isMobile = useMediaQuery('(max-width:767px)');

  if (isMobile) {
    return (
      <>
        {carButton != 0 ? (
          <footer>
            <div style={{ textAlign: 'center' }}>
              {step === 'models' ? (
                ''
              ) : (
                <Button
                  id="btn-stepBack"
                  variant="contained"
                  onClick={StepBack}
                >
                  {buttonTextBack}
                </Button>
              )}
              <Button
                id="btn-step"
                variant="contained"
                onClick={carButton == 0 ? handleClick : StepFunction}
              >
                {buttonText}
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'center',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <Typography sx={{ p: 2 }}>
                  Please, select a model first!
                </Typography>
              </Popover>
            </div>
          </footer>
        ) : (
          ''
        )}
      </>
    );
  }

  return (
    <footer>
      <div className="left">
        <img
          src={CarImage()}
          style={{ maxHeight: '100px', float: 'left' }}
        ></img>
      </div>
      <div className="left" style={{ color: '#66838F' }}>
        Total
      </div>
      <div className="left" style={{ fontSize: '32px' }}>
        ${price + selectedAccessory}
      </div>
      <div style={{ textAlign: 'right' }}>
        <Button
          id="btn-stepBack2"
          variant="contained"
          onClick={StepBack}
          sx={{
            backgroundColor: '#ededed',
            '&:hover': {
              backgroundColor: '#ededed',
            },
          }}
        >
          {'<'}
        </Button>
        <Button
          id="btn-step"
          variant="contained"
          onClick={carButton == 0 ? handleClick : StepFunction}
          style={{ marginRight: '100px' }}
          sx={{
            borderRadius: '50px',
          }}
        >
          {buttonText}
          {' >'}
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <Typography sx={{ p: 2 }}>Please, select a model first!</Typography>
        </Popover>
      </div>
    </footer>
  );
};

export default Footer;
