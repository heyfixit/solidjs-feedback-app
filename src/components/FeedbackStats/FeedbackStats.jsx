import { feedbackList } from '../../stores/FeedbackStore';

export const FeedbackStats = () => {
  const totalFeedbacks = () => feedbackList.length;
  const totalRatings = () =>
    feedbackList.reduce((acc, cur) => acc + cur.rating, 0);
  const averageRating = () => totalRatings() / totalFeedbacks();
  return (
    <div>
      <p>Total Feedbacks: {totalFeedbacks()}</p>
      <p>Total Ratings: {totalRatings()}</p>
      <p>Average Rating: {averageRating()}</p>
    </div>
  );
};
