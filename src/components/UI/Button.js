import styles from './Button.module.css';

function Button({ children, type, onClick }) {
  return (
    <button type={type || 'button'} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}

export default Button;
