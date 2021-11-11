import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

function MealItemForm({ id }) {
  const input = {
    id: `amount_${id}`,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };

  return (
    <form className={styles.form}>
      <Input label='Amount' input={input} />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemForm;
