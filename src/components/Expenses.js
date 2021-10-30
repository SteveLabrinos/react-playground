import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ expenses }) {
  return (
    <div className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </div>
  );
}

export default Expenses;
