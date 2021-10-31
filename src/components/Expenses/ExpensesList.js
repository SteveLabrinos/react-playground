import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

function ExpensesList({ expenses }) {
  return expenses.length === 0 ? (
    <h2 className='expenses-list__fallback'>Found no expenses.</h2>
  ) : (
    <ul className='expenses-list'>
      {expenses.map(expense => (
        <li>
          <ExpenseItem key={expense.id} {...expense} />
        </li>
      ))}
    </ul>
  );
}

export default ExpensesList;
