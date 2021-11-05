import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import styles from './AvailableMeals.module.css';
import { DUMMY_MEALS } from '../../assets/dummyMeals';

function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} {...meal} />);

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
