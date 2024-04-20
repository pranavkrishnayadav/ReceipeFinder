import Fooditem from "./Fooditem";

export default function FoodList({ foodData,setFoodId }) {
  return (
    <div>
      {foodData.map((food) => (
        // Added the return statement
        // Added return here
        <Fooditem setFoodId={setFoodId} food={food}></Fooditem>
      ))}
    </div>
  );
}
