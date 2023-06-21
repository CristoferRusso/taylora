import './App.css';
import Models from './pages/models';
import { useState } from 'react';
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Colors from './pages/colors';
import Summary from './pages/summary';
import Accessory from './pages/accessories';
import i3Arancione from './images/i3-arancione.jpg'
import i3Nera from './images/i3-nera.jpg'
import i8Bianca from './images/i8-bianca.jpg'
import i3Bianca from './images/i3-bianca.jpg'
import i8Nera from './images/i8-nera.jpg';

function App() {
  const [step, setStep] = useState(0)
  const [carButton, setCarButton] = useState('')


  const carModels = [
    {name:'BMW i3', price:'from $42.400', image1: i3Bianca, image2: i3Nera, image3:i3Arancione},
    {name:'BMW i8', price:'from $140.700', image1: i8Nera, image2: i8Bianca }
  ]
   



  return (
    <div className="App">
      <Appbar
      step={step}
      setStep={setStep}
      carButton={carButton}
      />
      {step == 0 ? <Models carButton={carButton} setCarButton={setCarButton} 
      title1={carModels[0].name} price1={carModels[0].price} image1={carModels[0].image1}
      title2={carModels[1].name} price2={carModels[1].price} image2={carModels[1].image1}
      /> : '' }
      {step == 1 ? <Colors carModels={carModels} carButton={carButton}/> : '' }
      {step == 2 ? <Accessory/> : '' }
      {step == 3 ? <Summary/> : '' }
      <Footer/>
    </div>
  );
}

export default App;
