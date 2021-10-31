import { useState } from 'react';

import ExpenseItem from './ExpenseItem';
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

  const expenseContent =
    filteredExpenses.length === 0 ? (
      <p>No Expenses Found!!</p>
    ) : (
      expenses.map(expense => <ExpenseItem key={expense.id} {...expense} />)
    );

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={expensesFilter}
        onAddExpensesFilter={addExpensesFilterHandler}
      />
      {expenseContent}
    </Card>
  );
}

export default Expenses;
