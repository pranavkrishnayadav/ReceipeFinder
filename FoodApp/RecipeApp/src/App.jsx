import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav";
import "./App.css";
import Container from "./components/Container";
import Innercontainer from "./components/Innercontainer";
import Fooditem from "./components/Fooditem";
import FoodDetails from "./components/FoodDetails";
function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId,setFoodId] =useState("656329");
  return (
    <div className="App">
      <Nav></Nav>
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <Innercontainer>
          <FoodList  setFoodId={setFoodId} foodData={foodData}> </FoodList>
        
        </Innercontainer>

       <Innercontainer>
        <FoodDetails foodId={foodId}></FoodDetails>
       </Innercontainer>
      </Container>
    </div>
  );
}

export default App;
