import MealItemForm from './MealItemForm';
import styles from './MealItem.module.css';

function MealItem({ id, name, description, price }) {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
}

export default MealItem;
