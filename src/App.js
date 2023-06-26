import './App.css';
import Models from './pages/models';
import { useState } from 'react';
import Appbar from './components/Appbar';
import Footer from './components/Footer';
import Colors from './pages/colors';
import Summary from './pages/summary';
import Accessory from './pages/accessories';
import i3Arancione from './images/i3-arancione.jpg';
import i3Nera from './images/i3-nera.jpg';
import i8Bianca from './images/i8-bianca.jpg';
import i3Bianca from './images/i3-bianca.jpg';
import i8Nera from './images/i8-nera.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from 'react';

function App() {
  let [colors, setColors] = useState('');
  const [selectedAccessory, setSelectedAccessory] = useState(0);
  const [selectedAccessoryItems, setSelectedAccessoryItems] = useState(['']);
  const [step, setStep] = useState('models');
  const [carButton, setCarButton] = useState('');
  const [carSelected, setCarSelected] = useState('');
  const [buttonText, setButtonText] = useState('colors');
  const [checkedItems, setCheckedItems] = React.useState([]);
  const carModels = [
    {
      name: 'BMW i3',
      textPrice: 'from $42.400',
      image1: i3Bianca,
      image2: i3Nera,
      image3: i3Arancione,
      price: 42400,
      color1: 550,
      color2: 550,
      accessory: [
        ['BMW Charging Station', 1080],
        ['BMW Maintenance Program Upgrade', 1895],
        ['1 Year BMW Maintenance Program Upgrade', 975],
      ],
    },
    {
      name: 'BMW i8',
      textPrice: 'from $140.700',
      image1: i8Nera,
      image2: i8Bianca,
      price: 140700,
      color1: 1800,
      accessory: [
        ['BMW Laserlight', 6300],
        ['BMW Charging Station', 1080],
        ['BMW Maintenance Program Upgrade', 1895],
        ['1 Year BMW Maintenance Program Upgrade', 975],
      ],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="App">
      <Appbar
        setStep={setStep}
        carButton={carButton}
        setButtonText={setButtonText}
        step={step}
      />
      {step == 'models' ? (
        <Models
          carButton={carButton}
          setCarButton={setCarButton}
          title1={carModels[0].name}
          price1={carModels[0].textPrice}
          image1={carModels[0].image1}
          title2={carModels[1].name}
          price2={carModels[1].textPrice}
          image2={carModels[1].image1}
          carSelected={carSelected}
          setCarSelected={setCarSelected}
          setSelectedAccessoryItems={setSelectedAccessoryItems}
          setCheckedItems={setCheckedItems}
        />
      ) : (
        ''
      )}
      {step == 'colors' ? (
        <Colors
          carModels={carModels}
          carButton={carButton}
          setCarSelected={setCarSelected}
          carSelected={carSelected}
          colors={colors}
          setColors={setColors}
        />
      ) : (
        ''
      )}
      {step == 'accessories' ? (
        <Accessory
          carModels={carModels}
          carButton={carButton}
          selectedAccessory={selectedAccessory}
          setSelectedAccessory={setSelectedAccessory}
          setSelectedAccessoryItems={setSelectedAccessoryItems}
          checkedItems={checkedItems}
          setCheckedItems={setCheckedItems}
        />
      ) : (
        ''
      )}
      {step == 'summary' ? (
        <Summary
          carModels={carModels}
          carButton={carButton}
          setCarSelected={setCarSelected}
          carSelected={carSelected}
          colors={colors}
          setColors={setColors}
          selectedAccessoryItems={selectedAccessoryItems}
        />
      ) : (
        ''
      )}
      <Footer
        step={step}
        setStep={setStep}
        carButton={carButton}
        carModels={carModels}
        carSelected={carSelected}
        selectedAccessory={selectedAccessory}
        setSelectedAccessory={setSelectedAccessory}
        buttonText={buttonText}
        setButtonText={setButtonText}
      />
    </div>
  );
}

export default App;
