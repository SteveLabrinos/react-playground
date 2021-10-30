import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from './Card';

function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
}

export default Expenses;
