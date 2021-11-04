import { useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from './Input';
import AuthContext from '../../store/auth-context';

function formReducer(state, action) {
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
}

function Login() {
  const { onLogin } = useContext(AuthContext);

  const [formState, dispatchForm] = useReducer(formReducer, {
    email: { value: '', isValid: null },
    password: { value: '', isValid: null },
    isFormValid: false,
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  const { value: email, isValid: emailValid } = formState.email;
  const { value: password, isValid: passwordValid } = formState.password;

  useEffect(() => {
    const identifier = setTimeout(() => {
      dispatchForm({ type: 'FORM_VALIDITY', payload: emailValid && passwordValid });
    }, 500);
    // Clean up function won't trigger on the first call of useEffect. In any other calls, or when
    // the component is unmounting the DOM, then the clean up function runs first and then the
    // main function body of the hook
    return () => {
      clearTimeout(identifier);
    };
  }, [emailValid, passwordValid]);

  const inputChangeHandler = property => event => {
    dispatchForm({
      type: `${property.toUpperCase()}_CHANGE`,
      payload: event.target.value,
    });
  };

  const validateInputHandler = property => () => {
    dispatchForm({ type: `${property.toUpperCase()}_VALIDITY` });
  };

  const submitHandler = event => {
    event.preventDefault();
    if (formState.isFormValid) {
      onLogin(email, password);
    } else if (!emailValid) {
      emailRef.current.activate();
    } else {
      passwordRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailRef}
          inputValid={emailValid}
          label='E-Mail'
          id='email'
          inputName='email'
          type='email'
          inputValue={email}
          onChangeInput={inputChangeHandler}
          onValidateInput={validateInputHandler}
        />
        <Input
          ref={passwordRef}
          inputValid={passwordValid}
          label='Password'
          id='password'
          inputName='password'
          type='password'
          inputValue={password}
          onChangeInput={inputChangeHandler}
          onValidateInput={validateInputHandler}
        />
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default Login;
