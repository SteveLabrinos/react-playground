import { useState, Fragment } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

function AddUser({ onAddUser }) {
  const [enteredData, setEnteredData] = useState({
    username: '',
    age: '',
  });
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const changeInputHandler = property => event => {
    setEnteredData(prevData => {
      return { ...prevData, [property]: event.target.value };
    });
  };

  const showErrorHandler = content => {
    setShowErrorModal(true);
    setModalContent(content);
  };

  const hideErrorHandler = () => {
    setShowErrorModal(false);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (enteredData.username.trim().length === 0 || enteredData.age.trim().length === 0) {
      showErrorHandler({
        title: 'An error has occurred',
        message: 'Username and Age fields must have a value',
      });
    } else if (+enteredData.age <= 0) {
      showErrorHandler({
        title: 'An arithmetic error has occurred',
        message: 'Age must be a positive integer',
      });
    } else {
      onAddUser(enteredData);
      // Reset the form inputs
      setEnteredData({
        username: '',
        age: '',
      });
    }
  };

  return (
    <Fragment>
      {showErrorModal && <ErrorModal onHideModal={hideErrorHandler} {...modalContent} />}
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
    </Fragment>
  );
}

export default AddUser;
