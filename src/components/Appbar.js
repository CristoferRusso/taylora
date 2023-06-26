import BoxNav from '@mui/material/Box';
import { ButtonGroup, useMediaQuery } from '@mui/material';
import Button from '@mui/material/Button';
const Appbar = (props) => {
  const setStep = props.setStep;
  const carButton = props.carButton;
  const setButtonText = props.setButtonText;
  const step = props.step;

  const StepFunction = (selectedOption) => {
    switch (selectedOption) {
      case 'colors':
        if (carButton != 0) {
          setStep('colors');
          setButtonText('Accessories');
        }
        break;
      case 'accessories':
        setStep('accessories');
        setButtonText('Summary');
        break;
      case 'summary':
        setStep('summary');
        setButtonText('Buy Now');
        break;
      case 'models':
        setStep('models');
        setButtonText('colors');
        break;
    }
  };

  const isMobile = useMediaQuery('(max-width:767px)');

  if (isMobile) {
    return (
      <>
        <p style={{ fontSize: '25px' }}>
          {step === 'colors'
            ? 'Select Color Step 2 of 4'
            : step === 'accessories'
            ? 'Accessories Step 3 of 4'
            : step === 'summary'
            ? 'Summary Step 4 of 4'
            : 'Select Model Step 1 of 4'}
        </p>
      </>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
      <h1>Product Builder</h1>
      <BoxNav>
        <ButtonGroup variant="text" sx={{ color: 'orange' }}>
          <Button
            sx={{ color: 'orange' }}
            onClick={() => StepFunction('models')}
          >
            Models
          </Button>
          {carButton == '' ? (
            <>
              <Button disabled>Colors</Button>
              <Button disabled>Accessories</Button>
              <Button disabled>Summary</Button>
            </>
          ) : (
            <>
              <Button
                sx={{ color: 'orange' }}
                onClick={() => StepFunction('colors')}
              >
                Colors
              </Button>
              <Button
                sx={{ color: 'orange' }}
                onClick={() => StepFunction('accessories')}
              >
                Accessories
              </Button>
              <Button
                sx={{ color: 'orange' }}
                onClick={() => StepFunction('summary')}
              >
                Summary
              </Button>
            </>
          )}
        </ButtonGroup>
      </BoxNav>
    </div>
  );
};

export default Appbar;
