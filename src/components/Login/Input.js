import { forwardRef, useImperativeHandle, useRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(function (props, ref) {
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return { activate: focus };
  });

  const {
    inputValid,
    inputName,
    type,
    inputValue,
    onChangeInput,
    onValidateInput,
    label,
    id,
  } = props;

  return (
    <div className={`${styles.control} ${inputValid === false && styles.invalid}`}>
      <label htmlFor={id}>{label}</label>
      <input
        ref={inputRef}
        type={type}
        id={id}
        value={inputValue}
        onChange={onChangeInput(`${inputName}`)}
        onBlur={onValidateInput(`${inputName}`)}
      />
    </div>
  );
});

export default Input;
