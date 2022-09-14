import { createStore, produce } from 'solid-js/store';
import { v4 as uuid } from 'uuid';

const initialFeedbackList = [
  {
    id: uuid(),
    rating: 5,
    comment: 'This is a great app!'
  },
  {
    id: uuid(),
    rating: 4,
    comment: 'This is a good app!'
  },
  {
    id: uuid(),
    rating: 3,
    comment: 'This is an ok app!'
  },
  {
    id: uuid(),
    rating: 2,
    comment: 'This is a bad app!'
  },
  {
    id: uuid(),
    rating: 1,
    comment: 'This is a terrible app!'
  }
];

const [feedbackList, setFeedbackList] = createStore(initialFeedbackList);

const addFeedback = newFeedback => {
  setFeedbackList([...feedbackList, newFeedback]);
};

const removeFeedback = id => {
  setFeedbackList(feedbackList.filter(feedback => feedback.id !== id));
};

export { feedbackList, addFeedback, removeFeedback };
