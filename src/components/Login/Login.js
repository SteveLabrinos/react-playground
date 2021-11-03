import React, { useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGE':
      return {
        ...state,
        email: { value: action.payload, isValid: action.payload.includes('@') },
      };
    case 'PASSWORD_CHANGE':
      return {
        ...state,
        password: { value: action.payload, isValid: action.payload.trim().length > 6 },
      };
    case 'EMAIL_VALIDITY':
      return {
        ...state,
        email: { ...state.email, isValid: state.email.value.includes('@') },
      };
    case 'PASSWORD_VALIDITY':
      return {
        ...state,
        password: { ...state.password, isValid: state.password.value.trim().length > 6 },
      };
    case 'FORM_VALIDITY':
      return { ...state, isFormValid: action.payload };
    default:
      return state;
  }
};

const Login = props => {
  const [formState, dispatchForm] = useReducer(formReducer, {
    email: { value: '', isValid: null },
    password: { value: '', isValid: null },
    isFormValid: false,
  });

  const { value: email, isValid: emailValid } = formState.email;
  const { value: password, isValid: passwordValid } = formState.password;

  // Handle validation with useEffect
  useEffect(() => {
    // Debouncing to check validity after half a second with clean up function
    const identifier = setTimeout(() => {
      dispatchForm({
        type: 'FORM_VALIDITY',
        payload: emailValid && passwordValid,
      });
    }, 500);
    // Clean up
    // Clean up function won't trigger on the first call of useEffect. In any other calls, or when
    // the component is unmounting the DOM, then the clean up function runs first and then the
    // main function body of the hook
    return () => {
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const emailChangeHandler = event => {
    dispatchForm({ type: 'EMAIL_CHANGE', payload: event.target.value });
  };

  const passwordChangeHandler = event => {
    dispatchForm({ type: 'PASSWORD_CHANGE', payload: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchForm({ type: 'EMAIL_VALIDITY' });
  };

  const validatePasswordHandler = () => {
    dispatchForm({ type: 'PASSWORD_VALIDITY' });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onLogin(email, password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${emailValid === false ? classes.invalid : ''}`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formState.isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
