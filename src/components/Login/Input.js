import styles from './Input.module.css';

function Input(props) {
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
        type={type}
        id={id}
        value={inputValue}
        onChange={onChangeInput(`${inputName}`)}
        onBlur={onValidateInput(`${inputName}`)}
      />
    </div>
  );
}

export default Input;
