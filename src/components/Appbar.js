import BoxNav from '@mui/material/Box';
import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';

const Appbar = (props) => {
    const step = props.step
    const setStep = props.setStep
    const carButton = props.carButton

    const StepFunction = () => {
        switch (step) {
            case 0:
                if (carButton != 0) {
                    setStep(step + 1)
                }
                break;
            case 1:
                setStep(step + 1);
                break;
            case 2:
                setStep(step + 1);
                break;
            default:
                setStep(step + 0);
        }
    }

        return (
            <div style={{ textAlign: 'center' }} >
                <h1 style={{ textAlign: 'center' }}>Product Builder</h1>
                <BoxNav>
                    <ButtonGroup aria-label="outlined primary button group" sx={{ alignContent: 'right' }} >
                        <Button> Models </Button>
                        <Button onClick={StepFunction}>Colors</Button>
                        <Button onClick={StepFunction}>Accessories</Button>
                        <Button onClick={StepFunction}>Summary</Button>
                    </ButtonGroup>
                </BoxNav>
            </div>
        )
    };

    export default Appbar;