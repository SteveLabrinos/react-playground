import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ date, title, amount }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount.toFixed(2)}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
