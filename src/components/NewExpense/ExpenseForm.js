import { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log({
      title: userInput.enteredTitle,
      amount: parseFloat(userInput.enteredAmount),
      date: new Date(userInput.enteredDate),
    });

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            value={userInput.enteredTitle}
            onChange={titleChangeHandler}
            type='text'
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            value={userInput.enteredAmount}
            onChange={amountChangeHandler}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            value={userInput.enteredDate}
            onChange={dateChangeHandler}
            type='date'
            min='2019-01-01'
            max='2022-12-31'
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
