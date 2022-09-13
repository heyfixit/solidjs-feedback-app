// create a card component that will be used to display the data
import { children } from 'solid-js';
import styles from './Card.module.css';

export const Card = props => {
  const c = children(() => props.children);
  return <div className={styles.Card}>{c()}</div>;
};
