import { useState } from 'react';

import ExpenseList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses({ expenses }) {
  const [expensesFilter, setExpensesFilter] = useState('2020');

  const addExpensesFilterHandler = expensesFilter => {
    setExpensesFilter(expensesFilter);
  };

  const filteredExpenses = expenses.filter(
    expense => expense.date.getFullYear() === parseInt(expensesFilter)
  );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={expensesFilter}
        onAddExpensesFilter={addExpensesFilterHandler}
      />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
