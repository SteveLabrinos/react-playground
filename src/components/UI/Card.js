import styles from './Card.module.css';

function Card({ className, children }) {
  const classes = `${styles.card} ${className}`;

  return <section className={classes}>{children}</section>;
}

export default Card;
