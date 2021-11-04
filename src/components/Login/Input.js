import styles from './Input.module.css';

function Input(props) {
  const { inputValid, inputName, type, inputValue, onChangeInput, onValidateInput } =
    props;

  return (
    <div className={`${styles.control} ${inputValid === false && styles.invalid}`}>
      <label htmlFor={inputName}>{inputName}</label>
      <input
        type={type}
        id={inputName}
        value={inputValue}
        onChange={onChangeInput(`${inputName}`)}
        onBlur={onValidateInput(`${inputName}`)}
      />
    </div>
  );
}

export default Input;
