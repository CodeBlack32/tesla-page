import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app_items">
        <Item
          title="Lower Cost with Solar"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Lower Cost with Solar"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Lower Cost with Solar"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={ModelS}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Lower Cost with Solar"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Lower Cost with Solar"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
        <Item
          title="Lower Cost with Solar"
          desc="Money Back Guarantee"
          descLink=""
          backgroundImg={ModelY}
          leftBtnText="Order Now"
          leftBtnLink=""
          rightBtnText="Learn More"
          rightBtnLink=""
          twoButtons="true"
          first
        />
      </div>
    </div>
  );
}

export default App;

// Starting
