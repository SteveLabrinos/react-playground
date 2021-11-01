import styles from './Button.module.css';

function Button({ type, onClick, children }) {
  return (
    <button type={type} className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
