import { useState, Fragment, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import styles from './AddUser.module.css';

function AddUser({ onAddUser }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [showErrorModal, setShowErrorModal] = useState(false);
  const [modalContent, setModalContent] = useState();

  const showErrorHandler = content => {
    setShowErrorModal(true);
    setModalContent(content);
  };

  const hideErrorHandler = () => {
    setShowErrorModal(false);
  };

  const submitHandler = event => {
    event.preventDefault();
    const username = nameInputRef.current.value;
    const age = ageInputRef.current.value;
    if (username.trim().length === 0 || age.trim().length === 0) {
      showErrorHandler({
        title: 'An error has occurred',
        message: 'Username and Age fields must have a value',
      });
    } else if (+age <= 0) {
      showErrorHandler({
        title: 'An arithmetic error has occurred',
        message: 'Age must be a positive integer',
      });
    } else {
      onAddUser({ username, age });
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
    }
  };

  return (
    <Fragment>
      {showErrorModal && <ErrorModal onHideModal={hideErrorHandler} {...modalContent} />}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor='username'>Username</label>
          <input ref={nameInputRef} id='username' type='text' />
          <label htmlFor='age'>Age (Years)</label>
          <input ref={ageInputRef} id='age' type='number' />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
}

export default AddUser;
