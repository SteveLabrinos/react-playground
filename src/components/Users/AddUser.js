import { useState } from 'react';

function AddUser() {
  const [insertedData, setInsertedData] = useState({
    username: '',
    age: '',
  });

  const inputHandler = property => event => {
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
    <form onSubmit={submitHandler}>
      <label htmlFor='username'>Username</label>
      <input
        onChange={inputHandler('username')}
        value={insertedData.username}
        id='username'
        type='text'
      />
      <label htmlFor='age'>Age (Years)</label>
      <input
        onChange={inputHandler('age')}
        value={insertedData.age}
        id='age'
        type='number'
      />
      <button type='submit'>Add User</button>
    </form>
  );
}

export default AddUser;
