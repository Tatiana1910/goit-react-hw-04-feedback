import PropTypes from 'prop-types';
import { Button, Option } from './Feedback.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Option>
    {options.map(key => (
      <Button type="button" key={key} onClick={onLeaveFeedback}>
        {key}
      </Button>
    ))}
  </Option>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
