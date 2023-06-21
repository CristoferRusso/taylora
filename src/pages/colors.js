import { ButtonGroup } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Colors = (props) => {

    let [colors, setColors] = useState('')
    const carModels = props.carModels
    const carButton = props.carButton
    let carSelected = ''

    if (carButton == 1) {
        carSelected = 0
    } else { carSelected = 1}



   const ChangeColor = () => {

    if(colors== '') {
    return carModels[carSelected].image1
    } else if (colors == 'nero') {
    return carModels[carSelected].image2    
    } else if (colors == 'arancione') {
    return carModels[carSelected].image3   
    } else if (colors == 'bianca') {
        return carModels[carSelected].image2 
    }
   } 




    return (

       <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <img className='car-image' src={ChangeColor()} style={{ maxWidth: '700px' }}></img>        
            </div>
            <div className="button-container">
                    <ButtonGroup variant="outlined" aria-label="outlined button group">
                        { carSelected == 0 ?
                        <>
                        <Button onClick={(() => {setColors(colors = '')})}>Bianca</Button>
                        <Button onClick={(() => {setColors(colors = 'nero')})}>Nera</Button>
                        <Button onClick={(() => {setColors(colors = 'arancione')})}>Arancione</Button>
                        </>
                        :   
                        <>
                        <Button onClick={(() => {setColors(colors = 'bianca')})}>Bianca</Button>
                        <Button onClick={(() => {setColors(colors = '')})}>Nera</Button>
                        </>
                        }
                        
                    </ButtonGroup>

                </div>
        </>

    )
}

export default Colors;