import styles from './FeedbackItem.module.css';
import { Card } from '../Card/Card';

export const FeedbackItem = props => {
  const { feedback } = props;
  return (
    <Card>
      <div class={styles.NumDisplay}>{feedback.rating}</div>
      <button class={styles.CloseIcon}>X</button>
      <p>{feedback.comment}</p>
    </Card>
  );
};
