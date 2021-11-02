import {useState} from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

function AddUser() {
  const [enteredData, setEnteredData] = useState({
    username: '',
    age: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);

  const changeInputHandler = property => event => {
    setEnteredData(prevData => {
      return {...prevData, [property]: event.target.value};
    });
  };

  const toggleFormValidHandler = () => {
    setIsFormValid(prevState => {
      return !prevState;
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    // Send the data to the parent
    if (enteredData.username.trim().length === 0 || enteredData.age.trim().length === 0) {
      toggleFormValidHandler();
      console.log('Username and age must have a value');
      return;
    } else if (+enteredData.age <= 0) {
      toggleFormValidHandler();
      console.log('Age must be a positive integer');
      return;
    }
    console.log(enteredData);
    // Reset the form inputs
    setEnteredData({
      username: '',
      age: '',
    });
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input
          onChange={changeInputHandler('username')}
          value={enteredData.username}
          id='username'
          type='text'
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          onChange={changeInputHandler('age')}
          value={enteredData.age}
          id='age'
          type='number'
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
