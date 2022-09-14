import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { v4 as uuid } from 'uuid';
import styles from './FeedbackForm.module.css';
import { RatingSelect } from '../RatingSelect/RatingSelect';
import { addFeedback } from '../../stores/FeedbackStore';
import { createSignal } from 'solid-js';

export const FeedbackForm = props => {
  const [rating, setRating] = createSignal(10);
  const [comment, setComment] = createSignal('');

  const handleSubmit = e => {
    e.preventDefault();
    const feedback = {
      id: uuid(),
      rating: rating(),
      comment: comment()
    };
    addFeedback(feedback);
    setRating(10);
    setComment('');
  };

  return (
    <Card>
      <header>How would you rate your service with us?</header>
      <form onSubmit={handleSubmit}>
        <RatingSelect rating={rating()} onRatingSelect={setRating} />
        <div class={styles.InputGroup}>
          <input
            type="text"
            onChange={e => setComment(e.target.value)}
            value={comment()}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
};
