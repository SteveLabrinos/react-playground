import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses({ expenses }) {
  const [expensesFilter, setExpensesFilter] = useState('2020');
  // Check that the state is properly updated
  console.log(`Value for filter = ${expensesFilter}`);

  const addExpensesFilterHandler = expensesFilter => {
    setExpensesFilter(expensesFilter);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={expensesFilter}
        onAddExpensesFilter={addExpensesFilterHandler}
      />
      {expenses.map(expense => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Card>
  );
}

export default Expenses;
