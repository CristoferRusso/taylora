import * as React from 'react';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import '../style/accessory.css';

const Accessory = (props) => {
  const carModels = props.carModels;
  const carButton = props.carButton;
  let carSwitch = carButton - 1;
  const setSelectedAccessory = props.setSelectedAccessory;
  const selectedAccessory = props.selectedAccessory;
  const setSelectedAccessoryItems = props.setSelectedAccessoryItems;
  const setCheckedItems =props.setCheckedItems
  let checkedItems = props.checkedItems
  const handleCheckboxChange = (accessory) => {
    setSelectedAccessory(selectedAccessory + accessory[1]);
    setSelectedAccessoryItems((prevItems) => [...prevItems, accessory[0]]);
    setCheckedItems((prevItems) => [...prevItems, accessory[0]]); 
  };
  
  const handleCheckboxRemove = (accessory) => {
    setSelectedAccessory(selectedAccessory - accessory[1]);
    setSelectedAccessoryItems((prevItems) =>
      prevItems.filter((item) => item !== accessory[0])
    );
    setCheckedItems((prevItems) =>
      prevItems.filter((item) => item !== accessory[0]) 
    );
  };
  return (
    <Grid
      data-aos="fade-left"
      className="Accessory-Items"
      container
      spacing={2}
    >
      {carModels[carSwitch].accessory.map((accessory, index) => (
        <Grid
          className="container-car-element"
          item
          xs={8}
          sx={{ height: '80px' }}
          key={index}
        >
          {accessory[0]} ${accessory[1]}
          <Checkbox
            sx={{
              float: 'right',
              '&.Mui-checked': {
                color: '#FFB500',
              },
            }}
            checked={checkedItems.includes(accessory[0])} 
            onClick={(event) => {
              if (event.target.checked) {
                handleCheckboxChange(accessory);
              } else {
                handleCheckboxRemove(accessory);
              }
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default Accessory;
