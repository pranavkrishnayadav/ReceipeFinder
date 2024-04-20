import styles from "./fooditem.module.css";
export default function Fooditem({ food,setFoodId }) {
  return (
    <div className={styles.itemsContainer}>
      <img className={styles.itemimage} src={food.image} alt=""></img>

      <div className={styles.itemcontent}>
        <p className={styles.itemname}>{food.title}</p>
      </div>
      <div className={styles.buttoncontainer}>
        <button onClick={()=>{
          setFoodId(food.id)
        }} className={styles.itembutton}>
          View Receipe
        </button>
      </div>
    </div>
  );
}
