import React, { useEffect, useState } from "react";
import styles from "./search.module.css"
export default function Search({foodData,setFoodData}) {
  
  const [Query, setQuery] = useState("pizza");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "095dd368f7f14195a626ec1a49a80db8";

  useEffect(() => {
    async function fetchFood() {
  
        const res = await fetch(`${URL}?apiKey=${API_KEY}&query=${Query}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
      } 
    fetchFood();
  }, [Query]); // Run effect whenever searchQuery changes

  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={Query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        placeholder="Search for a food..."
      />
         </div>
  );
}
