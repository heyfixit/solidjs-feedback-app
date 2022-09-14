import styles from './App.module.css';
import { FeedbackItem } from './components/FeedbackItem/FeedbackItem';
import { feedbackList } from './stores/FeedbackStore';
import { FeedbackForm } from './components/FeedbackForm/FeedbackForm';
import { FeedbackStats } from './components/FeedbackStats/FeedbackStats';

function App() {
  return (
    <div class={styles.App}>
      <FeedbackForm />
      <FeedbackStats />
      <For each={feedbackList}>
        {feedback => <FeedbackItem feedback={feedback} />}
      </For>
    </div>
  );
}

export default App;
