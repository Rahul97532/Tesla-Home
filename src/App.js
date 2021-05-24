import React from 'react';
import './App.css';
import Item from './components/Item';
import Accessories from './assets/Desktop-Accessories.jpg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanel from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';

import Header from './components/Header'; 
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-itemsContainer">
        <Item 
          title='Lowest Cost Solar Panels in America'
          description='Money-back guarantee'
          descriptionlink=''
          backgroundImg={SolarPanel}       
          leftButtonText='Order Now'
          leftButtonLink=''
          rightButtonText='Learn More'
          rightButtonLink=''
          twoButton='true'
          first
        />
        <Item 
          title='Model S'
          description='Order Online for Touchless Delivery'
          descriptionlink='https://www.tesla.com/support/delivery-options'
          backgroundImg={ModelS}
          leftButtonText='Custom Order'
          leftButtonLink='https://www.tesla.com/models/design'
          rightButtonText='Existing Inventory'
          rightButtonLink='https://www.tesla.com/inventory/new/ms'
          twoButton='true'        
        />
        <Item 
          title='Model Y'
          description='Order Online for Touchless Delivery'
          descriptionlink='https://www.tesla.com/support/delivery-options'
          backgroundImg={ModelY}
          leftButtonText='Custom Order'
          leftButtonLink='https://www.tesla.com/modely/design'
          rightButtonText='Learn More'
          rightButtonLink='https://www.tesla.com/modely'
          twoButton='true'
        />
        <Item 
          title='Model 3'
          description='Order Online for Touchless Delivery'
          descriptionlink='https://www.tesla.com/support/delivery-options'
          backgroundImg={Model3}
          leftButtonText='Custom Order'
          leftButtonLink='https://www.tesla.com/model3/design'
          rightButtonText='Existing Inventory'
          rightButtonLink='https://www.tesla.com/inventory/new/m3'
          twoButton='true'
        />
        <Item 
          title='Model X'
          description='Order Online for Touchless Delivery'
          descriptionlink='https://www.tesla.com/support/delivery-options'
          backgroundImg={ModelX}
          leftButtonText='Custom Order'
          leftButtonLink='https://www.tesla.com/modelx/design'
          rightButtonText='Existing Inventory'
          rightButtonLink='https://www.tesla.com/inventory/new/mx'
          twoButton='true'
        />
        <Item 
          title='Solar for New Roofs'
          description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
          descriptionlink=''
          backgroundImg={SolarRoof}
          leftButtonText='Order Now'
          leftButtonLink='https://www.tesla.com/solarroof/design'
          rightButtonText='Learn More'
          rightButtonLink='https://www.tesla.com/solarroof'
          twoButton='true'
        />
        <Item 
          title='Accessories'
          description=''
          descriptionlink=''
          backgroundImg={Accessories}
          leftButtonText='Shop Now'
          leftButtonLink='https://www.tesla.com/shop'
          rightButtonText=''
          rightButtonLink=''
        />
      </div>
    </div>
  );
}

export default App;
