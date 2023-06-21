
import Grid from '@mui/material/Grid';
import CarElement from "../components/CarElement";
import '../style/carelement.css'
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import * as React from 'react';


const Models = (props) => {

    const [selectedValue, setSelectedValue] = React.useState('a');
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };


    const controlProps = (item) => ({
        checked: selectedValue === item,
        onChange: handleChange,
        value: item,
        name: 'size-radio-button-demo',
        inputProps: { 'aria-label': item },
    });

    let carButton = props.carButton
    const setCarButton = props.setCarButton



    return (
        <>
            <div>
                <Grid container className="App-header" spacing={{ xs: 12 }} columns={{ xs: 2, sm: 8, md: 18 }} style={{ alignContent: 'center' }}>
                    <Grid item xs={7}>
                        <CarElement
                            image={props.image1}
                            title={props.title1}
                            price={props.price1}
                            button=<Checkbox
                                onClick={(() => { if (carButton == 0) { setCarButton(carButton = 1) } })}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                sx={{
                                    '&.Mui-checked': {
                                        color: '#FFB500',

                                    },
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 48,
                                    },
                                }}  {...controlProps('c')} />
                        />
                    </Grid>
                    <Grid item xs={7}>
                        <CarElement
                             image={props.image2}
                             title={props.title2}
                             price={props.price2}
                            button=<Checkbox
                                onClick={(() => { if (carButton == 0) { setCarButton(carButton = 2) }})}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<CheckCircleIcon />}
                                sx={{
                                    '&.Mui-checked': {
                                        color: '#FFB500',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        fontSize: 48,
                                    },
                                }} {...controlProps('b')} />
                        />
                    </Grid>
                </Grid>
            </div>
        </>

    )
}

export default Models;