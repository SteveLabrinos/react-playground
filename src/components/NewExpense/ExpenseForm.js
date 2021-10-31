import { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm({ onSaveExpenseData }) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });
  const [showForm, setShowForm] = useState(false);

  const inputChangeHandler = property => event => {
    setUserInput(prevState => {
      return { ...prevState, [property]: event.target.value };
    });
  };

  const toggleFormHandler = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  const submitHandler = event => {
    event.preventDefault();
    onSaveExpenseData({
      title: userInput.enteredTitle,
      amount: parseFloat(userInput.enteredAmount),
      date: new Date(userInput.enteredDate),
    });
    // Reset the form inputs
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
    // Hide the form inputs from the user
    toggleFormHandler();
  };

  return showForm ? (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            onChange={inputChangeHandler('enteredTitle')}
            type='text'
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            onChange={inputChangeHandler('enteredAmount')}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            onChange={inputChangeHandler('enteredDate')}
            type='date'
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={toggleFormHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  ) : (
    <button onClick={toggleFormHandler}>Add New Expense</button>
  );
}

export default ExpenseForm;
