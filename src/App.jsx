import { createSignal, createEffect } from 'solid-js';
import styles from './App.module.css';
import { FeedbackItem } from './components/FeedbackItem/FeedbackItem';

const feedbackList = [
  {
    id: 1,
    rating: 5,
    comment: 'This is a great app!'
  },
  {
    id: 2,
    rating: 4,
    comment: 'This is a good app!'
  },
  {
    id: 3,
    rating: 3,
    comment: 'This is an ok app!'
  },
  {
    id: 4,
    rating: 2,
    comment: 'This is a bad app!'
  },
  {
    id: 5,
    rating: 1,
    comment: 'This is a terrible app!'
  }
];

function App() {
  // big difference: feedbacks is not a value, feedbacks is a getter function
  const [feedbacks, setFeedbacks] = createSignal(feedbackList);

  return (
    <div class={styles.App}>
      <For each={feedbacks()}>
        {feedback => <FeedbackItem feedback={feedback} />}
      </For>
    </div>
  );
}

export default App;
