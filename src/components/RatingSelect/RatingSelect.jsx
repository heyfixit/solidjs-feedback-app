import './RatingSelect.module.css';

export const RatingSelect = props => {
  const options = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <ul>
      <For each={options}>
        {option => (
          <li>
            <input
              type="radio"
              name="rating"
              value={option}
              id={`rating-${option}`}
              checked={props.rating === option}
              onChange={() => props.onRatingSelect(option)}
            />
            <label for={`rating-${option}`}>{option}</label>
          </li>
        )}
      </For>
    </ul>
  );
};
