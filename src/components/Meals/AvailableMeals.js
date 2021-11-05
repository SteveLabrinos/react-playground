import styles from './AvailableMeals.module.css';
import { DUMMY_MEALS } from '../../assets/dummyMeals';

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal => <li>{meal.name}</li>);

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeals;
