import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './AddUser.module.css';

function AddUser() {
  const [insertedData, setInsertedData] = useState({
    username: '',
    age: '',
  });

  const changeInputHandler = property => event => {
    setInsertedData(prevData => {
      return { ...prevData, [property]: event.target.value };
    });
  };

  const submitHandler = event => {
    event.preventDefault();
    // Send the data to the parent
    console.log(insertedData);
    // Reset the form inputs
    setInsertedData({
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
          value={insertedData.username}
          id='username'
          type='text'
        />
        <label htmlFor='age'>Age (Years)</label>
        <input
          onChange={changeInputHandler('age')}
          value={insertedData.age}
          id='age'
          type='number'
        />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
