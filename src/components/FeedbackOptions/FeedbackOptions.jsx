import PropTypes from 'prop-types';
import { useState } from 'react';
import { Box } from 'components/Box';
import { Button, Input } from './FeedbackOptions.styled';
import { theme } from 'constants';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.feedback.value;
    setFeedback('');
    onLeaveFeedback(name);
  };

  const handleChange = e => {
    setFeedback(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mb={5}
        gridGap={5}
      >
        {Object.entries(options).map(([value, Icon]) => {
          return (
            <label key={value}>
              <Input
                type="radio"
                name="feedback"
                value={value}
                onChange={handleChange}
                checked={value === feedback}
              />
              <Icon size={theme.sizes.icon} />
            </label>
          );
        })}
      </Box>
      <Button type="submit">Submit</Button>
    </form>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    bad: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    good: PropTypes.func.isRequired,
  }),
};
